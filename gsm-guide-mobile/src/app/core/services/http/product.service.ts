import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Product } from '../../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL = environment.url + 'api/products' ;

  constructor(private http: HttpClient) {}

  search(request): Observable<Product[]> {
    return this.http.post<Product[]>(this.URL + '/search' , request);
  }

  getById(request): Observable<Product[]> {
    return this.http.post<Product[]>(this.URL + '/client' , request);
  }

  add(data: any): Observable<any> {
    return this.http.post<any>(this.URL , data);
  }
}
