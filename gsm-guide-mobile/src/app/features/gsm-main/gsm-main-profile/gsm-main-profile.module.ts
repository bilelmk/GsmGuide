import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainProfilePageRoutingModule } from './gsm-main-profile-routing.module';
import { GsmMainProfilePage } from './gsm-main-profile.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainProfilePageRoutingModule,
        ReactiveFormsModule,
        SharedModule
    ],
  declarations: [
    GsmMainProfilePage,
  ]
})
export class GsmMainProfilePageModule {}
