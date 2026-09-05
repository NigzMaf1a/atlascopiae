import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Informer } from './informer';

describe('Informer', () => {
  let component: Informer;
  let fixture: ComponentFixture<Informer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Informer],
    }).compileComponents();

    fixture = TestBed.createComponent(Informer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
