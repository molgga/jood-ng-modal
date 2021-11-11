/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { JdModalService } from './jd-modal.service';

describe('core: JdModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JdModalService]
    });
  });

  beforeEach(inject([JdModalService], (service: JdModalService) => {
    service.init();
  }));

  afterEach(inject([JdModalService], (service: JdModalService) => {
    service.destroy();
  }));

  it('id', inject([JdModalService], (service: JdModalService) => {
    expect(service.id).not.toBe(0)
  }));

  it('setUseHistoryState', inject([JdModalService], (service: JdModalService) => {
    expect(service.usedHistoryState).toBe(false);
    service.setUseHistoryState(true);
    expect(service.usedHistoryState).toBe(true);
    service.setUseHistoryState(false);
    expect(service.usedHistoryState).toBe(false);
  }));
  
  it('setUseBlockBodyScroll', inject([JdModalService], (service: JdModalService) => {
    expect(service.usedBlockBodyScroll).toBe(false);
    service.setUseBlockBodyScroll(true);
    expect(service.usedBlockBodyScroll).toBe(true);
    service.setUseBlockBodyScroll(false);
    expect(service.usedBlockBodyScroll).toBe(false);
  }));

  it('setUseBlockBodyScroll & document.body.style #1', waitForAsync(
    inject([JdModalService], (service: JdModalService) => {
      document.body.style.overflow = 'initial';
      service.setUseBlockBodyScroll(true);
      expect(service.getBlockBodyStyleBeforeOverflow()).toBe(null);
      const modalRef1 = service.open({ component: MockComponent });
      const modalRef2 = service.open({ component: MockComponent });
      expect(service.getBlockBodyStyleBeforeOverflow()).toBe('initial');
      const listener = service.observeModalState().subscribe(modalState => {
        if (0 < modalState.modals.length) {
          expect(service.getBlockBodyStyleBeforeOverflow()).toBe('initial');
        } else {
          expect(service.getBlockBodyStyleBeforeOverflow()).toBe('');
          expect(document.body.style.overflow).toBe('initial');
          listener.unsubscribe();
          document.body.style.removeProperty('overflow');
        }
      });
      modalRef1.closed();
      modalRef2.closed();
    })
  ));

  it('setUseBlockBodyScroll & document.body.style #2', waitForAsync(
    inject([JdModalService], (service: JdModalService) => {
      service.setUseBlockBodyScroll(true);
      expect(service.getBlockBodyStyleBeforeOverflow()).toBe(null);
      const modalRef1 = service.open({ component: MockComponent });
      expect(service.getBlockBodyStyleBeforeOverflow()).toBe('');
      const listener = service.observeModalState().subscribe(() => {
        expect(service.getBlockBodyStyleBeforeOverflow()).toBe('');
        expect(document.body.style.overflow).toBe('');
        listener.unsubscribe();
      });
      modalRef1.closed();
    })
  ));

  it('setDefaultEntryComponent', inject([JdModalService], (service: JdModalService) => {
    expect(service.hasDefaultEntryComponent()).toBe(false);
    service.setDefaultEntryComponent(MockEntryComponent);
    expect(service.hasDefaultEntryComponent()).toBe(true);
  }));

  it('getHistoryStrategy', inject([JdModalService], (service: JdModalService) => {
    expect(service.getHistoryStrategy()).toBeTruthy();
  }));
  
  it('open, hasModal', waitForAsync(
    inject([JdModalService], (service: JdModalService) => {
      const listener = service.observeModalState().subscribe(modalState => {
        expect(modalState.modals.length).toBe(1);
        expect(service.modals.length).toBe(1);
        expect(service.getState().modals.length).toBe(1);
        expect(service.hasModal).toBe(true);
        listener.unsubscribe();
        service.destroy();
      });
      expect(service.modals.length).toBe(0);
      expect(service.getState().modals.length).toBe(0);
      expect(service.hasModal).toBe(false);
      service.open({ component: MockComponent });
      expect(service.hasModal).toBe(true);
    })
  ));

  it('close', inject([JdModalService], (service: JdModalService) => {
    const modalRef = service.open({ component: MockComponent });
    spyOn(modalRef, 'close');
    service.close(modalRef.id);
    expect(modalRef.close).toHaveBeenCalled();
  }));

  it('closeById', inject([JdModalService], (service: JdModalService) => {
    const modalRef = service.open({ component: MockComponent });
    spyOn(modalRef, 'close');
    service.closeById(modalRef.id);
    expect(modalRef.close).toHaveBeenCalled();
  }));

  it('closeByRef', inject([JdModalService], (service: JdModalService) => {
    const modalRef = service.open({ component: MockComponent });
    spyOn(modalRef, 'close');
    service.closeByRef(modalRef);
    expect(modalRef.close).toHaveBeenCalled();
  }));

  it('closeAll(useClosing = false): 바로 닫기', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    spyOn(modalRef1, 'close');
    spyOn(modalRef1, 'closed');
    const modalRef2 = service.open({ component: MockComponent });
    spyOn(modalRef2, 'close');
    spyOn(modalRef2, 'closed');
    const modalRef3 = service.open({ component: MockComponent });
    spyOn(modalRef3, 'close');
    spyOn(modalRef3, 'closed');
    const modalRef4 = service.open({ component: MockComponent });
    spyOn(modalRef4, 'close');
    spyOn(modalRef4, 'closed');
    service.closeAll(false);
    expect(modalRef1.close).not.toHaveBeenCalled();
    expect(modalRef1.closed).toHaveBeenCalled();
    expect(modalRef2.close).not.toHaveBeenCalled();
    expect(modalRef2.closed).toHaveBeenCalled();
    expect(modalRef3.close).not.toHaveBeenCalled();
    expect(modalRef3.closed).toHaveBeenCalled();
    expect(modalRef4.close).not.toHaveBeenCalled();
    expect(modalRef4.closed).toHaveBeenCalled();
  }));

  it('closeAll(useClosing = true): ModalRef 에서 후 처리(애니메이트 등) 후 closed', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    spyOn(modalRef1, 'close');
    spyOn(modalRef1, 'closed');
    const modalRef2 = service.open({ component: MockComponent });
    spyOn(modalRef2, 'close');
    spyOn(modalRef2, 'closed');
    const modalRef3 = service.open({ component: MockComponent });
    spyOn(modalRef3, 'close');
    spyOn(modalRef3, 'closed');
    const modalRef4 = service.open({ component: MockComponent });
    spyOn(modalRef4, 'close');
    spyOn(modalRef4, 'closed');
    service.closeAll(true);
    expect(modalRef1.close).toHaveBeenCalled();
    expect(modalRef1.closed).not.toHaveBeenCalled();
    expect(modalRef2.close).toHaveBeenCalled();
    expect(modalRef2.closed).not.toHaveBeenCalled();
    expect(modalRef3.close).toHaveBeenCalled();
    expect(modalRef3.closed).not.toHaveBeenCalled();
    expect(modalRef4.close).toHaveBeenCalled();
    expect(modalRef4.closed).not.toHaveBeenCalled();
  }));
  
  it('getModalRef', inject([JdModalService], (service: JdModalService) => {
    const modalRef = service.open({ component: MockComponent });
    expect(service.getModalRef(12345678901)).toBe(undefined);
    expect(service.getModalRef(modalRef.id)).toBe(modalRef);
    modalRef.closed();
    expect(service.getModalRef(modalRef.id)).toBe(undefined);
  }));

  it('hasModalRefNext', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    expect(service.hasModalRefNext(modalRef1.id)).toBe(false);
    const modalRef2 = service.open({ component: MockComponent });
    expect(service.hasModalRefNext(modalRef1.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef2.id)).toBe(false);
    const modalRef3 = service.open({ component: MockComponent });
    expect(service.hasModalRefNext(modalRef1.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef2.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef3.id)).toBe(false);
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.hasModalRefNext(modalRef1.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef2.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef3.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef4.id)).toBe(false);
    modalRef2.closed();
    expect(service.hasModalRefNext(modalRef1.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef2.id)).toBe(false);
    expect(service.hasModalRefNext(modalRef3.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef4.id)).toBe(false);
    modalRef4.closed();
    expect(service.hasModalRefNext(modalRef1.id)).toBe(true);
    expect(service.hasModalRefNext(modalRef2.id)).toBe(false);
    expect(service.hasModalRefNext(modalRef3.id)).toBe(false);
    expect(service.hasModalRefNext(modalRef4.id)).toBe(false);
  }));
  
  it('isModalRefTop', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    const modalRef2 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(true);
    const modalRef3 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(true);
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    modalRef2.closed();
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    modalRef4.closed();
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(true);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));
  
  it('isModalRefTop & swapOrder', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    const modalRef2 = service.open({ component: MockComponent });
    const modalRef3 = service.open({ component: MockComponent });
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.swapOrder(0, 3);
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.swapOrder(0, 3);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.swapOrder(1, 3);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(true);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.swapOrder(-1, 3);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(true);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.swapOrder(-1, 99);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(true);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));
    
  it('isModalRefTop & swapOrderTopByRef', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    const modalRef2 = service.open({ component: MockComponent });
    const modalRef3 = service.open({ component: MockComponent });
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.swapOrderTopByRef(modalRef1);
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.swapOrderTopByRef(modalRef4);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.swapOrderTopByRef(modalRef2);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(true);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));

  it('isModalRefTop & swapOrderTopById', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    const modalRef2 = service.open({ component: MockComponent });
    const modalRef3 = service.open({ component: MockComponent });
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.swapOrderTopById(modalRef1.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.swapOrderTopById(modalRef4.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.swapOrderTopById(modalRef2.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(true);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));

  it('isModalRefTop & pushOrder', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    const modalRef2 = service.open({ component: MockComponent });
    const modalRef3 = service.open({ component: MockComponent });
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.pushOrder(modalRef1);
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.pushOrder(modalRef3);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(true);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));

  it('isModalRefTop & pushOrderById', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    const modalRef2 = service.open({ component: MockComponent });
    const modalRef3 = service.open({ component: MockComponent });
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.pushOrderById(modalRef1.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.pushOrderById(modalRef3.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(true);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));

  it('isModalRefTop & pushOrderById', inject([JdModalService], (service: JdModalService) => {
    const modalRef1 = service.open({ component: MockComponent });
    const modalRef2 = service.open({ component: MockComponent });
    const modalRef3 = service.open({ component: MockComponent });
    const modalRef4 = service.open({ component: MockComponent });
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(true);
    service.pushOrderById(modalRef1.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(true);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(false);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
    service.pushOrderById(modalRef3.id);
    expect(service.isModalRefTop(modalRef1.id)).toBe(false);
    expect(service.isModalRefTop(modalRef2.id)).toBe(false);
    expect(service.isModalRefTop(modalRef3.id)).toBe(true);
    expect(service.isModalRefTop(modalRef4.id)).toBe(false);
  }));
});


const MockEntryComponent: any = {};
const MockComponent: any = {};