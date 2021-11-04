import { HistoryStrategy } from './types';

/**
 * history state 관리.
 */
export class HistoryStateStrategy implements HistoryStrategy {
  touch(currentServiceId: number, current: number) {
    const { current: before } = this.getStateOfHistory(currentServiceId);
    const state = {
      jdModal: {
        serviceId: currentServiceId,
        before,
        current,
      },
    };
    history.pushState(state, '');
  }

  getStateOfHistory(currentServiceId: number) {
    return this.getStateOf(currentServiceId, history.state || {});
  }

  getStateOfEvent(currentServiceId: number, evt: PopStateEvent) {
    return this.getStateOf(currentServiceId, evt.state || {});
  }

  getStateOf(currentServiceId: number, state: any) {
    const { jdModal } = state;
    const { serviceId = null, before = null, current = null } = jdModal || {};
    if (currentServiceId === serviceId) {
      return { serviceId, before, current };
    } else {
      return { serviceId: null, before: null, current: null };
    }
  }
}
