import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gsm-intro',
  templateUrl: './gsm-intro.page.html',
  styleUrls: ['./gsm-intro.page.scss'],
})
export class GsmIntroPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400,
  };

  constructor() { }

  ngOnInit() {
  }

}
