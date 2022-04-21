import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegisterRequest } from "../../dtos/register-request";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { LoginRequest } from "../../dtos/login-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'users', request);
  }

  login(request: LoginRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'users/login', request);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(environment.url + 'users/' + id);
  }
}
