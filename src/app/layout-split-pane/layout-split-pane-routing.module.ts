import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutSplitPanePage } from './layout-split-pane.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutSplitPanePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutSplitPanePageRoutingModule {}
