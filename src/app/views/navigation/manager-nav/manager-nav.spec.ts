import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNav } from './manager-nav';

describe('ManagerNav', () => {
  let component: ManagerNav;
  let fixture: ComponentFixture<ManagerNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagerNav],
    }).compileComponents();

    fixture = TestBed.createComponent(ManagerNav);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
