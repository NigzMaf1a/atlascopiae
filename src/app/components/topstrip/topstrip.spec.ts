import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Topstrip } from './topstrip';

describe('Topstrip', () => {
  let component: Topstrip;
  let fixture: ComponentFixture<Topstrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Topstrip],
    }).compileComponents();

    fixture = TestBed.createComponent(Topstrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
