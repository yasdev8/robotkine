import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionTraitementPageRoutingModule } from './question-traitement-routing.module';

import { QuestionTraitementPage } from './question-traitement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionTraitementPageRoutingModule
  ],
  declarations: [QuestionTraitementPage]
})
export class QuestionTraitementPageModule {}
