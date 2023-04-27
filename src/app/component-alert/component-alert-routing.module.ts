import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentAlertPage } from './component-alert.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentAlertPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentAlertPageRoutingModule {}
