import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { LoginRequest } from '../../dtos/login-request';
import { environment } from "../../../../environments/environment";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  URL = environment.url + "api/admins" ;
  private tokenTimer: any ;

  constructor(private http: HttpClient,
              private router: Router) { }

  getAll(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.URL);
  }

  register(admin: Admin): Observable<Admin> {
    return this.http.post<Admin>(this.URL  + '/register' , admin);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }

  login(loginRequest: LoginRequest): Observable<any> {
    return this.http.post<any>(this.URL + '/login' , loginRequest);
  }

  setAuthTimer(duration: number) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000 );
  }

  logout() {
    sessionStorage.clear() ;
    this.router.navigate(['/'])
  }
}
