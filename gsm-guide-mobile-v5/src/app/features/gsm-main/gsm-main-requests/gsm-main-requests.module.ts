import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainRequestsPageRoutingModule } from './gsm-main-requests-routing.module';

import { GsmMainRequestsPage } from './gsm-main-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainRequestsPageRoutingModule
  ],
  declarations: [GsmMainRequestsPage]
})
export class GsmMainRequestsPageModule {}
