import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";

@Component({
  selector: 'app-gsm-main-home',
  templateUrl: './gsm-main-home.page.html',
  styleUrls: ['./gsm-main-home.page.scss'],
})
export class GsmMainHomePage implements OnInit {

  constructor(private menu : MenuController) { }

  ngOnInit() {
  }

  onToggleMenu(name : string) {
    this.menu.open(name);
  }

}
