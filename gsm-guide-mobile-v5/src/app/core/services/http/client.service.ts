import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegisterRequest } from '../../dtos/register-request';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(environment.url + 'clients', request);
  }

  getCurrent(): Observable<any> {
    return this.http.get<any>(environment.url + 'clients');
  }
}
