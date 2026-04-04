# PowerShell script to convert Afrify React Router templates to Next.js format

$sourceRoot = "c:\Users\fezza\Afritradehub 2\afrify-frontend\src\pages\templates"
$destRoot = "c:\Users\fezza\Afritradehub 2\frontend\lib\templates"

# Create all directories first
New-Item -ItemType Directory -Force -Path "$destRoot/art" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/beauty" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/services" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/auto" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/bags" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/electronics" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/fashion" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/food" | Out-Null
New-Item -ItemType Directory -Force -Path "$destRoot/handmade" | Out-Null

# Conversion function
function Convert-ReactRouterToNextJs {
    param([string]$content)
    
    # Convert imports
    $content = $content -replace 'import\s+\{\s*Link\s*\}\s+from\s+"react-router-dom"', 'import Link from "next/link"'
    $content = $content -replace 'import\s+\{\s*useNavigate\s*\}\s+from\s+"react-router-dom"', 'import { useRouter } from "next/navigation"'
    
    # Convert Link to attributes
    $content = $content -replace '<Link\s+to=', '<Link href='
    
    # Convert useNavigate calls
    $content = $content -replace 'const\s+navigate\s*=\s*useNavigate\(\)', 'const router = useRouter()'
    $content = $content -replace 'navigate\(', 'router.push('
    
    # Convert asset paths from @/assets/ to /assets/
    $content = $content -replace 'from\s+"@/assets/', 'from "/assets/'
    $content = $content -replace "from\s+'@/assets/", "from '/assets/"
    
    return $content
}


# Create all destination directories
mkdir -p "$destRoot/art" > $null 2>&1
mkdir -p "$destRoot/beauty" > $null 2>&1
mkdir -p "$destRoot/services" > $null 2>&1
mkdir -p "$destRoot/auto" > $null 2>&1
mkdir -p "$destRoot/bags" > $null 2>&1
mkdir -p "$destRoot/electronics" > $null 2>&1
mkdir -p "$destRoot/fashion" > $null 2>&1
mkdir -p "$destRoot/food" > $null 2>&1
mkdir -p "$destRoot/handmade" > $null 2>&1

Write-Host "Starting template conversion..." -ForegroundColor Green
$fileCount = 0
$successCount = 0

# Art templates (15 files)
$artFiles = @("ArtTemplatePage", "AnthologistTemplate", "BrutalistTemplate", "ClayTemplate", "DarkroomTemplate", "EtchTemplate", "ExhibitTemplate", "MioTemplate", "MonochromeTemplate", "OceanTemplate", "OkinawaTemplate", "PortfolioTemplate", "SunsetTemplate", "TotemTemplate", "WrongTemplate")
foreach ($fileName in $artFiles) {
    $sourceFile = "$sourceRoot/art/$fileName.tsx"
    $destFile = "$destRoot/art/$fileName.tsx"
    if (Test-Path $sourceFile) {
        $content = Get-Content $sourceFile -Raw
        $converted = Convert-ReactRouterToNextJs $content
        Set-Content -Path $destFile -Value $converted -Encoding UTF8
        $fileCount++; $successCount++
        Write-Host "✓ art/$fileName.tsx" -ForegroundColor Green
    } else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }
}

# Beauty templates (4 files)
$beautyFiles = @("BeautyTemplatePage", "BeautyGalleryTemplate", "BeYoursTemplate", "WonderTemplate")
foreach ($fileName in $beautyFiles) {
    $sourceFile = "$sourceRoot/beauty/$fileName.tsx"
    $destFile = "$destRoot/beauty/$fileName.tsx"
    if (Test-Path $sourceFile) {
        $content = Get-Content $sourceFile -Raw
        $converted = Convert-ReactRouterToNextJs $content
        Set-Content -Path $destFile -Value $converted -Encoding UTF8
        $fileCount++; $successCount++
        Write-Host "✓ beauty/$fileName.tsx" -ForegroundColor Green
    } else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }
}

# Services templates (12 files)
$servicesFiles = @("AirconTemplate", "EnthusiastTemplate", "GeniusTemplate", "GrainTemplate", "LeapTemplate", "NoteableTemplate", "PanoramaTemplate", "PrintingTemplate", "SmileTemplate", "SonikTemplate", "TattooTemplate", "WorkflowTemplate")
foreach ($fileName in $servicesFiles) {
    $sourceFile = "$sourceRoot/services/$fileName.tsx"
    $destFile = "$destRoot/services/$fileName.tsx"
    if (Test-Path $sourceFile) {
        $content = Get-Content $sourceFile -Raw
        $converted = Convert-ReactRouterToNextJs $content
        Set-Content -Path $destFile -Value $converted -Encoding UTF8
        $fileCount++; $successCount++
        Write-Host "✓ services/$fileName.tsx" -ForegroundColor Green
    } else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }
}

# Auto templates (7 files)
$autoFiles = @("AutoTemplate", "DriveTemplate", "FleetTemplate", "GarageTemplate", "MaranelloTemplate", "NitroTemplate", "TorqueTemplate")
foreach ($fileName in $autoFiles) {
    $sourceFile = "$sourceRoot/auto/$fileName.tsx"
    $destFile = "$destRoot/auto/$fileName.tsx"
    if (Test-Path $sourceFile) {
        $content = Get-Content $sourceFile -Raw
        $converted = Convert-ReactRouterToNextJs $content
        Set-Content -Path $destFile -Value $converted -Encoding UTF8
        $fileCount++; $successCount++
        Write-Host "✓ auto/$fileName.tsx" -ForegroundColor Green
    } else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }
}

# Bags templates (7 files)
$bagsFiles = @("BagsTemplate", "CourierTemplate", "GalleriaTemplate", "LeatherTemplate", "PrestigeTemplate", "ToteTemplate", "VoyageTemplate")
foreach ($fileName in $bagsFiles) {
    $sourceFile = "$sourceRoot/bags/$fileName.tsx"
    $destFile = "$destRoot/bags/$fileName.tsx"
    if (Test-Path $sourceFile) {
        $content = Get-Content $sourceFile -Raw
        $converted = Convert-ReactRouterToNextJs $content
        Set-Content -Path $destFile -Value $converted -Encoding UTF8
        $fileCount++; $successCount++
        Write-Host "✓ bags/$fileName.tsx" -ForegroundColor Green
    } else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }
}

# Single files (4 files)
$singleFile = "ElectronicsTemplate"
$sourceFile = "$sourceRoot/$singleFile.tsx"
$destFile = "$destRoot/electronics/$singleFile.tsx"
if (Test-Path $sourceFile) {
    $content = Get-Content $sourceFile -Raw
    $converted = Convert-ReactRouterToNextJs $content
    Set-Content -Path $destFile -Value $converted -Encoding UTF8
    $fileCount++; $successCount++
    Write-Host "✓ electronics/$singleFile.tsx" -ForegroundColor Green
} else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }

$singleFile = "FashionTemplate"
$sourceFile = "$sourceRoot/$singleFile.tsx"
$destFile = "$destRoot/fashion/$singleFile.tsx"
if (Test-Path $sourceFile) {
    $content = Get-Content $sourceFile -Raw
    $converted = Convert-ReactRouterToNextJs $content
    Set-Content -Path $destFile -Value $converted -Encoding UTF8
    $fileCount++; $successCount++
    Write-Host "✓ fashion/$singleFile.tsx" -ForegroundColor Green
} else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }

$singleFile = "FoodTemplate"
$sourceFile = "$sourceRoot/$singleFile.tsx"
$destFile = "$destRoot/food/$singleFile.tsx"
if (Test-Path $sourceFile) {
    $content = Get-Content $sourceFile -Raw
    $converted = Convert-ReactRouterToNextJs $content
    Set-Content -Path $destFile -Value $converted -Encoding UTF8
    $fileCount++; $successCount++
    Write-Host "✓ food/$singleFile.tsx" -ForegroundColor Green
} else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }

$singleFile = "HandmadeTemplate"
$sourceFile = "$sourceRoot/$singleFile.tsx"
$destFile = "$destRoot/handmade/$singleFile.tsx"
if (Test-Path $sourceFile) {
    $content = Get-Content $sourceFile -Raw
    $converted = Convert-ReactRouterToNextJs $content
    Set-Content -Path $destFile -Value $converted -Encoding UTF8
    $fileCount++; $successCount++
    Write-Host "✓ handmade/$singleFile.tsx" -ForegroundColor Green
} else { Write-Host "✗ Source not found: $sourceFile" -ForegroundColor Yellow }

Write-Host "`nConversion Summary:" -ForegroundColor Cyan
Write-Host "Total files processed: $fileCount" -ForegroundColor Green
Write-Host "Successfully converted: $successCount" -ForegroundColor Green
