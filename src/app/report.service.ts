import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from './models/report';
@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private apiserver="http://localhost:55225/api/report";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getreport(subid:number,email:string|null): Observable<Report[]> {
    return this.httpClient.get<Report[]>(this.apiserver + '/' + email+'/'+subid) 
  }
  createreport(report:Report): Observable<Report> {
    return this.httpClient.post<Report>(this.apiserver,JSON.stringify(report),
     this.httpOptions)
  }
}
