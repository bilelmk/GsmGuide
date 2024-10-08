import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainHomePageRoutingModule } from './gsm-main-home-routing.module';

import { GsmMainHomePage } from './gsm-main-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainHomePageRoutingModule
  ],
  declarations: [GsmMainHomePage]
})
export class GsmMainHomePageModule {}
