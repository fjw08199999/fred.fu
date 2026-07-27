# English Studies Degree — Website

A static website for a **BA (Hons) English Studies** degree programme.

## Files

- `index.html` — the single-page site (About, Curriculum, Careers, Admissions, Contact)
- `styles.css` — all styling (responsive, no external dependencies)

## Deployment (GitHub Pages)

Deployment is automated by `.github/workflows/deploy-pages.yml`, which publishes
the contents of this `web/` folder whenever changes land on the `master` branch.

**One-time setup** (repository owner):

1. Go to the repository's **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

After that, every push to `master` that touches `web/**` will build and publish
the site automatically. You can also trigger it manually from the **Actions** tab
via **Run workflow**.

## Local preview

Just open `index.html` in a browser, or serve the folder:

```bash
cd web
python3 -m http.server 8000
# then visit http://localhost:8000
```
