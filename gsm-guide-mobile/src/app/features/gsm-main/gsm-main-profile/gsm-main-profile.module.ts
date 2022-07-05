import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainProfilePageRoutingModule } from './gsm-main-profile-routing.module';
import { GsmMainProfilePage } from './gsm-main-profile.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        GsmMainProfilePageRoutingModule,
        ReactiveFormsModule
    ],
  declarations: [
    GsmMainProfilePage,
  ]
})
export class GsmMainProfilePageModule {}
