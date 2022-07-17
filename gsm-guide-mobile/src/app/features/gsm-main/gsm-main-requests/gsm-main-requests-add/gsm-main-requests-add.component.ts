import { Component, Input, OnInit } from '@angular/core';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';
import {AlertController, ModalController} from '@ionic/angular';
import { PriceService } from '../../../../core/services/http/price.service';
import { GsmMainRequestsRdvComponent } from '../gsm-main-requests-rdv/gsm-main-requests-rdv.component';

@Component({
  selector: 'app-gsm-main-requests-add',
  templateUrl: './gsm-main-requests-add.component.html',
  styleUrls: ['./gsm-main-requests-add.component.scss'],
})
export class GsmMainRequestsAddComponent implements OnInit {

  @Input() marks: any;
  @Input() parts: any;
  @Input() locations: any;

  models  = [];
  articles = [];
  prices = [];

  markId = null ;
  markName = null ;

  modelId = null ;
  modelName = null ;

  articleId = null ;
  articleName = null ;

  partId = null ;
  partName = null ;

  priceId = null ;
  priceName = null ;

  imei = null;
  details = null ;

  constructor(private spinnerService: SpinnerService,
              private toastService: ToastService,
              private modalController: ModalController,
              private priceService: PriceService,
              private alertController: AlertController) {}

  ngOnInit() {
    // this.parts.unshift(this.initParts);
    // this.partId = '-1';
  }

  close() {
    this.modalController.dismiss();
  }

  onMarkSelect() {
    for (const mark of this.marks) {
      // tslint:disable-next-line:triple-equals
      if (mark.markId == this.markId) {
        this.markName = mark.name ;
        this.models = mark.models ;
      }
    }
    // init
    this.modelId = null ;
    this.modelName = null ;
    this.articleId = null ;
    this.articleName = null ;
  }

  onModelSelect() {
    for (const model of this.models) {
      // tslint:disable-next-line:triple-equals
      if (model.modelId == this.modelId) {
        this.modelName = model.name ;
        this.articles = model.articles ;
      }
    }
    this.articleId = null ;
    this.articleName = null ;
  }

  async showModelAlert() {
    if (!this.markId) {
      setTimeout(() => {
        this.alertController.create({
          header: 'Attention',
          message: 'If faut sélectionner une marque avant !',
          buttons: ['OK']
        }).then(alert => alert.present() );
      } , 500) ;
    }
  }

  onArticleSelect() {
    for (const article of this.articles) {
      // tslint:disable-next-line:triple-equals
      if (article.articleId == this.articleId) {
        this.articleName = article.name ;
      }
    }
  }

  async showArticleAlert() {
    if (!this.markId || !this.modelId) {
      setTimeout(() => {
        this.alertController.create({
          header: 'Attention',
          message: 'If faut sélectionner une marque et un modèle avant !',
          buttons: ['OK']
        }).then(alert => alert.present() );
      } , 500) ;
    }
  }

  onPartSelect() {
    for (const part of this.parts) {
      // tslint:disable-next-line:triple-equals
      if (part.id == this.partId) {
        this.partName = part.name ;
      }
    }

    if (this.articleId == null ) {
      console.log('select article');
    }
    // tslint:disable-next-line:triple-equals
    if (this.articleId && this.partId && this.partId != -1) {
      this.spinnerService.activate() ;
      this.priceService.getAllByArticleAndPart(this.articleId , this.partId).subscribe(
          res => {
            this.spinnerService.deactivate() ;
            this.prices = res ;
          },
          error => {
            this.spinnerService.deactivate() ;
          }
      );
    }
  }

  onPriceSelect() {
    for (const price of this.prices) {
      // tslint:disable-next-line:triple-equals
      if (price.id == this.priceId) {
        this.priceName = price.quality + ' ' + price.price + ' DT' ;
      }
    }
  }

  async next() {
    const request = {
      modelId: this.modelId ,
      markId: this.markId ,
      articleId: this.articleId  ,
      partId: this.partId ,
      priceId: this.priceId ,
      client: { id: sessionStorage.getItem('id') } ,
      details: this.details,
      imei: this.imei
    };

    const modal = await this.modalController.create({
      component: GsmMainRequestsRdvComponent ,
      componentProps: {
        request ,
        locations: this.locations
      }
    }) ;
    modal.onWillDismiss().then(res => { this.close(); });
    return await modal.present();
  }

  isAllVariablesExists() {
    return (this.articleId && this.modelId && this.markId && this.partId && this.priceId) ;
  }
}

