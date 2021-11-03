import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { JdModalService, JdModalRef, ModalState } from '../core';

@Injectable()
export class JdModalProviderService {
  constructor(private modalService: JdModalService) {}

  listener!: Subscription;
  animateTimer: any = null;
  modalList: JdModalRef[] = [];
  isEmptied = true;

  get classes() {
    const hasModal = !!(this.modalList && this.modalList.length);
    return {
      'has-modal': hasModal,
      'is-emptied': this.isEmptied,
    };
  }

  onChangeModalState(modalState: ModalState) {
    console.log('onChangeModalState');
    const { modals } = modalState;
    const hasModal = !!(modals && modals.length);
    this.modalList = modals;
    clearTimeout(this.animateTimer);
    if (hasModal) {
      this.isEmptied = false;
    } else {
      this.animateTimer = setTimeout(() => {
        this.isEmptied = true;
      }, 140);
    }
  }

  init() {
    this.listener = new Subscription();
    this.listener.add(this.modalService.observeModalState().subscribe(this.onChangeModalState.bind(this)));
  }

  destroy() {
    this.listener.unsubscribe();
  }
}
