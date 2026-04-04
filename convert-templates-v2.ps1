$sourceRoot = "c:\Users\fezza\Afritradehub 2\afrify-frontend\src\pages\templates"
$destRoot = "c:\Users\fezza\Afritradehub 2\frontend\lib\templates"

function ConvertTemplate {
    param([string]$content)
    $content = $content -replace 'import\s+\{\s*Link\s*\}\s+from\s+"react-router-dom"', 'import Link from "next/link"'
    $content = $content -replace 'import\s+\{\s*useNavigate\s*\}\s+from\s+"react-router-dom"', 'import { useRouter } from "next/navigation"'
    $content = $content -replace '<Link\s+to=', '<Link href='
    $content = $content -replace 'navigate\(', 'router.push('
    $content = $content -replace 'from\s+"@/assets/', 'from "/assets/'
    return $content
}

New-Item -ItemType Directory -Force -Path "$destRoot/art" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/beauty" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/services" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/auto" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/bags" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/electronics" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/fashion" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/food" -ErrorAction SilentlyContinue | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/handmade" -ErrorAction SilentlyContinue | Out-Null

$successCount = 0

# Art (15 files)
@("ArtTemplatePage", "AnthologistTemplate", "BrutalistTemplate", "ClayTemplate", "DarkroomTemplate", "EtchTemplate", "ExhibitTemplate", "MioTemplate", "MonochromeTemplate", "OceanTemplate", "OkinawaTemplate", "PortfolioTemplate", "SunsetTemplate", "TotemTemplate", "WrongTemplate") | ForEach-Object {
    $src = "$sourceRoot/art/$_.tsx"
    $dst = "$destRoot/art/$_.tsx"
    if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ art/$_.tsx" -ForegroundColor Green }
}

# Beauty (4 files)
@("BeautyTemplatePage", "BeautyGalleryTemplate", "BeYoursTemplate", "WonderTemplate") | ForEach-Object {
    $src = "$sourceRoot/beauty/$_.tsx"
    $dst = "$destRoot/beauty/$_.tsx"
    if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ beauty/$_.tsx" -ForegroundColor Green }
}

# Services (12 files)
@("AirconTemplate", "EnthusiastTemplate", "GeniusTemplate", "GrainTemplate", "LeapTemplate", "NoteableTemplate", "PanoramaTemplate", "PrintingTemplate", "SmileTemplate", "SonikTemplate", "TattooTemplate", "WorkflowTemplate") | ForEach-Object {
    $src = "$sourceRoot/services/$_.tsx"
    $dst = "$destRoot/services/$_.tsx"
    if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ services/$_.tsx" -ForegroundColor Green }
}

# Auto (7 files)
@("AutoTemplate", "DriveTemplate", "FleetTemplate", "GarageTemplate", "MaranelloTemplate", "NitroTemplate", "TorqueTemplate") | ForEach-Object {
    $src = "$sourceRoot/auto/$_.tsx"
    $dst = "$destRoot/auto/$_.tsx"
    if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ auto/$_.tsx" -ForegroundColor Green }
}

# Bags (7 files)
@("BagsTemplate", "CourierTemplate", "GalleriaTemplate", "LeatherTemplate", "PrestigeTemplate", "ToteTemplate", "VoyageTemplate") | ForEach-Object {
    $src = "$sourceRoot/bags/$_.tsx"
    $dst = "$destRoot/bags/$_.tsx"
    if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ bags/$_.tsx" -ForegroundColor Green }
}

# Single files (4 files)
$dst = "$destRoot/electronics/ElectronicsTemplate.tsx"
$src = "$sourceRoot/ElectronicsTemplate.tsx"
if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ electronics/ElectronicsTemplate.tsx" -ForegroundColor Green }

$dst = "$destRoot/fashion/FashionTemplate.tsx"
$src = "$sourceRoot/FashionTemplate.tsx"
if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ fashion/FashionTemplate.tsx" -ForegroundColor Green }

$dst = "$destRoot/food/FoodTemplate.tsx"
$src = "$sourceRoot/FoodTemplate.tsx"
if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ food/FoodTemplate.tsx" -ForegroundColor Green }

$dst = "$destRoot/handmade/HandmadeTemplate.tsx"
$src = "$sourceRoot/HandmadeTemplate.tsx"
if (Test-Path $src) { Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8; $script:successCount++; Write-Host "✓ handmade/HandmadeTemplate.tsx" -ForegroundColor Green }

Write-Host "`n=== Conversion Complete ===" -ForegroundColor Cyan
Write-Host "Successfully created: $successCount files" -ForegroundColor Green
