namespace DashboardAPI.Models;

public class ExpenseByCategoryDto
{
    public string Category { get; set; } = string.Empty;
    public decimal Amount { get; set; }
}
