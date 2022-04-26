import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegisterRequest } from "../../dtos/register-request";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { LoginRequest } from "../../dtos/login-request";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'users', request);
  }

  login(request: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'users/login', request);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(environment.url + 'users/' + id);
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/main'])
  }
}
