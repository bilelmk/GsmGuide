import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../../../../core/services/in-app/spinner.service';
import { ToastService } from '../../../../core/services/in-app/toast.service';
import { ModalController, Platform } from '@ionic/angular';
import { ProductService } from '../../../../core/services/http/product.service';
import { Crop } from '@ionic-native/crop/ngx';
import { File as NativeFile } from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-gsm-main-products-add',
  templateUrl: './gsm-main-products-add.component.html',
  styleUrls: ['./gsm-main-products-add.component.scss'],
})
export class GsmMainProductsAddComponent implements OnInit {

  form: FormGroup;

  image ;
  imageSrc ;

  data: FormData ;

  constructor(private formBuilder: FormBuilder ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService,
              private modalController: ModalController,
              private productService: ProductService,
              private crop: Crop ,
              private platform: Platform ,
              private camera: Camera,
              private file: NativeFile) {
    this.form = this.formBuilder.group({
      name   : ['', [Validators.required]],
      description: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
    });
  }

  ngOnInit() {}

  close() {
    this.modalController.dismiss();
  }

  async add() {
    const product = {
      ... this.form.value ,
      client : {id: sessionStorage.getItem('id')}
    };
    this.data.append('product' , new Blob([JSON.stringify(product)], {type: 'application/json'}));
    this.spinnerService.activate();
    this.productService.add(this.data).subscribe(
      res => {
        this.spinnerService.deactivate();
        alert(JSON.stringify(res));
      }, error => {
        this.spinnerService.deactivate();
        alert(JSON.stringify(error));
      }
    );
  }

  // Change Profile Photo
  onPickImage(){
    const cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL ,
        quality: 70,
        allowEdit : false ,
        targetWidth: 600,
        targetHeight: 600,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true ,
        mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions)
        .then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            this.imageSrc = base64Image.toString() ;
            this.data = new FormData() ;
            const file =  this.dataURItoBlob(base64Image);
            this.data.append('image' , file) ;
        }, (err) => {
    });
  }

  onCancelImage(){
    // this.image =  null ;
  }

  dataURItoBlob(dataURI) {
      const byteString = atob(dataURI.split(',')[1]);
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      return new Blob([ab], {type: mimeString});
  }
}
