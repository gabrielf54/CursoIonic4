import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstalacaoPageRoutingModule } from './instalacao-routing.module';

import { InstalacaoPage } from './instalacao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstalacaoPageRoutingModule
  ],
  declarations: [InstalacaoPage]
})
export class InstalacaoPageModule {}
