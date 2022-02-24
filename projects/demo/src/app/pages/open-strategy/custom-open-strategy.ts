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
        transform: 'translateY(300px) rotateX(-135deg) scale(0, 0)',
        opacity: 0,
      },
      overlay: {
        opacity: 0,
        backgroundColor: 'rgba(255,0,0,1)',
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
        transform: 'translateY(80px) rotateX(0) scale(1, 1)',
        opacity: 1,
      },
      overlay: { opacity: 0.3 },
    };
  }

  floatingOpening(): OpenStrategyStyleSet[] {
    return [
      {
        // last
        pivot: { transform: 'translateY(-60px) rotateX(0) scale(0.85, 0.85)', opacity: 1 },
        overlay: { opacity: 0.3 },
      },
      {
        // second
        pivot: { transform: 'translateY(-40px) rotateX(0) scale(0.9, 0.9)', opacity: 1 },
        overlay: { opacity: 0.4 },
      },
      {
        // first
        pivot: { transform: 'translateY(80px) rotateX(0) scale(1, 1)', opacity: 1 },
        overlay: { opacity: 0.5 },
      },
    ];
  }

  opened(): OpenStrategyStyleSet {
    return {
      pivot: {
        border: '10px dashed #000',
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
