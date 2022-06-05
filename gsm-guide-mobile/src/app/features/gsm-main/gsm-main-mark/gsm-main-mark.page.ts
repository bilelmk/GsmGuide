import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gsm-main-mark',
  templateUrl: './gsm-main-mark.page.html',
  styleUrls: ['./gsm-main-mark.page.scss'],
})
export class GsmMainMarkPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }
}
