import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LibrarianHttpServiceService } from '../librarian-http-service.service';
import { Librarian } from '../Librarian';

@Component({
  selector: 'app-librariancreate',
  templateUrl: './librariancreate.component.html',
  styleUrls: ['./librariancreate.component.css']
})
export class LibrariancreateComponent implements OnInit {

  librarian: Librarian = new Librarian();

  constructor(private librarianService: LibrarianHttpServiceService, private router: Router) { }

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  saveLibrarian() {
    this.librarianService.createLibrarian(this.librarian).subscribe(data => {
      console.log(data);
      this.goToLibrarianList();
      this.router.navigate(['thanks']);
    });
  }

  goToLibrarianList() {
    this.router.navigate(['/get-librarian']);
  }

  onSubmit() {
    this.saveLibrarian();
  }

  goBack() {
    window.history.back();
  }
}