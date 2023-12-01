import { Component, OnInit } from '@angular/core';
import { BookHttpServiceService } from '../book-http-service.service';
import { Router } from '@angular/router';
import { Book } from '../Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] | undefined;

  constructor(private bookService: BookHttpServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.getBookList();
  }

  private getBookList() {
    this.bookService.getAllBookList().subscribe(data => {
      this.books = data;
    });
  }

  updateBook(id: number) {
    this.router.navigate(['update-book', id]);
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(data => {
      console.log(data);
      this.reloadComponent();
    },
    error => console.log(error));
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-book']);
  }

  goBack() {
    window.history.back();
  }
}
