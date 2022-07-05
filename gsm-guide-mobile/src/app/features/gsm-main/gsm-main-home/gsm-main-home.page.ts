import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { GsmMainProductsAddComponent } from '../gsm-main-products/gsm-main-products-add/gsm-main-products-add.component';
import { GsmMainMarkPage } from '../gsm-main-mark/gsm-main-mark.page';
import { UserService } from '../../../core/services/http/user.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../core/services/in-app/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gsm-main-home',
  templateUrl: './gsm-main-home.page.html',
  styleUrls: ['./gsm-main-home.page.scss'],
})
export class GsmMainHomePage  {

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    zoom: false ,
    slidesPerView: 1.5 ,
    centredSlides: true ,
    spaceBetween: 10,
    pagination: false
  };

  client = null ;

  isAuthenticated ;
  role ;

  constructor(private userService: UserService,
              private spinnerService: SpinnerService,
              private menu: MenuController,
              private modalController: ModalController,
              private toastService: ToastService,
              private router: Router) { }

  ionViewWillEnter() {
    this.userService.token.subscribe(res => this.isAuthenticated = res != null);
    this.userService.role.subscribe(res => this.role = res);
  }

  onToggleMenu(name: string) {
    this.menu.open(name);
  }

  openMarksModal() {
    this.modalController.create({
      component: GsmMainMarkPage ,
    }).then(modal => modal.present());
  }

  openAddProductModal() {
    if (!this.isAuthenticated) { this.toastService.show('Il faut se connecter' , 'info') ;}
    else {
      this.modalController.create({
        component: GsmMainProductsAddComponent ,
      }).then(modal => modal.present());
    }
  }

  openAddResquestModal() {
    if (this.role === 'CLIENT') {
      this.router.navigate(['/gsm-main/gsm-main-requests']);
    }
    else if (this.role === 'REPAIRER') {
      this.router.navigate(['/gsm-main/gsm-main-reparation-requests']);
    }
    else {
      this.toastService.show('Il faut se connecter' , 'info') ;
    }
  }
}
