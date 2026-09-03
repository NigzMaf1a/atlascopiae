import { TestBed } from '@angular/core/testing';

import { Designations } from './designations';

describe('Designations', () => {
  let service: Designations;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Designations);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
