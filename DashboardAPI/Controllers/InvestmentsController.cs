using DashboardAPI.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace DashboardAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class InvestmentsController : ControllerBase
{
    private readonly FinancialRepository _repository;

    public InvestmentsController(FinancialRepository repository)
    {
        _repository = repository;
    }

    [HttpGet]
    public IActionResult GetInvestments()
    {
        var investments = _repository.GetInvestments();
        return Ok(investments);
    }
}
