import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentActionSheetPageRoutingModule } from './component-action-sheet-routing.module';

import { ComponentActionSheetPage } from './component-action-sheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentActionSheetPageRoutingModule
  ],
  declarations: [ComponentActionSheetPage]
})
export class ComponentActionSheetPageModule {}
