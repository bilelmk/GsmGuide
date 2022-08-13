import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmRequestsComponent } from "./gsm-requests.component";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { GsmRequestsModalComponent } from "./gsm-requests-modal/gsm-requests-modal.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import {SharedModule} from "../../../shared/shared.module";
import {
  GsmRequestsAsignReparatorComponent
} from "./gsm-requests-asign-reparator/gsm-requests-asign-reparator.component";

const routes: Routes = [
  {
    path: '',
    component: GsmRequestsComponent
  },
];

@NgModule({
  declarations: [
    GsmRequestsComponent,
    GsmRequestsModalComponent,
    GsmRequestsAsignReparatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    SharedModule,
  ],
  entryComponents: [
    GsmRequestsAsignReparatorComponent
  ]
})
export class GsmRequestsModule { }
