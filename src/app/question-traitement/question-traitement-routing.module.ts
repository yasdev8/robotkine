import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionTraitementPage } from './question-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: QuestionTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionTraitementPageRoutingModule {}
