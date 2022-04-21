import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { AdminsService } from "../../../../core/services/http/admins.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Helpers } from "../../../../shared/helpers/helpers";

@Component({
  selector: 'app-gsm-admins-modal',
  templateUrl: './gsm-admins-modal.component.html',
  styleUrls: ['./gsm-admins-modal.component.scss']
})
export class GsmAdminsModalComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmAdminsModalComponent>,
              private snackbarService: SnackbarService ,
              private adminService: AdminsService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
      this.form = new FormGroup({
        firstname: new FormControl("", Validators.required),
        lastname:  new FormControl("", Validators.required),
        password: new FormControl("", Validators.required),
        confirm: new FormControl("", Validators.required),
        username: new FormControl("", Validators.required),
      });
  }

  ngOnInit() {
  }

  add() {
    this.spinnerService.activate();
    this.adminService.register(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Administrateur ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        console.log(err)
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout de l\'administrateur', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

  compareFn( optionOne, optionTwo ) : boolean {
    return optionOne.id === optionTwo.id;
  }

}
