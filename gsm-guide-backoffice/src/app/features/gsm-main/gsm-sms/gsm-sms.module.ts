import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmSmsComponent } from './gsm-sms.component';
import { RouterModule, Routes } from "@angular/router";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import {NgCircleProgressModule} from "ng-circle-progress";

const routes: Routes = [
  {
    path: '',
    component: GsmSmsComponent

  },
];


@NgModule({
  declarations: [GsmSmsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    NgCircleProgressModule,
  ]
})
export class GsmSmsModule { }
