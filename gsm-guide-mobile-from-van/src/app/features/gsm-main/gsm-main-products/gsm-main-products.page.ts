import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ProductService } from '../../../core/services/http/product.service';
import { ModalController } from '@ionic/angular';
import { GsmMainProductsAddComponent } from './gsm-main-products-add/gsm-main-products-add.component';

@Component({
  selector: 'app-gsm-main-products',
  templateUrl: './gsm-main-products.page.html',
  styleUrls: ['./gsm-main-products.page.scss'],
})
export class GsmMainProductsPage implements OnInit {

  products = [];
  myProducts = [];

  segment = 'products';

  URL = 'http://192.168.1.125:8080/' ;

  // request params
  key = '' ;
  limit = 10 ;
  offset = 0 ;

  isSearching = false ;

  constructor(private spinnerService: SpinnerService,
              private productService: ProductService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.getProducts();
  }

  openAddProductModal() {
    this.modalController.create({
      component: GsmMainProductsAddComponent ,
    }).then(modal => modal.present());
  }

  segmentChanged($event: any) {
    this.segment = $event.detail.value;
  }

  getProducts(key = '') {
    this.key = key ;
    const request = {
      key: this.key,
      limit : this.limit,
      offset: this.offset,
    };
    this.spinnerService.activate();
    this.productService.search(request).subscribe(
        (res: any) => {
          this.products = res;
          this.spinnerService.deactivate();
        },
        error => {
          this.spinnerService.deactivate();
        }
    );
  }

  cancelSearch() {
    this.isSearching = false ;
  }

  enableSearch() {
    this.isSearching = true ;
  }

}
