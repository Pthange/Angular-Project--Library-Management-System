import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentHttpServiceService } from '../student-http-service.service';
import { Student } from '../Student';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrls: ['./studentupdate.component.css']
})
export class StudentupdateComponent implements OnInit{

  student:Student=new Student();
  id!:number;

constructor(private studentService: StudentHttpServiceService,
  private router: Router,
  private route:ActivatedRoute){}

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   //console.log('Student ID:', this.id);
   this.studentService.getStudentById(this.id).subscribe(data=>{
   this.student =data;
   
   console.log('Fetched Student Data:', this.student);
   console.log(data);
   },
   error=>console.log(error));
  }

  onSubmit()
  {
   this.studentService.updateStudent(this.id,this.student).subscribe(data=>{
  console.log(data);
 
  this.goTostudentList();
  
  this.router.navigate(['thanks']);
},
error=>console.log(error));
  }

  goTostudentList()
  {
    this.router.navigate(['/get-student']);
  }
  goBack()
  {
   window.history.back();
 }
}

