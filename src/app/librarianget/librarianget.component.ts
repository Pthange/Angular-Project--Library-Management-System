import { Component, OnInit } from '@angular/core';
import { Librarian } from '../Librarian';
import { Router } from '@angular/router';
import { LibrarianHttpServiceService } from '../librarian-http-service.service';

@Component({
  selector: 'app-librarianget',
  templateUrl: './librarianget.component.html',
  styleUrls: ['./librarianget.component.css']
})
export class LibrariangetComponent implements OnInit {
  librarians: Librarian[] | undefined; // Update the variable name
  
  constructor(private librarianService: LibrarianHttpServiceService, // Update the service variable
    private router: Router) {}

  ngOnInit(): void {
    this.getLibrarianList(); // Update the method name
  }

  private getLibrarianList() {
    this.librarianService.getAllLibrarianList().subscribe(data => { // Update the service method
      this.librarians = data;
    });
  }

  updateLibrarian(id: number) {
    this.router.navigate(['update-librarian', id]); // Update the route
  }

  deleteLibrarian(id: number) {
    this.librarianService.deleteLibrarian(id).subscribe(data => {
      console.log(data);
      this.reloadComponent();
    },
    error => console.log(error));
  }

  reloadComponent() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-librarian']); // Update the route
  }

  goBack() {
    window.history.back();
  }
}