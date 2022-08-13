import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../dtos/register-request';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { LoginRequest } from '../../dtos/login-request';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token = new BehaviorSubject(null);
  role = new BehaviorSubject(null);
  private tokenTimer: any ;

  URL = environment.url + 'api/users' ;

  constructor(private http: HttpClient, private router: Router) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(this.URL , request);
  }

  login(request: LoginRequest): Observable<any> {
    return this.http.post<any>(this.URL + '/login', request);
  }

  verifyPassowrdCode(code) {
    return this.http.post<any>(environment.url + 'api/verify-reset-password-code', code);
  }

  sendPassowrdCode(username) {
    return this.http.post<any>(environment.url + 'api/forget-password', username);
  }

  resetPassword(request: { password: any; code: string }) {
    return this.http.post<any>(environment.url + 'api/reset-password', request);
  }

  verifyConfirmCode(code) {
    return this.http.post<any>(environment.url + 'api/verify-confirm-code', code);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(this.URL + '/' + id);
  }

  update(user): Observable<any> {
    return this.http.put<any>(this.URL , user);
  }

  updateImage(data): Observable<any> {
    return this.http.put<any>(this.URL + '/image', data);
  }

  logout(){
    sessionStorage.clear();
    this.token.next(null) ;
    this.role.next(null ) ;
    this.router.navigate(['/main']);
  }

  setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000 );
  }
}
