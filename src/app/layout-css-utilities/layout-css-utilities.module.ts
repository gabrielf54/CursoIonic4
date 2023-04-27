import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutCssUtilitiesPageRoutingModule } from './layout-css-utilities-routing.module';

import { LayoutCssUtilitiesPage } from './layout-css-utilities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutCssUtilitiesPageRoutingModule
  ],
  declarations: [LayoutCssUtilitiesPage]
})
export class LayoutCssUtilitiesPageModule {}
