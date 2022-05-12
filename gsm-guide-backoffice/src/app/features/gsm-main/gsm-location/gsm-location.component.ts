import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertService } from "../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../core/services/in-app/snackbar.service";
import { GsmLocationModalComponent } from "./gsm-location-modal/gsm-location-modal.component";
import { LocationService } from "../../../core/services/http/location.service";
import { MatTableDataSource }  from "@angular/material/table";
import { Location } from "../../../core/models/location";
import { Helpers } from "../../../shared/helpers/helpers";

@Component({
  selector: 'app-gsm-location',
  templateUrl: './gsm-location.component.html',
  styleUrls: ['./gsm-location.component.scss']
})
export class GsmLocationComponent implements OnInit {

  public dataSource = new MatTableDataSource<Location>();
  displayedColumns = ['address', 'longitude' , 'latitude' , 'buttons' ];

  error = false ;
  loading = false ;

  locations ;

  constructor(private spinnerService: SpinnerService,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService,
              private locationService: LocationService) { }

  ngOnInit(): void {
    this.spinnerService.activate()
    this.locationService.getAll().subscribe(
      res => {
        this.locations = res
        this.dataSource.data = res;
        this.loading = false ;
        this.spinnerService.deactivate()
        console.log(res)

      },
      err => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
        console.log(err)
      }
    )
  }

  openModal() {
    const dialogRef = this.dialog.open(GsmLocationModalComponent, {
      panelClass: 'custom-dialog-container',
      width: '600px',
      data : { array : this.locations }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.locations;
      }
    );
  }

  delete(location) {
    this.alertService.showAlert(
      () => {
        this.locationService.delete(location.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Boutique supprimé avec succès','success') ;
            Helpers.deleteFromArray(location , this.locations)
            this.dataSource.data = this.locations
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }
}
