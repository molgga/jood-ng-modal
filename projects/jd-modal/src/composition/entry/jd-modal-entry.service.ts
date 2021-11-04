import { Inject, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { JdModalService } from '../core/jd-modal.service';
import { JdModalRefToken, JdModalRef } from '../core/jd-modal.ref';
import { ModalState, ModalEvent, ModalEventType, ModalPopStateEvent } from '../core/types';
import { OpenStrategyStyleSet } from '../open-strategy';

type HandleLocationPopState = (evt: ModalPopStateEvent) => void;

@Injectable()
export class JdModalEntryService {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {
    const { usedHistoryState, usedBlockBodyScroll } = modalService;
    const { duration, floatingMode, fullHeight, disableShadow } = modalRef;
    this.usedHistoryState = usedHistoryState;
    this.usedBlockBodyScroll = usedBlockBodyScroll;
    this.safeTiming = isNaN(duration) || duration < 0 ? 240 : duration;
    this.isFloatingMode = floatingMode;
    this.isFullHeight = fullHeight;
    this.isShadow = !disableShadow;
    this.handleLocationPopState = this.onLocationPopState.bind(this);
    this.computedStyleSet();
  }

  hostElement!: HTMLElement;

  listener!: Subscription;
  animateTimer: any = null;
  modalLength = 0;
  safeTiming = 0;
  usedHistoryState = false;
  usedBlockBodyScroll = false;
  isOpening = false;
  isOpened = false;
  isClosing = false;
  isFloatingMode = false;
  isFullHeight = false;
  isShadow = false;

  historyTouched = false;
  handleLocationPopState!: HandleLocationPopState;

  get classes() {
    return {
      'is-opening': this.isOpening,
      'is-opened': this.isOpened,
      'is-closing': this.isClosing,
      'floating-mode': this.isFloatingMode,
      'full-height': this.isFullHeight,
      shadow: this.isShadow,
    };
  }

  styleSet: OpenStrategyStyleSet = {};

  mergeStyle(styleSet: any, mergeTarget: any) {
    for (const key in mergeTarget) {
      styleSet[key] = Object.assign(styleSet[key] || {}, mergeTarget[key]);
    }
  }

  computedStyleSet() {
    const { isOpening, isOpened, isClosing, isFloatingMode, isShadow, modalLength, safeTiming } = this;
    const { index, openStrategy, panelStyle } = this.modalRef;
    const styleSet: any = openStrategy.base(safeTiming);
    if (panelStyle) this.mergeStyle(styleSet, { pivot: panelStyle });
    if (isShadow) this.mergeStyle(styleSet, openStrategy.shadow());
    if (isOpening) {
      if (!isFloatingMode) {
        this.mergeStyle(styleSet, openStrategy.opening());
      } else {
        const floatingOpening = openStrategy.floatingOpening();
        const floatingLength = floatingOpening.length;
        const floatingIndex =
          modalLength <= index + 1 ? floatingLength - 1 : Math.max(0, floatingLength - (modalLength - index));
        this.mergeStyle(styleSet, floatingOpening[floatingIndex]);
      }
    }
    if (isOpened) this.mergeStyle(styleSet, openStrategy.opened());
    if (isClosing) this.mergeStyle(styleSet, openStrategy.closing());
    this.styleSet = styleSet;
  }

  onChangeModalState(modalState: ModalState) {
    this.modalLength = modalState.modals.length;
    this.computedStyleSet();
  }

  onChangeOpener(evt: ModalEvent) {
    if (evt.type === ModalEventType.OPENED) {
      if (this.hostElement) {
        this.hostElement.focus();
      }
    } else if (evt.type === ModalEventType.CLOSE) {
      // popState 가 일어나면 history 뒤로가기 처리가 된다.
      if (this.usedHistoryState) {
        this.popHistoryState();
        // beforeLeave 가 attach 된 상태인 경우에는 무시한다.
        if (this.modalRef.isAttachedBeforeLeave) {
          /**
           * 위에 popHistoryState() 는 attach 상태 상관없이 실행 되어야 한다.(history.back 이 된다)
           * 1. history.back 이 일어나면 beforeLeave 쪽에 등록된 popstate 핸들러가 동작한다.
           * 2. 핸들러 내부에서 history.forward 를 해서 다시 원상태의 history 로 돌아가고,
           *   beforeLeave 에 등록한 confirm 이 동작하게 된다.
           * 3. confirm 의 응답(true|false) 여부에 따라 동작이 분기 된다.
           *  - confirm 이 true(확인) 이면
           *   beforeLeave.detach() (isAttachedBeforeLeave 가 false),
           *   modalRef.close() 순서로 호출되어 위 이벤트(ModalEventType.CLOSE)로 다시 들어오게 되고 이 조건을 지나갈 수 있다.
           *   2번에서 forward 된 history 는 위 popHistoryState 에서 back 되기 때문에 history 는 복구된다. (forward 가 되기 때문에 쓰레기 history 는 1개 남는 문제가 있긴하다.)
           *  - confirm 이 false(취소) 이면 아무런 동작을 하지 않기 때문에
           */
          return;
        }
      }

      this.isOpening = false;
      this.isOpened = false;
      this.isClosing = true;
      this.computedStyleSet();
      this.animateTimer = setTimeout(() => {
        this.modalRef.closed();
      }, this.safeTiming);
    }
  }

  overlayClick(evt: MouseEvent) {
    if (this.modalRef.overlayClose) {
      this.modalRef.close();
    }
  }

  onOverlayTouchMove(evt: TouchEvent) {
    if (this.usedBlockBodyScroll) {
      evt.preventDefault();
    }
  }

  setHostElement(element: HTMLElement) {
    this.hostElement = element;
  }

  setPanelElement(element: HTMLElement) {
    this.modalRef.setPanelElement(element);
  }

  touchHistoryState() {
    this.modalService.getHistoryStrategy().touch(this.modalService.id, this.modalRef.id);
    this.historyTouched = true;
    window.addEventListener('popstate', this.handleLocationPopState);
  }

  popHistoryState() {
    window.removeEventListener('popstate', this.handleLocationPopState);
    if (!this.historyTouched) return;
    const { current } = this.modalService.getHistoryStrategy().getStateOfHistory(this.modalService.id);
    if (current === this.modalRef.id) {
      history.back();
    }
  }

  onLocationPopState(evt: ModalPopStateEvent) {
    if (evt._preventModalClose) return;
    if (!this.historyTouched) return;
    const isTop = this.modalService.isModalRefTop(this.modalRef.id);
    if (!isTop) return;
    const { current } = this.modalService.getHistoryStrategy().getStateOfHistory(this.modalService.id);
    const useClose = current < this.modalRef.id;
    if (useClose) {
      this.modalRef.close();
    }
  }

  mounted() {
    const observeModalState = this.modalService.observeModalState().subscribe(this.onChangeModalState.bind(this));
    const observeOpener = this.modalRef.observeOpener().subscribe(this.onChangeOpener.bind(this));
    this.listener = new Subscription();
    this.listener.add(observeModalState);
    this.listener.add(observeOpener);
    this.modalRef.opener.next({ type: ModalEventType.OPEN, modalRef: this.modalRef });
    this.animateTimer = setTimeout(() => this.mountedOpening(), 15);
  }

  mountedOpening() {
    this.isOpening = true;
    this.computedStyleSet();
    this.animateTimer = setTimeout(() => this.mountedOpened(), this.safeTiming);
  }

  mountedOpened() {
    if (this.usedHistoryState) {
      this.touchHistoryState();
    }
    this.isOpened = true;
    this.computedStyleSet();
    this.modalRef.opener.next({ type: ModalEventType.OPENED, modalRef: this.modalRef });
  }

  destroy() {
    clearTimeout(this.animateTimer);
    this.listener.unsubscribe();
  }
}
