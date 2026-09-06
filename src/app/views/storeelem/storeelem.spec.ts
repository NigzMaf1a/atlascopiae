import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storeelem } from './storeelem';

describe('Storeelem', () => {
  let component: Storeelem;
  let fixture: ComponentFixture<Storeelem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storeelem],
    }).compileComponents();

    fixture = TestBed.createComponent(Storeelem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
