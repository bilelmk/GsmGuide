import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GsmRegisterPageRoutingModule } from './gsm-register-routing.module';
import { GsmRegisterPage } from './gsm-register.page';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      GsmRegisterPageRoutingModule,
      ReactiveFormsModule,
  ],
  declarations: [GsmRegisterPage]
})
export class GsmRegisterPageModule {}
