import { Component } from '@angular/core';
import { RequestService } from '../../../../core/services/http/request.service';
import { ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import {GsmMainRequestsDetailsComponent} from "./gsm-main-requests-details/gsm-main-requests-details.component";

@Component({
  selector: 'app-gsm-main-requests-list',
  templateUrl: './gsm-main-requests-list.component.html',
  styleUrls: ['./gsm-main-requests-list.component.scss'],
})
export class GsmMainRequestsListComponent {

  limit = 10 ;
  offset = 0 ;
  id = sessionStorage.getItem('id') ;

  requests ;

  loading = false ;
  error = false ;

  constructor(private requestService: RequestService,
              private modalController: ModalController,
              private spinnerService: SpinnerService) { }

  ionViewWillEnter() {
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      id: this.id
    };
    this.loading = true ;
    this.spinnerService.activate() ;
    this.requestService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.requests = res.rows;
          this.loading = false ;
          this.spinnerService.deactivate() ;
        }, error => {
          this.spinnerService.deactivate() ;
          this.loading = false ;
          this.error = true ;
          console.log(error);
        }
    );
  }

  close() {
      this.modalController.dismiss();
  }

  loadData(event: any) {
    this.offset ++ ;
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      id: this.id
    };
    this.requestService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.requests.push(...res.rows);
          event.target.complete();
          // if (this.requests.length === res.count) {
          //   event.target.disabled = true;
          // }
        }, error => {
          console.log(error) ;
          event.target.complete();
        }
    );
  }

    getSateColor(state: any) {
        if (state === 'IN_PROGRESS' || state === 'WAITING_FOR_PART') {
            return 'state-info' ;
        }
        else if (state === 'REPARED') {
            return 'state-success' ;
        }
        else if (state === 'PART_UNAVAILABLE' || state === 'NON_REPARABLE') {
            return 'state-danger' ;
        }
        else {
            return '' ;
        }
    }

    getSateText(state: any) {
        if (state === 'IN_PROGRESS') {
            return 'En cours' ;
        }
        else if (state === 'WAITING_FOR_PART') {
            return 'En attente de piéce' ;
        }
        else if (state === 'REPARED' ) {
            return 'Réparé' ;
        }

        else if (state === 'PART_UNAVAILABLE' ) {
            return 'Piéce introuvable' ;
        }

        else if (state === 'NON_REPARABLE') {
            return 'Non réparable' ;
        }
        else {
            return '' ;
        }
    }

    openDetailsModal(request) {
        this.modalController.create({
            component: GsmMainRequestsDetailsComponent ,
            componentProps: {
                request,
            }
        }).then(modal => {
            modal.present() ;
        });
    }
}
