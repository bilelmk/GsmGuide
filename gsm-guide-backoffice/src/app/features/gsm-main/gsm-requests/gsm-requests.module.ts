import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmRequestsComponent } from "./gsm-requests.component";

const routes: Routes = [
  {
    path: '',
    component: GsmRequestsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class GsmRequestsModule { }
