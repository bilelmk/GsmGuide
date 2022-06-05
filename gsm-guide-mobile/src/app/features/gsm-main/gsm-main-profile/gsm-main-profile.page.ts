import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ToastService} from '../../../core/services/in-app/toast.service';
import {AlertController, MenuController, ModalController, Platform} from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/http/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Crop } from '@ionic-native/crop/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { File as NativeFile } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-gsm-main-profile',
  templateUrl: './gsm-main-profile.page.html',
  styleUrls: ['./gsm-main-profile.page.scss'],
})
export class GsmMainProfilePage {

  client = null;
  language;
    URL = environment.url ;
  form: FormGroup;

  // image ;
  imageSrc ;
  data: FormData ;

  constructor(private userService: UserService,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private alertController: AlertController,
              private modalController: ModalController,
              private platform: Platform,
              private file: NativeFile ,
              private router: Router,
              private crop: Crop ,
              private camera: Camera,
              private formBuilder: FormBuilder ,
              private menu: MenuController,
  ) {
    this.form = this.formBuilder.group({
      firstname   : ['', [Validators.required]],
      lastname: ['', Validators.required],
      username   : ['', [Validators.required]],
      phone   : ['', [Validators.required]],
    });
  }


  ionViewWillEnter() {
    this.spinnerService.activate();
    this.userService.getById(Number(sessionStorage.getItem('id'))).subscribe(
        res => {
          this.client = res;
          this.form.controls.firstname.setValue(this.client.firstname);
          this.form.controls.lastname.setValue(this.client.lastname);
          this.form.controls.username.setValue(this.client.username);
          this.form.controls.phone.setValue(this.client.phone);

          this.spinnerService.deactivate();
        },
        error => {
          this.spinnerService.deactivate();
          console.log(error);
        }
    );
  }

  onToggleMenu(name: string) {
      this.menu.open(name);
  }

  update() {
      this.spinnerService.activate();
      const user = {
          ...this.form.value ,
          id : sessionStorage.getItem('id')
      };
      this.userService.update(user).subscribe(
          res => {
              this.client = res;
              this.toastService.show('Modifications sauvgarder avec succès' , 'success') ;
              this.spinnerService.deactivate();
          },
          error => {
              this.toastService.show('Erreur lors de la mise à jour' , 'danger');
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

    onSaveImage() {
        const user = {
            id : sessionStorage.getItem('id')
        };
        this.data.append('user' , new Blob([JSON.stringify(user)], {type: 'application/json'}));
        this.spinnerService.activate() ;
        this.userService.updateImage( this.data ).subscribe(
            res => {
              this.client.image = res.image ;
              this.onCancelImage();
              this.spinnerService.deactivate();
            } ,
            err => {
              // this.toastService.presentToast(this.incompatible_image , 'fail-toast')
              this.spinnerService.deactivate();
            }
        );
    }

}
