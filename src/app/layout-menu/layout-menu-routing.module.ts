import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutMenuPage } from './layout-menu.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutMenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutMenuPageRoutingModule {}
