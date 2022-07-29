import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../../core/services/http/product.service';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-gsm-main-products-client',
  templateUrl: './gsm-main-products-client.page.html',
  styleUrls: ['./gsm-main-products-client.page.scss'],
})
export class GsmMainProductsClientPage {

  products = [];
  URL = environment.url ;

  // request params
  limit = 6 ;
  offset = 0 ;

  loading = false ;
  error = false ;

  constructor(private productService: ProductService,
              private spinnerService: SpinnerService,
              private router: Router) { }

  ionViewWillEnter() {
    this.initVariable();
    this.getProducts();
  }

  close() {
    this.router.navigate(['/main/products']);
  }

  getProducts() {
    const request = {
      id: sessionStorage.getItem('id'),
      limit : this.limit,
      offset: this.offset,
    };
    this.spinnerService.activate();
    this.loading = true ;
    this.productService.getByClient(request).subscribe(
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
      id: sessionStorage.getItem('id'),
      limit : this.limit,
      offset: this.offset,
    };
    this.productService.getByClient(request).subscribe(
        (res: any) => {
          this.products.push(...res.rows);
          event.target.complete();
          if (this.products.length === res.count) {
            event.target.disabled = true;
          }
        },
        error => {
          this.error = true ;
        }
    );
  }

  initVariable() {
    this.limit = 6 ;
    this.offset = 0 ;
  }
}
