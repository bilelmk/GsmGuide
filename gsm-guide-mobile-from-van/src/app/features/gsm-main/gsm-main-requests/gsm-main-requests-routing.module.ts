import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainRequestsPage } from './gsm-main-requests.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainRequestsPageRoutingModule {}
