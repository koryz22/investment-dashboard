# Investment & Accounting Dashboard - Development Startup Script

Write-Host "Starting Investment & Accounting Dashboard..." -ForegroundColor Cyan
Write-Host ""

# Start Backend API
Write-Host "Starting ASP.NET Core Backend API..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\DashboardAPI'; dotnet run"

# Wait a bit for the backend to start
Start-Sleep -Seconds 3

# Start Frontend
Write-Host "Starting Angular Frontend..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot\DashboardUI'; ng serve -o"

Write-Host ""
Write-Host "Dashboard is starting up!" -ForegroundColor Green
Write-Host "Backend API: http://localhost:5172" -ForegroundColor Cyan
Write-Host "Frontend UI: http://localhost:4200" -ForegroundColor Cyan
Write-Host ""
Write-Host "Two PowerShell windows have been opened for backend and frontend." -ForegroundColor Gray
Write-Host "Press any key to exit this window..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
