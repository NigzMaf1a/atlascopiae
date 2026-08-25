import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Labelledtext } from './labelledtext';

describe('Labelledtext', () => {
  let component: Labelledtext;
  let fixture: ComponentFixture<Labelledtext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Labelledtext],
    }).compileComponents();

    fixture = TestBed.createComponent(Labelledtext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
