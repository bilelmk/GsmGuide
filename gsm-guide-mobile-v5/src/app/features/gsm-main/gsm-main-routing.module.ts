import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GsmMainPage } from './gsm-main.page';

const routes: Routes = [
  {
    path: '',
    component: GsmMainPage,
    children: [
      {
        path: '',
        redirectTo: 'gsm-main-market',
      },
      {
        path: 'gsm-main-profile',
        loadChildren: () => import('./gsm-main-profile/gsm-main-profile.module').then( m => m.GsmMainProfilePageModule)
      },
      {
        path: 'gsm-main-profile-edit',
        loadChildren: () => import('./gsm-main-profile-edit/gsm-main-profile-edit.module').then( m => m.GsmMainProfileEditPageModule)
      },
      {
        path: 'gsm-main-market',
        loadChildren: () => import('./gsm-main-market/gsm-main-market.module').then( m => m.GsmMainMarketPageModule)
      },
      {
        path: 'gsm-main-requests',
        loadChildren: () => import('./gsm-main-requests/gsm-main-requests.module').then( m => m.GsmMainRequestsPageModule)
      },
      {
        path: 'gsm-main-request-add',
        loadChildren: () => import('./gsm-main-request-add/gsm-main-request-add.module').then( m => m.GsmMainRequestAddPageModule)
      },
      {
        path: 'gsm-main-products-add',
        loadChildren: () => import('./gsm-main-products-add/gsm-main-products-add.module').then( m => m.GsmMainProductsAddPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainPageRoutingModule {}
