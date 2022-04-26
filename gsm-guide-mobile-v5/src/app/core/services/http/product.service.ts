import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Product } from "../../classes/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product> {
    return this.http.get<Product>(environment.url + 'products');
  }

  add(data: any): Observable<Product[]> {
    return this.http.post<Product[]>(environment.url + 'products' , data);
  }
}
