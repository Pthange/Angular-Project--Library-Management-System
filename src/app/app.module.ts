import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { StudentcreateComponent } from './studentcreate/studentcreate.component';
import { ThanksComponent } from './thanks/thanks.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentupdateComponent } from './studentupdate/studentupdate.component';
import { BookcreateComponent } from './bookcreate/bookcreate.component';
import { AuthorcreateComponent } from './authorcreate/authorcreate.component';
import { AuthorupdateComponent } from './authorupdate/authorupdate.component';
import { BookupdateComponent } from './bookupdate/bookupdate.component';
import { LibrariancreateComponent } from './librariancreate/librariancreate.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './book/book.component';
import { TransactionupdateComponent } from './transactionupdate/transactionupdate.component';
import { AdmincreateComponent } from './admincreate/admincreate.component';
import { TransactiongetComponent } from './transactionget/transactionget.component';
import { TransactioncreateComponent } from './transactioncreate/transactioncreate.component';
import { AuthorgetComponent } from './authorget/authorget.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LibrariangetComponent } from './librarianget/librarianget.component';
import { LibrarianupdateComponent } from './librarianupdate/librarianupdate.component';

@NgModule({
  declarations: [
    AppComponent,
        StudentComponent,
        StudentcreateComponent,
        StudentupdateComponent,
        ThanksComponent,
        BookComponent,
        BookcreateComponent,
        BookupdateComponent,
        AuthorcreateComponent,
        AuthorupdateComponent,
        LibrariancreateComponent,
        TransactiongetComponent,
        TransactioncreateComponent,
        TransactionupdateComponent,
        LibrarianupdateComponent,
        HomepageComponent,
        AdmincreateComponent,
        AuthorgetComponent,
        LibrariangetComponent,
        

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    RouterOutlet,

    RouterModule.forRoot([
{ path: 'create-student', component: StudentcreateComponent },
{ path: 'update-student/:id', component: StudentupdateComponent },
{path:'get-student',component:StudentComponent},

{ path: 'create-admin', component: AdmincreateComponent },

{ path: 'create-transaction', component: TransactioncreateComponent },
{ path: 'update-transaction/:id', component: TransactionupdateComponent },
{path:'get-transaction',component:TransactiongetComponent},

{ path: 'create-author', component: AuthorcreateComponent },
{path:'get-author',component:AuthorgetComponent},
{ path: 'update-author/:id', component: AuthorupdateComponent},

{ path: 'create-book', component: BookcreateComponent },
{ path: 'update-book/:id', component: BookupdateComponent},
{path:'get-book',component:BookComponent},

{path:'homepage',component:HomepageComponent},
{path:'', redirectTo:'/homepage', pathMatch:'full'},

{ path: 'create-librarian', component: LibrariancreateComponent },
{path:'get-librarian',component:LibrariangetComponent},
{ path: 'update-librarian/:id', component: LibrarianupdateComponent},

{path:'thanks', component:ThanksComponent},

]),
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
