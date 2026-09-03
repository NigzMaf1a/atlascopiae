import { TestBed } from '@angular/core/testing';

import { Storeworth } from './storeworth';

describe('Storeworth', () => {
  let service: Storeworth;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Storeworth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
