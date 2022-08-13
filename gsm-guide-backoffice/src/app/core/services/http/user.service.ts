import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RegisterRequest } from "../../dtos/register-request";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = environment.url + "api/users" ;

  constructor(private http: HttpClient) {}

  register(request: RegisterRequest): Observable<any> {
    return this.http.post<any>(this.URL, request);
  }

  getAllByRole(role: string): Observable<any> {
    return this.http.get<any>(this.URL + '/role/' + role);
  }

  addClient(client): Observable<any> {
    return this.http.post<any>(this.URL + '/client', client);
  }

  addRepairer(repairer: any) {
    return this.http.post<any>(this.URL + '/repairer', repairer);
  }
}
