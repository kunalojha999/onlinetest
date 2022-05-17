import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './models/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiserver="http://localhost:55225/api/question";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
  getById(subid:number): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.apiserver + '/' + subid) 
  }
  create(ques:Question): Observable<Question> {
    return this.httpClient.post<Question>(this.apiserver,JSON.stringify(ques),
     this.httpOptions)
  }
  delete(id:number){
    return this.httpClient.delete<Question>(this.apiserver+'/' + id, this.httpOptions)
  }
}
