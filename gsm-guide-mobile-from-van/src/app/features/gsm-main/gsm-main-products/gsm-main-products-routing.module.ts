import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainProductsPage } from './gsm-main-products.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainProductsPageRoutingModule {}
