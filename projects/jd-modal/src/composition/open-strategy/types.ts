import { Properties as CSSProperties } from 'csstype';

export type StyleProperties = CSSProperties;

/**
 * 오픈 전략 스타일 세트
 * @public
 */
export type OpenStrategyStyleSet<T extends {} = any> = T & {
  entry?: StyleProperties;
  modal?: StyleProperties;
  pivot?: StyleProperties;
  overlay?: StyleProperties;
};

/**
 * 오픈 전략
 * @public
 */
export interface OpenStrategy {
  /**
   * 기본 style 정보
   * @param duration 모달의 duration
   */
  base(duration?: number): OpenStrategyStyleSet;
  /**
   * 그림자 style
   */
  shadow(): OpenStrategyStyleSet;
  /**
   * 열리기 시작할 때 style
   */
  opening(): OpenStrategyStyleSet;
  /**
   * 열림이 완료되었을때 style
   */
  opened(): OpenStrategyStyleSet;
  /**
   * 닫히기 시작할 때 style
   */
  closing(): OpenStrategyStyleSet;
  /**
   * opening 과 같으나,
   * 모달의 floatingMode 가 true 일 때 사용됨.
   * 모달이 여러개 열리는 경우 순서대로 정의된 opening style 이 적용됨.
   */
  floatingOpening(): OpenStrategyStyleSet[];
}
