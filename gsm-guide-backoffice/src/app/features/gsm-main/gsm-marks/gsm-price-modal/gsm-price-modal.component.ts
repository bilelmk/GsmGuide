import { Component, Inject, OnInit } from '@angular/core';
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { PriceService } from "../../../../core/services/http/price.service";
import { GsmPriceAddComponent } from "./gsm-price-add/gsm-price-add.component";
import {Admin} from "../../../../core/models/admin";
import {Helpers} from "../../../../shared/helpers/helpers";
import {AlertService} from "../../../../core/services/in-app/alert.service";

@Component({
  selector: 'app-gsm-price-modal',
  templateUrl: './gsm-price-modal.component.html',
  styleUrls: ['./gsm-price-modal.component.scss']
})
export class GsmPriceModalComponent implements OnInit {

  prices;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmPriceModalComponent>,
              private snackbarService: SnackbarService ,
              private priceService: PriceService,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.getPricesByArticle()
  }

  openPriceModal(isEditMode, Price) {
    const dialogRef = this.dialog.open( GsmPriceAddComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : this.data.id , item: Price , isEditMode: isEditMode }
    });
    dialogRef.afterClosed().subscribe(res => {this.getPricesByArticle()});
  }

  getPricesByArticle(){
    this.spinnerService.activate();
    this.priceService.getByArticle(this.data.id).subscribe(
      (res) => {
        this.prices = res ;
        this.spinnerService.deactivate();
      },
      err => {
        this.spinnerService.deactivate();
      }
    );
  }

  delete(price: any) {
    this.alertService.showAlert(
      () => {
        this.priceService.delete(price.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Prix supprimé avec succès','success') ;
            for(let priceList of this.prices) {
                Helpers.deleteFromArray(price , this.prices)
            }
            // this.dataSource.data = this.admins
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  edit(price: any) {

  }
}
