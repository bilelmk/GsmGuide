import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { SpinnerService } from "../../core/services/in-app/spinner.service";
import { SnackbarService } from "../../core/services/in-app/snackbar.service";
import { AdminsService } from "../../core/services/http/admins.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-gsm-login',
  templateUrl: './gsm-login.component.html',
  styleUrls: ['./gsm-login.component.scss']
})
export class GsmLoginComponent implements OnInit {

  loginForm: FormGroup;
  errors ;

  constructor(private formBuilder: FormBuilder ,
              private router: Router ,
              private spinnerService: SpinnerService ,
              private snackbarService: SnackbarService ,
              private adminsService: AdminsService ,
              private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('assets/other/errors.json').subscribe((data : any) => {
      this.errors = data;
    });

    this.loginForm = this.formBuilder.group({
      username   : ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    this.spinnerService.activate()
    let authRequest = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    }
    this.adminsService.login(authRequest).subscribe(
      res => {
        console.log(res)
        // save data in browser
        sessionStorage.setItem('token' , res.token) ;
        // sessionStorage.setItem('admin' , JSON.stringify({firstname : res.admin.firstname , lastname : res.admin.lastname }));
        sessionStorage.setItem('id' , res.id) ;
        this.spinnerService.deactivate() ;
        this.snackbarService.openSnackBar("Connecté avec succès" , 'success')
        this.router.navigate(['/main'])
      },
      error => {
        console.log(error.error)
        this.spinnerService.deactivate()
        if(error.error == "wrong password") {
          this.snackbarService.openSnackBar("Mot de passe incorrect" , 'fail')
        }
        // if(error.error == "account deactivated") {
        //   this.snackbarService.openSnackBar("Votre compte a été bloqué, vous pouvez contacter l'administration", 'fail')
        // }
        if(error.error == "wrong username") {
          this.snackbarService.openSnackBar("Nom d'utilisateur incorrect", 'fail')
        } else {
          this.snackbarService.openSnackBar("Erreur serveur", 'fail')
        }
      }
    )
  }

}
