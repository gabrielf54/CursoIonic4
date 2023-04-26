import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InstalacaoPage } from './instalacao.page';

describe('InstalacaoPage', () => {
  let component: InstalacaoPage;
  let fixture: ComponentFixture<InstalacaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InstalacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
