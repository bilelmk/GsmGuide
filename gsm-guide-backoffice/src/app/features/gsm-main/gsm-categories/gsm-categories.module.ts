import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmCategoriesComponent } from "./gsm-categories.component";

const routes: Routes = [
  {
    path: '',
    component: GsmCategoriesComponent
  },
];

@NgModule({
  declarations: [
    GsmCategoriesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GsmCategoriesModule { }
