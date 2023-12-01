import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class AdminHttpServiceService {
  private addAdmin = "http://localhost:8087/api/createAdmin";
  private getAdmins = "http://localhost:8087/api/getAllAdmins";
  private getAdminsById = "http://localhost:8087/api/getAdminById";
  private editAdmin = "http://localhost:8087/api/updateAdmin";
  private delAdmin = "http://localhost:8087/api/deleteAdmin";

  constructor(private httpClient: HttpClient) { }

  createAdmin(admin: Admin): Observable<Object> {
    return this.httpClient.post(`${this.addAdmin}`, admin);
  }

  getAllAdminList(): Observable<Admin[]> {
    return this.httpClient.get<Admin[]>(`${this.getAdmins}`);
  }

  getAdminById(id: number): Observable<Admin> {
    return this.httpClient.get<Admin>(`${this.getAdminsById}/${id}`);
  }

  updateAdmin(id: number, admin: Admin): Observable<Object> {
    return this.httpClient.put(`${this.editAdmin}/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delAdmin}/${id}`);
  }
}
