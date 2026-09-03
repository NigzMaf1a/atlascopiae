import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fancyload } from './fancyload';

describe('Fancyload', () => {
  let component: Fancyload;
  let fixture: ComponentFixture<Fancyload>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fancyload],
    }).compileComponents();

    fixture = TestBed.createComponent(Fancyload);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
