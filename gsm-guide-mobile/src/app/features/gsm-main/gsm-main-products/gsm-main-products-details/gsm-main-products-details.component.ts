import { Component, Input, OnInit } from '@angular/core';
import { CallNumber } from "@ionic-native/call-number/ngx";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-gsm-main-products-details',
  templateUrl: './gsm-main-products-details.component.html',
  styleUrls: ['./gsm-main-products-details.component.scss'],
})
export class GsmMainProductsDetailsComponent implements OnInit {

  @Input() product: any;
  URL = environment.url ;

  constructor(private callNumber: CallNumber) {}

  ngOnInit() {}

  call() {
    if (!this.product.client.phone) {

    }
    else {
      this.callNumber.callNumber(this.product.client.phone, true)
          .then(res => console.log('Launched dialer!', res))
          .catch(err => console.log('Error launching dialer', err));
    }
  }
}
