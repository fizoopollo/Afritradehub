# Startup Script for Afritrade Hub Dual Services
# This script starts both Afritrade and Afrify services in separate terminal windows

param(
    [switch]$Afritrade = $true,
    [switch]$Afrify = $true
)

$projectRoot = "c:\Users\fezza\Afritradehub 2"

# Function to start a service
function Start-Service {
    param(
        [string]$Name,
        [string]$Command,
        [string]$WorkingDirectory
    )
    
    Write-Host "Starting $Name..." -ForegroundColor Green
    
    # Create a new PowerShell window for each service
    Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$WorkingDirectory'; $Command" -WindowStyle Normal
}

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Afritrade Hub - Dual Service Launcher" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

if ($Afritrade) {
    Write-Host "Starting Afritrade Services..." -ForegroundColor Yellow
    
    # Start Afritrade Backend
    Start-Service `
        -Name "Afritrade Backend (Port 8000)" `
        -Command ".\.venv\Scripts\python.exe manage.py runserver 8000" `
        -WorkingDirectory "$projectRoot\backend"
    
    Start-Sleep -Seconds 2
    
    # Start Afritrade Frontend
    Start-Service `
        -Name "Afritrade Frontend (Port 3000)" `
        -Command "npm run dev" `
        -WorkingDirectory "$projectRoot\frontend"
    
    Start-Sleep -Seconds 2
}

if ($Afrify) {
    Write-Host "Starting Afrify Services..." -ForegroundColor Yellow
    
    # Start Afrify Backend
    Start-Service `
        -Name "Afrify Backend (Port 8001)" `
        -Command ".\.venv\Scripts\python.exe manage.py runserver 8001" `
        -WorkingDirectory "$projectRoot\afrify-backend"
    
    Start-Sleep -Seconds 2
    
    # Start Afrify Frontend
    Start-Service `
        -Name "Afrify Frontend (Port 3001)" `
        -Command "npm run dev" `
        -WorkingDirectory "$projectRoot\afrify-frontend"
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Services Started!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Afritrade:" -ForegroundColor Green
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  Backend:  http://localhost:8000" -ForegroundColor White
Write-Host ""
Write-Host "Afrify:" -ForegroundColor Green
Write-Host "  Frontend: http://localhost:3001" -ForegroundColor White
Write-Host "  Backend:  http://localhost:8001" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C in any terminal to stop that service" -ForegroundColor Yellow
