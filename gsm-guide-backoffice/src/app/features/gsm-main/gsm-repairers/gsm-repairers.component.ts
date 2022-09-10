import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { User } from "../../../core/models/user";
import { MatPaginator } from "@angular/material/paginator";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { UserService } from "../../../core/services/http/user.service";
import { MatDialog } from "@angular/material/dialog";
import { GsmRepairersModalComponent } from "./gsm-repairers-modal/gsm-repairers-modal.component";

@Component({
  selector: 'app-gsm-repairers',
  templateUrl: './gsm-repairers.component.html',
  styleUrls: ['./gsm-repairers.component.scss']
})
export class GsmRepairersComponent implements OnInit {

  public dataSource = new MatTableDataSource<User>();
  displayedColumns = ['firstname', 'lastname' , 'username', 'phone' ];
  repairers : User[] = [] ;

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
    this.userService.getAllByRole("REPAIRER").subscribe(
      res => {
        this.loading = false ;
        this.repairers = res ;
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
    let toFilterList = [...this.repairers]
    toFilterList = toFilterList.filter(
      repairer => {
        return repairer.username.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || repairer.firstname.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || repairer.lastname.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource.data = toFilterList;
  }

  openModal() {
    const dialogRef = this.dialog.open( GsmRepairersModalComponent, {
      panelClass: 'custom-dialog-container' ,
      width: '600px' ,
      data : { array : this.repairers }
    });
    dialogRef.afterClosed().subscribe(
      res => {
        this.dataSource.data = this.repairers;
      }
    );
  }


}
