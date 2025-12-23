// Shared site chrome (header/footer), navigation, language switch, and mobile menu.
// Pure static: no build tools, only DOM injection.
(() => {
  function normalizePageName() {
    const path = window.location.pathname || "";
    const last = path.split("/").filter(Boolean).pop() || "";
    if (last.endsWith(".html")) return last;
    return "index.html";
  }

  const page = normalizePageName();
  const htmlLang = (document.documentElement.getAttribute("lang") || "").toLowerCase();
  const isEnglish = htmlLang.startsWith("en") || (window.location.pathname || "").includes("/en/");

  const t = {
    labName: isEnglish ? "ISRG Lab" : "课题组",
    labTagline: isEnglish
      ? "A research group website template (static HTML/CSS/JS)."
      : "一个可直接上传部署的课题组网站模板（纯静态 HTML/CSS/JS）。",
    deptLine: isEnglish ? "Department / Institute" : "学院 / 研究院",
    addrLine: isEnglish ? "Street, City, Country" : "地址：某某路 123 号，某某市",
    contactTitle: isEnglish ? "Contact" : "联系",
    quickLinksTitle: isEnglish ? "Quick Links" : "快速入口",
    copyright: isEnglish ? "All Rights Reserved." : "保留所有权利。",
    langSwitchLabel: isEnglish ? "中文" : "EN",
    langSwitchHref: isEnglish ? `../${page}` : `en/${page}`,
  };

  const navItems = [
    { key: "home", zh: "首页", en: "Home", href: "index.html" },
    { key: "people", zh: "成员", en: "People", href: "members.html" },
    { key: "research", zh: "研究", en: "Research", href: "research.html" },
    { key: "publications", zh: "论文", en: "Publications", href: "publications.html" },
    { key: "news", zh: "新闻", en: "News", href: "news.html" },
    { key: "resources", zh: "资源", en: "Resources", href: "resources.html" },
    { key: "teaching", zh: "教学", en: "Teaching", href: "teaching.html" },
    { key: "join", zh: "招生", en: "Join", href: "join.html" },
    { key: "contact", zh: "联系", en: "Contact", href: "contact.html" },
  ];

  function hrefForCurrentLang(href) {
    // For English pages, links are relative within /en/.
    // For Chinese pages, links are relative within root.
    return href;
  }

  function setActiveNav(anchorEl) {
    const href = anchorEl.getAttribute("href") || "";
    if (!href) return;
    const hrefFile = href.split("#")[0].split("?")[0];
    if (hrefFile === page) anchorEl.classList.add("active");
  }

  // Header injection
  const headerMount = document.getElementById("site-header");
  if (headerMount) {
    const linksHtml = navItems
      .map((item) => {
        const label = isEnglish ? item.en : item.zh;
        const href = hrefForCurrentLang(item.href);
        return `<a href="${href}">${label}</a>`;
      })
      .join("");

    headerMount.innerHTML = `
      <header>
        <div class="container">
          <nav>
            <a href="${hrefForCurrentLang("index.html")}" class="logo">${t.labName}</a>
            <div class="menu-toggle" id="mobile-menu" aria-label="menu" role="button" tabindex="0">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <div class="nav-links" id="site-nav-links">
              ${linksHtml}
              <span class="nav-sep" aria-hidden="true"></span>
              <a class="lang-switch" href="${t.langSwitchHref}" aria-label="language">${t.langSwitchLabel}</a>
            </div>
          </nav>
        </div>
      </header>
    `;

    // Mark active page
    const navLinks = headerMount.querySelectorAll(".nav-links a");
    navLinks.forEach((a) => setActiveNav(a));

    // Mobile menu toggle
    const mobileMenu = headerMount.querySelector("#mobile-menu");
    const navLinksEl = headerMount.querySelector("#site-nav-links");
    const toggle = () => navLinksEl && navLinksEl.classList.toggle("active");
    if (mobileMenu && navLinksEl) {
      mobileMenu.addEventListener("click", toggle);
      mobileMenu.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") toggle();
      });
    }
  }

  // Footer injection
  const footerMount = document.getElementById("site-footer");
  if (footerMount) {
    const year = new Date().getFullYear();
    const ql = [
      { zh: "首页", en: "Home", href: "index.html" },
      { zh: "成员", en: "People", href: "members.html" },
      { zh: "研究", en: "Research", href: "research.html" },
      { zh: "招生", en: "Join", href: "join.html" },
    ];
    const qlHtml = ql
      .map((x) => {
        const label = isEnglish ? x.en : x.zh;
        return `<li><a href="${hrefForCurrentLang(x.href)}" class="footer-link">${label}</a></li>`;
      })
      .join("");

    footerMount.innerHTML = `
      <footer>
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <h4>${t.labName}</h4>
              <p>${t.deptLine}<br>${t.addrLine}</p>
            </div>
            <div class="footer-section">
              <h4>${t.contactTitle}</h4>
              <p>Email: contact@example.edu<br>GitHub: <a class="footer-link" href="#" rel="noopener">link</a></p>
            </div>
            <div class="footer-section">
              <h4>${t.quickLinksTitle}</h4>
              <ul>
                ${qlHtml}
              </ul>
            </div>
          </div>
          <div class="footer-bottom">
            &copy; ${year} ${t.labName}. ${t.copyright}
          </div>
        </div>
      </footer>
    `;
  }
})();



