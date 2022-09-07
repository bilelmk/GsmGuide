import { Component, OnInit } from '@angular/core';
import { UserService} from '../../../core/services/http/user.service';
import { AlertController, MenuController, ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MarkService } from '../../../core/services/http/mark.service';
import { PartService } from '../../../core/services/http/part.service';
import { RequestService } from '../../../core/services/http/request.service';

@Component({
  selector: 'app-gsm-main-reparation-requests',
  templateUrl: './gsm-main-reparation-requests.page.html',
  styleUrls: ['./gsm-main-reparation-requests.page.scss'],
})
export class GsmMainReparationRequestsPage implements OnInit  {

  marks ;
  parts ;

  requests ;

  limit = 10 ;
  offset = 0 ;
  id = sessionStorage.getItem('id') ;

  loading = false ;
  error = false ;

  constructor(private userService: UserService,
              private modalController: ModalController,
              private spinnerService: SpinnerService,
              private markService: MarkService,
              private partService: PartService,
              private menu: MenuController,
              private requestService: RequestService,
              private alertController: AlertController) {
  }

  onToggleMenu(name: string) {
    this.menu.open(name);
  }

  // ngAfterViewInit() {
  //   console.log(this.card)
  //   const gesture = this.gestureCtrl.create({
  //     gestureName: 'double click',
  //     el: this.card.nativeElement,
  //     threshold: 0,
  //     onStart: () => { this.openDetails(); }
  //   });
  //   gesture.enable();
  // }

  ngOnInit() {
    this.spinnerService.activate() ;
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      id: this.id
    };
    this.loading = true ;
    this.requestService.getAllByRepairer(searchRequest).subscribe(
        (res: any) => {
          this.spinnerService.deactivate() ;
          this.requests = res.rows;
          this.loading = false ;
        }, error => {
          this.loading = false ;
          this.error = true ;
          this.spinnerService.deactivate() ;
          console.log(error) ;
        }
    );
  }

  loadData(event: any) {
    this.offset ++ ;
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      id: this.id
    };
    this.requestService.getAllByRepairer(searchRequest).subscribe(
        (res: any) => {
          this.requests.push(...res.rows);
          event.target.complete();
          if (this.requests.length === res.count) {
            event.target.disabled = true;
          }
        }, error => {
          console.log(error) ;
          event.target.complete();
        }
    );
  }

  openDetails() {
    // if (Math.abs(now() - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
    //   console.log('yes')
    //   this.lastOnStart = 0;
    // } else {
    //   this.lastOnStart = now();
    // }
  }

  async openStatus(request) {
    const alert = await this.alertController.create({
      header: 'Changer l\'état de la demande',
      inputs: [
        {
          type: 'radio',
          label: 'Réparation en cours',
          value: 'IN_PROGRESS',
          checked: request.state === 'IN_PROGRESS'
        },
        {
          label: 'En attente des piéces',
          type: 'radio',
          value: 'WAITING_FOR_PART',
          checked: request.state === 'WAITING_FOR_PART'
        },
        {
          label: 'Piéces non disponible',
          type: 'radio',
          value: 'PART_UNAVAILABLE',
          checked: request.state === 'PART_UNAVAILABLE'
        },
        {
          label: 'Non réparable',
          type: 'radio',
          value: 'NON_REPARABLE',
          checked: request.state === 'NON_REPARABLE'
        },
        {
          label: 'Produit réparé',
          type: 'radio',
          value: 'REPARED',
          checked: request.state === 'REPARED'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Confirmer',
          handler: (state) => {
            this.spinnerService.activate() ;
            request.state = state ;
            this.requestService.update(request).subscribe(
                res => {
                  request = res ;
                  this.spinnerService.deactivate() ;
                },
                error => {
                  this.spinnerService.deactivate() ;
                }
            );
          }
        }
      ]
    });
    await alert.present();
    // const { role } = await alert.onDidDismiss();
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

}
