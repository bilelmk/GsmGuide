import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsmMainProductsAddPage } from './gsm-main-products-add.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainProductsAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainProductsAddPageRoutingModule {}
