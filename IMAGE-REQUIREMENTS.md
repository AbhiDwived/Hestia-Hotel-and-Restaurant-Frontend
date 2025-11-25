# Image Requirements Deep-Dive

This document captures the current image inventory for `frontend/public`, the way each bucket is consumed in the UI, and guidance for delivering future assets that match the existing layouts and brand aesthetic.

## Inventory Summary

| Bucket / Usage | Files (pattern) | Count | Pixel Sizes Observed |
| --- | --- | --- | --- |
| Home hero slider | `/img/banner-{1..6}.jpg`, `/img/video.jpg` | 7 | 1920×905, 1920×926 |
| Page hero/breadcrumb | `/img/banner/page-banner-{1..10}.jpg` | 10 | 1920×450 |
| Section backgrounds | `/img/bg/{banner-bg,booking-bg,booking,call}.jpg`, `/img/bg/signature.png` | 5 | 1920×933, 1920×600, 1920×926, 1290×195, 130×60 |
| Room & accommodation photos | `/img/hotel/*.jpg` | 25 | 300×250 → 820×820 (mixed) |
| Luxury collage | `/img/luxury/*.jpg` | 14 | 600×700, 600×414, 1260×700 |
| Feature/gallery tiles | `/img/features/*.jpg` | 16 | 410×410, 630×410, 640×600, 1260×820, 1290×460, 1920×1080 |
| Blog images | `/img/blog/*.jpg` | 18 | 80×80, 820×440, 820×460, 830×500, 1800×900, 1920×900 |
| Team portraits | `/img/team/*.jpg` | 10 | 600×640, 820×900 |
| Avatars/testimonials | `/img/avatar/*.jpg` | 5 | 100×100, 220×300 |
| Icons & amenity badges | `/img/icon/*.png` | 27 | 35×35 → 169×130 (most 40–60 px) |
| Logos & favicons | `/logo.png`, `/logo-1.png`, `/favicon.png` | 3 | 628×144 (logos), 96×70 (favicon) |
| Misc CTA art | `/img/content.png`, `/img/bar.jpg`, `/cleaning.png`, `/location.png`, `/wifi.png` | 5 | 40×40, 96×70, 621×567, 1833×1281 |
| 404 artwork | `/img/404/404.png` (WebP VP8L) | 1 | 700×398 |
| Slider glyph | `/fonts icons/right-arrow.png` | 1 | 50×50 |

> **Methodology:** Dimensions gathered via PowerShell + `System.Drawing` scripted walk over `frontend/public`, then cross-referenced with component imports/usage (e.g., `app/home/banner.jsx`, `app/breadcrumb/breadcrumb.jsx`, `app/home/room-area.jsx`, `app/header/HeaderOne.jsx`).

## Per-bucket Notes

- **Hero sections:** Swiper hero (`/img/banner-*.jpg`) and video CTA (`/img/video.jpg`) are applied as full-bleed backgrounds. Maintain ≥1920 px width and ~2:1 aspect ratio so the overlay typography keeps its spacing.
- **Breadcrumb/page headers:** Every page uses `BreadCrumb` with `/img/banner/page-banner-*.jpg`, so the 1920×450 crop must remain consistent for text legibility.
- **Section backgrounds:** Booking and call-to-action strips set background images inline (`style={{ backgroundImage: ... }}`). Keep at least 1920×600 resolution; retain the 130×60 transparent signature for detailing.
- **Room imagery:** Cards (`room-area`, `room-list`, `room-details`) mix square 820×820 tiles with smaller supporting crops. Use square crops for consistency and deliver 2× source files for retina sharpness.
- **Luxury/features galleries:** Masonry relies on both portrait (600×700) and landscape (600×414, 1260×820) shots. When adding new photos, follow the existing ratios to avoid reworking CSS.
- **Blog assets:** Detail pages use 1920×900 hero images; listing cards sit around 820×440/820×460. Sidebar thumbnails are 80×80. Provide all three sizes for each new blog entry.
- **Team/avatars:** Two portrait ratios exist: 4:5 (820×900) for team pages and 3:4 (220×300) for testimonials. Comments use 100×100 avatars.
- **Icons:** `/img/icon/*.png` houses all amenity/service glyphs (mostly 40–60 px). Keep transparent PNG or migrate to monochrome SVG for crisper rendering; match stroke weight and color palette.
- **Logos/favicons:** Header pulls `/logo.png`; keep both logo variants (dark/light) at 628×144. Global layout references `favicon.png` at 96×70; consider exporting multi-size ICOs for better cross-browser support.
- **404 artwork:** File is actually a lossless WebP (VP8L) mislabeled as `.png`. Either convert to true PNG or rename to `.webp` so optimizers and browsers detect the format correctly.

## Delivery Guidelines

- Export hero/page background assets at ≥1920 px width, optimized (WebP + fallback JPEG) with visual weight under ~400 KB.
- Provide room/blog/feature imagery in two crops: master (≥1600 px long edge) plus ready-to-ship crops matching the table above. Keep composition consistent so CSS grids stay aligned.
- Maintain iconography as vector-first. When rasterizing, stick to 1× (60 px) plus optional 2× for crispness on high-DPI displays.
- When adding new buckets, update this document with path, purpose, count, and target sizes so designers/developers share a single source of truth.

## Follow-up Recommendations

1. **Adopt `next/image` broadly** (only `about/services-two.jsx` uses it now) to leverage automatic resizing, lazy-loading, and format negotiation.
2. **Normalize background assets** by converting large JPEGs to WebP/AVIF while keeping color depth for gradients (booking/call sections).
3. **Fix mislabeled 404 asset** (`/img/404/404.png` → `.webp` or convert properly) to avoid loader confusion.
4. **Document export presets** (e.g., Figma/Lightroom templates) so the design team delivers consistent crops without manual guesswork.

