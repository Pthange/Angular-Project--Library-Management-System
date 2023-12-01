import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Transaction } from '../Transaction';
import { TransactionHttpServiceService } from '../transaction-http-service.service';

@Component({
  selector: 'app-transactionupdate',
  templateUrl: './transactionupdate.component.html',
  styleUrls: ['./transactionupdate.component.css']
})
export class TransactionupdateComponent implements OnInit {

  transaction: Transaction = new Transaction(); // Change variable name to 'transaction'
  id!: number;

  constructor(
    private transactionService: TransactionHttpServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.transactionService.getTransactionById(this.id).subscribe(data => {
      this.transaction = data; 
    }, error => console.log(error));
  }

  onSubmit() {
    this.transactionService.updateTransaction(this.id, this.transaction).subscribe(data => {
      console.log(data);
      this.goToTransactionList(); 
      this.router.navigate(['thanks']);
    }, error => console.log(error));
  }
  
  goToTransactionList() {
    this.router.navigate(['/get-transaction']);
  }

  goBack() {
    window.history.back();
  }
}