import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { GsmMainProductsAddComponent } from '../gsm-main-products/gsm-main-products-add/gsm-main-products-add.component';
import { GsmMainRequestsAddComponent } from '../gsm-main-requests/gsm-main-requests-add/gsm-main-requests-add.component';
import { GsmMainMarkPage } from '../gsm-main-mark/gsm-main-mark.page';
import { UserService } from '../../../core/services/http/user.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';

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

  constructor(private userService: UserService,
              private spinnerService: SpinnerService,
              private menu: MenuController,
              private modalController: ModalController) { }

  ionViewWillEnter() {
    // this.spinnerService.activate();
    // this.userService.getById(Number(sessionStorage.getItem('id'))).subscribe(
    //     res => {
    //       this.client = res;
    //       this.spinnerService.deactivate();
    //     },
    //     error => {
    //       this.spinnerService.deactivate();
    //       console.log(error);
    //     }
    // );
  }

  onToggleMenu(name: string) {
    this.menu.open(name);
  }

  openAddProductModal() {
    this.modalController.create({
      component: GsmMainProductsAddComponent ,
    }).then(modal => modal.present());
  }

  openMarksModal() {
    this.modalController.create({
      component: GsmMainMarkPage ,
    }).then(modal => modal.present());
  }

  openAddResquestModal() {
    this.modalController.create({
      component: GsmMainRequestsAddComponent ,
    }).then(modal => modal.present());
  }
}
