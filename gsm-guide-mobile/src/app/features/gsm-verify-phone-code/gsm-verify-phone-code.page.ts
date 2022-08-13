import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-verify-phone-code',
  templateUrl: './gsm-verify-phone-code.page.html',
  styleUrls: ['./gsm-verify-phone-code.page.scss'],
})
export class GsmVerifyPhoneCodePage {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private userService: UserService ,
              private spinnerService: SpinnerService ,
              private toastService: ToastService
  ) {
    this.form = this.formBuilder.group({
      code   : ['', [Validators.required]],
    });
  }

  onVerifyCode() {
    this.spinnerService.activate() ;
    this.userService.verifyConfirmCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['/login']);
          this.toastService.show('Code vérifié avec succès' , 'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          console.log(error);
          if (error.error === 'code incorrect') {
            this.toastService.show('Votre code est incorrect ou épuisé' , 'danger');
          } else {
            this.toastService.show('Erreur du serveur' , 'danger');
          }
          this.spinnerService.deactivate() ;
        });
  }
}
