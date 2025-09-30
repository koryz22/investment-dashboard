using DashboardAPI.Models;

namespace DashboardAPI.Repositories;

public class FinancialRepository
{
    // Mocked SQL Server data
    private readonly List<TransactionDto> _transactions;
    private readonly List<InvestmentDto> _investments;

    public FinancialRepository()
    {
        // Mock transaction data
        _transactions = new List<TransactionDto>
        {
            new() { Id = 1, Date = DateTime.Now.AddDays(-1), Description = "Salary Payment", Category = "Salary", Amount = 5000, Type = "Income" },
            new() { Id = 2, Date = DateTime.Now.AddDays(-2), Description = "Freelance Project", Category = "Consulting", Amount = 1500, Type = "Income" },
            new() { Id = 3, Date = DateTime.Now.AddDays(-3), Description = "Grocery Shopping", Category = "Food", Amount = -150, Type = "Expense" },
            new() { Id = 4, Date = DateTime.Now.AddDays(-4), Description = "Utility Bills", Category = "Utilities", Amount = -200, Type = "Expense" },
            new() { Id = 5, Date = DateTime.Now.AddDays(-5), Description = "Rent Payment", Category = "Housing", Amount = -1200, Type = "Expense" },
            new() { Id = 6, Date = DateTime.Now.AddDays(-7), Description = "Restaurant Dinner", Category = "Food", Amount = -80, Type = "Expense" },
            new() { Id = 7, Date = DateTime.Now.AddDays(-10), Description = "Gas Station", Category = "Transportation", Amount = -60, Type = "Expense" },
            new() { Id = 8, Date = DateTime.Now.AddDays(-12), Description = "Online Course", Category = "Education", Amount = -99, Type = "Expense" },
            new() { Id = 9, Date = DateTime.Now.AddDays(-15), Description = "Stock Dividend", Category = "Investment", Amount = 250, Type = "Income" },
            new() { Id = 10, Date = DateTime.Now.AddDays(-18), Description = "Gym Membership", Category = "Health", Amount = -50, Type = "Expense" }
        };

        // Mock investment data
        _investments = new List<InvestmentDto>
        {
            new() { Id = 1, Name = "Tech Stock Portfolio", Value = 25000, ReturnPercentage = 12.5m, Type = "Stocks" },
            new() { Id = 2, Name = "S&P 500 Index Fund", Value = 45000, ReturnPercentage = 8.2m, Type = "Index Fund" },
            new() { Id = 3, Name = "Real Estate Fund", Value = 30000, ReturnPercentage = 6.8m, Type = "Real Estate" },
            new() { Id = 4, Name = "Bond Portfolio", Value = 15000, ReturnPercentage = 4.5m, Type = "Bonds" },
            new() { Id = 5, Name = "Cryptocurrency", Value = 8000, ReturnPercentage = -3.2m, Type = "Crypto" }
        };
    }

    public SummaryDto GetSummary()
    {
        var totalIncome = _transactions.Where(t => t.Type == "Income").Sum(t => t.Amount);
        var totalExpenses = Math.Abs(_transactions.Where(t => t.Type == "Expense").Sum(t => t.Amount));
        var totalInvestments = _investments.Sum(i => i.Value);

        return new SummaryDto
        {
            TotalCash = 47320, // Mocked total cash
            MonthlyIncome = totalIncome,
            MonthlyExpenses = totalExpenses,
            NetSavings = totalIncome - totalExpenses
        };
    }

    public List<TransactionDto> GetRecentTransactions(int count = 10)
    {
        return _transactions.OrderByDescending(t => t.Date).Take(count).ToList();
    }

    public List<InvestmentDto> GetInvestments()
    {
        return _investments;
    }

    public List<MonthlyDataDto> GetMonthlyData()
    {
        // Mocked monthly data for the last 6 months
        return new List<MonthlyDataDto>
        {
            new() { Month = "Apr", Income = 5200, Expenses = 3800 },
            new() { Month = "May", Income = 6100, Expenses = 4200 },
            new() { Month = "Jun", Income = 5800, Expenses = 3900 },
            new() { Month = "Jul", Income = 6500, Expenses = 4100 },
            new() { Month = "Aug", Income = 7200, Expenses = 4500 },
            new() { Month = "Sep", Income = 6750, Expenses = 4300 }
        };
    }

    public List<ExpenseByCategoryDto> GetExpensesByCategory()
    {
        return _transactions
            .Where(t => t.Type == "Expense")
            .GroupBy(t => t.Category)
            .Select(g => new ExpenseByCategoryDto
            {
                Category = g.Key,
                Amount = Math.Abs(g.Sum(t => t.Amount))
            })
            .OrderByDescending(e => e.Amount)
            .ToList();
    }
}
