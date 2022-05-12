import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmLocationComponent } from './gsm-location.component';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../../shared/shared.module";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { GsmLocationModalComponent } from "./gsm-location-modal/gsm-location-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";

const routes: Routes = [
  {
    path: '',
    component: GsmLocationComponent
  },
];

@NgModule({
  declarations: [
    GsmLocationComponent,
    GsmLocationModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    SharedModule,
    MatSelectModule,
    LeafletModule
  ],
  entryComponents: [
    GsmLocationModalComponent
  ]
})
export class GsmLocationModule { }
