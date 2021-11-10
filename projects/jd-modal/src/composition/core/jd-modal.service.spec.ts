/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JdModalService } from './jd-modal.service';

describe('Service: JdModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JdModalService]
    });
  });

  it('should ...', inject([JdModalService], (service: JdModalService) => {
    expect(service).toBeTruthy();
  }));
});
