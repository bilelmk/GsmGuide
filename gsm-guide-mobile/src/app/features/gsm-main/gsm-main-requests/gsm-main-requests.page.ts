import { Component } from '@angular/core';
import { UserService } from '../../../core/services/http/user.service';
import { GsmMainRequestsAddComponent } from './gsm-main-requests-add/gsm-main-requests-add.component';
import { MenuController, ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MarkService } from '../../../core/services/http/mark.service';
import { forkJoin } from 'rxjs';
import { PartService } from '../../../core/services/http/part.service';
import { GsmMainRequestsListComponent } from './gsm-main-requests-list/gsm-main-requests-list.component';
import { LocationService } from '../../../core/services/http/location.service';

@Component({
  selector: 'app-gsm-main-requests',
  templateUrl: './gsm-main-requests.page.html',
  styleUrls: ['./gsm-main-requests.page.scss'],
})
export class GsmMainRequestsPage {

  marks ;
  parts ;
  locations ;

  constructor(private userService: UserService,
              private modalController: ModalController,
              private spinnerService: SpinnerService,
              private markService: MarkService,
              private partService: PartService,
              private locationService: LocationService,
              private menu: MenuController) {}

  ionViewWillEnter() {
    this.spinnerService.activate() ;
    forkJoin([
      this.markService.getAll() ,
      this.partService.getAll(),
      this.locationService.getAll()
    ]).subscribe(
        res => {
          this.spinnerService.deactivate() ;
          this.marks = res[0];
          this.parts = res[1];
          this.locations = res[2];
        },
        error => {
          this.spinnerService.deactivate() ;
        }
    );
  }

  openAddRequestModal() {
    this.modalController.create({
      component: GsmMainRequestsAddComponent ,
      componentProps: {
        marks: this.marks  ,
        parts: this.parts ,
        locations: this.locations
      }
    }).then(modal => modal.present());
  }

  openRequestsListModal() {
    this.modalController.create({
      component: GsmMainRequestsListComponent ,
    }).then(modal => modal.present());
  }

  onToggleMenu(name: string) {
    this.menu.open(name);
  }
}
