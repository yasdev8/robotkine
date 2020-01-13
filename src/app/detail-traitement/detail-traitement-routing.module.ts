import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailTraitementPage } from './detail-traitement.page';

const routes: Routes = [
  {
    path: '',
    component: DetailTraitementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailTraitementPageRoutingModule {}
