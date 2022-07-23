import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Actuality } from '../../classes/actuality';

@Injectable({
  providedIn: 'root'
})
export class ActualityService {

  URL = environment.url + 'api/actualities' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Actuality[]> {
    return this.http.get<Actuality[]>(this.URL);
  }

}
