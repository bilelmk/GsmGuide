import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gsm-main-requests-rdv',
  templateUrl: './gsm-main-requests-rdv.component.html',
  styleUrls: ['./gsm-main-requests-rdv.component.scss'],
})
export class GsmMainRequestsRdvComponent implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }
}
