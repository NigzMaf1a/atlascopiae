import { TestBed } from '@angular/core/testing';

import { Restock } from './restock';

describe('Restock', () => {
  let service: Restock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Restock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
