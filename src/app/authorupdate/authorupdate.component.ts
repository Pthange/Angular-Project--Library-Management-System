import { Component, OnInit } from '@angular/core';
import { AuthorHttpServiceService } from '../author-http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from '../Author';

@Component({
  selector: 'app-authorupdate',
  templateUrl: './authorupdate.component.html',
  styleUrls: ['./authorupdate.component.css']
})
export class AuthorupdateComponent implements OnInit {

  author: Author = new Author(); 
  id!: number;

  constructor(private authorService: AuthorHttpServiceService, // Update the service name
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.authorService.getAuthorById(this.id).subscribe((data: Author) => {
      this.author = data;
    }, (error: any) => console.log(error));
  }

  onSubmit() {
    this.authorService.updateAuthor(this.id, this.author).subscribe(data => {
      console.log(data);
      this.goToAuthorList();
      this.router.navigate(['thanks']);
    }, 
    error => console.log(error));
  }

  goToAuthorList() {
    this.router.navigate(['/get-author']); // Update the route to your author list
  }

  goBack() {
    window.history.back();
  }
}