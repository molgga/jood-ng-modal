/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync, tick } from '@angular/core/testing';
import { JdModalRef } from './jd-modal.ref';
import { ModalEventType } from './types'

describe('core: JdModalRef', () => {
  let modalRef:JdModalRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });
  beforeEach(() => {
    modalRef = new JdModalRef();
  });
  afterEach(() => {
    modalRef.destroy();
  });

  it('id', () => {
    expect(modalRef.id).toBe(-1);
    modalRef.setId(1);
    expect(modalRef.id).toBe(1);
  });

  it('index', () => {
    expect(modalRef.index).toBe(0);
    modalRef.setIndex(1);
    expect(modalRef.index).toBe(1);
  });

  it('data', () => {
    expect(modalRef.data).toBe(null);
    modalRef.setData({ foo: 'bar' });
    expect(modalRef.data).toEqual({ foo: 'bar' })
  });

  it('panelStyle', () => {
    expect(modalRef.panelStyle).toBe(null);
    modalRef.setPanelStyle({ foo: 'bar' });
    expect(modalRef.panelStyle).toEqual({ foo: 'bar' })
  });

  it('component', () => {
    expect(modalRef.component).toBe(null);
    modalRef.setComponent(MockComponent);
    expect(modalRef.component).toBe(MockComponent)
  });

  it('entryComponent', () => {
    expect(modalRef.entryComponent).toBe(null);
    modalRef.setEntryComponent(MockEntryComponent);
    expect(modalRef.entryComponent).toBe(MockEntryComponent)
  });

  it('openStrategy', () => {
    expect(modalRef.openStrategy).toBeTruthy();
    modalRef.setOpenStrategy(MockOpenStrategy);
    expect(modalRef.openStrategy).toBe(MockOpenStrategy)
  });

  it('duration', () => {
    expect(modalRef.duration).toBe(240)
    modalRef.setDuration(100);
    expect(modalRef.duration).toBe(100)
  });

  it('overlayClose', () => {
    expect(modalRef.overlayClose).toBe(false);
    modalRef.setOverlayClose(true)
    expect(modalRef.overlayClose).toBe(true)
  });

  it('floatingMode', () => {
    expect(modalRef.floatingMode).toBe(false);
    modalRef.setFloatingMode(true)
    expect(modalRef.floatingMode).toBe(true)
  });

  it('disableShadow', () => {
    expect(modalRef.disableShadow).toBe(true);
    modalRef.setDisableShadow(false)
    expect(modalRef.disableShadow).toBe(false)
  });

  it('fullHeight', () => {
    expect(modalRef.fullHeight).toBe(false);
    modalRef.setFullHeight(true)
    expect(modalRef.fullHeight).toBe(true)
  });

  it('panelElement', () => {
    expect(modalRef.panelElement).toBe(null);
    modalRef.setPanelElement(MockElement)
    expect(modalRef.panelElement).toBe(MockElement)
  });

  it('opener', () => {
    expect(modalRef.opener).toBeTruthy();
  });

  it('assignModalData', () => {
    modalRef.assignModalData({
      component: MockComponent,
      duration: 999,
      overlayClose: true,
      floatingMode: true,
      disableShadow: true,
      fullHeight: true,
      panelStyle: { foo: 'bar' },
      openStrategy: MockOpenStrategy,
    });
    expect(modalRef.component).toBe(MockComponent);
    expect(modalRef.duration).toBe(999);
    expect(modalRef.overlayClose).toBe(true);
    expect(modalRef.floatingMode).toBe(true);
    expect(modalRef.fullHeight).toBe(true);
    expect(modalRef.disableShadow).toBe(true);
    expect(modalRef.panelStyle).toEqual({ foo: 'bar' });
    expect(modalRef.openStrategy).toBe(MockOpenStrategy);

    modalRef.assignModalData({
      component: MockComponent,
      duration: 123,
      overlayClose: false,
      floatingMode: false,
      disableShadow: false,
      fullHeight: false,
      panelStyle: { foo: 'bar2' },
    });
    expect(modalRef.component).toBe(MockComponent);
    expect(modalRef.duration).toBe(123);
    expect(modalRef.overlayClose).toBe(false);
    expect(modalRef.floatingMode).toBe(false);
    expect(modalRef.fullHeight).toBe(false);
    expect(modalRef.disableShadow).toBe(false);
    expect(modalRef.panelStyle).toEqual({ foo: 'bar2' });
    expect(modalRef.openStrategy).toBeTruthy();


    modalRef.assignModalData({
      component: MockComponent,
    });
    expect(modalRef.component).toBe(MockComponent);
    expect(modalRef.duration).toBe(240);
    expect(modalRef.overlayClose).toBe(false);
    expect(modalRef.floatingMode).toBe(false);
    expect(modalRef.fullHeight).toBe(false);
    expect(modalRef.disableShadow).toBe(false);
    expect(modalRef.panelStyle).toBe(null);
    expect(modalRef.openStrategy).toBeTruthy();
  });

  it('attachBeforeLeave, detachBeforeLeave', () => {
    expect(modalRef.isAttachedBeforeLeave).toBe(false);
    modalRef.attachBeforeLeave();
    expect(modalRef.isAttachedBeforeLeave).toBe(true);
    modalRef.detachBeforeLeave();
    expect(modalRef.isAttachedBeforeLeave).toBe(false);
  });

  it('close', waitForAsync(() => {
    const listener = modalRef.observeOpener().subscribe(evt => {
      expect(evt.type === ModalEventType.CLOSE).toBe(true);
      expect(evt.modalRef).toBe(modalRef);
      listener.unsubscribe();
    });
    modalRef.close();
  }));

  it('close & closed & result', waitForAsync(() => {
    let openerEventCount = 0;
    const openerListener = modalRef.observeOpener().subscribe(evt => {
      expect([ModalEventType.CLOSE, ModalEventType.CLOSED].includes(evt.type)).toBe(true);
      expect(evt.modalRef).toBe(modalRef);
      openerEventCount++;
    });
    const resultListener = modalRef.observeClosed().subscribe(result => {
      expect(openerEventCount).toBe(2);
      expect(result).toEqual({ foo: 'bar' });
      openerListener.unsubscribe();
      resultListener.unsubscribe();
    });
    modalRef.close({ foo: 'bar' });
    modalRef.closed();
  }));
});


const MockEntryComponent: any = {};
const MockComponent: any = {};
const MockOpenStrategy: any = {};
const MockElement:any = {};