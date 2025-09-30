# Dashboard Features & Architecture

## 🎨 Visual Design

### Color Scheme
- **Primary**: `#021c4d` (Dark Navy Blue)
- **Secondary**: `#0a3a7a` (Medium Blue)
- **Accent**: Chart colors (Green, Red, Yellow, etc.)
- **Text**: White with varying opacity for hierarchy
- **Effects**: Glassmorphism with backdrop blur

### Layout
```
┌─────────────────────────────────────────────────────────┐
│  Investment & Accounting Dashboard                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │         Total Cash: $47,320.00                 │    │
│  │                                                 │    │
│  │  Monthly Income  │  Monthly Expenses │  Net    │    │
│  │    $6,750.00    │     $4,300.00    │ $2,450   │    │
│  └────────────────────────────────────────────────┘    │
│                                                          │
│  ┌──────────────────────┐  ┌──────────────────────┐   │
│  │ Income vs Expenses   │  │ Expenses by Category │   │
│  │  (Bar Chart)         │  │  (Pie Chart)         │   │
│  │                      │  │                      │   │
│  │    [Chart Area]      │  │    [Chart Area]      │   │
│  └──────────────────────┘  └──────────────────────┘   │
│                                                          │
│  ┌──────────────────────┐  ┌──────────────────────┐   │
│  │ Recent Transactions  │  │ Investment Snapshot  │   │
│  ├──────┬──────┬────────┤  ├──────┬───────┬──────┤   │
│  │ Date │ Desc │ Amount │  │ Name │ Value │ Ret% │   │
│  │ ...  │ ...  │ ...    │  │ ...  │ ...   │ ...  │   │
│  └──────────────────────┘  └──────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

## 📊 Data Flow Architecture

```
┌──────────────────┐
│  Angular 20 UI   │
│  (Port 4200)     │
└────────┬─────────┘
         │ HTTP GET
         │
         ↓
┌──────────────────┐
│   ASP.NET Core   │
│   Web API        │
│   (Port 5172)    │
└────────┬─────────┘
         │
         ↓
┌──────────────────┐
│  Financial       │
│  Repository      │
│  (Mocked SQL)    │
└──────────────────┘
```

## 🔌 API Contract

### Summary Endpoint
**GET** `/api/summary`
```json
{
  "totalCash": 47320.00,
  "monthlyIncome": 6750.00,
  "monthlyExpenses": 4300.00,
  "netSavings": 2450.00
}
```

### Monthly Data Endpoint
**GET** `/api/summary/monthly`
```json
[
  { "month": "Apr", "income": 5200, "expenses": 3800 },
  { "month": "May", "income": 6100, "expenses": 4200 },
  ...
]
```

### Expenses by Category Endpoint
**GET** `/api/summary/expenses-by-category`
```json
[
  { "category": "Housing", "amount": 1200 },
  { "category": "Food", "amount": 230 },
  ...
]
```

### Transactions Endpoint
**GET** `/api/transactions`
```json
[
  {
    "id": 1,
    "date": "2025-09-29T...",
    "description": "Salary Payment",
    "category": "Salary",
    "amount": 5000,
    "type": "Income"
  },
  ...
]
```

### Investments Endpoint
**GET** `/api/investments`
```json
[
  {
    "id": 1,
    "name": "Tech Stock Portfolio",
    "value": 25000,
    "returnPercentage": 12.5,
    "type": "Stocks"
  },
  ...
]
```

## 🎯 Widget Specifications

### 1. Total Cash Summary
- **Location**: Top of dashboard
- **Data**: Summary from `/api/summary`
- **Features**: 
  - Large number display
  - Color-coded metrics (green for income, red for expenses)
  - Glassmorphism card design

### 2. Income vs. Expenses Chart
- **Type**: Bar Chart (Chart.js)
- **Data**: Monthly data from `/api/summary/monthly`
- **Features**:
  - 6 months of data
  - Dual bars (Income vs Expenses)
  - Interactive tooltips
  - Responsive sizing

### 3. Expenses by Category Chart
- **Type**: Pie Chart (Chart.js)
- **Data**: Category data from `/api/summary/expenses-by-category`
- **Features**:
  - Color-coded segments
  - Legend on right side
  - Percentage display

### 4. Recent Transactions Table
- **Type**: HTML Table
- **Data**: Transactions from `/api/transactions`
- **Features**:
  - 10 most recent transactions
  - Date formatting
  - Color-coded amounts (positive/negative)
  - Hover effects

### 5. Investment Snapshot Table
- **Type**: HTML Table
- **Data**: Investments from `/api/investments`
- **Features**:
  - Investment name and type
  - Current value
  - Return percentage with color coding
  - Hover effects

## 🛠️ Technology Stack

### Frontend
- **Framework**: Angular 20 (Standalone Components)
- **Language**: TypeScript 5.x
- **Charts**: Chart.js + ng2-charts
- **HTTP**: HttpClient (RxJS Observables)
- **Styling**: Pure CSS (no framework)

### Backend
- **Framework**: ASP.NET Core 9.0
- **Language**: C# 13
- **Architecture**: Clean Architecture (Controllers, Models, Repositories)
- **CORS**: Configured for Angular dev server

### Data Layer
- **Type**: In-Memory Repository
- **Purpose**: Simulates SQL Server
- **Data**: Hardcoded sample financial data

## 📱 Responsive Breakpoints

- **Desktop**: Full grid layout (2 columns for charts/tables)
- **Tablet**: Adaptive grid (may stack)
- **Mobile** (< 768px): Single column layout

## 🎨 UI Components

### Cards
- Semi-transparent background (`rgba(255, 255, 255, 0.1)`)
- Backdrop blur filter (glassmorphism)
- Rounded corners (16px)
- Subtle borders and shadows

### Typography
- **Font Family**: Segoe UI
- **Heading**: 2.5rem bold
- **Subheading**: 1.25rem semi-bold
- **Body**: 0.9375rem regular

### Color Indicators
- **Positive**: `#4caf50` (Green)
- **Negative**: `#f44336` (Red)
- **Neutral**: White with opacity

## 🚀 Performance Features

- **Lazy Loading**: Chart.js only loads when needed
- **Observables**: RxJS for efficient async data handling
- **Single Page**: No routing overhead
- **Optimized Build**: AOT compilation, tree-shaking

## 📈 Sample Data Included

- **Cash Summary**: $47,320 total cash
- **Transactions**: 10 sample transactions (income + expenses)
- **Investments**: 5 investment positions ($123,000 total value)
- **Monthly Data**: 6 months of financial history
- **Categories**: 7 expense categories tracked

---

**Note**: All data is mocked for demonstration purposes. Perfect for learning full-stack development patterns!
