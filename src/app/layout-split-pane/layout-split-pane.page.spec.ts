import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutSplitPanePage } from './layout-split-pane.page';

describe('LayoutSplitPanePage', () => {
  let component: LayoutSplitPanePage;
  let fixture: ComponentFixture<LayoutSplitPanePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutSplitPanePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
