import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmPartsComponent } from './gsm-parts.component';
import { RouterModule, Routes } from "@angular/router";
import { GsmPartsModalComponent } from "./gsm-parts-modal/gsm-parts-modal.component";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SharedModule } from "../../../shared/shared.module";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";

const routes: Routes = [
  {
    path: '',
    component: GsmPartsComponent
  },
];

@NgModule({
  declarations: [
    GsmPartsComponent,
    GsmPartsModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  entryComponents: [
    GsmPartsModalComponent
  ]
})
export class GsmPartsModule { }
