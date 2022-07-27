import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { RegisterRequest } from '../../core/dtos/register-request';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-register',
  templateUrl: './gsm-register.page.html',
  styleUrls: ['./gsm-register.page.scss'],
})
export class GsmRegisterPage implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private userService: UserService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      firstname   : ['', [Validators.required]],
      lastname: ['', Validators.required],
      username   : ['', [Validators.required]],
      password: ['', Validators.required],
      phone   : ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  onRegister() {
    this.spinnerService.activate() ;
    const request: RegisterRequest = { ...this.form.value , role : 'CLIENT' };
    this.userService.register(request).subscribe(
        res => {
          this.router.navigate(['/login']);
          this.toastService.show('Votre compte à été créé avec succès' , 'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          this.spinnerService.deactivate() ;
          if (error.error === 'username exist') {
            this.toastService.show('Ce nom d\'utilisateur existe déjà' , 'danger');
            // } else if (error.error.message === 'wrong password') {
            //   this.toastService.show('Mot de passe incorrect' ,'danger');
            // } else if (error.error.message === 'phone not verified') {
            //   this.toastService.show('Numéro de téléphone n\'est pas verifié' ,'danger');
          } else {
            this.toastService.show('Erreur du serveur' , 'danger');
          }
        });
  }
}
