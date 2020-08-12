import { TestBed } from '@angular/core/testing';

import { MfService } from './mf.service';

describe('MfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MfService = TestBed.get(MfService);
    expect(service).toBeTruthy();
  });
});
