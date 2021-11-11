import { Inject, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { JdModalService } from '../core/jd-modal.service';
import { JdModalRefToken, JdModalRef } from '../core/jd-modal.ref';
import { ModalEventType } from '../core/types';

interface PullDownConfig {
  /**
   * 드래그 될 때 y 축 움직임 비율(높을수록 적게 움직임. 1 = 1:1, 2 = 1:1/2)
   */
  dragResistance?: number;
  /**
   * 드래그 후 놨을때 움직인 거리 배수 시간(튕겨서 놓기 시간. 시간이 작을수록 빠르게 터치 start, end 하면 더 많은 거리로 계산 됨)
   */
  triggerReleaseGap?: number;
  /**
   * 드래그 후 놨을때 닫히는 최소 거리
   */
  triggerReleaseMinY?: number;
}

/**
 * 모달 아래로 드래그 해서 닫기 기능
 * @public
 */
@Injectable()
export class JdModalPullDownCloseService {
  /** internal */
  protected dragResistance = 1.2;
  /** internal */
  protected triggerReleaseGap = 800;
  /** internal */
  protected triggerReleaseMinY = 100;
  /** internal */
  protected triggerReleaseMultiple = 400;
  /** internal */
  protected startX = 0;
  /** internal */
  protected startY = 0;
  /** internal */
  protected startStamp = 0;
  /** internal */
  protected moveY = 0;
  /** internal */
  protected moveIntercepCount = 0;
  /** internal */
  protected moveCheckY = 0;
  /** internal */
  protected holding = false;
  /** internal */
  protected modalPanelElement!: HTMLElement;
  /** internal */
  protected scrollPanelElement!: HTMLElement;
  /** internal */
  protected listener!: Subscription;
  /** internal */
  protected requestFrame: any = null;
  /** internal */
  protected handleTouchStart: (evt: TouchEvent) => void;
  /** internal */
  protected handleTouchMove: (evt: TouchEvent) => void;
  /** internal */
  protected handleTouchMoveIntercept: (evt: TouchEvent) => void;
  /** internal */
  protected handleTouchEnd: (evt: TouchEvent) => void;
  /** internal */
  protected handleContainerTouchPrevent: (evt: TouchEvent) => void;

  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {
    this.handleTouchStart = this.onTouchStart.bind(this);
    this.handleTouchMove = this.onTouchMove.bind(this);
    this.handleTouchEnd = this.onTouchEnd.bind(this);
    this.handleTouchMoveIntercept = this.onTouchMoveIntercept.bind(this);
    this.handleContainerTouchPrevent = this.onContainerTouchPrevent.bind(this);
  }

  /**
   * 컨피그
   * @param config - 설정값
   */
  setConfig(config: PullDownConfig = {}) {
    const { dragResistance = 1.2, triggerReleaseGap = 800, triggerReleaseMinY = 100 } = config;
    this.dragResistance = dragResistance;
    this.triggerReleaseGap = triggerReleaseGap;
    this.triggerReleaseMinY = triggerReleaseMinY;
    this.triggerReleaseMultiple = triggerReleaseGap / 2;
  }

  /**
   * 초기화
   */
  init() {
    document.addEventListener('touchstart', this.handleTouchStart);
    document.addEventListener('touchend', this.handleTouchEnd);
    if (this.scrollPanelElement) {
      this.scrollPanelElement.addEventListener('touchmove', this.handleContainerTouchPrevent);
      this.scrollPanelElement.addEventListener('touchend', this.handleContainerTouchPrevent);
    }
    const observeModalState = this.modalService.observeModalState().subscribe((modalState) => {
      const modals = modalState.modals;
      this.holding = this.modalRef.id !== modals[modals.length - 1]?.id;
    });
    const observeRefOpener = this.modalRef.observeOpener().subscribe((evt) => {
      if (evt.type === ModalEventType.OPENED) {
        this.modalPanelElement = this.modalRef.panelElement as HTMLElement;
        this.modalPanelElement.style.transition = 'transform 0ms';
      }
    });
    this.listener = new Subscription();
    this.listener.add(observeModalState);
    this.listener.add(observeRefOpener);
  }

  /**
   * document touchstart
   * @internal
   * @param evt - 이벤트
   */
  protected onTouchStart(evt: TouchEvent) {
    if (!this.modalPanelElement) return;
    if (this.holding) return;
    const { clientX, clientY } = evt.touches[0];
    if (this.scrollPanelElement) {
      const { scrollTop } = this.scrollPanelElement;
      if (scrollTop === 0) {
        this.startFrame(clientX, clientY);
      }
    } else {
      this.startFrame(clientX, clientY);
    }
  }

  /**
   * document touchmove 전 방향 체크.
   * x 축 이동으로 판단하면 onTouchMove 를 하지 않음.
   * @internal
   * @param evt - 이벤트
   */
  protected onTouchMoveIntercept(evt: TouchEvent) {
    const { startX, startY } = this;
    const { clientX, clientY } = evt.touches[0];
    const directionX = Math.abs(startX - clientX);
    const directionY = Math.abs(startY - clientY);
    const moveY = clientY - startY;
    this.moveIntercepCount++;
    this.moveCheckY = moveY;
    if (3 < this.moveIntercepCount) {
      document.removeEventListener('touchmove', this.handleTouchMoveIntercept);
      if (directionX < directionY && 0 < moveY) {
        this.startY = clientY;
        document.addEventListener('touchmove', this.handleTouchMove);
      }
    }
  }

  /**
   * document touchmove
   * @internal
   * @param evt - 이벤트
   */
  protected onTouchMove(evt: TouchEvent) {
    const moveY = evt.touches[0].clientY;
    this.moveY = (moveY - this.startY) / this.dragResistance;
    this.updateState();
  }

  /**
   * document touchend
   * @internal
   * @param evt - 이벤트
   */
  protected onTouchEnd(evt: TouchEvent) {
    document.removeEventListener('touchmove', this.handleTouchMoveIntercept);
    document.removeEventListener('touchmove', this.handleTouchMove);
    const { startStamp, moveY, triggerReleaseGap, triggerReleaseMinY, triggerReleaseMultiple } = this;
    const triggerY = (triggerReleaseGap - (Date.now() - startStamp)) / triggerReleaseMultiple;
    const momentum = Math.max(1, triggerY) * moveY;
    if (triggerReleaseMinY < momentum) {
      this.modalRef.close();
    } else {
      this.clearFrame();
      this.animateFrame();
    }
  }

  /**
   * 스크롤 컨테이너(DOM) 의 prevent 처리
   * @internal
   * @param evt - 이벤트
   */
  protected onContainerTouchPrevent(evt: TouchEvent) {
    if (0 < this.moveCheckY && evt.cancelable) {
      evt.preventDefault();
    }
  }

  /**
   * 상태 업데이트
   * @internal
   */
  protected updateState() {
    const y = Math.max(0, this.moveY);
    this.modalPanelElement.style.transform = `translate3d(0, ${y}px, 0)`;
  }

  /**
   * 드래깅 시작
   * @internal
   * @param startX - 시작 X
   * @param startY - 시작 Y
   */
  protected startFrame(startX: number, startY: number) {
    this.clearFrame();
    this.startX = startX;
    this.startY = startY;
    this.startStamp = Date.now();
    this.moveIntercepCount = 0;
    document.removeEventListener('touchmove', this.handleTouchMoveIntercept);
    document.addEventListener('touchmove', this.handleTouchMoveIntercept);
  }

  /**
   * 드래깅 클리어
   * @internal
   */
  protected clearFrame() {
    cancelAnimationFrame(this.requestFrame);
    this.moveCheckY = 0;
  }

  /**
   * 드래깅 릴리즈
   * @internal
   */
  protected animateFrame() {
    const targetY = 0;
    const momentum = 0.33;
    const y = this.moveY + (targetY - this.moveY) * momentum;
    this.moveY = y;
    if (1 <= this.moveY) {
      this.requestFrame = requestAnimationFrame(() => this.animateFrame());
    } else {
      this.moveY = 0;
    }
    this.updateState();
  }

  /**
   * 스크롤 컨테이너 지정
   * @param element - 스크롤 컨테이너 엘리먼트
   */
  setScrollPanelElement(element: HTMLElement) {
    this.scrollPanelElement = element;
  }

  /**
   * 동작 중 강제로 스크롤 컨테이너를 바꿔야 하는 경우가 있을 때 사용.
   * 예: 스와이프, 탭 전환 등에 따라 스크롤 컨테이너 자체가 변경되는 경우(내부 컨텐츠 변경이 아님)
   * @param element - 스크롤 컨테이너 엘리먼트
   */
  changeScrollPanelElement(element: HTMLElement) {
    if (this.scrollPanelElement) this.dispose();
    this.setScrollPanelElement(element);
    this.init();
  }

  /**
   * 해제
   */
  dispose() {
    document.removeEventListener('touchstart', this.handleTouchStart);
    document.removeEventListener('touchmove', this.handleTouchMoveIntercept);
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('touchend', this.handleTouchEnd);
    if (this.scrollPanelElement) {
      this.scrollPanelElement.removeEventListener('touchmove', this.handleContainerTouchPrevent);
      this.scrollPanelElement.removeEventListener('touchend', this.handleContainerTouchPrevent);
    }
  }

  /**
   * 파기
   */
  destroy() {
    this.dispose();
    this.listener.unsubscribe();
  }
}
