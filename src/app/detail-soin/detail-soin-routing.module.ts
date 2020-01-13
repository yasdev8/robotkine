import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSoinPage } from './detail-soin.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSoinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSoinPageRoutingModule {}
