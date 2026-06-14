# Verizon Authorized Reseller — Website

A single-page landing site for an authorized Verizon reseller (Internet, Mobile, TV & Home Phone).
Call button number used throughout: (405) 240-9779.

## Files
- `index.html`      -> The live homepage (currently the LIGHT theme)
- `theme-light.html`   -> Light theme (same as index.html)
- `theme-classic.html` -> Classic black/red theme
- `theme-vibrant.html` -> Vibrant gradient theme
- `404.html`        -> Fallback page
- `netlify.toml`    -> Netlify config (optional)

## Switch the homepage theme
Whatever you want as the live homepage, just copy it over index.html.
Example (to use the vibrant theme as homepage):
    copy theme-vibrant.html  -> index.html   (overwrite)

## Deploy — pick one

### Netlify Drop (easiest)
1. Go to https://app.netlify.com/drop
2. Drag THIS WHOLE FOLDER onto the page.
3. It goes live instantly. Sign in (free) to keep + rename it.

### Vercel
1. Push this folder to a GitHub repo.
2. Import it at https://vercel.com/new and click Deploy.

### Cloudflare Pages
1. Go to https://pages.cloudflare.com
2. Connect the repo or direct-upload this folder.

### GitHub Pages
1. Create a repo, upload these files.
2. Settings -> Pages -> Source: main branch -> Save.

## Edit your details
Open the .html file in any text editor and find/replace:
- Phone number: (405) 240-9779  and  tel:+14052409779
- Prices and bundle features (search for "$45", "Triple Play", etc.)
- Footer business name / disclaimer

## Note
Uses a generic checkmark logo, not Verizon's official trademarked logo.
Confirm what your dealer agreement allows before using official brand assets.
