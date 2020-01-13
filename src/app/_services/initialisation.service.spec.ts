import { TestBed } from '@angular/core/testing';

import { InitialisationService } from './initialisation.service';

describe('InitialisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InitialisationService = TestBed.get(InitialisationService);
    expect(service).toBeTruthy();
  });
});
