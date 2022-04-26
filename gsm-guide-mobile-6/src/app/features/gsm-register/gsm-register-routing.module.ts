import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmRegisterPage } from './gsm-register.page';

const routes: Routes = [
  {
    path: '',
    component: GsmRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmRegisterPageRoutingModule {}
