import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { SnackbarService } from "../../../core/services/in-app/snackbar.service";
import { Actuality } from "../../../core/models/actuality";
import { Helpers } from "../../../shared/helpers/helpers";
import { ActualityService } from "../../../core/services/http/actuality.service";
import { GsmActualitiesModalComponent } from "./gsm-actualities-modal/gsm-actualities-modal.component";
import { AlertService } from "../../../core/services/in-app/alert.service";
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-gsm-actualities',
  templateUrl: './gsm-actualities.component.html',
  styleUrls: ['./gsm-actualities.component.scss']
})
export class GsmActualitiesComponent implements OnInit {

  error = false ;
  loading = false ;

  actualities : Actuality[] = [] ;
  URL = environment.url ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              private snackbarService: SnackbarService,
              private actualityService: ActualityService,
              private alertService: AlertService) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.actualityService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.actualities = res ;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal() {
    const dialogRef = this.dialog.open( GsmActualitiesModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { array : this.actualities }
    });
  }

  delete(actuality: Actuality) {
    this.alertService.showAlert(
      () => {
        this.actualityService.delete(actuality.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Actualité supprimé avec succès','success') ;
            Helpers.deleteFromArray(actuality , this.actualities)
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

}
