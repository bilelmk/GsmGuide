import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../../models/admin';
import { LoginRequest } from '../../dtos/login-request';
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  URL = environment.url + "/api/admins" ;

  constructor(private http: HttpClient) { }

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

}
