import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmLoginPage } from './gsm-login.page';

const routes: Routes = [
  {
    path: '',
    component: GsmLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmLoginPageRoutingModule {}
