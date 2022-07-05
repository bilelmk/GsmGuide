import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  URL = environment.url + "/api/models" ;

  constructor(private http: HttpClient) { }

  add(model): Observable<any> {
    return this.http.post<any>(this.URL , model);
  }

  update(model): Observable<any> {
    return this.http.put<any>(this.URL , model);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.URL + '/' + id);
  }
}
