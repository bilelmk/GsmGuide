import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../../core/services/in-app/snackbar.service";
import { PriceService } from "../../../../../core/services/http/price.service";
import { PartService } from "../../../../../core/services/http/part.service";

@Component({
  selector: 'app-gsm-price-add',
  templateUrl: './gsm-price-add.component.html',
  styleUrls: ['./gsm-price-add.component.scss']
})

export class GsmPriceAddComponent implements OnInit {

  form: FormGroup;

  parts;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmPriceAddComponent>,
              private snackbarService: SnackbarService ,
              private priceService: PriceService,
              private partService: PartService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!data.isEditMode) {
      this.form = new FormGroup({
        price: new FormControl("", Validators.required),
        quality: new FormControl(""),
        part: new FormControl("", Validators.required),
      });
    } else {
      this.form = new FormGroup({
        price: new FormControl(this.data.item.price, Validators.required),
        quality: new FormControl(this.data.item.quality),
        part: new FormControl(this.data.item.part.id, Validators.required),
      });
    }
  }

  ngOnInit(): void {
    this.spinnerService.activate();
    this.partService.getAll().subscribe(
      (res) => {
        this.parts = res ;
        this.spinnerService.deactivate();
      },
      err => {
        this.spinnerService.deactivate();
      }
    );
  }

  add() {
    let price = {
      ...this.form.value ,
      article : { articleId: this.data.id },
      part : { id: this.form.value.part }
    }
    this.spinnerService.activate();
    this.priceService.addOrUpdate(price).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Prix ajouté avec succès', 'success');
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
    let price = {
      id: this.data.item.id ,
      ...this.form.value ,
      article : { articleId: this.data.id },
      part : { id: this.form.value.part }
    }
    this.spinnerService.activate();
    this.priceService.addOrUpdate(price).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Prix modifié avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification ', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }
}
