import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmActualitiesComponent } from './gsm-actualities.component';
import { RouterModule, Routes } from "@angular/router";
import { GsmActualitiesModalComponent} from "./gsm-actualities-modal/gsm-actualities-modal.component";
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import {ImageCropperModule} from "ngx-image-cropper";

const routes: Routes = [
  {
    path: '',
    component: GsmActualitiesComponent
  },
];

@NgModule({
  declarations: [
    GsmActualitiesComponent,
    GsmActualitiesModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    SharedModule,
    MatSelectModule,
    ImageCropperModule
  ],
  entryComponents: [
    GsmActualitiesModalComponent
  ]
})
export class GsmActualitiesModule { }
