import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutSplitPanePageRoutingModule } from './layout-split-pane-routing.module';

import { LayoutSplitPanePage } from './layout-split-pane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutSplitPanePageRoutingModule
  ],
  declarations: [LayoutSplitPanePage]
})
export class LayoutSplitPanePageModule {}
