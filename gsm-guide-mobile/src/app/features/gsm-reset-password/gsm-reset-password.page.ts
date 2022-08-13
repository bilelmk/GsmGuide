import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-reset-password',
  templateUrl: './gsm-reset-password.page.html',
  styleUrls: ['./gsm-reset-password.page.scss'],
})
export class GsmResetPasswordPage {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private userService: UserService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService,
              private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  send() {
    const request = {
      code: this.route.snapshot.paramMap.get('code'),
      password: this.form.value.password
    };
    this.spinnerService.activate();
    this.userService.resetPassword(request).subscribe(
        res => {
          this.router.navigate(['login']);
          this.toastService.show('Mot de passe changé avec succès' , 'success') ;
          this.spinnerService.deactivate();
        },
        error => {
          this.toastService.show('Erreur du serveur' , 'danger');
          this.spinnerService.deactivate();
        }
    );
  }

}
