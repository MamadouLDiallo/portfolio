const GITHUB_USER = "MamadouLDiallo";
const GITHUB_REPOS_URL = `https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&type=owner&sort=updated`;

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
const headlineText = "Je transforme les données en décisions claires grâce à l’analyse et aux tableaux de bord interactifs.";
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
  themeIcon.textContent = "LM";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeIcon.textContent = isDark ? "LM" : "DM";
});

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
      .map(enrichRepo)
      .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    projectsStatus.textContent = "";
  } catch (error) {
    allRepos = fallbackRepos.map(enrichRepo);
    projectsStatus.textContent = "";
  }

  renderProjects(allRepos);
}

function enrichRepo(repo) {
  const category = inferCategory(repo);
  return {
    ...repo,
    category,
    displayLanguage: repo.language || category,
    description: repo.description || buildDescription(repo.name, category)
  };
}

function inferCategory(repo) {
  const name = repo.name.toLowerCase();
  const language = repo.language || "";

  if (language.includes("Python") || name.includes("mining") || name.includes("prevision") || name.includes("bio")) {
    return language === "Jupyter Notebook" ? "Jupyter Notebook" : "Python";
  }

  if (name.includes("dashboard") || name.includes("dashbord") || name.includes("tableau") || name.includes("vente") || name.includes("rapport") || name.includes("performance")) {
    return "BI";
  }

  return language || "Data";
}

function buildDescription(name, category) {
  const readableName = formatRepoName(name).toLowerCase();

  if (category === "Python") {
    return `Projet d'analyse et de modelisation autour de ${readableName}, avec une logique de preparation, exploration et interpretation des donnees.`;
  }

  if (category === "Jupyter Notebook") {
    return `Notebook analytique consacre a ${readableName}, combinant statistiques, experimentations et lecture des resultats.`;
  }

  if (category === "BI") {
    return `Projet de reporting et de visualisation autour de ${readableName}, pense pour suivre les indicateurs et faciliter la decision.`;
  }

  return `Projet data autour de ${readableName}, oriente analyse, structuration des donnees et restitution professionnelle.`;
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

  return `
    <article class="project-card reveal is-visible" data-category="${repo.category}">
      <div class="project-card__top">
        <h3>${formatRepoName(repo.name)}</h3>
        <span class="project-card__tag">${repo.displayLanguage}</span>
      </div>
      <p>${repo.description}</p>
      <div class="project-card__actions">
        <a class="project-card__link" href="${repo.html_url}" target="_blank" rel="noreferrer">Voir sur GitHub</a>
        ${appLink}
      </div>
    </article>
  `;
}

function getAppUrl(repo) {
  const isMlProject = repo.category === "Python" || repo.category === "Jupyter Notebook";
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
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

loadProjects();
startTypingLoop();
