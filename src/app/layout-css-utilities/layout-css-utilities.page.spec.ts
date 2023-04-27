import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutCssUtilitiesPage } from './layout-css-utilities.page';

describe('LayoutCssUtilitiesPage', () => {
  let component: LayoutCssUtilitiesPage;
  let fixture: ComponentFixture<LayoutCssUtilitiesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutCssUtilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
