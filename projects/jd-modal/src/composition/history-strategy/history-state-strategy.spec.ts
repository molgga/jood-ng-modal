/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { HistoryStateStrategy } from './history-state-strategy';

describe('HistoryStrategy: HistoryStateStrategy', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('touch', () => {
    const strategy = new HistoryStateStrategy();
    strategy.touch(111, 1);
    expect(history.state.jdModal).toBeTruthy();
    expect(history.state.jdModal.serviceId).toBe(111);
    expect(history.state.jdModal.current).toBe(1);
  });

  it('getStateOfHistory', () => {
    const strategy = new HistoryStateStrategy();
    strategy.touch(111, 1);
    expect(strategy.getStateOfHistory(111).serviceId).toBe(111);
    expect(strategy.getStateOfHistory(111).current).toBe(1);
    expect(strategy.getStateOfHistory(222).serviceId).toBe(null);
    expect(strategy.getStateOfHistory(222).current).toBe(null);
  });

  it('getStateOfEvent', () => {
    const strategy = new HistoryStateStrategy();
    expect(strategy.getStateOfEvent(111, {
      state: {
        jdModal: {
          serviceId: 111,
          current: 9,
          before: 8,
        }
      }
    } as any)).toEqual({
      serviceId: 111,
      current: 9,
      before: 8,
    });

    expect(strategy.getStateOfEvent(9999, {
      state: {
        jdModal: {
          serviceId: 111,
          current: 9,
          before: 8,
        }
      }
    } as any)).toEqual({
      serviceId: null,
      current: null,
      before: null,
    });
  });
});