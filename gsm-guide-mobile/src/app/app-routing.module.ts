import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./features/gsm-login/gsm-login.module').then(m => m.GsmLoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./features/gsm-register/gsm-register.module').then(m => m.GsmRegisterPageModule)
  },
  {
    path: 'reset-password/:code',
    loadChildren: () => import('./features/gsm-reset-password/gsm-reset-password.module').then(m => m.GsmResetPasswordPageModule)
  },
  {
    path: 'verify-password-code',
    // tslint:disable-next-line:max-line-length
    loadChildren: () => import('./features/gsm-verify-password-code/gsm-verify-password-code.module').then(m => m.GsmVerifyPasswordCodePageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./features/gsm-main/gsm-main.module').then(m => m.GsmMainPageModule)
  },
  {
    path: 'send-passowrd-code',
    loadChildren: () => import('./features/gsm-send-passowrd-code/gsm-send-passowrd-code.module').then(m => m.GsmSendPassowrdCodePageModule)
  },
  {
    path: 'verify-phone-code',
    loadChildren: () => import('./features/gsm-verify-phone-code/gsm-verify-phone-code.module').then(m => m.GsmVerifyPhoneCodePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
