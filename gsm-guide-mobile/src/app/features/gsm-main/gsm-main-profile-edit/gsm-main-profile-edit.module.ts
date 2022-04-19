import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GsmMainProfileEditPageRoutingModule } from './gsm-main-profile-edit-routing.module';

import { GsmMainProfileEditPage } from './gsm-main-profile-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GsmMainProfileEditPageRoutingModule
  ],
  declarations: [GsmMainProfileEditPage]
})
export class GsmMainProfileEditPageModule {}
