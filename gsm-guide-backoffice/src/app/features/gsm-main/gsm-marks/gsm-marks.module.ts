import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { GsmMarksComponent } from "./gsm-marks.component";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { GsmArticleModalComponent } from "./gsm-article-modal/gsm-article-modal.component";
import { GsmModelModalComponent } from "./gsm-model-modal/gsm-model-modal.component";
import { GsmMarkModalComponent } from "./gsm-mark-modal/gsm-mark-modal.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { GsmPriceModalComponent } from "./gsm-price-modal/gsm-price-modal.component";
import { GsmPriceAddComponent } from "./gsm-price-modal/gsm-price-add/gsm-price-add.component";
import { MatSelectModule } from "@angular/material/select";
import { MatIconModule } from "@angular/material/icon";

const routes: Routes = [
  {
    path: '',
    component: GsmMarksComponent
  },
];

@NgModule({
  declarations: [
    GsmMarksComponent,
    GsmMarkModalComponent,
    GsmModelModalComponent,
    GsmArticleModalComponent,
    GsmPriceModalComponent,
    GsmPriceAddComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatBottomSheetModule,
        MatDialogModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
    ],
  entryComponents: [
    GsmMarkModalComponent,
    GsmModelModalComponent,
    GsmArticleModalComponent,
    GsmPriceModalComponent,
    GsmPriceAddComponent
  ]
})
export class GsmMarksModule { }
