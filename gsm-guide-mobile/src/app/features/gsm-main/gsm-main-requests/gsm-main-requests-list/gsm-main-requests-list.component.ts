import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../../../core/services/http/request.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-gsm-main-requests-list',
  templateUrl: './gsm-main-requests-list.component.html',
  styleUrls: ['./gsm-main-requests-list.component.scss'],
})
export class GsmMainRequestsListComponent implements OnInit {

  limit = 10 ;
  offset = 0 ;
  id = sessionStorage.getItem('id') ;

  requests ;

  constructor(private requestService: RequestService,
              private modalController: ModalController) { }

  ngOnInit() {
    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      id: this.id
    };
    this.requestService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.requests = res.rows;
          console.log(this.requests)
        }, error => {
          console.log(error) ;
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
          if (this.requests.length === res.count) {
            event.target.disabled = true;
          }
        }, error => {
          console.log(error) ;
          event.target.complete();
        }
    );
  }
}
