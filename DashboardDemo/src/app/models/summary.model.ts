export interface Summary {
  totalCash: number;
  monthlyIncome: number;
  monthlyExpenses: number;
  netSavings: number;
}

export interface MonthlyData {
  month: string;
  income: number;
  expenses: number;
}

export interface ExpenseByCategory {
  category: string;
  amount: number;
}
