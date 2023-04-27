import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentAlertPageRoutingModule } from './component-alert-routing.module';

import { ComponentAlertPage } from './component-alert.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentAlertPageRoutingModule
  ],
  declarations: [ComponentAlertPage]
})
export class ComponentAlertPageModule {}
