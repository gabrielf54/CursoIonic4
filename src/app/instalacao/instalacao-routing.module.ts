import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstalacaoPage } from './instalacao.page';

const routes: Routes = [
  {
    path: '',
    component: InstalacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstalacaoPageRoutingModule {}
