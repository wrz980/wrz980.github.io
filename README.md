# Achievements Site

A multi-page static site for showcasing academic and extracurricular achievements, built for GitHub Pages with plain HTML, CSS, and JavaScript. No build step.

## Structure

```
├── index.html              Home page with hero and highlight cards
├── academics.html          Academic achievements (ledger layout)
├── extracurriculars.html   Activities and involvement (ledger layout)
├── projects.html           Project cards
├── contact.html            Contact links
├── css/style.css           Shared stylesheet (design tokens at the top)
├── js/main.js              Nav toggle and current-page highlighting
└── assets/
    ├── images/awards/      Award and certificate photos
    ├── images/activities/  Activity and event photos
    └── docs/               PDFs such as resume or certificates
```

## Setup

1. Create a GitHub repo. Name it `yourusername.github.io` for a user site, or any name for a project site.
2. Push these files to the `main` branch.
3. In the repo, go to Settings > Pages, set Source to "Deploy from a branch," and choose `main` / root.
4. The site goes live at `https://yourusername.github.io` (or `/repo-name/` for a project site) within a couple of minutes.

All internal links use relative paths (`./`), so the site works at either URL without changes.

## Customizing

- Replace "Your Name" in each page's header, footer, and `<title>`.
- Edit ledger entries in `academics.html` and `extracurriculars.html`. Each entry is one `<li class="ledger-entry">` block: date, marker, then title, organization, and description.
- Colors and fonts are CSS variables at the top of `css/style.css`.
- Adding a page: copy an existing page, update the content, and add a link to the nav list in every page.

## Local preview

Open `index.html` directly in a browser, or run a local server:

```
python -m http.server 8000
```

Then visit http://localhost:8000.
