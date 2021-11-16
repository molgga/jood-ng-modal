import { OpenStrategy } from './types';

/**
 * 우에서 좌로.
 * 우측에 쌓임.
 * @public
 */
export class StackRight implements OpenStrategy {
  shadow() {
    return {
      pivot: {
        boxShadow: '-10px 0 10px 2px rgba(0, 0, 0, 0.04), -3px 0 3px rgba(0, 0, 0, 0.02)',
        // filter: 'drop-shadow(-10px 0 10px rgba(0, 0, 0, 0.04)) -3px 0 3px rgba(0, 0, 0, 0.02)',
      },
    };
  }

  base(duration?: number) {
    const timingOpacity = (duration || 240) * 0.85;
    return {
      entry: {
        justifyContent: 'flex-end',
        alignItems: 'initial',
      },
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`,
        transform: 'translateX(102%)',
        borderRadius: '0px',
      },
    };
  }

  opening() {
    return {
      pivot: { transform: 'translateX(0%)' },
      overlay: { opacity: 0.3 },
    };
  }

  floatingOpening() {
    return [
      {
        pivot: { transform: 'translateX(-8%)' },
        overlay: { opacity: 0.05 },
      },
      {
        pivot: { transform: 'translateX(-4%)' },
        overlay: { opacity: 0.2 },
      },
      {
        pivot: { transform: 'translateX(0%)' },
        overlay: { opacity: 0.3 },
      },
    ];
  }

  opened() {
    return {};
  }

  closing() {
    return {
      pivot: {},
      overlay: { opacity: 0 },
    };
  }
}