import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmAdminsComponent } from './gsm-admins.component';
import { RouterModule, Routes } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../../../shared/shared.module';
import { MatSelectModule } from '@angular/material/select';
import { GsmAdminsModalComponent } from "./gsm-admins-modal/gsm-admins-modal.component";

const routes: Routes = [
  {
    path: '',
    component: GsmAdminsComponent
  },
];

@NgModule({
  declarations: [
    GsmAdminsComponent,
    GsmAdminsModalComponent
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
    MatSelectModule
  ],
  entryComponents: [
    GsmAdminsModalComponent
  ]
})
export class GsmAdminsModule { }
