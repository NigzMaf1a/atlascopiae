import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationsPage } from './designations-page';

describe('DesignationsPage', () => {
  let component: DesignationsPage;
  let fixture: ComponentFixture<DesignationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignationsPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DesignationsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
