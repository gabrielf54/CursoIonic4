import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentAlertPage } from './component-alert.page';

describe('ComponentAlertPage', () => {
  let component: ComponentAlertPage;
  let fixture: ComponentFixture<ComponentAlertPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComponentAlertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
