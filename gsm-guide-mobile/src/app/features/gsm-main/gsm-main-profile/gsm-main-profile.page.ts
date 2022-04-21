import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../core/services/http/authentication.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ToastService} from '../../../core/services/in-app/toast.service';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import {UserService} from "../../../core/services/http/user.service";

@Component({
  selector: 'app-gsm-main-profile',
  templateUrl: './gsm-main-profile.page.html',
  styleUrls: ['./gsm-main-profile.page.scss'],
})
export class GsmMainProfilePage implements OnInit {

  client = null;
  language;
  image;
  url = environment.url;

  constructor(private authenticationService: AuthenticationService,
              private userService: UserService,
              private spinnerService: SpinnerService,
              private toastService: ToastService,
              private alertController: AlertController,
              private modalController: ModalController,
              private platform: Platform,
              // private camera: Camera,
              private router: Router,
              // private crop: Crop ,
              // private file: File
  ) {
  }


  ngOnInit() {
    this.spinnerService.activate();
    this.userService.getById(Number(sessionStorage.getItem('id'))).subscribe(
        res => {
          this.client = res;
          this.spinnerService.deactivate();
        },
        error => {
          this.spinnerService.deactivate();
          console.log(error);
        }
    );
  }

  // async openGeneralInformationModal() {
  //   const modal = await this.modalController.create({
  //     component: ProfileGeneralInformationsPage,
  //     componentProps: {
  //       client : this.client
  //     }
  //   });
  //   modal.onDidDismiss().then(
  //       client => {
  //         if (client) {
  //           this.client = client.data.client ;
  //         }
  //       }
  //   ).catch(
  //       err => console.log(err)
  //   );
  //   return await modal.present();
  // }


  // // Change Profile Photo
  // onPickImage(){
  //   const cameraOptions = {
  //     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
  //     destinationType: this.camera.DestinationType.FILE_URI ,
  //     allowEdit : false ,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     correctOrientation: true ,
  //     mediaType: this.camera.MediaType.PICTURE,
  //   };
  //
  //   this.camera.getPicture(cameraOptions)
  //       .then((fileUri) => {
  //         this.crop.crop(fileUri , { quality: 5 })
  //             .then(
  //                 newImage => {
  //                   let image = newImage.split('?')[0]
  //                   let splitPath = image.split('/');
  //                   let imageName = splitPath[splitPath.length - 1];
  //                   let filePath = image.split(imageName)[0];
  //                   this.file.readAsDataURL(filePath, imageName).then(
  //                       base64 => {
  //                         this.image =  base64 ;
  //                         this.profile_image = base64
  //                       }, error => {
  //                         console.log(error) ;
  //
  //                       });
  //                 } ,
  //                 error => {
  //                   this.onCancelImage()
  //                   console.log(error)
  //                 }
  //             );
  //       }, (error) => {
  //         this.onCancelImage()
  //         console.log(error)
  //       });
  // }
  //
  // onSaveImage(){
  //   this.loadingService.activate() ;
  //   this.clientService.editImage( this.profile_image , this.client.seq ).subscribe(
  //       res => {
  //         this.client.image = this.profile_image ;
  //         this.image = null ;
  //         this.loadingService.deactivate();
  //       } ,
  //       err => {
  //         console.log(err)
  //         this.toastService.presentToast(this.incompatible_image , 'fail-toast')
  //         this.loadingService.deactivate();
  //       }
  //   );
  // }
  //
  // onCancelImage() {
  //   this.image =  null ;
  // }

  onSetMode() {
    // this.themeService.toggleAppTheme() ;
  }

  async onDeleteAccount() {
    // const alert = await this.alertController.create({
    //   header: this.attention ,
    //   message: this.confirm_account_delete ,
    //   cssClass: 'custom-alert',
    //   buttons: [
    //     {
    //       text: this.cancel,
    //       role: 'cancel',
    //     },
    //     {
    //       text: this.confirm,
    //       handler: () => {
    //         this.deleteAccount() ;
    //       }
    //     }
    //   ]
    // });
    // await alert.present();
  }

  deleteAccount() {
    // this.loadingService.activate() ;
    // this.clientService.deleteAccount().subscribe(
    //     res => {
    //       this.loadingService.deactivate() ;
    //
    //       this.authService.logout()
    //     },
    //     err => {
    //       this.loadingService.deactivate() ;
    //       console.log(err)
    //     }
    // )
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/gsm-login']);
  }

  toReservations() {
    this.router.navigate(['/cb-main/cb-main-reservations']);
  }

  toFavoris() {
    this.router.navigate(['/cb-main/cb-main-favoris']);
  }
}
