import { TestBed } from '@angular/core/testing';

import { Storeman } from './storeman';

describe('Storeman', () => {
  let service: Storeman;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storeman);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
