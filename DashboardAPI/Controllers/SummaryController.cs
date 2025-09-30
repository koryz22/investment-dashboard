using DashboardAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SummaryController : ControllerBase
{
    private readonly FinancialRepository _repository;

    public SummaryController(FinancialRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult GetSummary()
    {
        var summary = _repository.GetSummary();
        return Ok(summary);
    }

    [HttpGet("monthly")]
    public IActionResult GetMonthlyData()
    {
        var monthlyData = _repository.GetMonthlyData();
        return Ok(monthlyData);
    }

    [HttpGet("expenses-by-category")]
    public IActionResult GetExpensesByCategory()
    {
        var expenses = _repository.GetExpensesByCategory();
        return Ok(expenses);
    }
}
