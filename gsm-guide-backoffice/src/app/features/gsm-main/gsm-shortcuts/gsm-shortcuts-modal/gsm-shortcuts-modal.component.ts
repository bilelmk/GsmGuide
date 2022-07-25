import { Component, Inject, OnInit } from '@angular/core';
import { MarkService } from "../../../../core/services/http/mark.service";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Helpers } from "../../../../shared/helpers/helpers";
import { ShortcutService } from "../../../../core/services/http/shortcut.service";

@Component({
  selector: 'app-gsm-shortcuts-modal',
  templateUrl: './gsm-shortcuts-modal.component.html',
  styleUrls: ['./gsm-shortcuts-modal.component.scss']
})
export class GsmShortcutsModalComponent implements OnInit {

  marks = [] ;
  form: FormGroup;

  constructor(private markService: MarkService,
              private spinnerService: SpinnerService,
              private snackbarService: SnackbarService,
              private shortcutService: ShortcutService,
              public matDialogRef: MatDialogRef<GsmShortcutsModalComponent>) {
    this.form = new FormGroup({
      name: new FormControl("", Validators.required),
      code:  new FormControl("", Validators.required),
      markId: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this.spinnerService.activate()
    this.markService.getAll().subscribe(
      res => {
        this.spinnerService.deactivate()
        this.marks = res ;
      },
      error => {
        this.spinnerService.deactivate()
      }
    )
  }

  add() {
    let shortcut = {
      ...this.form.value,
      mark: {
        markId: this.form.value.markId
      }
    }
    this.spinnerService.activate();
    this.shortcutService.add(shortcut).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Alias ajouté avec succès', 'success');
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
