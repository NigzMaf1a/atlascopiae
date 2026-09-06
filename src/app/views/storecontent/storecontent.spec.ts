import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storecontent } from './storecontent';

describe('Storecontent', () => {
  let component: Storecontent;
  let fixture: ComponentFixture<Storecontent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storecontent],
    }).compileComponents();

    fixture = TestBed.createComponent(Storecontent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
