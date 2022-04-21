import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'
import { GsmMainRequestsPageRoutingModule } from './gsm-main-requests-routing.module';
import { GsmMainRequestsPage } from './gsm-main-requests.page';
import { GsmMainRequestsAddComponent } from "./gsm-main-requests-add/gsm-main-requests-add.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainRequestsPageRoutingModule
  ],
  declarations: [
    GsmMainRequestsPage,
    GsmMainRequestsAddComponent
  ]
})
export class GsmMainRequestsPageModule {}
