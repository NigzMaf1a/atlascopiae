import { TestBed } from '@angular/core/testing';

import { Restockrequestitems } from './restockrequestitems';

describe('Restockrequestitems', () => {
  let service: Restockrequestitems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Restockrequestitems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
