import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Librarian } from './Librarian'; // Update import to Librarian model

@Injectable({
  providedIn: 'root'
})
export class LibrarianHttpServiceService {
  private addLibrarian = "http://localhost:8087/api/createLibrarian";
  private getLibrarians = "http://localhost:8087/api/getAllLibrarians";
  private getLibrariansById = "http://localhost:8087/api/getLibrarianById";
  private editLibrarian = "http://localhost:8087/api/updateLibrarian";
  private delLibrarian = "http://localhost:8087/api/deleteLibrarian";

  constructor(private httpClient: HttpClient) { }

  createLibrarian(librarian: Librarian): Observable<Object> {
    return this.httpClient.post(`${this.addLibrarian}`, librarian);
  }

  getAllLibrarianList(): Observable<Librarian[]> {
    return this.httpClient.get<Librarian[]>(`${this.getLibrarians}`);
  }

  getLibrarianById(id: number): Observable<Librarian> {
    return this.httpClient.get<Librarian>(`${this.getLibrariansById}/${id}`);
  }

  updateLibrarian(id: number, librarian: Librarian): Observable<Object> {
    return this.httpClient.put(`${this.editLibrarian}/${id}`, librarian);
  }

  deleteLibrarian(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delLibrarian}/${id}`);
  }
}
