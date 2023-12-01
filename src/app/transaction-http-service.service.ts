import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from './Transaction'; // Make sure to import the correct model

@Injectable({
  providedIn: 'root'
})
export class TransactionHttpServiceService {
  private addTransaction = "http://localhost:8087/api/createTransaction";
  private getTransactions = "http://localhost:8087/api/getAllTransactions";
  private getTransactionsById = "http://localhost:8087/api/getTransactionById";
  private editTransaction = "http://localhost:8087/api/updateTransaction";
  private delTransaction = "http://localhost:8087/api/deleteTransaction";

  constructor(private httpClient: HttpClient) { }

  createTransaction(transaction: Transaction): Observable<Object> {
    return this.httpClient.post(`${this.addTransaction}`, transaction);
  }

  getAllTransactionList(): Observable<Transaction[]> {
    return this.httpClient.get<Transaction[]>(`${this.getTransactions}`);
  }

  getTransactionById(id: number): Observable<Transaction> {
    return this.httpClient.get<Transaction>(`${this.getTransactionsById}/${id}`);
  }

  updateTransaction(id: number, transaction: Transaction): Observable<any> {
    return this.httpClient.put(`${this.editTransaction}/${id}`, transaction);
  }

  deleteTransaction(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.delTransaction}/${id}`);
  }
}
