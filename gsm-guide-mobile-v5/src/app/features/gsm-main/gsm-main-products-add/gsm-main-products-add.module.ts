import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainProductsAddPageRoutingModule } from './gsm-main-products-add-routing.module';

import { GsmMainProductsAddPage } from './gsm-main-products-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainProductsAddPageRoutingModule
  ],
  declarations: [GsmMainProductsAddPage]
})
export class GsmMainProductsAddPageModule {}
