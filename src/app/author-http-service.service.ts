import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './Author';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorHttpServiceService {
  private addAuthor = "http://localhost:8087/api/createAuthor";
  private getAuthors = "http://localhost:8087/api/getAllAuthors";
 private getAuthorsById = "http://localhost:8087/api/getAuthorById";
  private editAuthor = "http://localhost:8087/api/updateAuthor";
  private delAuthor = "http://localhost:8087/api/deleteAuthor";

  constructor(private httpClient: HttpClient) {}

  createAuthor(author: Author): Observable<Object> {
    return this.httpClient.post(`${this.addAuthor}`, author);
  }

  getAllAuthorList(): Observable<Author[]> {
    return this.httpClient.get<Author[]>(`${this.getAuthors}`);
  }

  public getAuthorById(id: number): Observable<Author> {
    return this.httpClient.get<Author>(`${this.getAuthorsById}/${id}`);
  }

  updateAuthor(id: number, author: Author): Observable<Object> {
    return this.httpClient.put(`${this.editAuthor}/${id}`, author);
  }

  deleteAuthor(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delAuthor}/${id}`);
  }
}
