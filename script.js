const GITHUB_USER = "MamadouLDiallo";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`;
const EXCLUDED_PROJECTS = new Set([
  "portfolio",
  "projet-modeles-lineaires-generalises",
  "projet_bio_stat",
  "rapport-des-ventes-2022-2024",
    "tableau-de-bord-des-performances-commerciales"
]);

const PROJECT_DETAILS = {
  "analyse-des-performances-kin-marche-": {
    title: "Analyse des performances Kin Marché",
    icon: "📈",
    visual: "bars",
    displayLanguage: "Power BI • BI",
    description: "Dashboard interactif conçu pour analyser les performances commerciales de Kin Marché à travers le suivi des ventes, des revenus et des indicateurs clés de performance.",
    problem: "Visibilité limitée sur les variations de ventes, les périodes fortes et les zones moins performantes.",
    tools: ["Power BI", "DAX"],
    insights: "Identification des catégories les plus rentables, des périodes de forte activité et des zones commerciales sous-performantes.",
    impact: "Amélioration du suivi des KPIs et facilitation de la prise de décision stratégique."
  },
  "rapport-financier-des-ventes": {
    title: "Analyse financière des ventes",
    icon: "💰",
    visual: "finance",
    metric: "Revenus suivis",
    displayLanguage: "Power BI • BI",
    description: "Dashboard financier développé pour suivre les revenus, analyser les performances de vente et faciliter le pilotage des indicateurs financiers.",
    problem: "Manque de synthèse sur les revenus, les écarts financiers et les performances par période.",
    tools: ["Power BI", "DAX"],
    insights: "Analyse des revenus par période, suivi des performances produits et identification des écarts financiers.",
    impact: "Vision synthétique des performances financières et amélioration du reporting stratégique."
  },
  "dashbord_ventes": {
    title: "Dashboard d’analyse des ventes",
    icon: "📊",
    visual: "trend",
    metric: "KPIs temps réel",
    displayLanguage: "Power BI • BI",
    description: "Projet de visualisation permettant d’explorer les ventes, d’analyser les tendances commerciales et de suivre les indicateurs de performance.",
    problem: "Données de vente dispersées et suivi difficile des tendances commerciales.",
    tools: ["Power BI", "DAX"],
    insights: "Mise en évidence des produits les plus performants et des variations de ventes selon les périodes.",
    impact: "Centralisation des indicateurs clés pour un pilotage commercial plus efficace."
  },
  "projet-data-mining": {
    title: "Analyse prédictive et data mining",
    icon: "🧠",
    visual: "bubbles",
    metric: "Modèles prédictifs",
    displayLanguage: "Python • Data Science",
    description: "Projet d’exploration et de modélisation de données visant à identifier des tendances cachées et à produire des analyses statistiques exploitables.",
    problem: "Relations entre variables difficiles à interpréter sans exploration statistique structurée.",
    tools: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Plotly", "Streamlit"],
    insights: "Exploration des relations entre variables, préparation des données et identification de modèles prédictifs.",
    impact: "Amélioration de la compréhension des données et aide à l’analyse décisionnelle."
  },
  "projet-prevision-du-medicament": {
    title: "Prévision de la consommation de médicaments",
    icon: "💊",
    visual: "medical",
    metric: "Prévision demande",
    displayLanguage: "Python • Machine Learning",
    description: "Projet de modélisation prédictive visant à analyser les données médicales et à anticiper la consommation de médicaments.",
    problem: "Anticipation complexe des besoins lorsque les tendances de consommation ne sont pas modélisées.",
    tools: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook", "Plotly", "Streamlit"],
    insights: "Préparation des données, analyse statistique et construction de modèles de prévision adaptés aux tendances observées.",
    impact: "Amélioration de l’anticipation des besoins et soutien à la prise de décision basée sur les données."
  }
};

const fallbackRepos = [
  {
    name: "Analyse-des-performances-Kin-Marche-",
    description: null,
    language: "BI",
    html_url: "https://github.com/MamadouLDiallo/Analyse-des-performances-Kin-Marche-",
    updated_at: "2026-05-01T21:55:37Z",
    size: 1047
  },
  {
    name: "Dashbord_Ventes",
    description: null,
    language: "BI",
    html_url: "https://github.com/MamadouLDiallo/Dashbord_Ventes",
    updated_at: "2026-04-30T19:49:21Z",
    size: 7638
  },
  {
    name: "Projet-Data-Mining",
    description: null,
    language: "Python",
    html_url: "https://github.com/MamadouLDiallo/Projet-Data-Mining",
    updated_at: "2026-04-22T13:55:54Z",
    size: 31377
  },
  {
    name: "Rapport-des-ventes-2022-2024",
    description: null,
    language: "BI",
    html_url: "https://github.com/MamadouLDiallo/Rapport-des-ventes-2022-2024",
    updated_at: "2026-04-22T13:52:59Z",
    size: 1139
  },
  {
    name: "Rapport-Financier-des-Ventes",
    description: null,
    language: "BI",
    html_url: "https://github.com/MamadouLDiallo/Rapport-Financier-des-Ventes",
    updated_at: "2026-04-22T13:51:34Z",
    size: 362
  },
  {
    name: "Tableau-de-bord-des-performances-commerciales",
    description: null,
    language: "BI",
    html_url: "https://github.com/MamadouLDiallo/Tableau-de-bord-des-performances-commerciales",
    updated_at: "2026-04-22T13:50:08Z",
    size: 7070
  },
  {
    name: "Projet-Prevision-du-Medicament",
    description: null,
    language: "Python",
    html_url: "https://github.com/MamadouLDiallo/Projet-Prevision-du-Medicament",
    updated_at: "2026-04-22T13:42:34Z",
    size: 13868
  },
  {
    name: "Projet-Modeles-Lineaires-Generalises",
    description: null,
    language: "Jupyter Notebook",
    html_url: "https://github.com/MamadouLDiallo/Projet-Modeles-Lineaires-Generalises",
    updated_at: "2025-07-31T16:52:30Z",
    size: 778
  },
  {
    name: "PROJET_BIO_STAT",
    description: null,
    language: "Python",
    html_url: "https://github.com/MamadouLDiallo/PROJET_BIO_STAT",
    updated_at: "2025-01-02T20:53:23Z",
    size: 193
  }
];

let allRepos = [];
let activeFilter = "all";

const body = document.body;
const loader = document.querySelector(".loader");
const navToggle = document.querySelector(".nav-toggle");
const navPanel = document.querySelector(".nav-panel");
const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.querySelector(".theme-toggle__icon");
const typingText = document.querySelector("#typing-text");
const projectsGrid = document.querySelector("#projects-grid");
const projectsStatus = document.querySelector("#projects-status");
const filterButtons = document.querySelectorAll(".filter-btn");
const contactForm = document.querySelector(".contact-form");
const headlineText = "Passionné par l’analyse de données et la Business Intelligence, je conçois des dashboards interactifs et des solutions analytiques permettant de transformer les données en insights stratégiques et exploitables.";
const navLinks = document.querySelectorAll(".nav-panel a[href^='#']");

body.classList.add("is-loading");

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loader.classList.add("is-hidden");
    body.classList.remove("is-loading");
  }, 650);
});

document.querySelector("#year").textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navPanel.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-panel a").forEach((link) => {
  link.addEventListener("click", () => {
    navPanel.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
    });
  });
}, {
  rootMargin: "-35% 0px -55% 0px",
  threshold: 0
});

navLinks.forEach((link) => {
  const section = document.querySelector(link.getAttribute("href"));

  if (section) {
    sectionObserver.observe(section);
  }
});

const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  themeIcon.textContent = "☀️";
}

function startTypingLoop() {
  let index = 0;
  let deleting = false;

  const type = () => {
    typingText.textContent = headlineText.slice(0, index);

    if (!deleting && index < headlineText.length) {
      index += 1;
      window.setTimeout(type, 42);
      return;
    }

    if (!deleting && index === headlineText.length) {
      deleting = true;
      window.setTimeout(type, 1600);
      return;
    }

    if (deleting && index > 0) {
      index -= 1;
      window.setTimeout(type, 20);
      return;
    }

    deleting = false;
    window.setTimeout(type, 520);
  };

  type();
}

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });

document.querySelectorAll(".reveal, .skill-card").forEach((element) => {
  revealObserver.observe(element);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");
    activeFilter = button.dataset.filter;
    renderProjects(allRepos);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const subject = encodeURIComponent("Contact portfolio Data Analyst");
  const message = encodeURIComponent(
    `Nom: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`
  );
  window.location.href = `mailto:mamadoulamaranadiallomld1@gmail.com?subject=${subject}&body=${message}`;
});

async function loadProjects() {
  try {
    const response = await fetch(GITHUB_REPOS_URL, {
      headers: { Accept: "application/vnd.github+json" }
    });

    if (!response.ok) {
      throw new Error("GitHub API unavailable");
    }

    const repos = await response.json();
    allRepos = repos
      .filter((repo) => !repo.fork)
      .filter((repo) => !isExcludedProject(repo.name))
      .map(enrichRepo)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    projectsStatus.textContent = "";
  } catch (error) {
    allRepos = fallbackRepos
      .filter((repo) => !isExcludedProject(repo.name))
      .map(enrichRepo);
    projectsStatus.textContent = "";
  }

  renderProjects(allRepos);
}

function isExcludedProject(name) {
  return EXCLUDED_PROJECTS.has(name.toLowerCase());
}

function enrichRepo(repo) {
  const category = inferCategory(repo);
  const details = PROJECT_DETAILS[repo.name.toLowerCase()] || {};

  return {
    ...repo,
    ...details,
    category,
    displayLanguage: details.displayLanguage || (category === "Python" ? "Python" : repo.language || category),
    description: details.description || repo.description || buildDescription(repo.name, category)
  };
}

function inferCategory(repo) {
  const name = repo.name.toLowerCase();
  const language = repo.language || "";

  if (language.includes("Python") || language === "Jupyter Notebook" || name.includes("mining") || name.includes("prevision") || name.includes("bio")) {
    return "Python";
  }

  if (name.includes("dashboard") || name.includes("dashbord") || name.includes("tableau") || name.includes("vente") || name.includes("rapport") || name.includes("performance")) {
    return "BI";
  }

  return language || "Data";
}

function buildDescription(name, category) {
  const readableName = formatRepoName(name).toLowerCase();

  if (category === "Python") {
    return `Projet d'analyse et de modélisation autour de ${readableName}, avec une logique de préparation, d'exploration et d'interprétation des données.`;
  }

  if (category === "BI") {
    return `Projet de reporting et de visualisation autour de ${readableName}, pensé pour suivre les indicateurs et faciliter la décision.`;
  }

  return `Projet data autour de ${readableName}, orienté analyse, structuration des données et restitution professionnelle.`;
}

function renderProjects(repos) {
  const filteredRepos = repos.filter((repo) => {
    if (activeFilter === "all") {
      return true;
    }

    return repo.category === activeFilter || repo.displayLanguage === activeFilter;
  });

  projectsGrid.innerHTML = filteredRepos.map(createProjectCard).join("");

  if (filteredRepos.length === 0) {
    projectsGrid.innerHTML = `<p class="projects__status">Aucun projet pour ce filtre.</p>`;
  }
}

function createProjectCard(repo) {
  const appUrl = getAppUrl(repo);
  const appLink = appUrl
    ? `<a class="project-card__link project-card__link--app" href="${appUrl}" target="_blank" rel="noreferrer">Voir l'application</a>`
    : "";
  const title = repo.title || formatRepoName(repo.name);
  const tags = String(repo.displayLanguage || repo.category)
    .split("•")
    .map((tag) => tag.trim())
    .filter(Boolean)
    .map((tag) => `<span class="project-card__tag">${escapeHtml(tag)}</span>`)
    .join("");
  const problem = repo.problem
    ? `<div class="project-card__block">
        <strong>Problème</strong>
        <span>${escapeHtml(repo.problem)}</span>
      </div>`
    : "";
  const tools = Array.isArray(repo.tools) && repo.tools.length
    ? `<div class="project-card__block">
        <strong>Outils</strong>
        <span>${repo.tools.map(escapeHtml).join(" • ")}</span>
      </div>`
    : "";
  const insights = repo.insights
    ? `<div class="project-card__block">
        <strong>Insights</strong>
        <span>${escapeHtml(repo.insights)}</span>
      </div>`
    : "";
  const impact = repo.impact
    ? `<div class="project-card__block">
        <strong>Impact</strong>
        <span>${escapeHtml(repo.impact)}</span>
      </div>`
    : "";

  return `
    <article class="project-card project-card--${escapeHtml(repo.visual || "data")} reveal is-visible" data-category="${repo.category}">
      ${createProjectVisual(repo)}
      <div class="project-card__body">
        <div class="project-card__tags">${tags}</div>
        <div class="project-card__top">
          <h3><span aria-hidden="true">${repo.icon || "📌"}</span>${escapeHtml(title)}</h3>
        </div>
        <p>${escapeHtml(repo.description)}</p>
        <div class="project-card__details">
          ${problem}
          ${tools}
          ${insights}
          ${impact}
        </div>
        <div class="project-card__actions">
          <a class="project-card__link" href="${escapeHtml(repo.html_url)}" target="_blank" rel="noreferrer">Voir sur GitHub</a>
          ${appLink}
        </div>
      </div>
    </article>
  `;
}

function createProjectVisual(repo) {
  const metric = escapeHtml(repo.metric || "Projet data");

  if (repo.visual === "bubbles") {
    return `
      <div class="project-card__visual" aria-hidden="true">
        <span class="project-card__metric">${metric}</span>
        <div class="visual-bubbles">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  if (repo.visual === "trend" || repo.visual === "finance" || repo.visual === "medical") {
    return `
      <div class="project-card__visual" aria-hidden="true">
        <span class="project-card__metric">${metric}</span>
        <div class="visual-line">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  if (repo.visual === "scorecard") {
    return `
      <div class="project-card__visual" aria-hidden="true">
        <span class="project-card__metric">${metric}</span>
        <div class="visual-scorecard">
          <span></span><span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  return `
    <div class="project-card__visual" aria-hidden="true">
      <span class="project-card__metric">${metric}</span>
      <div class="visual-bars">
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getAppUrl(repo) {
  const isMlProject = repo.category === "Python";
  const homepage = repo.homepage && repo.homepage.trim();

  if (!isMlProject || !homepage) {
    return "";
  }

  return /^https?:\/\//i.test(homepage) ? homepage : `https://${homepage}`;
}

function formatRepoName(name) {
  return name
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (letter) => letter.toUpperCase())
    .replace(/\bDashbord\b/g, "Dashboard")
    .replace(/\bModeles\b/g, "Modèles")
    .replace(/\bLineaires\b/g, "Linéaires")
    .replace(/\bGeneralises\b/g, "Généralisés")
    .replace(/\bPrevision\b/g, "Prévision")
    .replace(/\bMedicament\b/g, "Médicament");
}

loadProjects();
startTypingLoop();
