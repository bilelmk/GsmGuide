import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainPageRoutingModule } from './gsm-main-routing.module';
import { GsmMainPage } from './gsm-main.page';
import { SharedModule } from '../../shared/shared.module';
import { GsmMainMarkPage } from './gsm-main-mark/gsm-main-mark.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainPageRoutingModule,
        SharedModule
    ],
  declarations: [
      GsmMainPage,
      GsmMainMarkPage
  ]
})
export class GsmMainPageModule {}
