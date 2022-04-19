import { TestBed } from '@angular/core/testing';

import { RepairerService } from './repairer.service';

describe('RepairerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepairerService = TestBed.get(RepairerService);
    expect(service).toBeTruthy();
  });
});
