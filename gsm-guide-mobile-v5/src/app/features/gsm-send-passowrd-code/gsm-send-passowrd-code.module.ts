import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmSendPassowrdCodePageRoutingModule } from './gsm-send-passowrd-code-routing.module';

import { GsmSendPassowrdCodePage } from './gsm-send-passowrd-code.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmSendPassowrdCodePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [GsmSendPassowrdCodePage]
})
export class GsmSendPassowrdCodePageModule {}
