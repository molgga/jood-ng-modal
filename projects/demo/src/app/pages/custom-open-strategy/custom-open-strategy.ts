import { OpenStrategy, OpenStrategyStyleSet } from '@jood/ng-modal';

export class CustomOpenStrategy implements OpenStrategy {
  duration = 240;

  base(duration: number = 240): OpenStrategyStyleSet {
    this.duration = duration;
    const timingOpacity = this.duration * 0.85;
    return {
      modal: {
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      },
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1), opacity ${timingOpacity}ms`,
        transform: 'translateY(-300px) rotateX(135deg) scale(0.2, 0.2)',
        opacity: 0,
      },
      overlay: {
        opacity: 0,
      },
    };
  }

  shadow(): OpenStrategyStyleSet {
    return {
      pivot: {},
    };
  }

  opening(): OpenStrategyStyleSet {
    return {
      pivot: {
        transform: 'translateY(50px) rotateX(15deg) scale(1, 1)',
        opacity: 1,
      },
      overlay: { opacity: 0.3 },
    };
  }

  floatingOpening(): OpenStrategyStyleSet[] {
    return [
      {
        // last
        pivot: { transform: 'translateY(-60px) rotateX(-10deg) scale(0.85, 0.85)', opacity: 1 },
        overlay: { opacity: 0.3, backgroundColor: 'rgba(0,0,255,1)' },
      },
      {
        // second
        pivot: { transform: 'translateY(-40px) rotateX(-5deg) scale(0.9, 0.9)', opacity: 1 },
        overlay: { opacity: 0.4, backgroundColor: 'rgba(0,255,0,1)' },
      },
      {
        // first
        pivot: { transform: 'translateY(50px) rotateX(15deg) scale(1, 1)', opacity: 1 },
        overlay: { opacity: 0.5, backgroundColor: 'rgba(255,0,0,1)' },
      },
    ];
  }

  opened(): OpenStrategyStyleSet {
    return {
      pivot: {
        transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
        transform: 'translateY(0px)',
      },
    };
  }

  closing(): OpenStrategyStyleSet {
    return {
      pivot: {
        transitionDuration: `${this.duration * 0.8}ms`,
        transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1)',
        transform: 'translateY(50px)',
        opacity: 0,
      },
      overlay: { opacity: 0 },
    };
  }
}
