import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { Helpers } from "../../../../shared/helpers/helpers";
import { RequestService } from "../../../../core/services/http/request.service";

@Component({
  selector: 'app-gsm-requests-asign-reparator',
  templateUrl: './gsm-requests-asign-reparator.component.html',
  styleUrls: ['./gsm-requests-asign-reparator.component.scss']
})
export class GsmRequestsAsignReparatorComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmRequestsAsignReparatorComponent>,
              private snackbarService: SnackbarService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private requestService: RequestService) {
    this.form = new FormGroup({
      repairerId: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
  }

  update() {
    let repairer = {
      ...this.data.item,
      repairer: {id: this.form.value.repairerId}
    }

    this.spinnerService.activate();
    this.requestService.update(repairer).subscribe(
      (res) => {
        Helpers.updateFields(res, this.data.item)
        this.snackbarService.openSnackBar('Demande modifié avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        this.snackbarService.openSnackBar('Erreur lors de la modification', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }
}
