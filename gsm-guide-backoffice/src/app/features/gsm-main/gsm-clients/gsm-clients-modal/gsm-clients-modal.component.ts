import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { Helpers } from "../../../../shared/helpers/helpers";
import { UserService } from "../../../../core/services/http/user.service";

@Component({
  selector: 'app-gsm-clients-modal',
  templateUrl: './gsm-clients-modal.component.html',
  styleUrls: ['./gsm-clients-modal.component.scss']
})
export class GsmClientsModalComponent {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmClientsModalComponent>,
              private snackbarService: SnackbarService ,
              private userService: UserService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!data.isEditMode) {
      this.form = new FormGroup({
        firstname: new FormControl("", Validators.required),
        lastname:  new FormControl("", Validators.required),
        username: new FormControl("", Validators.required),
        phone: new FormControl("", Validators.required),
      });
    }
  }


  add() {
    this.spinnerService.activate();
    this.userService.add(this.form.value).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Client ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        if(err.error == "username exist" ){
          this.snackbarService.openSnackBar('Nom d\'utilisateur existe déjà', 'fail');
        }
        else if (err.error == "phone exist") {
          this.snackbarService.openSnackBar('Numéro de téléphone existe déjà', 'fail');
        }
        else {
          this.snackbarService.openSnackBar('Erreur lors de l\'ajout de client', 'fail');
        }
        this.spinnerService.deactivate();
      }
    );
  }
}
