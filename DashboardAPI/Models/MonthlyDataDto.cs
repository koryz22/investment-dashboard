namespace DashboardAPI.Models;

public class MonthlyDataDto
{
    public string Month { get; set; } = string.Empty;
    public decimal Income { get; set; }
    public decimal Expenses { get; set; }
}
