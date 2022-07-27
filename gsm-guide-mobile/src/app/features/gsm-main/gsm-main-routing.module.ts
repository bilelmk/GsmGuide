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
        redirectTo: 'home',
      },
      {
        path: 'profile',
        loadChildren: () => import('./gsm-main-profile/gsm-main-profile.module').then( m => m.GsmMainProfilePageModule)
      },
      {
        path: 'requests',
        loadChildren: () => import('./gsm-main-requests/gsm-main-requests.module').then( m => m.GsmMainRequestsPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./gsm-main-products/gsm-main-products.module').then(m => m.GsmMainProductsPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./gsm-main-home/gsm-main-home.module').then(m => m.GsmMainHomePageModule)
      },
      {
        path: 'reparation-requests',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('./gsm-main-reparation-requests/gsm-main-reparation-requests.module').then(m => m.GsmMainReparationRequestsPageModule)
      },
      {
        path: 'shortcuts',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('./gsm-main-shortcuts/gsm-main-shortcuts.module').then(m => m.GsmMainShortcutsPageModule)
      },
      {
        path: 'products-client',
        // tslint:disable-next-line:max-line-length
        loadChildren: () => import('./gsm-main-products/gsm-main-products-client/gsm-main-products-client.module').then(m => m.GsmMainProductsClientPageModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainPageRoutingModule {}
