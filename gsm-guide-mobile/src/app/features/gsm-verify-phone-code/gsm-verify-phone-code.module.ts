import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmVerifyPhoneCodePageRoutingModule } from './gsm-verify-phone-code-routing.module';
import { GsmVerifyPhoneCodePage } from './gsm-verify-phone-code.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmVerifyPhoneCodePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [GsmVerifyPhoneCodePage]
})
export class GsmVerifyPhoneCodePageModule {}
