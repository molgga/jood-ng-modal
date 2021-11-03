// @TODO - 정리
export interface HistoryStrategy {
  touch(currentServiceId: number, current: number): void;
  getStateOfHistory(currentServiceId: number): HistoryStrategyState;
  getStateOfEvent(currentServiceId: number, evt: PopStateEvent): HistoryStrategyState;
  getStateOf(currentServiceId: number, state: any): HistoryStrategyState;
}

interface HistoryStrategyState {
  serviceId?: any;
  before?: any;
  current?: any;
}
