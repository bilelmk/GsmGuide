import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gsm-main',
    pathMatch: 'full'
  },
  {
    path: 'gsm-login',
    loadChildren: () => import('./features/gsm-login/gsm-login.module').then(m => m.GsmLoginPageModule)
  },
  {
    path: 'gsm-register',
    loadChildren: () => import('./features/gsm-register/gsm-register.module').then(m => m.GsmRegisterPageModule)
  },
  {
    path: 'gsm-reset-password/:id',
    loadChildren: () => import('./features/gsm-reset-password/gsm-reset-password.module').then(m => m.GsmResetPasswordPageModule)
  },
  {
    path: 'gsm-verify-password-code',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./features/gsm-verify-password-code/gsm-verify-password-code.module').then(m => m.GsmVerifyPasswordCodePageModule)
  },
  {
    path: 'gsm-main',
    loadChildren: () => import('./features/gsm-main/gsm-main.module').then(m => m.GsmMainPageModule)
  },
  {
    path: 'gsm-send-passowrd-code',
    loadChildren: () => import('./features/gsm-send-passowrd-code/gsm-send-passowrd-code.module').then(m => m.GsmSendPassowrdCodePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
