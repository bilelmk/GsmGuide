import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../core/services/http/user.service";
import { GsmMainRequestsAddComponent } from "./gsm-main-requests-add/gsm-main-requests-add.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-gsm-main-requests',
  templateUrl: './gsm-main-requests.page.html',
  styleUrls: ['./gsm-main-requests.page.scss'],
})
export class GsmMainRequestsPage implements OnInit {

  isLoggedIn ;

  constructor(private userService: UserService,
              private modalController: ModalController) {
    this.userService.token.subscribe(
      res => {
        this.isLoggedIn = res ;
      }
    )
  }

  ngOnInit() {
  }

  openAddProductModal() {
    this.modalController.create({
      component: GsmMainRequestsAddComponent ,
      // componentProps: {
      //   restaurant: this.restaurant
      // }
    }).then(modal => modal.present());
  }
}
