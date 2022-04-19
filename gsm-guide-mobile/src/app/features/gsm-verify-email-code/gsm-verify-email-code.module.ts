import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmVerifyEmailCodePageRoutingModule } from './gsm-verify-email-code-routing.module';

import { GsmVerifyEmailCodePage } from './gsm-verify-email-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmVerifyEmailCodePageRoutingModule
  ],
  declarations: [GsmVerifyEmailCodePage]
})
export class GsmVerifyEmailCodePageModule {}
