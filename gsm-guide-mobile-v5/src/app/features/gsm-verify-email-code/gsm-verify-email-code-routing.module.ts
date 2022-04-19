import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmVerifyEmailCodePage } from './gsm-verify-email-code.page';

const routes: Routes = [
  {
    path: '',
    component: GsmVerifyEmailCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmVerifyEmailCodePageRoutingModule {}
