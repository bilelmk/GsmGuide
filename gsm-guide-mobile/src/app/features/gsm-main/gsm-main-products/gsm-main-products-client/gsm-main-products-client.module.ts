import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainProductsClientPageRoutingModule } from './gsm-main-products-client-routing.module';

import { GsmMainProductsClientPage } from './gsm-main-products-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainProductsClientPageRoutingModule
  ],
  declarations: [GsmMainProductsClientPage]
})
export class GsmMainProductsClientPageModule {}
