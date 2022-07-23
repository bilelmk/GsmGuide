import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {

  @Input() actualities: any ;
  url = environment.url ;

  slidesOpts = {
    zoom: false ,
    centredSlides: true ,
    spaceBetween: 20
  };

  constructor() { }

  ngOnInit() {}

}
