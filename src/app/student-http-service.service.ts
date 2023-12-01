import { Injectable, Type } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from './Student';

@Injectable({
  providedIn: 'root'
})
export class StudentHttpServiceService {
  private addStudent="http://localhost:8087/api/createStudent";
  private getStudents="http://localhost:8087/api/getAllStudents";
  private getStudById="http://localhost:8087/api/getStudentById";
  private editStudent="http://localhost:8087/api/updateStudent";
  private delStud="http://localhost:8087/api/deleteStudent";
    constructor(private httpClient:HttpClient) { }
  
  
    createStudent(student:Student):Observable<Object>
    {
  
      return this.httpClient.post(`${this.addStudent}`,student);
    }
  
    getAllStudentList():Observable<Student[]>
    {
      return this.httpClient.get<Student[]>(`${this.getStudents}`);
    }
  
    getStudentById(id:number):Observable<Student>
    {
      return this.httpClient.get<Student>(`${this.getStudById}/${id}`);
    }
   
    
    updateStudent(id:number,student:Student):Observable<Object>
    {
      
      return this.httpClient.put(`${this.editStudent}/${id}`,student);
    }
    deleteStudent(id:number):Observable<Object>
    {
      return this.httpClient.delete(`${this.delStud}/${id}`);
    }
  }
  