# Quick Start Guide

## 🚀 Fastest Way to Run

### Option 1: Use the PowerShell Script (Recommended)
```powershell
.\start-dev.ps1
```
This will open two PowerShell windows - one for the backend and one for the frontend.

### Option 2: Manual Start

**Terminal 1 - Backend:**
```powershell
cd DashboardAPI
dotnet run
```

**Terminal 2 - Frontend:**
```powershell
cd DashboardUI
ng serve
```

Then open your browser to: **http://localhost:4200**

---

## 📱 What You'll See

The dashboard displays:
1. **Total Cash**: $47,320.00 (big number at top)
2. **Income vs Expenses**: Bar chart with 6 months of data
3. **Expenses by Category**: Pie chart breakdown
4. **Recent Transactions**: 10 most recent transactions
5. **Investment Snapshot**: 5 investment positions with returns

---

## 🔧 Troubleshooting

### Backend won't start?
- Make sure .NET 9.0 SDK is installed: `dotnet --version`
- Check if port 5172 is available

### Frontend won't start?
- Make sure Node.js is installed: `node --version`
- Run `npm install` in the DashboardUI folder
- Check if port 4200 is available

### Can't connect to API?
- Verify backend is running on http://localhost:5172
- Check browser console (F12) for CORS errors
- Ensure `DashboardUI/src/app/services/dashboard.service.ts` has correct API URL

---

## 🎨 Design Features

- **Color Scheme**: Dark blue (#021c4d) with glassmorphism effects
- **Charts**: Interactive Chart.js visualizations
- **Responsive**: Works on desktop, tablet, and mobile
- **Modern**: Clean, minimal, professional design

---

## 📊 API Endpoints

| Endpoint | What it returns |
|----------|----------------|
| `GET /api/summary` | Total cash, monthly income/expenses, net savings |
| `GET /api/summary/monthly` | 6 months of income/expense data |
| `GET /api/summary/expenses-by-category` | Expenses grouped by category |
| `GET /api/transactions` | Recent transactions |
| `GET /api/investments` | Investment portfolio |

---

## ✅ Verification

Both projects have been successfully built:
- ✅ Backend builds with 0 errors
- ✅ Frontend builds with 0 errors
- ✅ All TypeScript/C# code compiles correctly
- ✅ CORS configured for local development

**Happy Coding! 💙**
