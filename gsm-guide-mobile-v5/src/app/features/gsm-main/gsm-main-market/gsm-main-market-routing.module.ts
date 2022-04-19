import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainMarketPage } from './gsm-main-market.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainMarketPageRoutingModule {}
