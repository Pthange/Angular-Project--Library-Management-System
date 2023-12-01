import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentHttpServiceService } from '../student-http-service.service';
import { Student } from '../Student';

@Component({
  selector: 'app-studentcreate',
  templateUrl: './studentcreate.component.html',
  styleUrls: ['./studentcreate.component.css']
})
export class StudentcreateComponent implements OnInit{

  student:Student=new Student();

  constructor(private studentService: StudentHttpServiceService,
    private router:Router){}
  ngOnInit(): void {
    
  }
saveStudent(){
this.studentService.createStudent(this.student).subscribe(data=>{
  console.log(data);
  this.goToStudentList();
  this.router.navigate(['thanks']);
})
}

goToStudentList()
{
this.router.navigate(['/get-student']);
}

onSubmit()
{
this.saveStudent();
}

  goBack()
   {
    window.history.back();
  }
}