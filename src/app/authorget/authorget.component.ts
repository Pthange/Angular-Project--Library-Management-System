import { Component, OnInit } from '@angular/core';
import { Author } from '../Author';
import { Router } from '@angular/router';
import { AuthorHttpServiceService } from '../author-http-service.service';

@Component({
  selector: 'app-authorget',
  templateUrl: './authorget.component.html',
  styleUrls: ['./authorget.component.css']
})
export class AuthorgetComponent implements OnInit {
  authors: Author[] | undefined;
  id!: number;
  constructor(private authorService: AuthorHttpServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.getAuthorList();
  }

  private getAuthorList() {
    this.authorService.getAllAuthorList().subscribe(data => {
      this.authors = data;
    });
  }

  updateAuthor(id: number) {
    this.router.navigate(['update-author', id]);
  }
  

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe(data => {
      console.log(data);
      this.reloadComponent();
    },
    error => console.log(error));
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-author']);
  }

  goBack() {
    window.history.back();
  }
}