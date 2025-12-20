# Intelligent Systems Research Group (ISRG) Website

This is a static website template for a research group, designed to be hosted on GitHub Pages. It uses "Vanilla" web technologies (HTML, CSS, JavaScript) without any complex build tools or frameworks.

## Project Structure

```
.
├── index.html      # Home page
├── members.html    # Team members page
├── research.html   # Research and publications page
├── news.html       # Full news archive
├── css/
│   └── style.css   # Main stylesheet
├── js/
│   └── main.js     # Basic interactivity (mobile menu)
└── assets/
    └── images/     # Place your images here
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

*   **Content:** Edit the HTML files to update text, news, and publications.
*   **Styling:** Modify `css/style.css` to change colors, fonts, or layout.
*   **Images:** Place member photos and other images in `assets/images/` and update the `src` attributes in the HTML.

