import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { Helpers } from "../../../../shared/helpers/helpers";
import { PartService } from "../../../../core/services/http/part.service";

@Component({
  selector: 'app-gsm-parts-modal',
  templateUrl: './gsm-parts-modal.component.html',
  styleUrls: ['./gsm-parts-modal.component.scss']
})
export class GsmPartsModalComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmPartsModalComponent>,
              private snackbarService: SnackbarService ,
              private partService: PartService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      description:  new FormControl(""),
    });
  }

  ngOnInit() {
  }

  add() {
    this.spinnerService.activate();
    this.partService.add(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Piéce ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

}
