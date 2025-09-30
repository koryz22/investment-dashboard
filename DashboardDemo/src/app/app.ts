import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';
import { DashboardService } from './services/dashboard.service';
import { Summary, MonthlyData, ExpenseByCategory } from './models/summary.model';
import { Transaction } from './models/transaction.model';
import { Investment } from './models/investment.model';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'Investment & Accounting Dashboard';
  
  // Summary data
  summary: Summary | null = null;
  
  // Chart data
  monthlyData: MonthlyData[] = [];
  expensesByCategory: ExpenseByCategory[] = [];
  
  // Table data
  transactions: Transaction[] = [];
  investments: Investment[] = [];
  
  // Income vs Expenses Chart
  incomeExpensesChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: []
  };
  
  incomeExpensesChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          color: '#000000',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#000000' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' }
      },
      y: {
        ticks: { color: '#000000' },
        grid: { color: 'rgba(0, 0, 0, 0.1)' }
      }
    }
  };
  
  incomeExpensesChartType: ChartType = 'bar';
  
  // Expenses by Category Chart
  expensesCategoryChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: []
  };
  
  expensesCategoryChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'right',
        labels: {
          color: '#000000',
          font: {
            size: 12,
            weight: 'bold'
          }
        }
      }
    }
  };
  
  expensesCategoryChartType: ChartType = 'pie';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData(): void {
    // Load summary
    this.dashboardService.getSummary().subscribe({
      next: (data) => this.summary = data,
      error: (err) => console.error('Error loading summary:', err)
    });

    // Load monthly data for income vs expenses chart
    this.dashboardService.getMonthlyData().subscribe({
      next: (data) => {
        this.monthlyData = data;
        this.updateIncomeExpensesChart();
      },
      error: (err) => console.error('Error loading monthly data:', err)
    });

    // Load expenses by category for pie chart
    this.dashboardService.getExpensesByCategory().subscribe({
      next: (data) => {
        this.expensesByCategory = data;
        this.updateExpensesCategoryChart();
      },
      error: (err) => console.error('Error loading expenses by category:', err)
    });

    // Load transactions
    this.dashboardService.getTransactions().subscribe({
      next: (data) => this.transactions = data,
      error: (err) => console.error('Error loading transactions:', err)
    });

    // Load investments
    this.dashboardService.getInvestments().subscribe({
      next: (data) => this.investments = data,
      error: (err) => console.error('Error loading investments:', err)
    });
  }

  updateIncomeExpensesChart(): void {
    this.incomeExpensesChartData = {
      labels: this.monthlyData.map(d => d.month),
      datasets: [
        {
          label: 'Income',
          data: this.monthlyData.map(d => d.income),
          backgroundColor: '#021c4d',
          borderColor: '#021c4d',
          borderWidth: 2
        },
        {
          label: 'Expenses',
          data: this.monthlyData.map(d => d.expenses),
          backgroundColor: '#000000',
          borderColor: '#000000',
          borderWidth: 2
        }
      ]
    };
  }

  updateExpensesCategoryChart(): void {
    this.expensesCategoryChartData = {
      labels: this.expensesByCategory.map(e => e.category),
      datasets: [{
        data: this.expensesByCategory.map(e => e.amount),
        backgroundColor: [
          '#021c4d',
          '#032a6b',
          '#043888',
          '#0546a6',
          '#0654c4',
          '#2167d1',
          '#3d7ad8',
          '#598de0'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    };
  }

  formatCurrency(value: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
}