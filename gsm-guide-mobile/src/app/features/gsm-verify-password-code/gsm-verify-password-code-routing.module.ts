import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmVerifyPasswordCodePage } from './gsm-verify-password-code.page';

const routes: Routes = [
  {
    path: '',
    component: GsmVerifyPasswordCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmVerifyPasswordCodePageRoutingModule {}
