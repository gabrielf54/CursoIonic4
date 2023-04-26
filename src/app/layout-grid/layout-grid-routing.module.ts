import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutGridPage } from './layout-grid.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutGridPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutGridPageRoutingModule {}
