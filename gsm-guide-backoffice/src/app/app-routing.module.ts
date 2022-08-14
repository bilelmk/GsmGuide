import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from "./core/guards/authentication.guard";

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
    loadChildren: () => import('./features/gsm-main/gsm-main.module').then(m => m.GsmMainModule),
    canActivate: [AuthenticationGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
