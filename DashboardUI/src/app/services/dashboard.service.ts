import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Summary, MonthlyData, ExpenseByCategory } from '../models/summary.model';
import { Transaction } from '../models/transaction.model';
import { Investment } from '../models/investment.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = 'http://localhost:5172/api'; // .NET API port from launchSettings.json

  constructor(private http: HttpClient) { }

  getSummary(): Observable<Summary> {
    return this.http.get<Summary>(`${this.apiUrl}/summary`);
  }

  getMonthlyData(): Observable<MonthlyData[]> {
    return this.http.get<MonthlyData[]>(`${this.apiUrl}/summary/monthly`);
  }

  getExpensesByCategory(): Observable<ExpenseByCategory[]> {
    return this.http.get<ExpenseByCategory[]>(`${this.apiUrl}/summary/expenses-by-category`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/transactions`);
  }

  getInvestments(): Observable<Investment[]> {
    return this.http.get<Investment[]>(`${this.apiUrl}/investments`);
  }
}
