import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmModelsComponent } from './gsm-models.component';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: GsmModelsComponent
  },
];

@NgModule({
  declarations: [
    GsmModelsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GsmModelsModule { }
