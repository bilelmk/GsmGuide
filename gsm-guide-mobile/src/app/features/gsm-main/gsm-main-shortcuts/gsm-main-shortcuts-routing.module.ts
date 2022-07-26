import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainShortcutsPage } from './gsm-main-shortcuts.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainShortcutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainShortcutsPageRoutingModule {}
