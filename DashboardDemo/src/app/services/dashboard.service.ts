import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Summary, MonthlyData, ExpenseByCategory } from '../models/summary.model';
import { Transaction } from '../models/transaction.model';
import { Investment } from '../models/investment.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // Mock data for GitHub Pages deployment - no backend required!
  
  private mockSummary: Summary = {
    totalCash: 47320,
    monthlyIncome: 6750,
    monthlyExpenses: 4300,
    netSavings: 2450
  };

  private mockMonthlyData: MonthlyData[] = [
    { month: 'Apr', income: 5200, expenses: 3800 },
    { month: 'May', income: 6100, expenses: 4200 },
    { month: 'Jun', income: 5800, expenses: 3900 },
    { month: 'Jul', income: 6500, expenses: 4100 },
    { month: 'Aug', income: 7200, expenses: 4500 },
    { month: 'Sep', income: 6750, expenses: 4300 }
  ];

  private mockExpensesByCategory: ExpenseByCategory[] = [
    { category: 'Housing', amount: 1200 },
    { category: 'Food', amount: 230 },
    { category: 'Utilities', amount: 200 },
    { category: 'Transportation', amount: 60 },
    { category: 'Education', amount: 99 },
    { category: 'Health', amount: 50 }
  ];

  private mockTransactions: Transaction[] = [
    { id: 1, date: '2025-09-29T00:00:00', description: 'Salary Payment', category: 'Salary', amount: 5000, type: 'Income' },
    { id: 2, date: '2025-09-28T00:00:00', description: 'Freelance Project', category: 'Consulting', amount: 1500, type: 'Income' },
    { id: 3, date: '2025-09-27T00:00:00', description: 'Grocery Shopping', category: 'Food', amount: -150, type: 'Expense' },
    { id: 4, date: '2025-09-26T00:00:00', description: 'Utility Bills', category: 'Utilities', amount: -200, type: 'Expense' },
    { id: 5, date: '2025-09-25T00:00:00', description: 'Rent Payment', category: 'Housing', amount: -1200, type: 'Expense' },
    { id: 6, date: '2025-09-23T00:00:00', description: 'Restaurant Dinner', category: 'Food', amount: -80, type: 'Expense' },
    { id: 7, date: '2025-09-20T00:00:00', description: 'Gas Station', category: 'Transportation', amount: -60, type: 'Expense' },
    { id: 8, date: '2025-09-18T00:00:00', description: 'Online Course', category: 'Education', amount: -99, type: 'Expense' },
    { id: 9, date: '2025-09-15T00:00:00', description: 'Stock Dividend', category: 'Investment', amount: 250, type: 'Income' },
    { id: 10, date: '2025-09-12T00:00:00', description: 'Gym Membership', category: 'Health', amount: -50, type: 'Expense' }
  ];

  private mockInvestments: Investment[] = [
    { id: 1, name: 'Tech Stock Portfolio', value: 25000, returnPercentage: 12.5, type: 'Stocks' },
    { id: 2, name: 'S&P 500 Index Fund', value: 45000, returnPercentage: 8.2, type: 'Index Fund' },
    { id: 3, name: 'Real Estate Fund', value: 30000, returnPercentage: 6.8, type: 'Real Estate' },
    { id: 4, name: 'Bond Portfolio', value: 15000, returnPercentage: 4.5, type: 'Bonds' },
    { id: 5, name: 'Cryptocurrency', value: 8000, returnPercentage: -3.2, type: 'Crypto' }
  ];

  constructor() { }

  getSummary(): Observable<Summary> {
    return of(this.mockSummary);
  }

  getMonthlyData(): Observable<MonthlyData[]> {
    return of(this.mockMonthlyData);
  }

  getExpensesByCategory(): Observable<ExpenseByCategory[]> {
    return of(this.mockExpensesByCategory);
  }

  getTransactions(): Observable<Transaction[]> {
    return of(this.mockTransactions);
  }

  getInvestments(): Observable<Investment[]> {
    return of(this.mockInvestments);
  }
}