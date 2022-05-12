import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { ModelService } from "../../../../core/services/http/model.service";

@Component({
  selector: 'app-gsm-model-modal',
  templateUrl: './gsm-model-modal.component.html',
  styleUrls: ['./gsm-model-modal.component.scss']
})
export class GsmModelModalComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmModelModalComponent>,
              private snackbarService: SnackbarService ,
              private modelService: ModelService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!data.isEditMode) {
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl(data.item.name, Validators.required),
      });
    }
  }

  ngOnInit(): void {
  }

  add() {
    let model = {
      ...this.form.value ,
      mark : {
        markId: this.data.id
      }
    }
    this.spinnerService.activate();
    this.modelService.add(model).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Modéle ajouté avec succès', 'success');
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
    let model = {
      ...this.form.value ,
      modelId : this.data.item.modelId
    }
    this.spinnerService.activate();
    this.modelService.update(model).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Modéle modifié avec succès', 'success');
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
