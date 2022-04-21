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
        redirectTo: 'gsm-main-products',
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
        path: 'gsm-main-myproducts',
        loadChildren: () => import('./gsm-main-myproducts/gsm-main-myproducts.module').then( m => m.GsmMainMyproductsPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GsmMainPageRoutingModule {}
