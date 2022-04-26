import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';
import { ModalController } from '@ionic/angular';
import { PriceService } from '../../../../core/services/http/price.service';
import {RequestService} from "../../../../core/services/http/request.service";

@Component({
  selector: 'app-gsm-main-requests-add',
  templateUrl: './gsm-main-requests-add.component.html',
  styleUrls: ['./gsm-main-requests-add.component.scss'],
})
export class GsmMainRequestsAddComponent implements OnInit {

  form: FormGroup;

  @Input() marks: any;
  @Input() parts: any;
  models  = [];
  articles = [];
  prices = [];

  markForm: FormGroup;
  modelForm: FormGroup;
  articleForm: FormGroup;
  partForm: FormGroup;
  priceForm: FormGroup;
  dateForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private modalController: ModalController,
              private priceService: PriceService ,
              private requestService: RequestService) {

    this.markForm = this.formBuilder.group({
      mark: ['', Validators.required],
    });
    this.modelForm = this.formBuilder.group({
      model: ['', Validators.required],
    });
    this.articleForm = this.formBuilder.group({
      article: ['', Validators.required],
    });
    this.partForm = this.formBuilder.group({
      part: ['', Validators.required],
    });
    this.priceForm = this.formBuilder.group({
      price: ['', Validators.required],
    });
    this.dateForm = this.formBuilder.group({
      date: ['', Validators.required],
    });
  }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  selectModels() {
    for (const mark of this.marks) {
      // tslint:disable-next-line:triple-equals
      if (mark.markId == this.markForm.value.mark) {
        this.models = mark.models ;
      }
    }
    this.modelForm.reset();
  }

  selectArticles() {
    for (const model of this.models) {
      // tslint:disable-next-line:triple-equals
      if (model.modelId == this.modelForm.value.model) {
        this.articles = model.articles ;
      }
    }
    this.articleForm.reset();
  }

  selectPrices() {
    this.spinnerService.activate() ;
    this.priceService.getAllByArticleAndPart(this.articleForm.value.article , this.partForm.value.part).subscribe(
        res => {
          this.spinnerService.deactivate() ;
          this.prices = res ;
        },
        error => {
          this.spinnerService.deactivate() ;
          console.log(error);
        }
    );
  }

  sendRequest() {
    const request = {
      date: this.dateForm.value.date ,
      modelId: this.modelForm.value.model ,
      markId: this.markForm.value.mark ,
      articleId: this.articleForm.value.article  ,
      partId: this.partForm.value.part ,
      priceId: this.priceForm.value.price ,
      client: {id: sessionStorage.getItem('id') }
    };
    this.requestService.add(request).subscribe(
        res => {
          console.log(res) ;
        },error => {
          console.log(error) ;
        }
    );
  }

  tesr() {
    console.log(this.dateForm.value.date);
  }
}

