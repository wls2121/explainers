# Explainers site

Lightweight GitHub Pages site for **conceptual explainers only** — architecture
diagrams, how-it-works walkthroughs, concept pages. A real URL you paste in Slack
and it opens in one click. No "request access," no Drive mangling your HTML.

## The one house rule

Nothing here can ever become the top Google hit for a customer's name.

That means: no account names, no ARR or deal values, no churn or renewal status,
no named stakeholders. `github.io` pages are public and Google-indexed. If a page
needs any of that, it does **not** belong in this repo — keep it in Drive or a
Cowork artifact instead.

Quick test before you publish a page: *"If a customer searched their own company
name, would I be embarrassed by what comes up?"* If yes, stop.

## What's here

```
claude-explainers/
  index.html              landing page — one card per explainer
  _template.html          copy this to start a new explainer
  explainers/
    architecture.html     first real page
    architecture-diagram.svg
```

## One-time setup (~5 min)

1. Make a new GitHub repo, e.g. `explainers` (public is fine — that's the point).
2. Put the contents of this `claude-explainers/` folder at the repo root.
3. `git init && git add . && git commit -m "first explainers"`
4. `git remote add origin git@github.com:YOURNAME/explainers.git`
5. `git push -u origin main`
6. On GitHub: **Settings → Pages → Source: deploy from branch → `main` / root → Save.**
7. Wait ~1 min. Your site is live at `https://YOURNAME.github.io/explainers/`.

## Adding a new explainer (every time after)

1. Copy `_template.html` into `explainers/`, rename it (e.g. `funnel.html`).
2. Fill in the title, description, and either drop in an SVG or uncomment the
   Mermaid block.
3. Add a card linking to it in `index.html`.
4. `git add . && git commit -m "add funnel explainer" && git push`

That's the whole publish step. Pages redeploys on push automatically.

## Notes

- `<meta name="robots" content="noindex">` is set on every page as a soft guard.
  It discourages search engines but does **not** make the page private — treat
  everything here as public regardless.
- Mermaid loads from CDN (`cdn.jsdelivr.net`). Static SVGs need no network.
- Diagrams scale to the page width; no build step, no framework.
