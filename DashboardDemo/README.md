# 🎯 Investment & Accounting Dashboard - Demo Version

This is a **standalone demo version** of the Investment & Accounting Dashboard with **built-in mock data**.

## Quick Start (Local Development)

```powershell
# Install dependencies
npm install

# Run development server
npm start
```

Open http://localhost:4200

## Mock Data Included

The demo displays:

### Summary Card
- Total Cash: **$47,320**
- Monthly Income: **$6,750**
- Monthly Expenses: **$4,300**
- Net Savings: **$2,450**

### Charts
- **Income vs Expenses**: 6 months (Apr-Sep)
- **Expenses by Category**: 6 categories

### Tables
- **Recent Transactions**: 10 sample transactions
- **Investment Snapshot**: 5 investments ($123,000 total)

## Customizing Mock Data

Edit the mock data in:
```
src/app/services/dashboard.service.ts
```

Update these properties:
- `mockSummary` - Cash summary values
- `mockMonthlyData` - Monthly income/expenses
- `mockExpensesByCategory` - Category breakdown
- `mockTransactions` - Transaction list
- `mockInvestments` - Investment portfolio

After editing, rebuild and redeploy.
