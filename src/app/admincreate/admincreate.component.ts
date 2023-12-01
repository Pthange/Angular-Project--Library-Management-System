import { Component, OnInit } from '@angular/core';
import { AdminHttpServiceService } from '../admin-http-service.service';
import { Router } from '@angular/router';
import { Admin } from '../Admin';

@Component({
  selector: 'app-admincreate',
  templateUrl: './admincreate.component.html',
  styleUrls: ['./admincreate.component.css']
})
export class AdmincreateComponent implements OnInit {

  admin: Admin = new Admin();

  constructor(private adminService: AdminHttpServiceService,
    private router: Router) { }

  ngOnInit(): void {

  }

  saveAdmin() {
    this.adminService.createAdmin(this.admin).subscribe(data => {
      console.log(data);
      this.goToAdminList();
      this.router.navigate(['thanks']);
    });
  }

  goToAdminList() {
    this.router.navigate(['/get-admin']);
  }

  onSubmit() {
    this.saveAdmin();
  }

  goBack() {
    window.history.back();
  }
}