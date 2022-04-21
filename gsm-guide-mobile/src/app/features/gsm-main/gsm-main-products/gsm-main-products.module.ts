import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainProductsPageRoutingModule } from './gsm-main-products-routing.module';
import { GsmMainProductsPage } from './gsm-main-products.page';
import { GsmMainProductsAddComponent } from "./gsm-main-products-add/gsm-main-products-add.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainProductsPageRoutingModule
  ],
  declarations: [
    GsmMainProductsPage,
    GsmMainProductsAddComponent
  ]
})
export class GsmMainProductsPageModule {}
