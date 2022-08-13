import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmVerifyPasswordCodePageRoutingModule } from './gsm-verify-password-code-routing.module';
import { GsmVerifyPasswordCodePage } from './gsm-verify-password-code.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmVerifyPasswordCodePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [GsmVerifyPasswordCodePage]
})
export class GsmVerifyPasswordCodePageModule {}
