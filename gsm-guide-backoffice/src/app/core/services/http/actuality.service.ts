import { Injectable } from '@angular/core';
import { environment } from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Actuality } from "../../models/actuality";

@Injectable({
  providedIn: 'root'
})
export class ActualityService {

  URL = environment.url + "/actualities" ;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Actuality[]> {
    return this.http.get<Actuality[]>(this.URL);
  }

  delete(id: number) {
    return this.http.delete(this.URL + "/" + id);
  }

  add(actuality: FormData) {
    return this.http.post(this.URL , actuality);
  }

}
