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

  monthFr = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre' , 'Décembre'];
  months: any;
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date() ,
    dateFormatter: {
      formatMonthViewDayHeader(date:Date) {
        const dayFr = [ 'Dim' , 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
        return dayFr[date.getDay()];
      },
    }
  };


  locationName = null ;
  locationId = null ;

  date = '' ;

  constructor(private modalController: ModalController,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private requestService: RequestService) { }

  ngOnInit() {
    const date = new Date ;
    this.months = {
      previous: date.getMonth() === 0 ? this.monthFr[11] : this.monthFr[date.getMonth() - 1] || '',
      current: this.monthFr[date.getMonth()] || '',
      next: date.getMonth() === 11 ? this.monthFr[0] : this.monthFr[date.getMonth() + 1] || '',
    };
  }

  close() {
    this.modalController.dismiss();
  }

  onDateChanged(event: Date) {
    this.date = event.toString() ;
    const date = new Date(event) ;
    this.months = {
      previous: date.getMonth() === 0 ? this.monthFr[11] : this.monthFr[date.getMonth() - 1] || '',
      current: this.monthFr[date.getMonth()] || '',
      next: date.getMonth() === 11 ? this.monthFr[0] : this.monthFr[date.getMonth() + 1] || '',
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
        }, error => {
          this.toastService.show('Erreur lors de l\'evoie de la demande' , 'danger');
          this.spinnerService.deactivate();
          console.log(error) ;
        }
    );
  }

  isAllVariablesExists() {
    return (this.date && this.locationId)
  }
}
