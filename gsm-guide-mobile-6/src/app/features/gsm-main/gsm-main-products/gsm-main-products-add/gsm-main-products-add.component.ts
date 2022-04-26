import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { ToastService } from "../../../../core/services/in-app/toast.service";
import { ModalController } from "@ionic/angular";
import {Camera, CameraResultType} from "@capacitor/camera";
import {Filesystem} from "@capacitor/filesystem";
import {ProductService} from "../../../../core/services/http/product.service";

@Component({
  selector: 'app-gsm-main-products-add',
  templateUrl: './gsm-main-products-add.component.html',
  styleUrls: ['./gsm-main-products-add.component.scss'],
})
export class GsmMainProductsAddComponent implements OnInit {

  form: FormGroup;

  image ;
  imageSrc ;

  constructor(private formBuilder: FormBuilder ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService,
              private modalController: ModalController,
              private productService: ProductService,) {
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
    const realImage = await Filesystem.readFile({
      path: this.image.path
    });
    const data = new FormData() ;
    alert(JSON.stringify(realImage.data))
    data.append('image' , this.base64ToFile(realImage.data) )
    data.append('product' , JSON.stringify(this.form.value))
    this.spinnerService.activate();
    this.productService.add(data).subscribe(
      res => {
        this.spinnerService.deactivate();
        alert(JSON.stringify(res))
      },error => {
        this.spinnerService.deactivate();
        alert(JSON.stringify(error))
      }
    )
    this.spinnerService.activate() ;
  }

  pickImage = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    this.imageSrc = image.webPath;
    this.image = image;
  };


  public base64ToFile(data) {
    const rawData = atob(data);
    const bytes = new Array(rawData.length);
    for (var x = 0; x < rawData.length; x++) {
      bytes[x] = rawData.charCodeAt(x);
    }
    const arr = new Uint8Array(bytes);
    return new Blob([arr], {type: 'image/png'});

    // const arr = data.split(',');
    // const mime = arr[0].match(/:(.*?);/)[1];
    // const bstr = atob(arr[1]);
    // let n = bstr.length;
    // let u8arr = new Uint8Array(n);
    // while(n--){
    //   u8arr[n] = bstr.charCodeAt(n);
    // }
    // return new File([u8arr], 'test.jpeg', { type: mime });
  }

}
