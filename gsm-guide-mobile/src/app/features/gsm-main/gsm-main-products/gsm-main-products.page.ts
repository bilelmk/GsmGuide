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
  URL = environment.url ;

  // request params
  key = '' ;
  limit = 6 ;
  offset = 0 ;

  isAuthenticated ;
  loading = false ;
  error = false ;

  constructor(private userService: UserService,
              private spinnerService: SpinnerService,
              private productService: ProductService,
              private modalController: ModalController,
              private menu: MenuController,
              private toastService: ToastService) { }

  ionViewWillEnter() {
    this.userService.token.subscribe(res => this.isAuthenticated = res != null);
    this.initVariable();
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

  getProducts(keyInput = null) {
    this.initVariable();
    if (keyInput) {
      this.key = keyInput.value ;
    }
    const request = {
      key: this.key,
      limit : this.limit,
      offset: this.offset,
    };
    this.spinnerService.activate();
    this.loading = true ;
    this.productService.search(request).subscribe(
        (res: any) => {
          this.loading = false ;
          this.products = res.rows;
          this.spinnerService.deactivate();
        },
        error => {
          this.error = true ;
          this.loading = false ;
          this.spinnerService.deactivate();
        }
    );
  }

  loadData(event: any) {
    this.offset ++ ;
    const request = {
      key: this.key || '',
      limit : this.limit,
      offset: this.offset,
    };
    this.productService.search(request).subscribe(
        (res: any) => {
          this.products.push(...res.rows);
          event.target.complete();
        },
        error => {
          this.error = true ;
        }
    );
  }

  onToggleMenu(name: string) {
    this.menu.open(name);
  }

  initVariable() {
    this.key = '' ;
    this.limit = 6 ;
    this.offset = 0 ;
  }
}
