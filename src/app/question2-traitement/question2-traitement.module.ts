import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Question2TraitementPageRoutingModule } from './question2-traitement-routing.module';

import { Question2TraitementPage } from './question2-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Question2TraitementPageRoutingModule
  ],
  declarations: [Question2TraitementPage]
})
export class Question2TraitementPageModule {}
