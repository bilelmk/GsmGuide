import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmMainProfilePageRoutingModule } from './gsm-main-profile-routing.module';
import { GsmMainProfilePage } from './gsm-main-profile.page';
import { GsmMainProfileEditComponent } from "./gsm-main-profile-edit/gsm-main-profile-edit.component";

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
    GsmMainProfileEditComponent
  ]
})
export class GsmMainProfilePageModule {}
