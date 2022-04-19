import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainMarketPageRoutingModule } from './gsm-main-market-routing.module';

import { GsmMainMarketPage } from './gsm-main-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainMarketPageRoutingModule
  ],
  declarations: [GsmMainMarketPage]
})
export class GsmMainMarketPageModule {}
