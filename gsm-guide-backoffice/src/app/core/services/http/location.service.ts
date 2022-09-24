import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  URL = environment.url + "/locations";

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<any>(this.URL);
  }

  add(location): Observable<any> {
    return this.http.post<any>(this.URL, location);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }
}
