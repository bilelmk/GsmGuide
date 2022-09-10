import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';

@Component({
  selector: 'app-gsm-main-requests-details',
  templateUrl: './gsm-main-requests-details.component.html',
  styleUrls: ['./gsm-main-requests-details.component.scss'],
})
export class GsmMainRequestsDetailsComponent implements OnInit {

  @Input() request ;

  elementType = 'url';
  value = '' ;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.value = JSON.stringify({text: 'qsàçqsdçà)qsd)àq;)àçsqdà)çq@@@@@@@@)àçqsàçdqsàd)', id: this.request.id});
  }

  close() {
    this.modalController.dismiss();
  }
}
