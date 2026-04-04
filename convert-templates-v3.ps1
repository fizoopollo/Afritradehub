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

@("ArtTemplatePage", "AnthologistTemplate", "BrutalistTemplate", "ClayTemplate", "DarkroomTemplate", "EtchTemplate", "ExhibitTemplate", "MioTemplate", "MonochromeTemplate", "OceanTemplate", "OkinawaTemplate", "PortfolioTemplate", "SunsetTemplate", "TotemTemplate", "WrongTemplate") | ForEach-Object {
    $src = "$sourceRoot/art/$_.tsx"
    $dst = "$destRoot/art/$_.tsx"
    if (Test-Path $src) { 
        Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
        $script:successCount++
        Write-Host "OK: art/$_.tsx"
    }
}

@("BeautyTemplatePage", "BeautyGalleryTemplate", "BeYoursTemplate", "WonderTemplate") | ForEach-Object {
    $src = "$sourceRoot/beauty/$_.tsx"
    $dst = "$destRoot/beauty/$_.tsx"
    if (Test-Path $src) { 
        Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
        $script:successCount++
        Write-Host "OK: beauty/$_.tsx"
    }
}

@("AirconTemplate", "EnthusiastTemplate", "GeniusTemplate", "GrainTemplate", "LeapTemplate", "NoteableTemplate", "PanoramaTemplate", "PrintingTemplate", "SmileTemplate", "SonikTemplate", "TattooTemplate", "WorkflowTemplate") | ForEach-Object {
    $src = "$sourceRoot/services/$_.tsx"
    $dst = "$destRoot/services/$_.tsx"
    if (Test-Path $src) { 
        Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
        $script:successCount++
        Write-Host "OK: services/$_.tsx"
    }
}

@("AutoTemplate", "DriveTemplate", "FleetTemplate", "GarageTemplate", "MaranelloTemplate", "NitroTemplate", "TorqueTemplate") | ForEach-Object {
    $src = "$sourceRoot/auto/$_.tsx"
    $dst = "$destRoot/auto/$_.tsx"
    if (Test-Path $src) { 
        Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
        $script:successCount++
        Write-Host "OK: auto/$_.tsx"
    }
}

@("BagsTemplate", "CourierTemplate", "GalleriaTemplate", "LeatherTemplate", "PrestigeTemplate", "ToteTemplate", "VoyageTemplate") | ForEach-Object {
    $src = "$sourceRoot/bags/$_.tsx"
    $dst = "$destRoot/bags/$_.tsx"
    if (Test-Path $src) { 
        Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
        $script:successCount++
        Write-Host "OK: bags/$_.tsx"
    }
}

$src = "$sourceRoot/ElectronicsTemplate.tsx"
$dst = "$destRoot/electronics/ElectronicsTemplate.tsx"
if (Test-Path $src) { 
    Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
    $script:successCount++
    Write-Host "OK: electronics/ElectronicsTemplate.tsx"
}

$src = "$sourceRoot/FashionTemplate.tsx"
$dst = "$destRoot/fashion/FashionTemplate.tsx"
if (Test-Path $src) { 
    Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
    $script:successCount++
    Write-Host "OK: fashion/FashionTemplate.tsx"
}

$src = "$sourceRoot/FoodTemplate.tsx"
$dst = "$destRoot/food/FoodTemplate.tsx"
if (Test-Path $src) { 
    Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
    $script:successCount++
    Write-Host "OK: food/FoodTemplate.tsx"
}

$src = "$sourceRoot/HandmadeTemplate.tsx"
$dst = "$destRoot/handmade/HandmadeTemplate.tsx"
if (Test-Path $src) { 
    Set-Content -Path $dst -Value (ConvertTemplate (Get-Content $src -Raw)) -Encoding UTF8
    $script:successCount++
    Write-Host "OK: handmade/HandmadeTemplate.tsx"
}

Write-Host ""
Write-Host "Conversion Complete"
Write-Host "Files created: $successCount"
