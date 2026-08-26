import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Storeditems } from './storeditems';

describe('Storeditems', () => {
  let component: Storeditems;
  let fixture: ComponentFixture<Storeditems>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Storeditems],
    }).compileComponents();

    fixture = TestBed.createComponent(Storeditems);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
