import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ShortcutService } from '../../../core/services/http/shortcut.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gsm-main-shortcuts',
  templateUrl: './gsm-main-shortcuts.page.html',
  styleUrls: ['./gsm-main-shortcuts.page.scss'],
})
export class GsmMainShortcutsPage {

  segment;
  marks ;
  loading = false ;
  error = false ;

  constructor(private callNumber: CallNumber,
              private shortcutService: ShortcutService,
              private spinnerService: SpinnerService,
              private router: Router) {}

  ionViewWillEnter() {
    this.loading = true ;
    this.spinnerService.activate();
    this.shortcutService.getAll().subscribe(
        res => {
          this.loading = false ;
          this.marks = res ;
          this.segment = res[0]?.markName;
          this.spinnerService.deactivate();
        },
        error => {
          this.loading = false ;
          this.error = true ;
          this.spinnerService.deactivate();
          console.log(error);
        }
    );
  }

  close() {
    this.router.navigate(['main/home']);
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
