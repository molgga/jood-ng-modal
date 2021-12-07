import { Injectable } from '@angular/core';
import { Subject, Observable, Subscription } from 'rxjs';
import { ModalEvent, ModalEventType, ModalData, EntryComponentType, ModalState } from './types';
import { JdModalRef } from './jd-modal.ref';
import { HistoryStrategy, HistoryStateStrategy } from '../history-strategy';

/**
 * 모달 서비스
 * @public
 */
@Injectable({ providedIn: 'root' })
export class JdModalService {
  /** internal */
  protected serviceId = 0;
  /** internal */
  protected modalUid = 0;
  /** internal */
  protected modalRefMap!: Map<number, JdModalRef>;
  /** internal */
  protected modalsSubject!: Subject<ModalState>;
  /** internal */
  protected modalsListener!: Subscription;
  /** internal */
  protected historyStrategy!: HistoryStrategy;
  /** internal */
  protected defaultEntryComponent: EntryComponentType = null;
  /** internal */
  protected useHistoryState: boolean = false;
  /** internal */
  protected useBlockBodyScroll: boolean = false;
  /** internal */
  protected blockBodyStyleBeforeOverflow: string | null = null; // blockBodyScroll 을 사용할 때 state 변경 전 body style

  /**
   * 초기화
   */
  init() {
    if (this.serviceId) return;
    this.serviceId = Date.now();
    this.modalRefMap = new Map();
    this.modalsSubject = new Subject();
    this.modalsListener = new Subscription();
    this.historyStrategy = new HistoryStateStrategy();
    this.modalsListener.add(this.observeModalState().subscribe(this.onChangeModalState.bind(this)));
  }

  /**
   * 서비스 아이디
   */
  get id() {
    return this.serviceId;
  }

  /**
   * 현재 열려있는 모달의 수
   */
  get modals(): JdModalRef[] {
    return Array.from(this.modalRefMap.values());
  }

  /**
   * 현재 열려 있는 모달이 있는지 여부
   */
  get hasModal(): boolean {
    return !!this.modalRefMap.size;
  }

  /**
   * history state 사용여부
   */
  get usedHistoryState(): boolean {
    return this.useHistoryState;
  }

  /**
   * body 스크롤 block 여부
   */
  get usedBlockBodyScroll(): boolean {
    return this.useBlockBodyScroll;
  }

  /**
   * history state 사용 여부 지정
   * @param is - 여부
   */
  setUseHistoryState(is: boolean): void {
    this.useHistoryState = is;
  }

  /**
   * 모달의 갯수에 따라 body 의 style(overflow) 속성을 변경하여 scroll 을 막는다.
   * @param is - 여부
   */
  setUseBlockBodyScroll(is: boolean): void {
    this.useBlockBodyScroll = is;
  }

  /**
   * 기본 엔트리 컴포넌트가 지정 되었는지 여부 있는지
   */
  hasDefaultEntryComponent(): boolean {
    return !!this.defaultEntryComponent;
  }

  /**
   * 모달을 감싸는(모달 기능, 모션 처리) 엔트리 컴포넌트 지정
   * @param entryComponent - 컴포넌트
   */
  setDefaultEntryComponent(entryComponent: EntryComponentType): void {
    this.defaultEntryComponent = entryComponent;
  }

  /**
   * 모달의 갯 수 변경시 알림용 옵저버.
   * modals 만으로 외부에서 모달의 갯수 변경 사항을 알 수 있으면
   * 필요가 없으나 반응(상태 갱신) 처리가 자동으로 되지 않아 수동으로 변경사항을 알리고 알 수 있도록 추가함.
   */
  observeModalState(): Observable<ModalState> {
    return this.modalsSubject.asObservable();
  }

  /**
   * 모달의 갯 수 변경사항 알림.
   */
  protected dispatchChangeState(): void {
    this.modalsSubject.next(this.getState());
  }

  /**
   * 현재 모달 상태.
   */
  getState(): ModalState {
    return { modals: this.modals };
  }

  /**
   * 모달에서 사용하기 있는 historyState 관리 전략 반환
   */
  getHistoryStrategy() {
    return this.historyStrategy;
  }

  /**
   * blockBodyScroll 을 사용할 때 state 변경 전 body style 반환
   */
  getBlockBodyStyleBeforeOverflow() {
    return this.blockBodyStyleBeforeOverflow;
  }

  /**
   * 핸들러: 모달 상태 변경
   */
  protected onChangeModalState(): void {
    if (this.useBlockBodyScroll) {
      this.touchBlockBodyScroll();
    }
  }

  /**
   * body block 스크롤 처리
   */
  protected touchBlockBodyScroll() {
    if (this.blockBodyStyleBeforeOverflow === null) {
      this.blockBodyStyleBeforeOverflow = document.body.style.overflow || '';
    }
    if (this.modals.length) {
      document.body.style.overflow = 'hidden';
    } else {
      if (this.blockBodyStyleBeforeOverflow) {
        document.body.style.overflow = this.blockBodyStyleBeforeOverflow;
      } else {
        document.body.style.removeProperty('overflow');
      }
      this.blockBodyStyleBeforeOverflow = '';
    }
  }

  /**
   * id 로 modalRef 가져오기
   * @param id - modalRef 의 id
   */
  getModalRef(id: number): JdModalRef | undefined {
    return this.modalRefMap.get(id);
  }

  /**
   * id 기준 중첩되어 열린 모달이 있는지 여부 확인
   * @param id - modalRef 의 id
   */
  hasModalRefNext(id: number): boolean {
    const mapList = Array.from(this.modalRefMap.keys());
    if (!mapList.includes(id)) return false;
    const len = mapList.length;
    let is = false;
    for (let i = 0; i < len; i++) {
      const compareId = mapList[i];
      if (id < compareId) {
        is = true;
        break;
      }
    }
    return is;
  }

  /**
   * id 기준 가장 상위 모달인지 여부 확인
   * @param id - modalRef 의 id
   */
  isModalRefTop(modalId: number): boolean {
    const arr = Array.from(this.modalRefMap.keys()).reverse();
    return arr.indexOf(modalId) === 0;
  }

  /**
   * 모달 열기
   * @typeParam R - 모달의 결과 타입
   * @typeParam D - 모달로 전달되는 데이터 타입
   * @typeParam C - 모달로 열리는 컴포넌트 타입
   * @param data - 모달 데이터
   */
  open<R, D = any, C = any>(data: ModalData<D, C>): JdModalRef<R, D, C> {
    if (this.modalUid === 0) this.modalUid = Date.now();
    const id = this.modalUid++;
    const modalRef = new JdModalRef<R, D, C>();
    modalRef.setId(id);
    modalRef.setEntryComponent(data.entryComponent || this.defaultEntryComponent);
    modalRef.assignModalData(data);
    const subscription = modalRef.observeOpener().subscribe((evt: ModalEvent) => {
      if (evt.type === ModalEventType.CLOSED) {
        subscription.unsubscribe();
        this.modalsListener.remove(subscription);
        this.modalRefMap.delete(evt.modalRef.id);
        this.dispatchChangeState();
      }
    });
    this.modalsListener.add(subscription);
    this.modalRefMap.set(id, modalRef);
    this.dispatchChangeState();
    return modalRef;
  }

  /**
   * 모달 닫기. (modalRef 의 id 로)
   * @param id - open 시 전달되는 modalRef 의 id 값
   */
  close(id: number): void {
    this.closeById(id);
  }

  /**
   * 모달 닫기. (modalId 로)
   * @param modalRef - 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef 의 id 값
   */
  closeById(modalId: number): void {
    const ref = this.getModalRef(modalId);
    if (ref) {
      ref.close();
      this.dispatchChangeState();
    }
  }

  /**
   * 모달 닫기. (modalRef 로)
   * @param modalRef - 오픈시 전달되거나 inject 해서 꺼낼 수 있는 modalRef
   */
  closeByRef(modalRef: JdModalRef): void {
    const ref = this.getModalRef(modalRef.id);
    if (!ref) return;
    ref.close();
    this.dispatchChangeState();
  }

  /**
   * 해당 서비스를 통해 열린 모달을 모두 닫기
   * @param useClosing - 애니메이트 처리 여부
   */
  closeAll(useClosing: boolean = true): void {
    this.modals.forEach((modalRef) => {
      if (useClosing) {
        modalRef.close();
      } else {
        modalRef.closed();
      }
    });
    this.dispatchChangeState();
  }

  /**
   * index 로 위치 스왑 하기
   * @param from - 여기서
   * @param to - 여기로
   */
  swapOrder(from: number, to: number): void {
    const size = this.modalRefMap.size;
    if (!(0 <= from && from < size && 0 <= to && to < size)) return;
    if (from === to) return;
    const entires = Array.from(this.modalRefMap.entries());
    const tempFrom = entires[from];
    entires[from] = entires[to];
    entires[to] = tempFrom;
    this.modalRefMap = new Map([...entires]);
    this.dispatchChangeState();
  }

  /**
   * modalRef 기준으로 가장 앞에 있는 모달과 위치 스왑하기
   * @param modalRef - 스왑될 modalRef
   */
  swapOrderTopByRef(modalRef: JdModalRef): void {
    let from = -1;
    const to = Math.max(0, this.modalRefMap.size - 1);
    const modals = this.modals;
    const len = modals.length;
    for (let i = 0; i < len; i++) {
      if (modals[i] === modalRef) {
        from = i;
        break;
      }
    }
    this.swapOrder(from, to);
  }

  /**
   * id 기준으로 가장 앞에 있는 모달과 위치 스왑하기
   * @param id - modalRef 의 id
   */
  swapOrderTopById(id: number): void {
    const modalRef = this.modalRefMap.get(id);
    if (!modalRef) return;
    this.swapOrderTopByRef(modalRef);
  }

  /**
   * modalRef 기준 가장 앞으로 넣고 나머지 뒤로 밀어내기
   * @param modalRef - 이동될 modalRef
   */
  pushOrder(modalRef: JdModalRef): void {
    if (!modalRef) return;
    const from = this.modalRefMap.get(modalRef.id);
    const entires = Array.from(this.modalRefMap.entries());
    const len = entires.length - 1; // 맨 끝에 있으면 위치 변경 불필요
    let isChanged = false;
    for (let i = 0; i < len; i++) {
      const key = entires[i][0];
      const value = entires[i][1];
      if (value === from) {
        entires.splice(i, 1);
        entires.push([key, value]);
        isChanged = true;
        break;
      }
    }
    if (isChanged) {
      this.modalRefMap = new Map([...entires]);
      this.dispatchChangeState();
    }
  }

  /**
   * id 기준 가장 앞으로 넣고 나머지 뒤로 밀어내기
   * @param id - modalRef 의 id
   */
  pushOrderById(id: number): void {
    const modalRef = this.modalRefMap.get(id);
    if (!modalRef) return;
    this.pushOrder(modalRef);
  }

  /**
   * 파기
   */
  destroy(): void {
    try {
      this.modalsListener.unsubscribe();
      this.modals.forEach((modalRef) => {
        modalRef.destroy();
      });
    } catch (err) {
      console.log(err);
    }
  }
}
