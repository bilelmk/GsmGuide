import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-send-passowrd-code',
  templateUrl: './gsm-send-passowrd-code.page.html',
  styleUrls: ['./gsm-send-passowrd-code.page.scss'],
})
export class GsmSendPassowrdCodePage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private userService: UserService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      username   : ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  send() {
    this.spinnerService.activate();
    this.userService.sendPassowrdCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['verify-password-code']);
          this.toastService.show('Code envoyé avec succès' , 'success') ;
          this.spinnerService.deactivate();
        },
        error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          if (error.error === 'client not found') {
            this.toastService.show('Votre nom d\'utilisateur incorrect' , 'danger');
          } else {
            this.toastService.show('Erreur du serveur' , 'danger');
          }
        }
    );
  }
}
