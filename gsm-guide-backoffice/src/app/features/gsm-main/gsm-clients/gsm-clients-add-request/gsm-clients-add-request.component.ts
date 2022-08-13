import {Component, Inject, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import { SnackbarService } from "../../../../core/services/in-app/snackbar.service";
import { MarkService } from "../../../../core/services/http/mark.service";
import { forkJoin } from "rxjs";
import { LocationService } from "../../../../core/services/http/location.service";
import { PartService } from "../../../../core/services/http/part.service";
import { PriceService } from "../../../../core/services/http/price.service";
import { RequestService } from "../../../../core/services/http/request.service";

@Component({
  selector: 'app-gsm-clients-add-request',
  templateUrl: './gsm-clients-add-request.component.html',
  styleUrls: ['./gsm-clients-add-request.component.scss']
})
export class GsmClientsAddRequestComponent implements OnInit {

  form: FormGroup;

  marks = [];
  models = [];
  parts = [];
  articles = [];
  prices = [];
  locations = [] ;

  constructor(private spinnerService: SpinnerService,
              public dialog: MatDialog,
              public matDialogRef: MatDialogRef<GsmClientsAddRequestComponent>,
              private snackbarService: SnackbarService ,
              private markService: MarkService,
              private locationService: LocationService,
              private partService: PartService,
              private priceService: PriceService,
              private requestService: RequestService,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      modelId:  new FormControl(null, Validators.required),
      markId: new FormControl(null, Validators.required),
      articleId: new FormControl(null, Validators.required),
      partId: new FormControl(null ,  Validators.required),
      priceId:  new FormControl(null ,  Validators.required),
      date: new FormControl(null, Validators.required),
      location: new FormControl(null),
      imei:  new FormControl(null),
      details: new FormControl(null),
      requestDiagnostic: new FormControl(false, Validators.required),
    });
  }

  ngOnInit(): void {
    this.spinnerService.activate()
    forkJoin([this.markService.getAll() , this.locationService.getAll() , this.partService.getAll()]).subscribe(
      res => {
        this.marks = res[0] ;
        this.locations = res[1] ;
        this.parts = res[2]
        this.spinnerService.deactivate()
      },error => {
        this.spinnerService.deactivate()
      }
    )
  }

  onMarkSelect() {
    for (const mark of this.marks) {
      // tslint:disable-next-line:triple-equals
      if (mark.markId == this.form.value.markId) {
        this.models = mark.models ;
      }
    }
    // init
    this.form.get('modelId').setValue(null)
    this.form.get('articleId').setValue(null)
    this.form.get('priceId').setValue(null)
  }

  onModelSelect() {
    for (const model of this.models) {
      // tslint:disable-next-line:triple-equals
      if (model.modelId == this.form.value.modelId) {
        this.articles = model.articles ;
      }
    }
    this.form.get('articleId').setValue(null)
    this.form.get('priceId').setValue(null)
  }

  onArticleSelect() {
    if (this.form.value.articleId && this.form.value.partId ) {
      this.spinnerService.activate() ;
      this.priceService.getAllByArticleAndPart(this.form.value.articleId , this.form.value.partId).subscribe(
        res => {
          this.spinnerService.deactivate() ;
          this.prices = res ;
        },
        error => {
          this.spinnerService.deactivate() ;
        }
      );
    }
    this.form.get('priceId').setValue(null)
  }

  onPartSelect() {
    if (this.form.value.articleId && this.form.value.partId ) {
      this.spinnerService.activate() ;
      this.priceService.getAllByArticleAndPart(this.form.value.articleId , this.form.value.partId).subscribe(
        res => {
          this.spinnerService.deactivate() ;
          this.prices = res ;
        },
        error => {
          this.spinnerService.deactivate() ;
        }
      );
    }
    this.form.get('priceId').setValue(null)
  }

  onDiagnosticSelect() {
    if(this.form.value.requestDiagnostic == true) {
      this.form.get('partId').enable()
      this.form.get('priceId').enable()

      this.form.get('partId').setValidators(Validators.required)
      this.form.get('priceId').setValidators(Validators.required)
    }
    else {
      this.form.get('partId').disable()
      this.form.get('priceId').disable()

      this.form.get('partId').setValidators(null)
      this.form.get('priceId').setValidators(null)
    }
  }

  add() {
    this.spinnerService.activate()
    const request = {
      ...this.form.value,
      client : {
        id: this.data.item.id
      }
    }
    this.requestService.add(request).subscribe(
      res => {
        this.spinnerService.deactivate()
        console.log(res)
      },
      error => {
        this.spinnerService.deactivate()
        console.log(error)
      }
    )
  }

}
