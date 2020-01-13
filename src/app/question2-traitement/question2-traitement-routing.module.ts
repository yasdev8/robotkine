import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Question2TraitementPage } from './question2-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: Question2TraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Question2TraitementPageRoutingModule {}
