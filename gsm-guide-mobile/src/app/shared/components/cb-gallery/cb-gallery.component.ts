import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CbGalleryModalComponent } from './cb-gallery-modal/cb-gallery-modal.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cb-gallery',
  templateUrl: './cb-gallery.component.html',
  styleUrls: ['./cb-gallery.component.scss'],
})
export class CbGalleryComponent implements OnInit {

  @Input() images ;
  url = environment.url + 'images/' ;

  slidersOptions = {
    zoom: false ,
    slidesPerView: 1.5 ,
    centredSlides: true ,
    spaceBetween: 10
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  openPreview(image: string | SVGImageElement) {
    this.modalController.create({
      component: CbGalleryModalComponent ,
      componentProps: {
        image
      }
    }).then(modal => modal.present());
  }
}
