import { InjectionToken } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OpenStrategy, StackNormal } from '../open-strategy';
import { ModalEvent, ModalEventType, ModalData, EntryComponentType } from './types';

/**
 * ModalRef Inject 토큰
 * @public
 */
export const JdModalRefToken = new InjectionToken<string>('JdModalRefToken');

/**
 * 하나의 모달 (정보)
 * @public
 * @typeParam R - 모달의 결과 타입
 * @typeParam D - 모달로 전달되는 데이터 타입
 * @typeParam C - 모달로 열리는 컴포넌트 타입
 */
export class JdModalRef<R = any, D = any, C = any> {
  protected modalId: number = -1;
  protected modalIndex: number = 0;
  protected modalEntryComponent: EntryComponentType | null = null;
  protected modalData: D | null = null;
  protected modalResult: R | undefined;
  protected modalComponent: C | null = null;
  protected modalPanelElement: HTMLElement | null = null;
  protected modalPanelStyle: any = null;
  protected modalOpenStrategy: OpenStrategy;
  protected modalTransitionDuration = 240;
  protected modalFloatingOpenMode = false;
  protected modalOverlayClose = false;
  protected modalDisableShadow = true;
  protected modalFullHeight = false;
  protected openerSubject: Subject<ModalEvent> = new Subject();
  protected closedSubject: Subject<R | undefined> = new Subject();
  protected attachedBeforeLeave = false;

  constructor() {
    this.modalOpenStrategy = new StackNormal();
  }

  /**
   * 모달의 id
   */
  get id() {
    return this.modalId;
  }

  /**
   * 모달의 index
   */
  get index() {
    return this.modalIndex;
  }

  /**
   * 전달된 데이터
   */
  get data() {
    return this.modalData;
  }

  /**
   * 전달된 panelStyle
   */
  get panelStyle() {
    return this.modalPanelStyle;
  }

  /**
   * 모달로 열리는 컴포넌트
   */
  get component() {
    return this.modalComponent;
  }

  /**
   * 모달을 감싸는(모달 기능, 모션 처리) 컴포넌트
   */
  get entryComponent() {
    return this.modalEntryComponent;
  }

  /**
   * 모달 오픈 방식
   */
  get openStrategy() {
    return this.modalOpenStrategy;
  }

  /**
   * 모달 오픈 속도
   */
  get duration() {
    return this.modalTransitionDuration;
  }

  /**
   * 모달 오버레이 영역 닫기 처리 여부
   */
  get overlayClose() {
    return this.modalOverlayClose;
  }

  /**
   * 모달 중첩 열기시 하위 모달의 UI 처리 여부
   */
  get floatingMode() {
    return this.modalFloatingOpenMode;
  }

  /**
   * 모달 box-shadow 사용 여부
   */
  get disableShadow() {
    return this.modalDisableShadow;
  }

  /**
   * 모달 height 100% 사용 여부
   */
  get fullHeight() {
    return this.modalFullHeight;
  }

  /**
   * 모달의 패널(DOM)
   */
  get panelElement() {
    return this.modalPanelElement;
  }

  /**
   * 모달 오픈 상태 알리미
   */
  get opener() {
    return this.openerSubject;
  }

  /**
   * beforeLeave 가 연결되었는지 여부
   */
  get isAttachedBeforeLeave() {
    return this.attachedBeforeLeave;
  }

  /**
   * 전달된 data 로 모달 정보 설정
   * @param data - 모달로 전달된 데이터
   */
  assignModalData(data: ModalData<D>) {
    this.setComponent(data.component);
    this.setOpenStrategy(data.openStrategy || new StackNormal());
    this.setOverlayClose(data.overlayClose || false);
    this.setFloatingMode(data.floatingMode || false);
    this.setFullHeight(data.fullHeight || false);
    this.setDisableShadow(!!data.disableShadow);
    this.setDuration(data.duration || 240);
    this.setData(data.data);
    this.setPanelStyle(data.panelStyle);
  }

  /**
   * 모달의 id 지정
   * @param id - 모달의 id
   */
  setId(id: number) {
    this.modalId = id;
  }

  /**
   * 모달 데이터 지정
   * @param data - 데이터
   */
  setData(data: D | undefined) {
    this.modalData = data || null;
  }

  /**
   * 모달 panelStyle 지정
   * @param styles - 모달 패널의 스타일
   */
  setPanelStyle(styles: any) {
    this.modalPanelStyle = styles || null;
  }

  /**
   * 모달로 열리는 컴포넌트 지정
   * @param component - 컴포넌트
   */
  setComponent(component: C) {
    this.modalComponent = component || null;
  }

  /**
   * 열리는 모달을 감싸는 엔트리 컴포넌트 지정
   * @param entryComponent - 컴포넌트
   */
  setEntryComponent(entryComponent: EntryComponentType) {
    this.modalEntryComponent = entryComponent;
  }

  /**
   * 오픈 방식 지정
   * @param openStrategy - 오픈 전략
   */
  setOpenStrategy(openStrategy: OpenStrategy) {
    this.modalOpenStrategy = openStrategy;
  }

  /**
   * 모달이 열리거나 닫힐 때 속도 지정
   * @param duration - 속도
   */
  setDuration(duration: number) {
    this.modalTransitionDuration = duration;
  }

  /**
   * 모달 중첩시 별도 모드(openStrategy 와 연관)
   * @param is - 여부
   */
  setFloatingMode(is: boolean) {
    this.modalFloatingOpenMode = !!is;
  }

  /**
   * 모달의 overlay 영역 클릭시 닫힘 여부 지정
   * @param is - 여부
   */
  setOverlayClose(is: boolean) {
    this.modalOverlayClose = !!is;
  }

  /**
   * 모달의 shadow 처리 여부(openStrategy 에서 지정된 값을 처리하지만, performace 영향이 큰 관계로 별도로 제외시킬 수 있도록함)
   * @param is - 여부
   */
  setDisableShadow(is: boolean) {
    this.modalDisableShadow = !!is;
  }

  /**
   * css 만으로 열리는 모달의 height 제어가 어려운 경우가 있어서
   * fullHeight 지정시 감싸는 패널(엔트리 컴포넌트)의 height 를 100% 로 지정
   * @param is - 여부
   */
  setFullHeight(is: boolean) {
    this.modalFullHeight = is;
  }

  /**
   * 엔트리 컴포넌트의 패널 영역 엘리먼트 지정
   * @param element - 엘리먼트
   */
  setPanelElement(element: HTMLElement) {
    this.modalPanelElement = element;
  }

  /**
   * 모달의 인덱스(순번)
   * @param index - 인덱스
   */
  setIndex(index: number) {
    this.modalIndex = index;
  }

  /**
   * beforeLeave 가 연결(사용) 하는 상태인지 여부
   */
  attachBeforeLeave() {
    this.attachedBeforeLeave = true;
  }

  /**
   * beforeLeave 가 연결(사용) 해제 상태인지 여부
   */
  detachBeforeLeave() {
    this.attachedBeforeLeave = false;
  }

  /**
   * 모달 닫기.
   * @param result - 모달이 닫힐 때 외부(보통은 모달을 열은 곳, observeClosed 를 통해) 전달 할 결과값
   */
  close(result?: R) {
    this.modalResult = result;
    this.openerSubject.next({
      type: ModalEventType.CLOSE,
      modalRef: this,
    });
  }

  /**
   * 모달이 (애니메이션 등 처리 후) 완전히 닫힘.
   */
  closed() {
    this.openerSubject.next({
      type: ModalEventType.CLOSED,
      modalRef: this,
    });
    this.closedSubject.next(this.modalResult);
  }

  /**
   * 모달 열림 상태 옵저버
   */
  observeOpener(): Observable<ModalEvent> {
    return this.openerSubject.asObservable();
  }

  /**
   * 모달 완전하게 닫힘 옵저버.
   * 보통은 모달에서 전달하는 값을 받아야 하는 경우 사용
   */
  observeClosed(): Observable<R | undefined> {
    return this.closedSubject.asObservable();
  }

  /**
   * 파기
   */
  destroy() {
    try {
      this.closed();
    } catch (err) {
      console.log(err);
    }
  }
}
