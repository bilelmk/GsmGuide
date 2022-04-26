import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmResetPasswordPageRoutingModule } from './gsm-reset-password-routing.module';

import { GsmResetPasswordPage } from './gsm-reset-password.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmResetPasswordPageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [GsmResetPasswordPage]
})
export class GsmResetPasswordPageModule {}
