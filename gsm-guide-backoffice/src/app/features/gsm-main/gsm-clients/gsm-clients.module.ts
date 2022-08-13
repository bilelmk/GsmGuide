import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmClientsComponent } from "./gsm-clients.component";
import { SharedModule } from "../../../shared/shared.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { GsmClientsModalComponent } from "./gsm-clients-modal/gsm-clients-modal.component";
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { GsmClientsAddRequestComponent } from "./gsm-clients-add-request/gsm-clients-add-request.component";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";

const routes: Routes = [
  {
    path: '',
    component: GsmClientsComponent
  },
];

@NgModule({
  declarations: [
    GsmClientsComponent,
    GsmClientsModalComponent,
    GsmClientsAddRequestComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  entryComponents: [
    GsmClientsModalComponent,
    GsmClientsAddRequestComponent
  ]
})
export class GsmClientsModule { }
