import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmLoginPageRoutingModule } from './gsm-login-routing.module';
import { GsmLoginPage } from './gsm-login.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmLoginPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [
      GsmLoginPage
  ]
})
export class GsmLoginPageModule {}
