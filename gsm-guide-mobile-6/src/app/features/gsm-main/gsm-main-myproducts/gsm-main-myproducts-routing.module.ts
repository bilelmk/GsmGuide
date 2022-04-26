import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainMyproductsPage } from './gsm-main-myproducts.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainMyproductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainMyproductsPageRoutingModule {}
