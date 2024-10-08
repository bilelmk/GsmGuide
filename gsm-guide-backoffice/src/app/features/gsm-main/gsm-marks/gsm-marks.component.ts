import { Component, OnInit } from '@angular/core';
import { MarkService } from "../../../core/services/http/mark.service";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ActionSheetComponent } from "../../../shared/components/action-sheet/action-sheet.component";
import { GsmModelModalComponent } from "./gsm-model-modal/gsm-model-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { GsmArticleModalComponent } from "./gsm-article-modal/gsm-article-modal.component";
import { GsmPriceModalComponent } from "./gsm-price-modal/gsm-price-modal.component";
import { PartService } from "../../../core/services/http/part.service";
import { GsmMarkModalComponent } from "./gsm-mark-modal/gsm-mark-modal.component";
import { ModelService } from "../../../core/services/http/model.service";
import { ArticleService } from "../../../core/services/http/article.service";
import { AlertService } from "../../../core/services/in-app/alert.service";
import { SnackbarService } from "../../../core/services/in-app/snackbar.service";

@Component({
  selector: 'app-gsm-marks',
  templateUrl: './gsm-marks.component.html',
  styleUrls: ['./gsm-marks.component.scss']
})
export class GsmMarksComponent implements OnInit {

  marks ;
  parts ;

  constructor(private markService: MarkService,
              private modelService: ModelService,
              private articleService: ArticleService,
              private SpinnerService: SpinnerService,
              private bottomSheet: MatBottomSheet,
              private dialog: MatDialog,
              private partService: PartService,
              private alertService: AlertService,
              private snackbarService: SnackbarService) {}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.SpinnerService.activate()
    this.markService.getAll().subscribe(
    res => {
        this.marks = res
      console.log(this.marks)
        this.SpinnerService.deactivate()
      },
    error => {
        this.SpinnerService.deactivate()
     })
  }

  // marks
  addMark() {
    const dialogRef = this.dialog.open( GsmMarkModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { }
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateMark(id , item ) {
    const dialogRef = this.dialog.open( GsmMarkModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item : item , isEditMode: true}
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  deleteMark(id , item) {
    this.alertService.showAlert(
      () => {
        this.markService.delete(id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Marque supprimé avec succès','success') ;
            this.getAll()
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  //models
  addModel(id , item ) {
    const dialogRef = this.dialog.open( GsmModelModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id ,  item : null , isEditMode: false}
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateModel(id , item ) {
    const dialogRef = this.dialog.open( GsmModelModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : null , item : item , isEditMode: true}
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  deleteModel(id , item) {
    this.alertService.showAlert(
      () => {
        this.modelService.delete(id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Modéle supprimé avec succès','success') ;
            this.getAll() ;
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  //articles
  addArticle(id , item ) {
    const dialogRef = this.dialog.open( GsmArticleModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id , item : null , isEditMode: false}
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateArticle(id , item ) {
    const dialogRef = this.dialog.open( GsmArticleModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : null , item : item , isEditMode: true}
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  deleteArticle(id , item ) {
    this.alertService.showAlert(
      () => {
        this.articleService.delete(id).subscribe(
          res => {
            this.snackbarService.openSnackBar('Article supprimé avec succès','success') ;
           this.getAll() ;
          },error => {
            this.snackbarService.openSnackBar('Erreur lors de la suppression', 'fail');
            console.log(error)
          }
        )
      }, "voulez-vous vraiment supprimer ?"
    )
  }

  openPriceModal(id , item) {
    const dialogRef = this.dialog.open( GsmPriceModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id , item : null , isEditMode: false}
    });
    // dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  openMarkActionSheet(id: number, item) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Ajouter un modele" , action : this.addModel.bind(this) , id: id , item: item },
        { title : "Modifier le nom de la marque" , action : this.updateMark.bind(this) , id: id , item: item },
        { title : "Supprimer cette marque" , action : this.deleteMark.bind(this) , id: id, item: item  },
      ],
    });
  }

  openModelActionSheet(id: number, item) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Ajouter un article" , action : this.addArticle.bind(this) , id: id, item: item  },
        { title : "Modifier le nom de modéle" , action : this.updateModel.bind(this) , id: id, item: item },
        { title : "Supprimer ce modéle" , action : this.deleteModel.bind(this) , id: id, item: item  },
      ],
    });
  }

  openArticleActionSheet(id: number , item) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Modifier le nom de l'article" , action : this.updateArticle.bind(this) , id: id, item: item },
        { title : "Supprimer cette article" , action : this.deleteArticle.bind(this) , id: id, item: item },
        { title : "Liste des prix" , action : this.openPriceModal.bind(this) , id: id, item: item },
      ],
    });
  }
}
