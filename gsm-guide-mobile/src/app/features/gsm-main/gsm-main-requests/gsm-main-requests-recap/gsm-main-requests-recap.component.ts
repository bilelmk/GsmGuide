import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular' ;

@Component({
  selector: 'app-gsm-main-requests-recap',
  templateUrl: './gsm-main-requests-recap.component.html',
  styleUrls: ['./gsm-main-requests-recap.component.scss'],
})
export class GsmMainRequestsRecapComponent {

  @Input() request ;

  constructor(private modalController: ModalController) { }

  close() {
    this.modalController.dismiss();
  }

}
