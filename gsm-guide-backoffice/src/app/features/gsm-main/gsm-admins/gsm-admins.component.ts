import { Component, OnInit, ViewChild } from '@angular/core';
import { GsmAdminsModalComponent } from "./gsm-admins-modal/gsm-admins-modal.component";
import { MatPaginator } from "@angular/material/paginator";
import { Admin } from "../../../core/models/admin";
import { MatTableDataSource } from "@angular/material/table";
import { AdminsService } from "../../../core/services/http/admins.service";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertService } from "../../../core/services/in-app/alert.service";
import { Helpers } from "../../../shared/helpers/helpers";
import { SnackbarService } from "../../../core/services/in-app/snackbar.service";

@Component({
  selector: 'app-gsm-admins',
  templateUrl: './gsm-admins.component.html',
  styleUrls: ['./gsm-admins.component.scss']
})
export class GsmAdminsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Admin>();
  displayedColumns = ['firstname', 'lastname' , 'username' , 'buttons' ];
  admins : Admin[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private adminsService: AdminsService ,
              private spinnerService: SpinnerService ,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService) { }

  ngOnInit() {
    this.loading = true ;
    this.spinnerService.activate()
    this.adminsService.getAll().subscribe(
      res => {
        this.loading = false ;
        this.admins = res ;
        this.dataSource.data = res;
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
    const dialogRef = this.dialog.open( GsmAdminsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { array : this.admins }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.admins;
      }
    );
  }

  delete(admin: Admin) {
    this.alertService.showAlert(
      () => {
        this.adminsService.delete(admin.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Admin supprimé avec succès','success') ;
            Helpers.deleteFromArray(admin , this.admins)
            this.dataSource.data = this.admins
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.admins]
    toFilterList = toFilterList.filter(
      admin => {
        return admin.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || admin.firstname.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || admin.lastname.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }


}
