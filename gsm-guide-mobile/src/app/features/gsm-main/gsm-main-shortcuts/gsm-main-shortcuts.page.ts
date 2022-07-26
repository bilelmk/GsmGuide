import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ShortcutService } from '../../../core/services/http/shortcut.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';

@Component({
  selector: 'app-gsm-main-shortcuts',
  templateUrl: './gsm-main-shortcuts.page.html',
  styleUrls: ['./gsm-main-shortcuts.page.scss'],
})
export class GsmMainShortcutsPage {

  segment;

  loading;
  error;

  marks ;

  constructor(private modalController: ModalController,
              private callNumber: CallNumber,
              private shortcutService: ShortcutService,
              private spinnerService: SpinnerService) { }

  ionViewWillEnter() {
    this.spinnerService.activate();
    this.shortcutService.getAll().subscribe(
        res => {
          this.marks = res ;
          this.segment = res[0].markName || null ;
          this.spinnerService.deactivate();
        },
        error => {
          this.spinnerService.deactivate();
        }
    );
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
