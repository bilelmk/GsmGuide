import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmIntroPageRoutingModule } from './gsm-intro-routing.module';

import { GsmIntroPage } from './gsm-intro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmIntroPageRoutingModule
  ],
  declarations: [GsmIntroPage]
})
export class GsmIntroPageModule {}
