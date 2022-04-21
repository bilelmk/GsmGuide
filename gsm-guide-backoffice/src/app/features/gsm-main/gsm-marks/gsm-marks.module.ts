import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmMarksComponent } from "./gsm-marks.component";

const routes: Routes = [
  {
    path: '',
    component: GsmMarksComponent
  },
];

@NgModule({
  declarations: [
    GsmMarksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GsmMarksModule { }
