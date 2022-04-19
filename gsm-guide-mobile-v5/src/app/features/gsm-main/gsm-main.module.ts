import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainPageRoutingModule } from './gsm-main-routing.module';

import { GsmMainPage } from './gsm-main.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainPageRoutingModule
  ],
  declarations: [GsmMainPage]
})
export class GsmMainPageModule {}
