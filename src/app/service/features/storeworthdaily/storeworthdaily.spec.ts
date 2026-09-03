import { TestBed } from '@angular/core/testing';

import { Storeworthdaily } from './storeworthdaily';

describe('Storeworthdaily', () => {
  let service: Storeworthdaily;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storeworthdaily);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
