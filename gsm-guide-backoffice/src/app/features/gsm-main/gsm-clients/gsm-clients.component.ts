import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from "../../../core/models/user";
import { MatPaginator } from "@angular/material/paginator";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { UserService } from "../../../core/services/http/user.service";
import { MatTableDataSource } from "@angular/material/table";
import { GsmClientsModalComponent } from "./gsm-clients-modal/gsm-clients-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { GsmClientsAddRequestComponent } from "./gsm-clients-add-request/gsm-clients-add-request.component";

@Component({
  selector: 'app-gsm-clients',
  templateUrl: './gsm-clients.component.html',
  styleUrls: ['./gsm-clients.component.scss']
})
export class GsmClientsComponent implements OnInit {

  public dataSource = new MatTableDataSource<User>();
  displayedColumns = ['firstname', 'lastname' , 'username', 'phone' , 'actions' ];
  clients : User[] = [] ;

  error = false ;
  loading = false ;

  @ViewChild(MatPaginator , {static: false}) set paginator(pager:MatPaginator) {
    if (pager) this.dataSource.paginator = pager;
  }

  constructor(private spinnerService: SpinnerService ,
              private userService: UserService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loading = true ;
    this.spinnerService.activate()
    this.userService.getAllByRole("CLIENT").subscribe(
      res => {
        this.loading = false ;
        this.clients = res ;
        this.dataSource.data = res;
        this.spinnerService.deactivate()
      },
      error => {
        console.log(error)
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  applyFilter(filterValue: string) {
    let toFilterList = [...this.clients]
    toFilterList = toFilterList.filter(
      client => {
        return client.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || client.firstname.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || client.lastname.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }

  openModal(isEditMode: boolean, item) {
    const dialogRef = this.dialog.open( GsmClientsModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { array : this.clients , item , isEditMode}
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.clients;
      }
    );
  }

  openAddRequestModal(client){
    const dialogRef = this.dialog.open( GsmClientsAddRequestComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { item : client }
    });
  }
}
