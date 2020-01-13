import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailTraitementPageRoutingModule } from './detail-traitement-routing.module';

import { DetailTraitementPage } from './detail-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailTraitementPageRoutingModule
  ],
  declarations: [DetailTraitementPage]
})
export class DetailTraitementPageModule {}

