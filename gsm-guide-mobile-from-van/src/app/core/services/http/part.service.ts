import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Part } from '../../classes/part';


@Injectable({
  providedIn: 'root'
})
export class PartService {

  URL = environment.url + 'parts' ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Part[]> {
    return this.http.get<Part[]>(this.URL);
  }
}
