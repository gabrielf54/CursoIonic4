import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutHeaderFooterPage } from './layout-header-footer.page';

describe('LayoutHeaderFooterPage', () => {
  let component: LayoutHeaderFooterPage;
  let fixture: ComponentFixture<LayoutHeaderFooterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutHeaderFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
