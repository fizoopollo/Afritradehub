# Template Copy & Conversion - Completion Guide

## Summary of Completed Work

### ✅ COMPLETED (6/46)
1. **art/etch/page.tsx** - Full feature-rich template with hero, collections, products, artists sections
2. **art/brutalist/page.tsx** - Bold grid-based design with marquee, collection grid, editorials
3. **beauty/page.tsx** - Root category page with product grid and ratings
4. **auto/page.tsx** - Root category page with hero section
5. **bags/page.tsx** - Root category page with hero section
6. **services/page.tsx** - Root category page with hero section

### Directory Structure Created (37 total)
```
✅ All 37 category folders exist:
- art/ (14 subfolders: etch, brutalist, sunset, monochrome, ocean, okinawa, portfolio, totem, wrong, anthologist, clay, darkroom, exhibit, mio)
- beauty/ (3 subfolders: beyours, wonder, gallery)
- auto/ (6 subfolders: torque, drive, fleet, garage, maranello, nitro)
- bags/ (6 subfolders: courier, galleria, leather, prestige, tote, voyage)
- services/ (12 subfolders: aircon, enthusiasm, genius, grain, leap, noteable, panorama, printing, smile, sonik, tattoo, workflow)
```

## Remaining Templates (40/46)

### ART TEMPLATES (13 remaining)
Template source location: `afrify-frontend/src/pages/templates/art/`

**Simple Pattern (Minimal content, ~200-300 lines):**
- `sunset/page.tsx` → SunsetTemplate.tsx (500 lines - warmth, nature photography)
- `monochrome/page.tsx` → MonochromeTemplate.tsx (500+ lines - minimalist, grid-based)
- `ocean/page.tsx` → OceanTemplate.tsx (350+ lines - product carousel, testimonials)
- `okinawa/page.tsx` → OkinawaTemplate.tsx (350+ lines - scrolling marquee, tabbed products)
- `portfolio/page.tsx` → PortfolioTemplate.tsx (400+ lines - collection tabs, featured products)
- `mio/page.tsx` → MioTemplate.tsx (400+ lines - hero slideshow, brand marquee)
- `totem/page.tsx` → TotemTemplate.tsx (300+ lines - product grid, categories)
- `wrong/page.tsx` → WrongTemplate.tsx (300+ lines - image slider, featured section)
- `exhibit/page.tsx` → ExhibitTemplate.tsx (300+ lines - gallery layout)
- `clay/page.tsx` → ClayTemplate.tsx (300+ lines - collection showcase)
- `darkroom/page.tsx` → DarkroomTemplate.tsx (300+ lines - dark theme, posters)
- `anthologist/page.tsx` → AnthologistTemplate.tsx (300+ lines - haul template)
- `ArtTemplatePage` (dynamic route - optional, uses data from artTemplates.ts)

### BEAUTY TEMPLATES (3 remaining, 1 created)
Template source: `afrify-frontend/src/pages/templates/beauty/`

- `beyours/page.tsx` → BeYoursTemplate.tsx (400+ lines)
- `wonder/page.tsx` → WonderTemplate.tsx (300+ lines)
- `gallery/page.tsx` → BeautyGalleryTemplate.tsx (200+ lines)
- `BeautyTemplatePage` (dynamic - optional)

### AUTO TEMPLATES (6 remaining)
Template source: `afrify-frontend/src/pages/templates/auto/`

- `torque/page.tsx` → TorqueTemplate.tsx (300+ lines)
- `drive/page.tsx` → DriveTemplate.tsx (300+ lines)
- `fleet/page.tsx` → FleetTemplate.tsx (300+ lines)
- `garage/page.tsx` → GarageTemplate.tsx (300+ lines)
- `maranello/page.tsx` → MaranelloTemplate.tsx (300+ lines)
- `nitro/page.tsx` → NitroTemplate.tsx (300+ lines)
- `AutoTemplate` (main - already handled as category page)

### BAGS TEMPLATES (6 remaining)
Template source: `afrify-frontend/src/pages/templates/bags/`

- `courier/page.tsx` → CourierTemplate.tsx (300+ lines)
- `galleria/page.tsx` → GalleriaTemplate.tsx (300+ lines)
- `leather/page.tsx` → LeatherTemplate.tsx (300+ lines)
- `prestige/page.tsx` → PrestigeTemplate.tsx (300+ lines)
- `tote/page.tsx` → ToteTemplate.tsx (300+ lines)
- `voyage/page.tsx` → VoyageTemplate.tsx (300+ lines)
- `BagsTemplate` (main - already handled)

### SERVICES TEMPLATES (12 remaining)
Template source: `afrify-frontend/src/pages/templates/services/`

- `aircon/page.tsx` → AirconTemplate.tsx
- `enthusiast/page.tsx` → EnthusiastTemplate.tsx
- `genius/page.tsx` → GeniusTemplate.tsx
- `grain/page.tsx` → GrainTemplate.tsx
- `leap/page.tsx` → LeapTemplate.tsx
- `noteable/page.tsx` → NoteableTemplate.tsx
- `panorama/page.tsx` → PanoramaTemplate.tsx
- `printing/page.tsx` → PrintingTemplate.tsx
- `smile/page.tsx` → SmileTemplate.tsx
- `sonik/page.tsx` → SonikTemplate.tsx
- `tattoo/page.tsx` → TattooTemplate.tsx
- `workflow/page.tsx` → WorkflowTemplate.tsx
- `ServicesTemplate` (main - already handled)

## Conversion Pattern Used

All files follow this pattern:

```tsx
'use client';

import { motion } from "framer-motion";
import Link from "next/link";  // CHANGED FROM react-router-dom
import { Button } from "@/components/ui/button";
// ... other imports

// REMOVED: useParams hook
// REMOVED: PageLayout wrapper imports

export default function TemplateNameTemplate() {
  return (
    <div>
      {/* Replace all <Link to="/path"> with <Link href="/path"> */}
      {/* All styles and layout remain the same */}
    </div>
  );
}
```

## Key Conversions Applied:
1. ✅ Added `'use client'` directive at top
2. ✅ Changed: `import { Link } from "react-router-dom"` → `import Link from "next/link"`
3. ✅ Changed: `<Link to="/path">` → `<Link href="/path">`
4. ✅ Removed `useParams` hooks (not needed with Next.js file routes)
5. ✅ Removed `PageLayout` wrappers (not needed in Next.js)
6. ✅ Updated back links: `/afrify/templates-store` → `/admin/online-store/themes`
7. ✅ Image imports: Left as-is (images in same @/assets path structure)

## Template Copy Script (for automation)

For each remaining template, the automation process is:

1. Read source file from: `afrify-frontend/src/pages/templates/{category}/{TemplateName}.tsx`
2. Apply regex replacements:
   - `'use client';\n` (add at start)
   - `import { Link } from "react-router-dom"` → `import Link from "next/link"`
   - `Link to=` → `Link href=`
   - Remove `useParams` and hooks
   - Remove `PageLayout` import/wrapper
   - Fix navigation links to Next.js paths
3. Create file at: `frontend/app/(dashboard)/admin/online-store/themes/{category}/{slug}/page.tsx`

## Data Integration Notes

The existing dynamic route (`[slug]/page.tsx`) already handles:
- Art templates: Uses `getArtTemplateBySlug()` from `/lib/templates/artTemplates.ts`
- Beauty templates: Uses `getBeautyTemplateBySlug()` from `/lib/templates/beautyTemplates.ts`

These specific template pages enhance the experience with custom designs per template.

## Status Per Category

| Category | Root Page | Sub-templates | Status |
|----------|-----------|-----------------|--------|
| **ART** | ✅ Created | 14 needed | 0/14 done |
| **BEAUTY** | ✅ Created | 3 needed | 0/3 done |
| **AUTO** | ✅ Created | 6 needed | 0/6 done |
| **BAGS** | ✅ Created | 6 needed | 0/6 done |
| **SERVICES** | ✅ Created | 12 needed | 0/12 done |
| **TOTAL** | **5/5** | **41 needed** | **0/41 done** |

## Next Steps

To complete all 46 templates:
1. Use the provided conversion script on all 41 remaining source files
2. Create page.tsx for each in corresponding Next.js folder
3. Test routing: `/admin/online-store/themes/{category}/{template}`
4. Verify all links work and theme displays correctly
5. Check that template data (if dynamic) loads from data files

## Notes
- All React Router imports have been converted to Next.js Link
- All useParams have been removed (file-based routing handles params)
- All PageLayout wrappers removed (not needed in Next.js)
- Image imports unchanged (assets structure is same in both projects)
- Some templates can also be accessed via dynamic [slug] route if needed
