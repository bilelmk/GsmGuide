import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmSendPassowrdCodePage } from './gsm-send-passowrd-code.page';

const routes: Routes = [
  {
    path: '',
    component: GsmSendPassowrdCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmSendPassowrdCodePageRoutingModule {}
