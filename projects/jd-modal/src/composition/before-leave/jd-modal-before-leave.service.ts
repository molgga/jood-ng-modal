import { Inject, Injectable } from '@angular/core';
import { JdModalRefToken, ModalPopStateEvent, JdModalService, JdModalRef } from '../core';

type CastFunction<T> = () => T | Promise<T>;

@Injectable()
export class JdModalBeforeLeaveService {
  constructor(private modalService: JdModalService, @Inject(JdModalRefToken) private modalRef: JdModalRef) {
    this.handleBeforeLeave = this.onInterceptBeforeLeave.bind(this);
  }

  private holdBeforeLeave = false;
  private fnConfirm: CastFunction<boolean> = async () => Promise.resolve(true);
  private fnValidate: CastFunction<boolean> = async () => Promise.resolve(true);
  private handleBeforeLeave: (evt: ModalPopStateEvent) => void;

  async onInterceptBeforeLeave(evt: ModalPopStateEvent) {
    const { current: modalCurrentId } = this.modalService
      .getHistoryStrategy()
      .getStateOfEvent(this.modalService.id, evt);
    const isTop = this.modalService.isModalRefTop(this.modalRef.id);
    // history state 사용하지 않음
    if (!this.modalService.usedHistoryState) return;
    if (!isTop) return;
    if (modalCurrentId === this.modalRef.id) return;

    const validate = this.fnValidate();
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

  attach() {
    if (this.modalRef.isAttachedBeforeLeave) return;
    window.addEventListener('popstate', this.handleBeforeLeave);
    this.modalRef.attachBeforeLeave();
  }

  detach() {
    this.modalRef.detachBeforeLeave();
    window.removeEventListener('popstate', this.handleBeforeLeave);
  }

  setBeforeLeaveConfirm(fn: CastFunction<boolean>) {
    this.fnConfirm = fn;
  }

  setBeforeLeaveValidate(fn: CastFunction<boolean>) {
    this.fnValidate = fn;
  }
}
