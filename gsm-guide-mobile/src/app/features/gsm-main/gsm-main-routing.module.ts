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
        redirectTo: 'gsm-main-home',
      },
      {
        path: 'gsm-main-profile',
        loadChildren: () => import('./gsm-main-profile/gsm-main-profile.module').then( m => m.GsmMainProfilePageModule)
      },
      {
        path: 'gsm-main-requests',
        loadChildren: () => import('./gsm-main-requests/gsm-main-requests.module').then( m => m.GsmMainRequestsPageModule)
      },
      {
        path: 'gsm-main-products',
        loadChildren: () => import('./gsm-main-products/gsm-main-products.module').then(m => m.GsmMainProductsPageModule)
      },
      {
        path: 'gsm-main-home',
        loadChildren: () => import('./gsm-main-home/gsm-main-home.module').then(m => m.GsmMainHomePageModule)
      },
      {
        path: 'gsm-main-reparation-requests',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('./gsm-main-reparation-requests/gsm-main-reparation-requests.module').then(m => m.GsmMainReparationRequestsPageModule)
      },
      {
        path: 'gsm-main-shortcuts',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('./gsm-main-shortcuts/gsm-main-shortcuts.module').then(m => m.GsmMainShortcutsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainPageRoutingModule {}
