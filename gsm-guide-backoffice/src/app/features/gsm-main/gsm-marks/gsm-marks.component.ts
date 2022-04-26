import { Component, OnInit } from '@angular/core';
import { MarkService } from "../../../core/services/http/mark.service";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { MatBottomSheet } from "@angular/material/bottom-sheet";
import { ActionSheetComponent } from "../../../shared/components/action-sheet/action-sheet.component";
import { GsmModelModalComponent } from "./gsm-model-modal/gsm-model-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { GsmArticleModalComponent } from "./gsm-article-modal/gsm-article-modal.component";

@Component({
  selector: 'app-gsm-marks',
  templateUrl: './gsm-marks.component.html',
  styleUrls: ['./gsm-marks.component.scss']
})
export class GsmMarksComponent implements OnInit {

  marks ;

  constructor(private markService: MarkService,
              private SpinnerService: SpinnerService,
              private bottomSheet: MatBottomSheet,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.SpinnerService.activate()
    this.markService.getAll().subscribe(
      res => {
        this.marks = res
        this.SpinnerService.deactivate()
      },
      error => {
        this.SpinnerService.deactivate()
      }
    )
  }

  // marks
  addMark(id: number) {
    console.log("addMark" )
  }

  updateMark(id: number) {
    console.log("updateMark" + id )
  }

  deleteMark(id: number) {
    console.log("deleteMark")
  }

  //models
  addModel(id: number) {
    const dialogRef = this.dialog.open( GsmModelModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id }
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateModel(id: number) {
    console.log("updateModel")
  }

  deleteModel(id: number) {
    console.log("deleteModel")
  }

  //articles
  addArticle(id: number) {
    const dialogRef = this.dialog.open( GsmArticleModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id }
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateArticle(id: number) {
    console.log("updateArticle")
  }

  deleteArticle(id: number) {
    console.log("deleteArticle")
  }

  openMarkActionSheet(id: number) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Ajouter un modele" , action : this.addModel.bind(this) , id: id },
        { title : "Modifier le nom de la marque" , action : this.updateMark.bind(this) , id: id },
        { title : "Supprimer cette marque" , action : this.deleteMark.bind(this) , id: id },
      ],
    });
  }

  openModelActionSheet(id: number) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Ajouter un article" , action : this.addArticle.bind(this) , id: id},
        { title : "Modifier le nom de modéle" , action : this.updateModel.bind(this) , id: id},
        { title : "Supprimer ce modéle" , action : this.deleteModel.bind(this) , id: id},
      ],
    });
  }

  openArticleActionSheet(id: number) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Modifier le nom de l'article" , action : this.updateArticle.bind(this) , id: id },
        { title : "Supprimer cette article" , action : this.deleteArticle.bind(this) , id: id },
      ],
    });
  }
}
