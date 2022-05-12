import { Component, Inject, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { MarkService } from "../../../../core/services/http/mark.service";

@Component({
  selector: 'app-gsm-mark-modal',
  templateUrl: './gsm-mark-modal.component.html',
  styleUrls: ['./gsm-mark-modal.component.scss']
})
export class GsmMarkModalComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmMarkModalComponent>,
              private snackbarService: SnackbarService ,
              private markService: MarkService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!data.isEditMode){
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
      });
    }
    else {
      this.form = new FormGroup({
        name: new FormControl(data.item.name, Validators.required),
      });
    }

  }

  ngOnInit(): void {
  }

  add() {
    this.spinnerService.activate();
    this.markService.add(this.form.value).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Marque ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

  update() {
    let mark = {
      ...this.form.value ,
      markId : this.data.item.markId
    }
    this.spinnerService.activate();
    this.markService.update(mark).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Marque modifié avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

}
