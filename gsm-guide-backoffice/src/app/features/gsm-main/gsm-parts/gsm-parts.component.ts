import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertService } from "../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../core/services/in-app/snackbar.service";
import { Helpers } from "../../../shared/helpers/helpers";
import { Part } from "../../../core/models/part";
import { PartService } from "../../../core/services/http/part.service";
import { GsmPartsModalComponent } from "./gsm-parts-modal/gsm-parts-modal.component";

@Component({
  selector: 'app-gsm-parts',
  templateUrl: './gsm-parts.component.html',
  styleUrls: ['./gsm-parts.component.scss']
})
export class GsmPartsComponent implements OnInit {

  public dataSource = new MatTableDataSource<Part>();
  displayedColumns = ['name', 'description' , 'buttons'];
  parts: Part[] = [];

  error = false;
  loading = false;

  @ViewChild(MatPaginator, {static: false}) set paginator(pager: MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private partsService: PartService,
              private spinnerService: SpinnerService,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService) {
  }

  ngOnInit() {
    this.loading = true;
    this.spinnerService.activate()
    this.partsService.getAll().subscribe(
      res => {
        this.loading = false;
        this.parts = res;
        this.dataSource.data = res;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false;
        this.error = true;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal(item, isEditMode) {
    const dialogRef = this.dialog.open(GsmPartsModalComponent, {
      panelClass: 'custom-dialog-container',
      width: '600px',
      data: { item: item, array: this.parts, isEditMode: isEditMode }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.parts;
      }
    );
  }

  delete(part: Part) {
    this.alertService.showAlert(
      () => {
        this.partsService.delete(part.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Admin supprimé avec succès', 'success');
            Helpers.deleteFromArray(part, this.parts)
            this.dataSource.data = this.parts
          }, error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.parts]
    toFilterList = toFilterList.filter(
      part => {
        return part.name.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }
}
