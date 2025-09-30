namespace DashboardAPI.Models;

public class InvestmentDto
{
    public int Id { get; set; }
    public string Name { get; set; } = string.Empty;
    public decimal Value { get; set; }
    public decimal ReturnPercentage { get; set; }
    public string Type { get; set; } = string.Empty;
}
