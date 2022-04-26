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
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-gsm-marks',
  templateUrl: './gsm-marks.component.html',
  styleUrls: ['./gsm-marks.component.scss']
})
export class GsmMarksComponent implements OnInit {

  marks ;
  parts ;

  constructor(private markService: MarkService,
              private SpinnerService: SpinnerService,
              private bottomSheet: MatBottomSheet,
              private dialog: MatDialog,
              private partService: PartService) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.SpinnerService.activate()
    forkJoin([
      this.markService.getAll() ,
      this.partService.getAll()
    ]).subscribe(
      res => {
        this.marks = res[0]
        this.parts = res[1]
        this.SpinnerService.deactivate()
      },
      error => {
        this.SpinnerService.deactivate()
      }
    )
  }

  // marks
  addMark(id , item , isEditMode) {
    console.log("addMark" )
  }

  updateMark(id , item , isEditMode) {
    console.log("updateMark" + id )
  }

  deleteMark(id , item , isEditMode) {
    console.log("deleteMark")
  }

  //models
  addModel(id , item , isEditMode) {
    console.log(id )
    console.log(item )
    console.log(isEditMode )
    const dialogRef = this.dialog.open( GsmModelModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id }
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateModel(id , item , isEditMode) {
    console.log("updateModel")
  }

  deleteModel(id , item , isEditMode) {
    console.log("deleteModel")
  }

  //articles
  addArticle(id , item , isEditMode) {
    const dialogRef = this.dialog.open( GsmArticleModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id }
    });
    dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  updateArticle(id , item , isEditMode) {
    console.log("updateArticle")
  }

  deleteArticle(id , item , isEditMode) {
    console.log("deleteArticle")
  }

  openPriceModal(id , item , isEditMode) {
    const dialogRef = this.dialog.open( GsmPriceModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { id : id }
    });
    // dialogRef.afterClosed().subscribe(res => {this.getAll()});
  }

  openMarkActionSheet(id: number) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Ajouter un modele" , action : this.addModel.bind(this) , id: id , item: null , isEditMode: false },
        { title : "Modifier le nom de la marque" , action : this.updateMark.bind(this) , id: id , item: null , isEditMode: false},
        { title : "Supprimer cette marque" , action : this.deleteMark.bind(this) , id: id, item: null , isEditMode: false },
      ],
    });
  }

  openModelActionSheet(id: number) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Ajouter un article" , action : this.addArticle.bind(this) , id: id, item: null , isEditMode: false },
        { title : "Modifier le nom de modéle" , action : this.updateModel.bind(this) , id: id, item: null , isEditMode: false },
        { title : "Supprimer ce modéle" , action : this.deleteModel.bind(this) , id: id, item: null , isEditMode: false },
      ],
    });
  }

  openArticleActionSheet(id: number) {
    this.bottomSheet.open(ActionSheetComponent , {
      data: [
        { title : "Modifier le nom de l'article" , action : this.updateArticle.bind(this) , id: id, item: null , isEditMode: false },
        { title : "Supprimer cette article" , action : this.deleteArticle.bind(this) , id: id, item: null , isEditMode: false },
        { title : "Liste des prix" , action : this.openPriceModal.bind(this) , id: id, item: this.parts , isEditMode: false },
      ],
    });
  }
}
