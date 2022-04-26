import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainProfilePage } from './gsm-main-profile.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainProfilePageRoutingModule {}
