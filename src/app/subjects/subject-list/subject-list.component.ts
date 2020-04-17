import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Subject } from '../subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  public subjects: Subject[] = [];

  constructor(
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    console.log('hola');
    this.getSubject();
}

  getSubject(){
    this.subjectService.getSusbjects().subscribe((subjects) => {
      this.subjects = subjects;
      console.log('subjects', subjects);
    });
  }
}
