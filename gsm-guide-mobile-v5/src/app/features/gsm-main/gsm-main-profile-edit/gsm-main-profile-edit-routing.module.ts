import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainProfileEditPage } from './gsm-main-profile-edit.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainProfileEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainProfileEditPageRoutingModule {}
