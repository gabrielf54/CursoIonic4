import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentActionSheetPage } from './component-action-sheet.page';

const routes: Routes = [
  {
    path: '',
    component: ComponentActionSheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentActionSheetPageRoutingModule {}
