import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmIntroPage } from './gsm-intro.page';

const routes: Routes = [
  {
    path: '',
    component: GsmIntroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmIntroPageRoutingModule {}
