import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  URL = environment.url + 'requests' ;

  constructor(private http: HttpClient) { }

  add(request): Observable<any> {
    return this.http.post<any>(this.URL , request);
  }
}
