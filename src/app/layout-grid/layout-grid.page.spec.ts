import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutGridPage } from './layout-grid.page';

describe('LayoutGridPage', () => {
  let component: LayoutGridPage;
  let fixture: ComponentFixture<LayoutGridPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
