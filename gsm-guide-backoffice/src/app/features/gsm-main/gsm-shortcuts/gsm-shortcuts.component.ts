import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { ShortcutService } from "../../../core/services/http/shortcut.service";
import { MatDialog } from "@angular/material/dialog";
import { AlertService } from "../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../core/services/in-app/snackbar.service";
import { GsmShortcutsModalComponent } from "./gsm-shortcuts-modal/gsm-shortcuts-modal.component";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ActionSheetComponent } from "../../../shared/components/action-sheet/action-sheet.component";

@Component({
  selector: 'app-gsm-shortcuts',
  templateUrl: './gsm-shortcuts.component.html',
  styleUrls: ['./gsm-shortcuts.component.scss']
})
export class GsmShortcutsComponent implements OnInit {

  error = false ;
  loading = false ;

  shortcuts ;

  constructor(private spinnerService: SpinnerService,
              private shortcutSrvice: ShortcutService,
              private dialog: MatDialog,
              private alertService: AlertService,
              private snackbarService: SnackbarService,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
    this.getRecords();
  }

  getRecords() {
    this.spinnerService.activate();
    this.shortcutSrvice.getAll().subscribe(
      res => {
        this.loading = false ;
        this.shortcuts = res ;
        this.spinnerService.deactivate()
      },error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openModal() {
    const dialogRef = this.dialog.open( GsmShortcutsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.getRecords();
      }
    );
  }

  delete(id , item) {
    console.log(item)
    this.alertService.showAlert(
      () => {
        this.spinnerService.activate();
        this.shortcutSrvice.delete(item.id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Alias supprimé avec succès','success') ;
            this.spinnerService.deactivate();
            this.getRecords();
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            this.spinnerService.deactivate();
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  openShortcutActionSheet(item) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Supprimer cet alias" , action : this.delete.bind(this) ,id:  item.id , item : item},
      ],
    });
  }
}
