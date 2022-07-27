import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainProductsClientPage } from './gsm-main-products-client.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainProductsClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainProductsClientPageRoutingModule {}
