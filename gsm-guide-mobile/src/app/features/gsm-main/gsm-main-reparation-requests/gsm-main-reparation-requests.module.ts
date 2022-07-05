import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainReparationRequestsPageRoutingModule } from './gsm-main-reparation-requests-routing.module';

import { GsmMainReparationRequestsPage } from './gsm-main-reparation-requests.page';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainReparationRequestsPageRoutingModule,
        TranslateModule
    ],
  declarations: [GsmMainReparationRequestsPage]
})
export class GsmMainReparationRequestsPageModule {}
