/* tslint:disable:no-unused-variable */

import { TestBed } from '@angular/core/testing';
import { StackNormal } from './stack-normal';

describe('OpenStrategy: StackNormal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('value', () => {
    const strategy = new StackNormal();
    expect(strategy.base()).toBeTruthy();
    expect(strategy.shadow()).toBeTruthy();
    expect(strategy.opening()).toBeTruthy();
    expect(strategy.floatingOpening()).toBeTruthy();
    expect(0 < strategy.floatingOpening().length).toBe(true);
    expect(strategy.opened()).toBeTruthy();
    expect(strategy.closing()).toBeTruthy();
  });
});