import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainHomePageRoutingModule } from './gsm-main-home-routing.module';
import { GsmMainHomePage } from './gsm-main-home.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainHomePageRoutingModule,
        ReactiveFormsModule,
        TranslateModule
    ],
  declarations: [GsmMainHomePage]
})
export class GsmMainHomePageModule {}
