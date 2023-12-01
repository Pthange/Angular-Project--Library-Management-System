import { Component, OnInit } from '@angular/core';
import { TransactionHttpServiceService } from '../transaction-http-service.service';
import { Router } from '@angular/router';
import { Transaction } from '../Transaction';

@Component({
  selector: 'app-transactionget',
  templateUrl: './transactionget.component.html',
  styleUrls: ['./transactionget.component.css']
})
export class TransactiongetComponent implements OnInit {
  transactions: Transaction[] | undefined; // Change variable name to 'transactions'
  deleteSuccess: boolean | undefined;
  
  constructor(private transactionService: TransactionHttpServiceService,
    private router: Router) {}

  ngOnInit(): void {
    this.getTransactionList(); // Update method name
  }

  private getTransactionList() {
    this.transactionService.getAllTransactionList().subscribe(data => {
      this.transactions = data; // Update property name
    });
  }

  updateTransaction(id: number) {
    this.router.navigate(['update-transaction', id]); // Update route
  }

  deleteTransaction(id: number) {
    this.transactionService.deleteTransaction(id).subscribe(data =>
       {
        console.log('Deleted successfully:', data);
        this.deleteSuccess = true; // Set delete success to true
 
       // Reload the component after deletion
       this.reloadComponent();

    }, error => console.log(error));
  }

  reloadComponent() {
    this.router.navigateByUrl('/get-transaction', { skipLocationChange: true }).then(() => {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/get-transaction']); 
  });
}

  goBack() {
    window.history.back();
  }
}