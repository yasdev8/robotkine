import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSoinPageRoutingModule } from './detail-soin-routing.module';

import { DetailSoinPage } from './detail-soin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSoinPageRoutingModule
  ],
  declarations: [DetailSoinPage]
})
export class DetailSoinPageModule {}


