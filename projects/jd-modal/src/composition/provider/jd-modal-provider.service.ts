import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { JdModalService } from '../core/jd-modal.service';
import { JdModalRef } from '../core/jd-modal.ref';
import { ModalState } from '../core/types';

@Injectable()
export class JdModalProviderService {
  constructor(private modalService: JdModalService) {}

  modalList: JdModalRef[] = [];
  listener!: Subscription;
  animateTimer: any = null;
  isEmptied = true;

  get classes() {
    const hasModal = !!(this.modalList && this.modalList.length);
    return {
      'has-modal': hasModal,
      'is-emptied': this.isEmptied,
    };
  }

  onChangeModalState(modalState: ModalState) {
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
