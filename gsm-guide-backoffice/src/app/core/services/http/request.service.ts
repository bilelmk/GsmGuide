import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  URL = environment.url + "/api/requests" ;

  constructor(private http: HttpClient) { }

  getAll(request): Observable<Request[]> {
    return this.http.post<Request[]>(this.URL + '/search' , request);
  }

  update(request): Observable<Request> {
    return this.http.put<Request>(this.URL , request);
  }
}
