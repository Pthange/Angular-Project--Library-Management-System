import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../Book'; // Update import to your Book model
import { BookHttpServiceService } from '../book-http-service.service';

@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html', // Update the template path
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent implements OnInit {

  book: Book = new Book(); // Update the type from Student to Book
  id!: number;

  constructor(private bookService: BookHttpServiceService, // Update the service name
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bookService.getBookById(this.id).subscribe(data => {
      this.book = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.bookService.updateBook(this.id, this.book).subscribe(data => {
      console.log(data);
      this.goTobookList();
      this.router.navigate(['thanks']);
    }, 
    error => console.log(error));
  }

  goTobookList() {
    this.router.navigate(['/get-book']); // Update the route to your book list
  }

  goBack() {
    window.history.back();
  }
}
