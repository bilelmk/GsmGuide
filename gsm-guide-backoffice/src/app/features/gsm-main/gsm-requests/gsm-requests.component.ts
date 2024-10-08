import { Component, OnInit } from '@angular/core';
import { PageEvent} from "@angular/material/paginator";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { RequestService } from "../../../core/services/http/request.service";
import { UserService } from "../../../core/services/http/user.service";
import { forkJoin } from "rxjs";
import { User } from "../../../core/models/user";
import { MatDialog } from "@angular/material/dialog";
import { GsmRequestsAsignReparatorComponent } from "./gsm-requests-asign-reparator/gsm-requests-asign-reparator.component";

@Component({
  selector: 'app-gsm-requests',
  templateUrl: './gsm-requests.component.html',
  styleUrls: ['./gsm-requests.component.scss']
})
export class GsmRequestsComponent implements OnInit {

  public dataSource: Request[];
  displayedColumns = ['mark', 'model' , 'article', 'part' , 'price', 'repairer' , 'client', 'state' , 'date' , 'requestDiagnostic' , 'buttons' ];
  requests : Request[] = [] ;
  repairers: User[]

  error = false ;
  loading = false ;

  limit = 10 ;
  offset = 0 ;
  key = "" ;

  recordsNumber ;
  pageEvent: PageEvent ;

  constructor(private requestService: RequestService ,
              private spinnerService: SpinnerService ,
              private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit() {
    let searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
    }
    this.spinnerService.activate()
    this.loading = true ;
    forkJoin([
      this.requestService.getAll(searchRequest) ,
      this.userService.getAllByRole('REPAIRER') ,
    ]).subscribe(
      (res :any) => {
        this.loading = false ;
        this.recordsNumber = res[0].count ;
        this.requests =  res[0].rows ;
        this.repairers =  res[1] ;
        this.dataSource = this.requests
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  openRequestAsignModal(request){
    const dialogRef = this.dialog.open( GsmRequestsAsignReparatorComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item : request , array: this.repairers }
    });
  }

  getRecords(date: string = null, repairerId: number= null, state: string= null, requestDiagnostic: string= null){
    this.spinnerService.activate()
    let searchRequest = {
      offset: this.offset ,
      limit : this.limit ,
      date,
      repairerId,
      state,
      requestDiagnostic
    }
    this.spinnerService.activate()
    this.loading = true ;
    this.requestService.getAll(searchRequest).subscribe(
    (res :any) => {
        this.loading = false ;
        this.recordsNumber = res.count ;
        this.requests =  res.rows ;
        this.dataSource = this.requests
        this.spinnerService.deactivate()
    },
    error => {
      console.log(error)
      this.loading = false ;
      this.error = true ;
      this.spinnerService.deactivate()
    })
  }

  onPaginationChange(event){
    this.offset = event.pageIndex
    this.getRecords()
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
