import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  URL = environment.url + 'api/requests' ;

  constructor(private http: HttpClient) { }

  add(request): Observable<any> {
    return this.http.post<any>(this.URL , request);
  }

  getAllByClient(request): Observable<Request[]> {
    return this.http.post<Request[]>(this.URL + '/client' , request);
  }

  getAllByRepairer(request): Observable<Request[]> {
    return this.http.post<Request[]>(this.URL + '/repairer' , request);
  }

  update(request): Observable<Request> {
    return this.http.put<Request>(this.URL , request);
  }
}
