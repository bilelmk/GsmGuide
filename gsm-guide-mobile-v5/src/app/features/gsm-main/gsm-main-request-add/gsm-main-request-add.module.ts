import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainRequestAddPageRoutingModule } from './gsm-main-request-add-routing.module';

import { GsmMainRequestAddPage } from './gsm-main-request-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainRequestAddPageRoutingModule
  ],
  declarations: [GsmMainRequestAddPage]
})
export class GsmMainRequestAddPageModule {}
