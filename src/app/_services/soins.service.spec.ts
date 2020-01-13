import { TestBed } from '@angular/core/testing';

import { SoinsService } from './soins.service';

describe('SoinsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoinsService = TestBed.get(SoinsService);
    expect(service).toBeTruthy();
  });
});
