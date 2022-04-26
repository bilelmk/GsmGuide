import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainHomePage } from './gsm-main-home.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainHomePageRoutingModule {}
