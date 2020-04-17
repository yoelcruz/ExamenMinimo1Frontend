import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from './subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient
  ) { }

  getSusbjects(): Observable<Subject[]>{
    return this.http.get<Subject[]>('http://localhost:3800/subjects');
  }
}
