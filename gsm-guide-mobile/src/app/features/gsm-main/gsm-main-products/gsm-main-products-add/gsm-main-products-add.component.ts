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

  // image ;
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
      status: ['', Validators.required],
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
        this.toastService.show('Produit publier avec succès' , 'success') ;
        this.modalController.dismiss();
        this.spinnerService.deactivate();
      }, error => {
        this.toastService.show('Erreur lors de l\'ajout de produit' , 'danger');
        this.spinnerService.deactivate();
      }
    );
  }

  // Change Profile Photo
  onPickImage(){
    const cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI ,
        quality: 70,
        allowEdit : false ,
        targetWidth: 600,
        targetHeight: 600,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true ,
        mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions)
      .then((fileUri) => {
          this.crop.crop(fileUri , { quality: 5 })
              .then(
                  newImage => {
                      const image = newImage.split('?')[0];
                      const splitPath = image.split('/');
                      const imageName = splitPath[splitPath.length - 1];
                      const filePath = image.split(imageName)[0];
                      this.file.readAsDataURL(filePath, imageName).then(
                          base64 => {
                              this.imageSrc = base64;
                              this.data = new FormData() ;
                              this.data.append('image' , this.dataURItoBlob(base64) ) ;
                              console.log(base64) ;
                          }, error => {
                              console.log(error) ;
                          });
                  } ,
                  error => {
                      this.onCancelImage();
                      console.log(error);
                  }
              );
      }, (error) => {
          this.onCancelImage();
          console.log(error);
      });
  }

  //   this.camera.getPicture(cameraOptions)
  //       .then((imageData) => {
  //           const base64Image = 'data:image/jpeg;base64,' + imageData;
  //           this.imageSrc = base64Image.toString() ;
  //           this.data = new FormData() ;
  //           const file =  this.dataURItoBlob(base64Image);
  //           this.data.append('image' , file) ;
  //       }, (err) => {
  //   });
  // }

  onCancelImage(){
    this.imageSrc =  null ;
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
