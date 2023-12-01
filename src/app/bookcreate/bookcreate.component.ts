import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../Book'; // Update the import to the correct path for Book
import { BookHttpServiceService } from '../book-http-service.service';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html', // Update the template path
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit {

  book: Book = new Book(); // Update the type from Student to Book

  constructor(private bookService: BookHttpServiceService, 
              private router: Router) {}

  ngOnInit(): void {
  }

  saveBook() {
    this.bookService.createBook(this.book).subscribe(data => 
      {
      console.log(data);
      this.goToBookList();
      this.router.navigate(['thanks']);
    })
  }

  goToBookList() {
    this.router.navigate(['/get-book']); // Update the route to your book list
  }

  onSubmit() {
    this.saveBook();
  }

  goBack() {
    window.history.back();
  }
}
