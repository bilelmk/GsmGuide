import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarkService {

  URL = environment.url + "/marks" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  add(mark): Observable<any> {
    return this.http.post<any>(this.URL , mark);
  }

  update(mark): Observable<any> {
    return this.http.put<any>(this.URL , mark);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.URL + '/' + id);
  }
}
