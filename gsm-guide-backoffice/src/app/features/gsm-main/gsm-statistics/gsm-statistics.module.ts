import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmStatisticsComponent } from './gsm-statistics.component';
import { RouterModule, Routes } from "@angular/router";
import { GsmStatisticsRepairersComponent } from "./gsm-statistics-repairers/gsm-statistics-repairers.component";
import {Daterangepicker} from "ng2-daterangepicker";

const routes: Routes = [
  {
    path: '',
    component: GsmStatisticsComponent
  },
  {
    path: 'repairers',
    component: GsmStatisticsRepairersComponent
  }
];

@NgModule({
  declarations: [
    GsmStatisticsComponent,
    GsmStatisticsRepairersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    Daterangepicker,
  ]
})
export class GsmStatisticsModule { }
