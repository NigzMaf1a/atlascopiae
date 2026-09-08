import { TestBed } from '@angular/core/testing';

import { MenuStyles } from './menu-styles';

describe('MenuStyles', () => {
  let service: MenuStyles;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuStyles);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
