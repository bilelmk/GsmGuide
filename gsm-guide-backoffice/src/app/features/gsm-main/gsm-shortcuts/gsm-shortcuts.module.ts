import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GsmShortcutsComponent } from "./gsm-shortcuts.component";
import { GsmShortcutsModalComponent } from "./gsm-shortcuts-modal/gsm-shortcuts-modal.component";
import { SharedModule } from "../../../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { MatDialogModule } from "@angular/material/dialog";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";

const routes: Routes = [
  {
    path: '',
    component: GsmShortcutsComponent
  },
];

@NgModule({
  declarations: [
    GsmShortcutsComponent,
    GsmShortcutsModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatBottomSheetModule
  ]
})
export class GsmShortcutsModule { }
