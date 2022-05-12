import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { ArticleService } from "../../../../core/services/http/article.service";

@Component({
  selector: 'app-gsm-article-modal',
  templateUrl: './gsm-article-modal.component.html',
  styleUrls: ['./gsm-article-modal.component.scss']
})
export class GsmArticleModalComponent implements OnInit {

  form: FormGroup;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmArticleModalComponent>,
              private snackbarService: SnackbarService ,
              private articleService: ArticleService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    if(!data.isEditMode) {
      this.form = new FormGroup({
        name: new FormControl("", Validators.required),
      });
    } else {
      this.form = new FormGroup({
        name: new FormControl(data.item.name, Validators.required),
      });
    }
  }

  ngOnInit(): void {
  }

  add() {
    let article = {
      ...this.form.value ,
      model : {
        modelId: this.data.id
      }
    }
    this.spinnerService.activate();
    this.articleService.add(article).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Article ajouté avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de l\'ajout', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }

  update() {
    let article = {
      ...this.form.value ,
      id : this.data.item.id
    }
    this.spinnerService.activate();
    this.articleService.update(article).subscribe(
      (res) => {
        this.snackbarService.openSnackBar('Article modifié avec succès', 'success');
        this.spinnerService.deactivate();
        this.matDialogRef.close();
      },
      err => {
        this.snackbarService.openSnackBar('Erreur lors de la modification', 'fail');
        this.spinnerService.deactivate();
      }
    );
  }
}
