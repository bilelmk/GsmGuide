import { Component } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ProductService } from '../../../core/services/http/product.service';
import { MenuController, ModalController } from '@ionic/angular';
import { GsmMainProductsAddComponent } from './gsm-main-products-add/gsm-main-products-add.component';
import { GsmMainProductsDetailsComponent } from './gsm-main-products-details/gsm-main-products-details.component';
import { environment } from '../../../../environments/environment';
import { UserService } from '../../../core/services/http/user.service';
import { ToastService } from '../../../core/services/in-app/toast.service';

@Component({
  selector: 'app-gsm-main-products',
  templateUrl: './gsm-main-products.page.html',
  styleUrls: ['./gsm-main-products.page.scss'],
})
export class GsmMainProductsPage  {

  products = [];
  myProducts = [];

  segment = 'products';

  URL = environment.url ;

  // request params
  key = '' ;
  limit = 10 ;
  offset = 0 ;

  isAuthenticated ;

  constructor(private userService: UserService,
              private spinnerService: SpinnerService,
              private productService: ProductService,
              private modalController: ModalController,
              private menu: MenuController,
              private toastService: ToastService) { }

  ionViewWillEnter() {
    this.userService.token.subscribe(res => this.isAuthenticated = res != null);
    this.getProducts();
  }

  async openAddProductModal() {
    if (!this.isAuthenticated) { this.toastService.show('Il faut se connecter' , 'info') ; }
    else {
      const modal = await this.modalController.create({
        component: GsmMainProductsAddComponent ,
      });

      modal.onWillDismiss().then(
          res => {
            this.initVariable();
            this.getProducts();
          }
      );
      return await modal.present();
    }
  }

  openProductDetailModal(productDetails) {
    this.modalController.create({
      component: GsmMainProductsDetailsComponent ,
      componentProps: {
        product: productDetails
      }
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

  onToggleMenu(name: string) {
    this.menu.open(name);
  }

  initVariable() {
    this.key = '' ;
    this.limit = 10 ;
    this.offset = 0 ;
  }

}
