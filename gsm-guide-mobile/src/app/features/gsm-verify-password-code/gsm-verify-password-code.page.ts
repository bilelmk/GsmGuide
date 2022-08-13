import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpinnerService } from '../../core/services/in-app/spinner.service';
import { ToastService } from '../../core/services/in-app/toast.service';
import { UserService } from '../../core/services/http/user.service';

@Component({
  selector: 'app-gsm-verify-password-code',
  templateUrl: './gsm-verify-password-code.page.html',
  styleUrls: ['./gsm-verify-password-code.page.scss'],
})
export class GsmVerifyPasswordCodePage {

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
    this.userService.verifyPassowrdCode(this.form.value).subscribe(
        res => {
          this.router.navigate(['/cb-reset-password/' , res.clientId]);
          this.toastService.show('Code vérifié avec succès' , 'success') ;
          this.spinnerService.deactivate() ;
        }, error => {
          console.log(error);
          this.spinnerService.deactivate() ;
          this.toastService.show('Erreur du serveur' , 'danger');
        });
  }
}
