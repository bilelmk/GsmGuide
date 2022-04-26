import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../../../../core/services/http/user.service";
import {SpinnerService} from "../../../../core/services/in-app/spinner.service";
import {ToastService} from "../../../../core/services/in-app/toast.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-gsm-main-requests-add',
  templateUrl: './gsm-main-requests-add.component.html',
  styleUrls: ['./gsm-main-requests-add.component.scss'],
})
export class GsmMainRequestsAddComponent implements OnInit {

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
