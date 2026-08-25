import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Labelledinput } from './labelledinput';

describe('Labelledinput', () => {
  let component: Labelledinput;
  let fixture: ComponentFixture<Labelledinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Labelledinput],
    }).compileComponents();

    fixture = TestBed.createComponent(Labelledinput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
