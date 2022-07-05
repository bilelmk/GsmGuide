import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';
import { RequestService } from '../../../../core/services/http/request.service';

@Component({
  selector: 'app-gsm-main-requests-rdv',
  templateUrl: './gsm-main-requests-rdv.component.html',
  styleUrls: ['./gsm-main-requests-rdv.component.scss'],
})
export class GsmMainRequestsRdvComponent implements OnInit {

  @Input() locations: any;
  @Input() request: any;

  monthEn = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  months: any;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date()
  };

  locationName: any;
  locationId: any;

  date = '' ;

  constructor(private modalController: ModalController,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private requestService: RequestService) { }

  ngOnInit() {
    this.months = {
      previous : this.monthEn[(new Date).getMonth() - 2],
      current : this.monthEn[(new Date).getMonth() - 1],
      next : this.monthEn[(new Date).getMonth()],
    };
  }

  close() {
    this.modalController.dismiss();
  }

  onDateChanged(event: Date) {
    this.date = event.toString() ;
    const date = new Date(event) ;
    this.months = {
      previous : this.monthEn[date.getMonth() - 2] || '',
      current : this.monthEn[date.getMonth() - 1] || '',
      next : this.monthEn[date.getMonth()] || '',
    };
  }

  onLocationSelect() {
    for (const location of this.locations) {
      // tslint:disable-next-line:triple-equals
      if (location.id == this.locationId) {
        this.locationName = location.address ;
      }
    }
  }

  submit() {
    const request = {
      ...this.request ,
      date: this.date ,
      location: this.locationName
    };

    this.spinnerService.activate();
    this.requestService.add(request).subscribe(
        res => {
          this.toastService.show('Demende envoyé avec succès' , 'success') ;
          this.spinnerService.deactivate();
          this.modalController.dismiss();
          console.log(res) ;
        }, error => {
          this.toastService.show('Erreur lors de l\'evoie de la demande' , 'danger');
          this.spinnerService.deactivate();
          console.log(error) ;
        }
    );
  }

  isAllVariablesExists() {

  }
}
