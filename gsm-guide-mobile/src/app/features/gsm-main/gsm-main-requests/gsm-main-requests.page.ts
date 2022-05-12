import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/http/user.service';
import { GsmMainRequestsAddComponent } from './gsm-main-requests-add/gsm-main-requests-add.component';
import { MenuController, ModalController } from '@ionic/angular';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { MarkService } from '../../../core/services/http/mark.service';
import { forkJoin } from 'rxjs';
import { PartService } from '../../../core/services/http/part.service';
import { RequestService } from '../../../core/services/http/request.service';

@Component({
  selector: 'app-gsm-main-requests',
  templateUrl: './gsm-main-requests.page.html',
  styleUrls: ['./gsm-main-requests.page.scss'],
})
export class GsmMainRequestsPage implements OnInit {

  isLoggedIn ;

  marks ;
  parts ;

  requests ;

  limit = 10 ;
  offset = 0 ;
  id = sessionStorage.getItem('id') ;

  constructor(private userService: UserService,
              private modalController: ModalController,
              private spinnerService: SpinnerService,
              private markService: MarkService,
              private partService: PartService,
              private menu: MenuController,
              private requestService: RequestService) {
    this.userService.token.subscribe(
      res => {
        this.isLoggedIn = res ;
      }
    );
  }

  ngOnInit() {
    this.spinnerService.activate() ;
    forkJoin([
      this.markService.getAll() ,
      this.partService.getAll()
    ]).subscribe(
        res => {
          this.spinnerService.deactivate() ;
          this.marks = res[0];
          this.parts = res[1];
        },
        error => {
          this.spinnerService.deactivate() ;
        }
    );

    const searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      id: this.id
    };
    this.requestService.getAllByClient(searchRequest).subscribe(
        (res: any) => {
          this.requests = res.rows;
        }, error => {
          console.log(error) ;
        }
    );
  }

  openAddProductModal() {
    this.modalController.create({
      component: GsmMainRequestsAddComponent ,
      componentProps: {
        marks: this.marks  ,
        parts: this.parts
      }
    }).then(modal => modal.present());
  }

  onToggleMenu(name: string) {
    this.menu.open(name);
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
