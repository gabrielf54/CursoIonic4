import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutHeaderFooterPageRoutingModule } from './layout-header-footer-routing.module';

import { LayoutHeaderFooterPage } from './layout-header-footer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutHeaderFooterPageRoutingModule
  ],
  declarations: [LayoutHeaderFooterPage]
})
export class LayoutHeaderFooterPageModule {}
