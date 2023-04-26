import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutMenuPageRoutingModule } from './layout-menu-routing.module';

import { LayoutMenuPage } from './layout-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutMenuPageRoutingModule
  ],
  declarations: [LayoutMenuPage]
})
export class LayoutMenuPageModule {}
