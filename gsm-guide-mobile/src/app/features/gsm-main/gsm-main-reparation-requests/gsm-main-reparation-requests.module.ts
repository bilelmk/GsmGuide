import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainReparationRequestsPageRoutingModule } from './gsm-main-reparation-requests-routing.module';
import { GsmMainReparationRequestsPage } from './gsm-main-reparation-requests.page';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { GsmMainRequestsDetailsComponent } from './gsm-main-requests-details/gsm-main-requests-details.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainReparationRequestsPageRoutingModule,
        TranslateModule,
        SharedModule
    ],
  declarations: [
      GsmMainReparationRequestsPage,
      GsmMainRequestsDetailsComponent
  ]
})
export class GsmMainReparationRequestsPageModule {}
