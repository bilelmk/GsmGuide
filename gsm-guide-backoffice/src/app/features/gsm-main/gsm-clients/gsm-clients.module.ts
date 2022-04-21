import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmClientsComponent } from "./gsm-clients.component";
import {SharedModule} from "../../../shared/shared.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: GsmClientsComponent
  },
];

@NgModule({
  declarations: [
    GsmClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
  ]
})
export class GsmClientsModule { }
