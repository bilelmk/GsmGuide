import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular' ;
import { GsmMainRequestsPageRoutingModule } from './gsm-main-requests-routing.module';
import { GsmMainRequestsPage } from './gsm-main-requests.page';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgCalendarModule } from 'ionic2-calendar';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../../shared/shared.module';
import { GsmMainRequestsRecapComponent } from './gsm-main-requests-recap/gsm-main-requests-recap.component';
import { GsmMainRequestsListComponent } from './gsm-main-requests-list/gsm-main-requests-list.component';
import { GsmMainRequestsRdvComponent } from './gsm-main-requests-rdv/gsm-main-requests-rdv.component';
import { GsmMainRequestsAddComponent } from './gsm-main-requests-add/gsm-main-requests-add.component';
import {
    GsmMainRequestsDetailsComponent
} from './gsm-main-requests-list/gsm-main-requests-details/gsm-main-requests-details.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainRequestsPageRoutingModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatButtonModule,
        MatInputModule,
        NgCalendarModule,
        TranslateModule,
        SharedModule,
        NgxQRCodeModule
    ],
  declarations: [
    GsmMainRequestsPage,
    GsmMainRequestsAddComponent,
    GsmMainRequestsListComponent,
    GsmMainRequestsRdvComponent,
    GsmMainRequestsRecapComponent,
    GsmMainRequestsDetailsComponent
  ]
})
export class GsmMainRequestsPageModule {}
