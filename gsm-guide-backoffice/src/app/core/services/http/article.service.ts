import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  URL = environment.url + "/api/articles" ;

  constructor(private http: HttpClient) { }

  add(article): Observable<any> {
    return this.http.post<any>(this.URL , article);
  }

  update(article): Observable<any> {
    return this.http.put<any>(this.URL , article);
  }
}
