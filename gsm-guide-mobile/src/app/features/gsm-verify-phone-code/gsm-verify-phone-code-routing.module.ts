import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmVerifyPhoneCodePage } from './gsm-verify-phone-code.page';

const routes: Routes = [
  {
    path: '',
    component: GsmVerifyPhoneCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmVerifyPhoneCodePageRoutingModule {}
