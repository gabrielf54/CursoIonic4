import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentActionSheetPage } from './component-action-sheet.page';

describe('ComponentActionSheetPage', () => {
  let component: ComponentActionSheetPage;
  let fixture: ComponentFixture<ComponentActionSheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComponentActionSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
