import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-gsm-main-mark',
  templateUrl: './gsm-main-mark.page.html',
  styleUrls: ['./gsm-main-mark.page.scss'],
})
export class GsmMainMarkPage implements OnInit {

  segment: string = 'samsung';

  constructor(private modalController: ModalController,
              private callNumber: CallNumber) { }

  ngOnInit() {
  }

  close() {
    this.modalController.dismiss();
  }

  segmentChanged(event: any) {
    this.segment = event.detail.value ;
  }

  call(key: string) {
    this.callNumber.callNumber(key, true)
        .then(res => console.log('Launched dialer!', res))
        .catch(err => console.log('Error launching dialer', err));
  }
}
