import { Component, Inject, OnInit } from '@angular/core';
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { PriceService } from "../../../../core/services/http/price.service";
import { GsmPriceAddComponent } from "./gsm-price-add/gsm-price-add.component";

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
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.getPricesByArticle()
  }

  addPrice() {
    console.log(this.data.id)
    const dialogRef = this.dialog.open( GsmPriceAddComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : this.data.id }
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
}
