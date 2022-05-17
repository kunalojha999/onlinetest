import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,Subject} from 'rxjs';
import { Admin } from './models/admin';


@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  public subject=new Subject<string|null>();
  private apiserver="http://localhost:55225/api/admin/login";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  recievedStatus():Observable<string|null>
  {
    return this.subject.asObservable();
  }
  constructor(private httpClient: HttpClient) { }
  login(admin:Admin): Observable<Admin> {
    return this.httpClient.post<Admin>(this.apiserver,JSON.stringify(admin),
     this.httpOptions)
  }
}
