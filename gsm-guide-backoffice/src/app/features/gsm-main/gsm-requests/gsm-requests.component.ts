import { Component, OnInit } from '@angular/core';
import { PageEvent} from "@angular/material/paginator";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { RequestService } from "../../../core/services/http/request.service";
import { UserService } from "../../../core/services/http/user.service";
import { forkJoin } from "rxjs";
import { User } from "../../../core/models/user";
import {GsmModelModalComponent} from "../gsm-marks/gsm-model-modal/gsm-model-modal.component";
import {GsmRequestsModalComponent} from "./gsm-requests-modal/gsm-requests-modal.component";
import {MatDialog} from "@angular/material/dialog";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-gsm-requests',
  templateUrl: './gsm-requests.component.html',
  styleUrls: ['./gsm-requests.component.scss']
})
export class GsmRequestsComponent implements OnInit {

  public dataSource: Request[];
  displayedColumns = ['mark', 'model' , 'article', 'part' , 'price', 'repairer' , 'client', 'state' , 'date' , 'buttons' ];
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
      this.userService.getAllByRole('REPAIRER')
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

  openRequestModal(request){
    const dialogRef = this.dialog.open( GsmRequestsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item : request , array: this.repairers }
    });
    // dialogRef.afterClosed().subscribe(res => {this.getAll()});
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

  // search(key){
  //   this.offset = 0 ;
  //   this.key = key.value
  //   this.getRecords()
  // }
}
