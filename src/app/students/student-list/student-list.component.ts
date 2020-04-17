import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from '../student';
import { Student1 } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  public students: Student[] = [];
  public student: Student;
  public student1: Student;


  constructor(
    private studentService: StudentService
  ) { 
    /* this.student1 = new Student1("","","",""); */
  }

  ngOnInit(): void {
    console.log('Componente de register cargado...');
    this.setStudies(['telecos']);
  }
  setStudies(studies: string[]){
    this.studentService.getByStudies(studies).subscribe((students) => {
      this.students = students;
    });
  }

  onSubmit(form){
		this.studentService.postStudient(this.student).subscribe(
			response => {
				console.log(response); //puesto por mi para comprobar que respuesta me da el servidor
				/* if(response.student && response.user._id){
					console.log(response.user);
					
					this.status = 'success';
					form.reset();
				}else{
					this.status = 'error';
				}

			},
			error => {
				console.log(<any>error); */
			}
		);
	}

}
