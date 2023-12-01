import { Component, OnInit } from '@angular/core';
import { StudentHttpServiceService } from '../student-http-service.service';
import { Router } from '@angular/router';
import { Student } from '../Student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: Student[] | undefined;
  
  constructor(private studentService: StudentHttpServiceService,
    private router: Router){}
    ngOnInit(): void {
      this.getStudentList();
    }
  
  private getStudentList()
  {
    this.studentService.getAllStudentList().subscribe(data=>{
      this.students=data;
    });
  }
  updateStudent(id:number)
  {
  this.router.navigate(['update-student',id]);
  }
  deleteStudent(id:number)
  {
  this.studentService.deleteStudent(id).subscribe(data=>{
    console.log(data);
    this.reloadComponent();
  },
  error=>console.log(error));
  }
  
  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-student']);
  }

  goBack()
   {
    window.history.back();
  }
  }