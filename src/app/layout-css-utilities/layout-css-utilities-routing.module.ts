import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutCssUtilitiesPage } from './layout-css-utilities.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutCssUtilitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutCssUtilitiesPageRoutingModule {}
