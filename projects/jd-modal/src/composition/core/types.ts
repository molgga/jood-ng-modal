import { JdModalRef } from './jd-modal.ref';
import { OpenStrategy } from '../open-strategy/types';

/**
 * 엔트리 컴포넌트 타입
 * @public
 */
export type EntryComponentType = any;

/**
 * 모달 서비스 config
 * @public
 */
export interface ModalConfig {
  defaultEntryComponent?: EntryComponentType;
}

/**
 * 모달 서비스 상태
 * @public
 */
export interface ModalState {
  /**
   * modalRef[]
   */
  modals: JdModalRef[];
}

/**
 * 모달 window popstate change 이벤트
 * @public
 */
export interface ModalPopStateEvent extends PopStateEvent {
  /**
   * popstate ...
   */
  _preventModalClose?: boolean;
}

/**
 * 모달 옵션
 * @public
 * @typeParam D - 모달로 전달되는 데이터 타입
 * @typeParam C - 컴포넌트 타입
 */
export interface ModalData<D = any, C = any> {
  /**
   * 모달로 열려고 하는 컴포넌트
   */
  component: C;
  /**
   * 모달을 감싸는(모달 기능 주입, 모션 처리 등을 하는) 컴포넌트.
   */
  entryComponent?: EntryComponentType;
  /**
   * 오픈 방식(방향)
   */
  openStrategy?: OpenStrategy;
  /**
   * 오버레이 영역 클릭시 닫기 처리 여부
   */
  overlayClose?: boolean;
  /**
   * 중첩 열기시 애니메이트 처리 여부
   */
  floatingMode?: boolean;
  /**
   * 그림자 처리 여부
   */
  disableShadow?: boolean;
  /**
   * 패널 height 100% 여부
   */
  fullHeight?: boolean;
  /**
   * 열기, 닫기 애니메이션 시간
   */
  duration?: number;
  /**
   *  모달에 전달하는 데이터
   */
  data?: D;
  /**
   * 모달 패널 css 스타일
   */
  panelStyle?: any;
}

/**
 * 모달의 열림, 닫힘 처리 상태 이벤트 타입
 * @public
 */
export enum ModalEventType {
  OPEN,
  OPENED,
  CLOSE,
  CLOSED,
}

/**
 * 모달에서 발생하는 이벤트
 * @public
 */
export interface ModalEvent {
  type: ModalEventType;
  modalRef: JdModalRef;
}
