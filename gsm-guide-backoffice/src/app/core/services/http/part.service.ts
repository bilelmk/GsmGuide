import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Part } from "../../models/part";


@Injectable({
  providedIn: 'root'
})
export class PartService {

  URL = environment.url + "api/parts" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Part[]> {
    return this.http.get<Part[]>(this.URL);
  }

  add(part: Part): Observable<Part> {
    return this.http.post<Part>(this.URL  , part);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
