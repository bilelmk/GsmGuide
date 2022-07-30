import { Component, Input, OnInit } from '@angular/core';
import { ToastService} from '../../../../core/services/in-app/toast.service';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ModalController } from '@ionic/angular' ;

@Component({
  selector: 'app-gsm-main-requests-recap',
  templateUrl: './gsm-main-requests-recap.component.html',
  styleUrls: ['./gsm-main-requests-recap.component.scss'],
})
export class GsmMainRequestsRecapComponent implements OnInit {

  @Input() request ;

  elementType = 'url';
  value = '' ;

  constructor(private modalController: ModalController,
              private spinnerService: SpinnerService,
              private toastService: ToastService) { }

  ngOnInit() {
    this.value = JSON.stringify({text: 'qsàçqsdçà)qsd)àq;)àçsqdà)çq@@@@@@@@)àçqsàçdqsàd)', id: this.request.id});
  }

  close() {
    this.modalController.dismiss();
  }


}
