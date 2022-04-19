import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../core/services/http/authentication.service';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { LoginRequest } from '../../core/dtos/login-request';

@Component({
  selector: 'app-gsm-login',
  templateUrl: './gsm-login.page.html',
  styleUrls: ['./gsm-login.page.scss'],
})
export class GsmLoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private authenticationService: AuthenticationService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.loginForm = this.formBuilder.group({
      email   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    // this.spinnerService.activate() ;
    const request: LoginRequest = {
      email: this.loginForm.value.email ,
      password: this.loginForm.value.password
    };

    this.router.navigate(['/gsm-main']);

    // this.authenticationService.signin(request).subscribe(
    //     res => {
    //       sessionStorage.setItem('token' , res.token);
    //       sessionStorage.setItem('expiresIn' , res.expiresIn);
    //       this.toastService.show('Vous êtes connecté avec succès' , 'success') ;
    //       this.spinnerService.deactivate() ;
    //       this.router.navigate(['/gsm-main']);
    //     }, error => {
    //       this.spinnerService.deactivate() ;
    //       if (error.error.message === 'wrong phone number') {
    //         this.toastService.show('Numéro de téléphone incorrect' , 'danger');
    //       } else if (error.error.message === 'wrong password') {
    //         this.toastService.show('Mot de passe incorrect' , 'danger');
    //       } else if (error.error.message === 'phone not verified') {
    //         this.toastService.show('Numéro de téléphone n\'est pas verifié' , 'danger');
    //       } else {
    //         this.toastService.show('Erreur du serveur' , 'danger');
    //       }
    //     });
  }
}
