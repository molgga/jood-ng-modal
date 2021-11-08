import { Inject, Injectable } from '@angular/core';
import { JdModalService } from '../core/jd-modal.service';
import { JdModalRefToken, JdModalRef } from '../core/jd-modal.ref';
import { ModalPopStateEvent } from '../core/types';

type CastFunction<T> = () => T | Promise<T>;

/**
 * composables: 모달 닫기(뒤로가기)시 컨펌 기능
 * @public
 */
@Injectable()
export class JdModalBeforeLeaveService {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {
    this.handleBeforeLeaveIntercept = this.onInterceptBeforeLeave.bind(this);
  }

  /** @internal */
  protected holdBeforeLeave = false;
  /** @internal */
  protected fnValidate: CastFunction<boolean> = async () => Promise.resolve(true);
  /** @internal */
  protected fnConfirm: CastFunction<boolean> = async () => Promise.resolve(true);
  /** @internal */
  protected handleBeforeLeaveIntercept: (evt: ModalPopStateEvent) => void;

  /**
   * popstate 이벤트 핸들러
   * @param evt - 이벤트
   */
  async onInterceptBeforeLeave(evt: ModalPopStateEvent) {
    const { current: modalCurrentId } = this.modalService
      .getHistoryStrategy()
      .getStateOfEvent(this.modalService.id, evt);
    if (!this.modalService.usedHistoryState) return; // history state 사용하지 않음.
    if (modalCurrentId === this.modalRef.id) return; // history state 의 id 와 modalRef.id 가 일치하지 않음.
    if (!this.modalService.isModalRefTop(this.modalRef.id)) return; // modalRef 가 최상위 모달이 아님.

    const validate = await this.fnValidate(); // 사용자가 등록한 validate
    // 컨펌창 때문에 hold 체크, 에디터 변경사항 체크
    if (!this.holdBeforeLeave) {
      if (validate) {
        this.detach();
        this.modalRef.close();
      } else {
        evt._preventModalClose = true;
        this.holdBeforeLeave = true;
        history.forward(); // 브라우저는 이미 뒤로가기가 되어서 다시 forwad 시킴.
        await new Promise((resolve) => {
          // history.forward 는 비동기이기 때문에 밑에 confirm 창을 시스템 컨펌창을 띠우게 되면 forward 동작이 안된 상태에서 멈추게 될 수도 있다.
          setTimeout(() => resolve(true), 30);
        });
        const confirm = await this.fnConfirm();
        if (!confirm) {
          this.holdBeforeLeave = false;
        } else {
          this.detach();
          this.modalRef.close();
        }
      }
    }
  }

  /**
   * beforeLeave 사용
   */
  attach() {
    if (this.modalRef.isAttachedBeforeLeave) return;
    window.addEventListener('popstate', this.handleBeforeLeaveIntercept);
    this.modalRef.attachBeforeLeave();
  }

  /**
   * beforeLeave 사용하지 않음
   */
  detach() {
    this.modalRef.detachBeforeLeave();
    window.removeEventListener('popstate', this.handleBeforeLeaveIntercept);
  }

  /**
   * validate 콜백.
   * 반환값이 true 인 경우 통과, false 인 경우 confirm 으로 넘어감.
   * @param fn - 콜백
   */
  onBeforeLeaveValidate(fn: CastFunction<boolean>) {
    this.fnValidate = fn;
  }

  /**
   * confirm 콜백.
   * 반환값이 true 인 경우 닫음(뒤로가기), false 인 경우 닫기 취소.
   * @param fn - 콜백
   */
  onBeforeLeaveConfirm(fn: CastFunction<boolean>): void {
    this.fnConfirm = fn;
  }
}
