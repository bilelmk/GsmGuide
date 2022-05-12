import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmRepairersComponent } from "./gsm-repairers.component";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { SharedModule } from "../../../shared/shared.module";
import { GsmRepairersModalComponent } from "./gsm-repairers-modal/gsm-repairers-modal.component";
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

const routes: Routes = [
  {
    path: '',
    component: GsmRepairersComponent
  },
];

@NgModule({
  declarations: [
    GsmRepairersComponent,
    GsmRepairersModalComponent
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
    MatSelectModule,
  ],
  entryComponents: [
    GsmRepairersModalComponent
  ]
})
export class GsmRepairersModule { }
