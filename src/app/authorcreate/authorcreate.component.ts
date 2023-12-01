import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorHttpServiceService } from '../author-http-service.service';
import { Author } from '../Author';

@Component({
  selector: 'app-authorcreate',
  templateUrl: './authorcreate.component.html',
  styleUrls: ['./authorcreate.component.css']
})
export class AuthorcreateComponent implements OnInit {

  author: Author = new Author();

  constructor(private authorService: AuthorHttpServiceService, // Assuming you have a service for Author
    private router: Router) {}

  ngOnInit(): void {}

  saveAuthor() {
    this.authorService.createAuthor(this.author).subscribe(data => {
      console.log(data);
      this.goToAuthorList();
      this.router.navigate(['thanks']);
    });
  }

  goToAuthorList() {
    this.router.navigate(['/get-authors']); // Update the route accordingly
  }

  onSubmit() {
    this.saveAuthor();
  }

  goBack() {
    window.history.back();
  }
}