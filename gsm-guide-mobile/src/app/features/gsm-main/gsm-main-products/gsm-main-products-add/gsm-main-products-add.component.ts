import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SpinnerService } from "../../../../core/services/in-app/spinner.service";
import { ToastService } from "../../../../core/services/in-app/toast.service";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-gsm-main-products-add',
  templateUrl: './gsm-main-products-add.component.html',
  styleUrls: ['./gsm-main-products-add.component.scss'],
})
export class GsmMainProductsAddComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService,
              private modalController: ModalController ) {
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

}
