import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/http/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private router: Router ,
              private usersService: UserService) { }

  ngOnInit() {}

  navigate(location: string) {
    this.router.navigate([location]) ;
  }

  logout() {
    this.usersService.logout() ;
  }
}
