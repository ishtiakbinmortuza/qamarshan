# Mashaykhat Qamarshan – Static Website

A small, multi-page static website for the micronation “Mashaykhat Qamarshan.” Built with plain HTML, a shared CSS theme, and a shared JavaScript file.

## Pages
- `index.html` – Homepage
- `about.html` – Etymology, history, government, symbols
- `citizenship.html` – Policy summary and petition form (client-side only)
- `diplomacy.html` – Foreign relations and recognition lists
- `principality.html` – Principality of Lamdam overview
- `military.html` – White Wolves background and indicative ranks
- `orders.html` – Royal Orders (Nishans)

All pages load the same CSS and JS:
- `assets/css/style.css`
- `assets/js/main.js`

## How to run
Open `index.html` in a web browser.

Optional: serve locally with PowerShell (Windows):
```powershell
# From the project folder
python -m http.server 8000
# then open http://localhost:8000/
```

## Notes
- The citizenship form is a demo-only client-side form; it does not submit to a backend.
- Navigation is responsive and collapses on smaller screens.

## Credits and License
Content on the pages is adapted from the MicroWiki article “Qamarshan”:
https://micronations.wiki/wiki/Qamarshan

MicroWiki content is available under the Creative Commons Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0). Attribution is included on each page. You should preserve this license and attribution if you redistribute modified versions.
