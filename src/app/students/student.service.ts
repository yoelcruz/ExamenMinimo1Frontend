import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  postStudient(studient: Student): Observable<Student>{
    const params = JSON.stringify(studient);
    /* const headers = new HttpHeaders().set('Content-Type', 'application/json'); */


    console.log('studient', params);
    return this.http.post<Student>(`http://localhost:3800/students/create`, params);
  }

  getByStudies(studies: string[]): Observable<Student[]>{
    console.log('studies', studies);
    return this.http.get<Student[]>(`http://localhost:3800/students/?studies=${studies.join(',')}`);
  }
}
