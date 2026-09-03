import { TestBed } from '@angular/core/testing';

import { Storeditems } from './storeditems';

describe('Storeditems', () => {
  let service: Storeditems;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storeditems);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
