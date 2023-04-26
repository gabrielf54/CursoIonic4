import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutHeaderFooterPage } from './layout-header-footer.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutHeaderFooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutHeaderFooterPageRoutingModule {}
