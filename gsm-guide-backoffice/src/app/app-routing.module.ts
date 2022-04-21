import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./features/gsm-login/gsm-login.module').then(m => m.GsmLoginModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./features/gsm-main/gsm-main.module').then(m => m.GsmMainModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
