import { Component, OnInit } from '@angular/core';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-main',
  templateUrl: './gsm-main.page.html',
  styleUrls: ['./gsm-main.page.scss'],
})
export class GsmMainPage implements OnInit {

  role = '' ;
  constructor(private usersService: UserService) {
    usersService.role.subscribe(
        res => this.role = res
    );
  }

  ngOnInit() {
  }

}
