import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  URL = environment.url + "api/prices";

  constructor(private http: HttpClient) {
  }

  getByArticle(id): Observable<any> {
    return this.http.get<any>(this.URL + '/' + id);
  }

  addOrUpdate(price): Observable<any> {
    return this.http.post<any>(this.URL, price);
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.URL + '/' + id);
  }

  getAllByArticleAndPart(articleId, partId): Observable<any> {
    return this.http.get<any>(this.URL + '/' + articleId + '/' + partId);
  }
}
