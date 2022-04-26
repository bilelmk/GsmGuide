import { Component, OnInit } from '@angular/core';
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { ProductService } from "../../../core/services/http/product.service";
import { ModalController } from "@ionic/angular";
import { GsmMainProductsAddComponent } from "./gsm-main-products-add/gsm-main-products-add.component";

@Component({
  selector: 'app-gsm-main-products',
  templateUrl: './gsm-main-products.page.html',
  styleUrls: ['./gsm-main-products.page.scss'],
})
export class GsmMainProductsPage implements OnInit {

  products ;

  constructor(private spinnerService: SpinnerService,
              private productService: ProductService,
              private modalController: ModalController) { }

  ngOnInit() {
    this.spinnerService.activate()
    this.productService.getAll().subscribe(
      (res: any) => {
        this.products = res;
        this.spinnerService.deactivate();
      },
      error => {
        this.spinnerService.deactivate();
      }
    );
  }

  openAddProductModal() {
    this.modalController.create({
      component: GsmMainProductsAddComponent ,
      // componentProps: {
      //   restaurant: this.restaurant
      // }
    }).then(modal => modal.present());
  }

}
