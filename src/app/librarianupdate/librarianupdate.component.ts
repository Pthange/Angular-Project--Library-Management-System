import { Component, OnInit } from '@angular/core';
import { LibrarianHttpServiceService } from '../librarian-http-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Librarian } from '../Librarian';

@Component({
  selector: 'app-librarianupdate',
  templateUrl: './librarianupdate.component.html',
  styleUrls: ['./librarianupdate.component.css']
})
export class LibrarianupdateComponent implements OnInit {
  librarian: Librarian = new Librarian();
  id!: number;

  constructor(
    private librarianService: LibrarianHttpServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.librarianService.getLibrarianById(this.id).subscribe(
      (data) => {
        this.librarian = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.librarianService.updateLibrarian(this.id, this.librarian).subscribe(
      (data) => {
        console.log(data);
        this.goToLibrarianList();
        this.router.navigate(['thanks']);
      },
      (error) => console.log(error)
    );
  }

  goToLibrarianList() {
    this.router.navigate(['/get-librarian']);
  }

  goBack() {
    window.history.back();
  }
}