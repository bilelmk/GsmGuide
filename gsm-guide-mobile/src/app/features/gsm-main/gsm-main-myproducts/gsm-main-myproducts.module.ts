import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainMyproductsPageRoutingModule } from './gsm-main-myproducts-routing.module';

import { GsmMainMyproductsPage } from './gsm-main-myproducts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainMyproductsPageRoutingModule
  ],
  declarations: [GsmMainMyproductsPage]
})
export class GsmMainMyproductsPageModule {}
