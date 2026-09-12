import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesigItem } from './desig-item';

describe('DesigItem', () => {
  let component: DesigItem;
  let fixture: ComponentFixture<DesigItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesigItem],
    }).compileComponents();

    fixture = TestBed.createComponent(DesigItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
