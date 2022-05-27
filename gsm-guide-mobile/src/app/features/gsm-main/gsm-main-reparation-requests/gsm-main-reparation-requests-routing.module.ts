import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainReparationRequestsPage } from './gsm-main-reparation-requests.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainReparationRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainReparationRequestsPageRoutingModule {}
