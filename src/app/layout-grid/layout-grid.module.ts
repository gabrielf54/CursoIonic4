import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutGridPageRoutingModule } from './layout-grid-routing.module';

import { LayoutGridPage } from './layout-grid.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutGridPageRoutingModule
  ],
  declarations: [LayoutGridPage]
})
export class LayoutGridPageModule {}
