import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { LoginRequest } from '../../core/dtos/login-request';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-login',
  templateUrl: './gsm-login.page.html',
  styleUrls: ['./gsm-login.page.scss'],
})
export class GsmLoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private userService: UserService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.loginForm = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onLogin() {
    this.spinnerService.activate() ;
    const request: LoginRequest = {
      username: this.loginForm.value.username ,
      password: this.loginForm.value.password
    };
    this.userService.login(request).subscribe(
        res => {
          sessionStorage.setItem('token' , res.token);
          sessionStorage.setItem('expiresIn' , res.expiresIn);
          sessionStorage.setItem('id' , res.id);
          sessionStorage.setItem('role' , res.role);
          this.userService.setAuthTimer(res.expiresIn) ;
          this.userService.token.next(true) ;
          this.userService.role.next(res.role) ;
          this.toastService.show('Vous êtes connecté avec succès' , 'success') ;
          this.spinnerService.deactivate() ;
          this.router.navigate(['/gsm-main']);
        }, error => {
          this.spinnerService.deactivate() ;
          if (error.error === 'wrong username') {
            this.toastService.show('Nom d\'utilisateur incorrect' , 'danger');
          } else if (error.error === 'wrong password') {
            this.toastService.show('Mot de passe incorrect' , 'danger');
          } else if (error.error === 'blocked') {
            this.toastService.show('Votre compte est bloqué' , 'danger');
          } else {
            this.toastService.show('Erreur du serveur' , 'danger');
          }
        });
  }
}
