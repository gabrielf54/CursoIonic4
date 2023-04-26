import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutMenuPage } from './layout-menu.page';

describe('LayoutMenuPage', () => {
  let component: LayoutMenuPage;
  let fixture: ComponentFixture<LayoutMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LayoutMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
