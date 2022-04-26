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
    if(data.isEditMode) {
      this.form = new FormGroup({
        name: new FormControl(data?.item?.name, Validators.required),
        description:  new FormControl(data?.item?.description ),
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
        description:  new FormControl(""),
      });
    }
  }

  ngOnInit() {}

  add() {
    let part ;
    if(this.data.isEditMode) {
      part = {
        ...this.form.value ,
        id: this.data.item.id
      }
    }
    else {
      part = this.form.value
    }
    this.spinnerService.activate();
    this.partService.add(part).subscribe(
      (res) => {
        if(this.data.isEditMode) {
          Helpers.updateFields(res , this.data.item)
          this.snackbarService.openSnackBar('Piéce modifié avec succès', 'success');
        }
        else {
          Helpers.addToArray(res , this.data.array)
          this.snackbarService.openSnackBar('Piéce ajouté avec succès', 'success');
        }
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        if(this.data.isEditMode) { this.snackbarService.openSnackBar('Erreur lors de la modification', 'fail');}
        else {this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');}
        this.spinnerService.deactivate();
      }
    );
  }

}
