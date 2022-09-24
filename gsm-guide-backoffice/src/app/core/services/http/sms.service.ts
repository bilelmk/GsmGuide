import { Injectable } from '@angular/core';
import { environment} from "../../../../environments/environment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SmsService {

  URL = environment.url + "/sms" ;

  constructor(private http: HttpClient) { }

  sendSms(sms): Observable<any> {
    return this.http.post<any>(this.URL , sms);
  }

  sendMultiSms(sms): Observable<any> {
    return this.http.post<any>(this.URL + '/multi' , sms);
  }

  getUsage(): Observable<any> {
    return this.http.get<any>(this.URL + '/usage');
  }
}
