import { Component } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { GsmMainProductsAddComponent } from '../gsm-main-products/gsm-main-products-add/gsm-main-products-add.component';
import { UserService } from '../../../core/services/http/user.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../core/services/in-app/toast.service';
import { Router } from '@angular/router';
import { ActualityService } from '../../../core/services/http/actuality.service';
import { Actuality } from '../../../core/classes/actuality';

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
    slidesPerView: 1.7 ,
    centredSlides: true ,
    spaceBetween: 10,
    pagination: false
  };

  client = null ;

  isAuthenticated ;
  role ;

  actualities: Actuality[] ;

  constructor(private userService: UserService,
              private spinnerService: SpinnerService,
              private menu: MenuController,
              private modalController: ModalController,
              private toastService: ToastService,
              private router: Router,
              private actualityService: ActualityService) { }

  ionViewWillEnter() {
    this.userService.token.subscribe(res => this.isAuthenticated = res != null);
    this.userService.role.subscribe(res => this.role = res);
    this.spinnerService.activate() ;
    this.actualityService.getAll().subscribe(
        res => {
          this.actualities = res;
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

  openAddProductModal() {
    if (!this.isAuthenticated) { this.toastService.show('Il faut se connecter' , 'info') ; }
    else {
      this.modalController.create({
        component: GsmMainProductsAddComponent ,
      }).then(modal => modal.present());
    }
  }

  openAddResquestModal() {
    if (this.role === 'CLIENT') {
      this.router.navigate(['/main/requests']);
    }
    else if (this.role === 'REPAIRER') {
      this.router.navigate(['/main/reparation-requests']);
    }
    else {
      this.toastService.show('Il faut se connecter' , 'info') ;
    }
  }
}
