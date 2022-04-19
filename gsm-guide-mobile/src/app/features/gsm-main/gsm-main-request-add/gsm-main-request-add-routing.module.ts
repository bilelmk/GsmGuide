import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainRequestAddPage } from './gsm-main-request-add.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainRequestAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainRequestAddPageRoutingModule {}
