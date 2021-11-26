import { OpenStrategy, StackBottom, StackLeft, StackNormal, StackRight, StackTop } from '@jood/ng-modal';

export function getSampleStrategy(sampleStrategy: string) {
  let openStrategy: OpenStrategy;
  let fullHeight = false;
  switch (sampleStrategy) {
    case 'left':
      openStrategy = new StackLeft();
      fullHeight = true;
      break;
    case 'right':
      openStrategy = new StackRight();
      fullHeight = true;
      break;
    case 'bottom':
      openStrategy = new StackBottom();
      break;
    case 'top':
      openStrategy = new StackTop();
      break;
    default:
      openStrategy = new StackNormal();
      break;
  }
  return {
    openStrategy,
    fullHeight,
  };
}
