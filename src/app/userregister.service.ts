import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class UserregisterService {
  private apiserver="http://localhost:55225/api/user";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  create(user:User): Observable<User> {
    return this.httpClient.post<User>(this.apiserver,JSON.stringify(user),
     this.httpOptions)
  }
}
