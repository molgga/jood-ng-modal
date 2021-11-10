import { OpenStrategy } from './types';

/**
 * 위에서 아래로.
 * 상단에 쌓임.
 * @public
 */
export class StackTop implements OpenStrategy {
  shadow() {
    return {
      pivot: {
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.02), 0 10px 10px 1px rgba(0, 0, 0, 0.04), 0 3px 3px rgba(0, 0, 0, 0.06)',
        filter: `drop-shadow(0 0 5px rgba(0, 0, 0, 0.02)) 
          drop-shadow(0 10px 10px rgba(0, 0, 0, 0.04)) 
          drop-shadow(0 3px 3px rgba(0, 0, 0, 0.06))`,
      },
    };
  }

  base(duration?: number) {
    const timingOpacity = (duration || 240) * 0.85;
    return {
      modal: {
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1), opacity ${timingOpacity}ms`,
        transform: 'translateY(-102%)',
        borderRadius: '0 0 10px 10px',
      },
    };
  }

  opening() {
    return {
      pivot: { transform: 'translateY(0%)' },
      overlay: { opacity: 0.3 },
    };
  }

  floatingOpening() {
    return [
      {
        pivot: { transform: 'scale(0.94, 0.94) translateY(6%)' },
        overlay: { opacity: 0.05 },
      },
      {
        pivot: { transform: 'scale(0.97, 0.97) translateY(3%)' },
        overlay: { opacity: 0.2 },
      },
      {
        pivot: { transform: 'translateY(0%)' },
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