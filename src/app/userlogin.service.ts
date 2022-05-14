import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from,Observable,Subject} from 'rxjs';
import { Userlogin } from './models/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  public subject=new Subject<string|null>();
  private apiserver="http://localhost:55225/api/user/login";
  private apiserver2="http://localhost:55225/api/user";
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
  login(userlogin:Userlogin): Observable<Userlogin> {
    return this.httpClient.post<Userlogin>(this.apiserver,JSON.stringify(userlogin),
     this.httpOptions)
  }
  changepassword(userlogin:Userlogin): Observable<Userlogin> {
    return this.httpClient.put<Userlogin>(this.apiserver2,JSON.stringify(userlogin),
     this.httpOptions)
  }
}
