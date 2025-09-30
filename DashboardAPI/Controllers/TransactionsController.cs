using DashboardAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TransactionsController : ControllerBase
{
    private readonly FinancialRepository _repository;

    public TransactionsController(FinancialRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult GetTransactions([FromQuery] int count = 10)
    {
        var transactions = _repository.GetRecentTransactions(count);
        return Ok(transactions);
    }
}
