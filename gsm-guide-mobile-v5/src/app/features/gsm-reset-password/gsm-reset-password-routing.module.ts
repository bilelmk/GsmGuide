import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmResetPasswordPage } from './gsm-reset-password.page';

const routes: Routes = [
  {
    path: '',
    component: GsmResetPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmResetPasswordPageRoutingModule {}
