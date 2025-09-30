# Investment & Accounting Dashboard

A modern, full-stack financial dashboard application built with **Angular 20** (frontend), **ASP.NET Core** (backend API), and mocked **SQL Server** data.

## 🎯 Features

### Dashboard Widgets
- **Total Cash Summary** - Big number display at the top with monthly income, expenses, and net savings
- **Income vs. Expenses Chart** - Interactive bar chart showing monthly financial data
- **Expenses by Category Chart** - Pie chart visualizing spending distribution
- **Recent Transactions Table** - Detailed view of recent financial transactions
- **Investment Snapshot Table** - Overview of investment portfolio with returns

### Technical Stack
- **Frontend**: Angular 20 with TypeScript, Chart.js, ng2-charts
- **Backend**: ASP.NET Core (.NET 9.0) Web API
- **Data Layer**: Mocked repository pattern (simulating SQL Server)
- **Styling**: Modern CSS with `#021c4d` dark blue theme

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- .NET 9.0 SDK
- Angular CLI (`npm install -g @angular/cli`)

### Installation & Running

#### 1. Start the Backend API

```powershell
cd DashboardAPI
dotnet run
```

The API will start on `http://localhost:5172` (configured in `Properties/launchSettings.json`).

#### 2. Start the Angular Frontend

Open a new terminal:

```powershell
cd DashboardUI
ng serve
```

The application will be available at `http://localhost:4200`

## 📁 Project Structure

```
jpf_dashboard/
├── DashboardAPI/                    # ASP.NET Core Backend
│   ├── Controllers/                 # API Controllers
│   │   ├── SummaryController.cs
│   │   ├── TransactionsController.cs
│   │   └── InvestmentsController.cs
│   ├── Models/                      # Data Transfer Objects
│   │   ├── SummaryDto.cs
│   │   ├── TransactionDto.cs
│   │   ├── InvestmentDto.cs
│   │   ├── MonthlyDataDto.cs
│   │   └── ExpenseByCategoryDto.cs
│   ├── Repositories/                # Mocked Data Layer
│   │   └── FinancialRepository.cs   # Simulates SQL Server
│   └── Program.cs                   # API Configuration
│
└── DashboardUI/                     # Angular Frontend
    ├── src/
    │   ├── app/
    │   │   ├── models/              # TypeScript Interfaces
    │   │   │   ├── summary.model.ts
    │   │   │   ├── transaction.model.ts
    │   │   │   └── investment.model.ts
    │   │   ├── services/            # API Services
    │   │   │   └── dashboard.service.ts
    │   │   ├── app.ts               # Main Component
    │   │   ├── app.html             # Dashboard Template
    │   │   ├── app.css              # Dashboard Styles
    │   │   └── app.config.ts        # App Configuration
    │   └── styles.css               # Global Styles
    └── package.json
```

## 🔌 API Endpoints

The backend exposes the following RESTful endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/summary` | GET | Returns total cash, monthly income, expenses, and net savings |
| `/api/summary/monthly` | GET | Returns monthly income/expense data for charts |
| `/api/summary/expenses-by-category` | GET | Returns expenses grouped by category |
| `/api/transactions` | GET | Returns recent transactions (supports `?count=N` query param) |
| `/api/investments` | GET | Returns investment portfolio data |

## 🎨 Design & Styling

The dashboard features a modern, clean design with:
- **Primary Color**: `#021c4d` (Dark Blue)
- **Supporting Colors**: White, Black, accent colors for charts
- **Effects**: Glassmorphism, subtle shadows, smooth transitions
- **Typography**: Segoe UI with clean hierarchy
- **Responsive**: Mobile-friendly grid layout

## 🧪 Mocked Data

The application uses hardcoded sample data in `FinancialRepository.cs` to simulate a SQL Server database. This includes:
- 10 sample transactions (income and expenses)
- 5 investment positions
- 6 months of monthly financial data
- Calculated summary statistics

## 🛠️ Development Notes

### CORS Configuration
The backend is configured to accept requests from `http://localhost:4200` (Angular default port).

### Chart.js Integration
- Charts use the `ng2-charts` library wrapper for Chart.js
- Chart components are registered globally in `main.ts`
- Chart styling matches the dark blue theme

### State Management
- Simple component-based state management
- Data loaded via HttpClient on component initialization
- Observable pattern for async data handling

## 📝 Future Enhancements

- Add authentication and user management
- Implement real database connection
- Add transaction CRUD operations
- Include budget tracking and forecasting
- Add export functionality (PDF, Excel)
- Implement real-time updates via SignalR

## 📄 License

This project is for learning and demonstration purposes.

---

**Built with ❤️ using Angular 20 and ASP.NET Core**
