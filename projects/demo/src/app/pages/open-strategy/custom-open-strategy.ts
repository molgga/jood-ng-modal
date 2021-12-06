import { OpenStrategy, OpenStrategyStyleSet } from '@jood/ng-modal';

export class CustomOpenStrategy implements OpenStrategy {
  duration = 240;
  // base styles
  base(duration: number = 240): OpenStrategyStyleSet {
    this.duration = duration;
    const timingOpacity = this.duration * 0.85;
    return {
      modal: {
        transition: `transform ${duration}ms ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1)`,
        transform: 'translateY(120px) scale(0.75, 0.75)',
      },
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1), opacity ${timingOpacity}ms`,
        transform: 'translateY(-300px) scale(0.2, 0.2)',
        border: '10px solid #333',
        opacity: 0,
      },
      overlay: { opacity: 0, backgroundColor: '#000' },
    };
  }

  // base shadow
  shadow(): OpenStrategyStyleSet {
    return {
      pivot: {
        boxShadow: 'initial',
      },
    };
  }

  // option - flotingMode: false (default)
  // start open styles
  opening(): OpenStrategyStyleSet {
    return {
      modal: { transform: 'translateY(0px) scale(1,1)' },
      pivot: { transform: 'translateY(50px) rotateX(15deg) scale(1, 1)', opacity: 1 },
      overlay: { opacity: 0.7 },
    };
  }

  // option - flotingMode: true
  // start open styles
  floatingOpening(): OpenStrategyStyleSet[] {
    return [
      {
        // last
        modal: { transform: 'translateY(0px) scale(1,1)' },
        pivot: { transform: 'translateY(-60px) rotateX(-10deg) scale(0.85, 0.85)', opacity: 1 },
        overlay: { opacity: 0.1 },
      },
      {
        // second
        modal: { transform: 'translateY(0px) scale(1,1)' },
        pivot: { transform: 'translateY(-40px) rotateX(-5deg) scale(0.9, 0.9)', opacity: 1 },
        overlay: { opacity: 0.1 },
      },
      {
        // first
        modal: { transform: 'translateY(0px) scale(1,1)' },
        pivot: { transform: 'translateY(50px) rotateX(15deg) scale(1, 1)', opacity: 1 },
        overlay: { opacity: 0.2 },
      },
    ];
  }

  // opened
  opened(): OpenStrategyStyleSet {
    return {
      pivot: { transitionTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1)', transform: 'translateY(0px)' },
    };
  }

  // start close
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
