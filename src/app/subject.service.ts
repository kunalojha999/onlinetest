import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subjectt } from './models/subject';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiserver="http://localhost:55225/api/subject";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<Subjectt[]>{
    return this.httpClient.get<Subjectt[]>(this.apiserver);
  }
}
