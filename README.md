# Research Group Website (Static + Bilingual)

This is a static website template for a research group. It uses "Vanilla" web technologies (HTML, CSS, JavaScript) without any build tools or frameworks.

It supports **Chinese (default)** + **English** via an `/en/` mirror directory, with a language switch in the navigation bar.

## Project Structure

```
.
├── index.html             # 首页（中文）
├── members.html           # 成员（中文）
├── research.html          # 研究（中文）
├── publications.html      # 论文（中文）
├── news.html              # 新闻（中文）
├── resources.html         # 资源（中文）
├── teaching.html          # 教学（中文）
├── join.html              # 招生（中文）
├── contact.html           # 联系（中文）
├── en/                    # English mirror (same file names)
│   ├── index.html
│   ├── members.html
│   └── ...
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── site.js            # Shared header/footer + nav + language switch + mobile menu
└── assets/
    └── images/
        ├── hero-bg.svg
        └── placeholder.svg
```

## How to Deploy to GitHub Pages

1.  **Create a GitHub Repository:**
    *   Go to GitHub and create a new repository (e.g., `isrg-website`).

2.  **Push Code:**
    *   Initialize git in this folder: `git init`
    *   Add files: `git add .`
    *   Commit: `git commit -m "Initial commit"`
    *   Add remote: `git remote add origin https://github.com/YOUR_USERNAME/isrg-website.git`
    *   Push: `git push -u origin main`

3.  **Enable GitHub Pages:**
    *   Go to your repository **Settings** > **Pages**.
    *   Under "Build and deployment", select **Source** as "Deploy from a branch".
    *   Select `main` (or `master`) branch and `/ (root)` folder.
    *   Click **Save**.

Your site will be live at `https://YOUR_USERNAME.github.io/isrg-website/`.

## Customization

*   **Content:** Edit the HTML files to update text, news, and publications (both root and `/en/`).
*   **Styling:** Modify `css/style.css` to change colors, fonts, or layout.
*   **Images:** Place images in `assets/images/` and update the `src` attributes in the HTML (or keep the provided SVG placeholders).

