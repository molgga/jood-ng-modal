import { OpenStrategy, OpenStrategyStyleSet } from '@jood/ng-modal';

export class FullBodyStrategy implements OpenStrategy {
  duration = 240;

  base(duration: number = 240): OpenStrategyStyleSet {
    this.duration = duration;
    return {
      modal: {},
      pivot: {
        transition: `transform ${duration}ms cubic-bezier(0.215, 0.610, 0.355, 1), opacity 200ms`,
        transform: 'translateY(150px)',
      },
      overlay: { opacity: 0.2 },
    };
  }

  shadow(): OpenStrategyStyleSet {
    return {
      pivot: {},
    };
  }

  opening(): OpenStrategyStyleSet {
    return {
      pivot: { transform: 'translateY(0px)', opacity: 1 },
    };
  }

  floatingOpening(): OpenStrategyStyleSet[] {
    return [
      {
        pivot: { transform: 'translateY(0px)', opacity: 1 },
      },
    ];
  }

  opened(): OpenStrategyStyleSet {
    return {
      pivot: {
        transform: 'translateY(0px)',
      },
    };
  }

  closing(): OpenStrategyStyleSet {
    return {
      pivot: {
        transform: 'translateY(120px)',
        opacity: 0,
      },
      overlay: { opacity: 0 },
    };
  }
}
