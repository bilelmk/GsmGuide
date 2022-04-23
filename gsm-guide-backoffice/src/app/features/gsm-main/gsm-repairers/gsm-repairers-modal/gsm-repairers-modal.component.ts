import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { Helpers } from "../../../../shared/helpers/helpers";
import { UserService } from "../../../../core/services/http/user.service";

@Component({
  selector: 'app-gsm-repairers-modal',
  templateUrl: './gsm-repairers-modal.component.html',
  styleUrls: ['./gsm-repairers-modal.component.scss']
})
export class GsmRepairersModalComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmRepairersModalComponent>,
              private snackbarService: SnackbarService ,
              private userService: UserService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      firstname: new FormControl("", Validators.required),
      lastname:  new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      confirm: new FormControl("", Validators.required),
      username: new FormControl("", Validators.required),
      phone: new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  add() {
    this.spinnerService.activate();
    const repairer = {
      ...this.form.value ,
      role: 'REPAIRER'
    }
    this.userService.register(repairer).subscribe(
      (res) => {
        Helpers.addToArray(res , this.data.array)
        this.snackbarService.openSnackBar('Réparateur ajouté avec succès', 'success');
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

  compareFn( optionOne, optionTwo ) : boolean {
    return optionOne.id === optionTwo.id;
  }

}
