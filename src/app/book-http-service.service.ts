import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookHttpServiceService {
  private addBook = "http://localhost:8087/api/createBook";
  private getBooks = "http://localhost:8087/api/getAllBooks";
  private getBooksById = "http://localhost:8087/api/getBookById";
  private editBook = "http://localhost:8087/api/updateBook";
  private delBook = "http://localhost:8087/api/deleteBook";

  constructor(private httpClient: HttpClient) {}

  createBook(book: Book): Observable<Object> {
    return this.httpClient.post(`${this.addBook}`, book);
  }

  getAllBookList(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.getBooks}`);
  }

  getBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`${this.getBooksById}/${id}`);
  }

  updateBook(id: number, book: Book): Observable<Object> {
    return this.httpClient.put(`${this.editBook}/${id}`, book);
  }

  deleteBook(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delBook}/${id}`);
  }
}
