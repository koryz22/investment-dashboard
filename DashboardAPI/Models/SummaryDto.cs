namespace DashboardAPI.Models;

public class SummaryDto
{
    public decimal TotalCash { get; set; }
    public decimal MonthlyIncome { get; set; }
    public decimal MonthlyExpenses { get; set; }
    public decimal NetSavings { get; set; }
}
