/**
 * Appschool Munsterbilzen — Data- en Applicatiebeheer
 * app.js v1.0
 *
 * Functies:
 *  1. Dark/light mode toggle + localStorage
 *  2. Voortgang per hoofdstuk via localStorage
 *  3. Voortgangsindicatoren bijwerken op overzichtspagina's
 *  4. "Markeer als voltooid" knop op cursuspagina's
 *  5. Mobile navigatiemenu
 *  6. Toast notificaties
 *  7. Actieve navigatielink markeren
 */

/* ============================================================
   1. THEMA (DARK / LIGHT MODE)
   ============================================================ */

const THEME_KEY = 'ai-school-theme';

/**
 * Pas het thema toe op het <html>-element.
 * @param {string} theme - 'light' of 'dark'
 */
function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  updateThemeToggle(theme);
}

/**
 * Update het icoon van de theme toggle knop.
 * @param {string} theme
 */
function updateThemeToggle(theme) {
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
  if (theme === 'light') {
    btn.textContent = '🌙';
    btn.setAttribute('title', 'Schakel naar dark mode');
    btn.setAttribute('aria-label', 'Schakel naar dark mode');
  } else {
    btn.textContent = '☀️';
    btn.setAttribute('title', 'Schakel naar light mode');
    btn.setAttribute('aria-label', 'Schakel naar light mode');
  }
}

/**
 * Haal het huidig thema op (standaard: dark).
 * @returns {string}
 */
function getCurrentTheme() {
  return localStorage.getItem(THEME_KEY) || 'dark';
}

/**
 * Wissel het thema.
 */
function toggleTheme() {
  const current = getCurrentTheme();
  const next = current === 'dark' ? 'light' : 'dark';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}

/* ============================================================
   2. VOORTGANG — localStorage interface
   ============================================================ */

const PROGRESS_KEY = 'ai-school-progress';

/**
 * Haal alle voortgangsdata op.
 * Structuur: { '5adb/netwerken/H01': 'completed', ... }
 * @returns {Object}
 */
function getAllProgress() {
  try {
    return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {};
  } catch {
    return {};
  }
}

/**
 * Sla voortgangsdata op.
 * @param {Object} data
 */
function saveAllProgress(data) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
}

/**
 * Haal de status van een specifiek hoofdstuk op.
 * @param {string} chapterKey - bv. '5adb/netwerken/H01'
 * @returns {string} 'not-started' | 'completed'
 */
function getChapterStatus(chapterKey) {
  const all = getAllProgress();
  return all[chapterKey] || 'not-started';
}

/**
 * Markeer een hoofdstuk als voltooid.
 * @param {string} chapterKey
 */
function markChapterCompleted(chapterKey) {
  const all = getAllProgress();
  all[chapterKey] = 'completed';
  saveAllProgress(all);
}

/**
 * Verwijder de voltooide status van een hoofdstuk.
 * @param {string} chapterKey
 */
function markChapterNotStarted(chapterKey) {
  const all = getAllProgress();
  delete all[chapterKey];
  saveAllProgress(all);
}

/**
 * Bereken het voortgangspercentage voor een vak/jaar combinatie.
 * @param {string} prefix - bv. '5adb/netwerken'
 * @param {number} total - totaal aantal hoofdstukken
 * @returns {number} 0–100
 */
function calculateProgress(prefix, total) {
  if (total === 0) return 0;
  const all = getAllProgress();
  const completed = Object.keys(all).filter(
    key => key.startsWith(prefix + '/') && all[key] === 'completed'
  ).length;
  return Math.round((completed / total) * 100);
}

/* ============================================================
   3. VOORTGANGSINDICATOREN OP OVERZICHTSPAGINA'S
   ============================================================ */

/**
 * Update alle voortgangsbadges op de pagina.
 * Elementen met [data-progress-key] krijgen hun status.
 */
function updateProgressBadges() {
  document.querySelectorAll('[data-progress-key]').forEach(el => {
    if (el.tagName === 'BUTTON') {
      // Buttons worden beheerd door de inline markComplete — alleen completed state toepassen
      if (getChapterStatus(el.getAttribute('data-progress-key')) === 'completed') {
        el.textContent = '✓ Voltooid';
        el.disabled = true;
        el.classList.add('btn-success');
      }
      return;
    }
    const key = el.getAttribute('data-progress-key');
    const status = getChapterStatus(key);
    el.className = el.className.replace(/progress-badge--\S+/g, '');
    el.classList.add('progress-badge');
    if (status === 'completed') {
      el.classList.add('progress-badge--completed');
      el.textContent = '✓ Voltooid';
    } else {
      // Controleer of er sectie-voortgang is
      const sections = getSectionsData();
      const chData = sections[key];
      if (chData && chData.done && chData.done.length > 0 && chData.total > 0) {
        const pct = Math.round((chData.done.length / chData.total) * 100);
        el.classList.add('progress-badge--in-progress');
        el.textContent = `◑ ${pct}% afgerond`;
      } else {
        el.classList.add('progress-badge--not-started');
        el.textContent = '○ Niet begonnen';
      }
    }
  });
}

/**
 * Update alle voortgangsbalken op de pagina.
 * Elementen met [data-progress-bar] en [data-progress-label].
 */
function updateProgressBars() {
  document.querySelectorAll('[data-progress-bar]').forEach(barEl => {
    const prefix = barEl.getAttribute('data-progress-bar');
    const total = parseInt(barEl.getAttribute('data-total') || '0', 10);
    const pct = calculateProgress(prefix, total);
    barEl.style.width = pct + '%';

    const labelEl = document.querySelector(`[data-progress-label="${prefix}"]`);
    if (labelEl) {
      const completed = Math.round((pct / 100) * total);
      labelEl.textContent = `${completed} / ${total} hoofdstukken voltooid`;
    }
  });
}

/* ============================================================
   4. "MARKEER ALS VOLTOOID" KNOP
   ============================================================ */

/**
 * Initialiseer de complete-knop op een cursuspagina.
 * De knop heeft data-chapter-key="5adb/netwerken/H01".
 */
function initCompleteButton() {
  const btn = document.getElementById('complete-btn');
  if (!btn) return;

  const key = btn.getAttribute('data-chapter-key');
  if (!key) return;

  function updateButton() {
    const status = getChapterStatus(key);
    if (status === 'completed') {
      btn.textContent = '✓ Gemarkeerd als voltooid';
      btn.classList.remove('btn-primary');
      btn.classList.add('btn-success');
    } else {
      btn.textContent = 'Markeer als voltooid';
      btn.classList.remove('btn-success');
      btn.classList.add('btn-primary');
    }
  }

  updateButton();

  btn.addEventListener('click', () => {
    const status = getChapterStatus(key);
    if (status === 'completed') {
      markChapterNotStarted(key);
      showToast('Hoofdstuk opnieuw ingesteld op "niet begonnen".', 'info');
    } else {
      markChapterCompleted(key);
      showToast('Goed gedaan! Hoofdstuk gemarkeerd als voltooid.', 'success');
    }
    updateButton();
  });
}

/* ============================================================
   5. MOBILE NAVIGATIE
   ============================================================ */

function initMobileNav() {
  const hamburger = document.getElementById('nav-hamburger');
  const mobileNav = document.getElementById('nav-mobile');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    mobileNav.classList.toggle('open', !isOpen);
    hamburger.setAttribute('aria-expanded', !isOpen);
    hamburger.textContent = isOpen ? '☰' : '✕';
  });
}

/* ============================================================
   6. TOAST NOTIFICATIES
   ============================================================ */

let toastTimer = null;

/**
 * Toon een toast notificatie.
 * @param {string} message
 * @param {'success'|'info'} type
 */
function showToast(message, type = 'success') {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    toast.setAttribute('role', 'status');
    toast.setAttribute('aria-live', 'polite');
    document.body.appendChild(toast);
  }

  toast.className = `toast toast--${type}`;
  toast.innerHTML = type === 'success'
    ? `<span style="color:var(--color-success);font-size:1.1em">✓</span> ${message}`
    : `<span style="color:var(--color-info);font-size:1.1em">ℹ</span> ${message}`;

  if (toastTimer) clearTimeout(toastTimer);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });
  });

  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/* ============================================================
   7. ACTIEVE NAVIGATIELINK
   ============================================================ */

function markActiveNavLink() {
  const path = window.location.pathname;
  document.querySelectorAll('.site-nav__link').forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    // Normaliseer: vergelijk het pad-gedeelte
    const linkPath = new URL(href, window.location.href).pathname;
    if (path === linkPath || (path.startsWith(linkPath) && linkPath !== '/' && linkPath !== '/index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   8. SIDEBAR INHOUDSOPGAVE — ACTIEVE SECTIE
   ============================================================ */

function initSidebarHighlight() {
  const sidebarLinks = document.querySelectorAll('.chapter-sidebar__list a');
  if (!sidebarLinks.length) return;

  const headings = document.querySelectorAll('.chapter-content h2, .chapter-content h3');
  if (!headings.length) return;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        sidebarLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px' });

  headings.forEach(h => {
    if (h.id) observer.observe(h);
  });
}

/* ============================================================
   9. SECTIE-VOORTGANG — sub-hoofdstuk checkboxen
   ============================================================ */

const SECTIONS_KEY = 'ai-school-sections';

function getSectionsData() {
  try { return JSON.parse(localStorage.getItem(SECTIONS_KEY)) || {}; } catch { return {}; }
}

function saveSectionsData(data) {
  localStorage.setItem(SECTIONS_KEY, JSON.stringify(data));
}

/**
 * Initialiseer de checkboxen in de sidebar van een cursuspagina.
 * Laadt eerder aangevinkte secties uit localStorage.
 */
function initSectionProgress() {
  const sidebar = document.querySelector('.chapter-sidebar[data-chapter-key]');
  if (!sidebar) return;

  const chapterKey = sidebar.getAttribute('data-chapter-key');
  const checkboxes = sidebar.querySelectorAll('input[data-section-key]');
  const total = checkboxes.length;

  const data = getSectionsData();
  const chData = data[chapterKey] || { done: [], total };
  chData.total = total;
  data[chapterKey] = chData;
  saveSectionsData(data);

  // Herstel staat + voeg listeners toe
  checkboxes.forEach(cb => {
    const key = cb.getAttribute('data-section-key');
    const isDone = chData.done.includes(key);
    cb.checked = isDone;
    // Markeer li.sidebar-check-item als done
    const li = cb.closest('.sidebar-check-item');
    if (li) li.classList.toggle('is-done', isDone);

    cb.addEventListener('change', () => {
      toggleSection(chapterKey, key, cb.checked, total);
    });
  });

  updateSidebarProgress(chapterKey, total);
}

/**
 * Verwerk een checkbox-wijziging in de sidebar.
 */
function toggleSection(chapterKey, sectionKey, checked, total) {
  const data = getSectionsData();
  const chData = data[chapterKey] || { done: [], total };
  chData.total = total;

  if (checked) {
    if (!chData.done.includes(sectionKey)) chData.done.push(sectionKey);
  } else {
    chData.done = chData.done.filter(k => k !== sectionKey);
  }
  data[chapterKey] = chData;
  saveSectionsData(data);

  // Markeer li.sidebar-check-item
  const sidebar = document.querySelector('.chapter-sidebar[data-chapter-key]');
  if (sidebar) {
    const cb = sidebar.querySelector(`input[data-section-key="${sectionKey}"]`);
    if (cb) {
      const li = cb.closest('.sidebar-check-item');
      if (li) li.classList.toggle('is-done', checked);
    }
  }

  updateSidebarProgress(chapterKey, total);

  // Auto-complete hoofdstuk als alles is aangevinkt
  if (chData.done.length === total) {
    const p = getAllProgress();
    p[chapterKey] = 'completed';
    saveAllProgress(p);
    document.querySelectorAll(`[data-progress-key="${chapterKey}"]`).forEach(el => {
      if (el.tagName === 'BUTTON') {
        el.textContent = '✓ Voltooid';
        el.disabled = true;
        el.classList.add('btn-success');
      }
    });
    showToast('Alle secties afgevinkt — hoofdstuk gemarkeerd als voltooid! 🎉', 'success');
  }
}

/**
 * Update de voortgangsbalk en het percentage in de sidebar.
 */
function updateSidebarProgress(chapterKey, total) {
  const data = getSectionsData();
  const chData = data[chapterKey] || { done: [], total };
  const pct = total > 0 ? Math.round((chData.done.length / total) * 100) : 0;

  const fill = document.getElementById('sidebar-progress-fill');
  const pctEl = document.getElementById('sidebar-progress-pct');
  if (fill) fill.style.width = pct + '%';
  if (pctEl) pctEl.textContent = pct + '%';
}

/* ============================================================
   10. INITIALISATIE
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Thema toepassen
  applyTheme(getCurrentTheme());

  // 2. Theme toggle knop koppelen
  const toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }

  // 3. Voortgang bijwerken op alle pagina's
  updateProgressBadges();
  updateProgressBars();

  // 4. Complete-knop initialiseren (alleen op cursuspagina's)
  initCompleteButton();

  // 5. Mobiele navigatie
  initMobileNav();

  // 6. Actieve navlink markeren
  markActiveNavLink();

  // 7. Sidebar highlight (cursuspagina's)
  initSidebarHighlight();

  // 8b. Sectie-voortgang checkboxen (cursuspagina's)
  initSectionProgress();

  // 8. Syntax highlighting op alle codeblokken
  initSyntaxHighlighting();

  // 9. Footer renderen
  renderFooter();

  // 10. "Hoe werkt deze website?" onboarding banner
  initHowItWorks();

  // 11. Interactieve oefeningen
  initOefeningen();
});

/* ============================================================
   10. HOE WERKT DEZE WEBSITE — onboarding banner
   ============================================================ */

var HIW_KEY = 'ai-school-hiw-dismissed';

/**
 * Toont een uitlegbanner onder de navigatie bij het eerste bezoek.
 * Wordt permanent verborgen zodra de gebruiker op × klikt (localStorage).
 */
function initHowItWorks() {
  if (localStorage.getItem(HIW_KEY)) return;

  var nav = document.querySelector('.site-nav');
  if (!nav) return;

  var banner = document.createElement('div');
  banner.className = 'how-it-works';
  banner.setAttribute('role', 'region');
  banner.setAttribute('aria-label', 'Uitleg over deze website');

  banner.innerHTML =
    '<div class="container">' +
      '<div class="how-it-works__inner">' +
        '<div style="flex:1">' +
          '<div class="how-it-works__title">&#10067; Hoe werkt deze website?</div>' +
          '<div class="how-it-works__grid">' +

            '<div class="how-it-works__item">' +
              '<div class="how-it-works__item-icon">&#128214;</div>' +
              '<div class="how-it-works__item-title">Navigeer per jaar &amp; vak</div>' +
              '<div class="how-it-works__item-desc">Kies bovenaan voor 5ADB of 6ADB, dan het vak. Elk vak heeft meerdere hoofdstukken.</div>' +
            '</div>' +

            '<div class="how-it-works__item">' +
              '<div class="how-it-works__item-icon">&#9989;</div>' +
              '<div class="how-it-works__item-title">Bijhoud je voortgang</div>' +
              '<div class="how-it-works__item-desc">Klik onderaan elk hoofdstuk op "Markeer als voltooid". Je voortgang wordt lokaal opgeslagen.</div>' +
            '</div>' +

            '<div class="how-it-works__item">' +
              '<div class="how-it-works__item-icon">&#127769;</div>' +
              '<div class="how-it-works__item-title">Dark &amp; light mode</div>' +
              '<div class="how-it-works__item-desc">Gebruik de &#9728;&#65039; knop rechtsboven om te wisselen tussen dark en light mode.</div>' +
            '</div>' +

            '<div class="how-it-works__item">' +
              '<div class="how-it-works__item-icon">&#128241;</div>' +
              '<div class="how-it-works__item-title">Werkt op elk toestel</div>' +
              '<div class="how-it-works__item-desc">De website werkt op smartphone, tablet en pc. Geen account of installatie nodig.</div>' +
            '</div>' +

          '</div>' +
        '</div>' +
        '<button class="how-it-works__close" id="hiw-close" aria-label="Sluit uitleg">' +
          '&#x2715;' +
        '</button>' +
      '</div>' +
    '</div>';

  nav.insertAdjacentElement('afterend', banner);

  document.getElementById('hiw-close').addEventListener('click', function() {
    banner.classList.add('is-hiding');
    banner.addEventListener('animationend', function() {
      banner.remove();
    }, { once: true });
    localStorage.setItem(HIW_KEY, '1');
  });
}

/* ============================================================
   11. FOOTER — 3-koloms navigatie
   ============================================================ */

/**
 * Bepaal het relatieve pad naar de root van de site
 * op basis van het src-attribuut van dit script.
 * - "assets/js/app.js"       → root niveau  → "./"
 * - "../assets/js/app.js"    → 1 niveau diep → "../"
 * - "../../assets/js/app.js" → 2 niveaus diep → "../../"
 */
function getSiteRoot() {
  var scripts = document.querySelectorAll('script[src*="assets/js/app.js"]');
  if (!scripts.length) return './';
  var src = scripts[0].getAttribute('src');
  return src.replace('assets/js/app.js', '') || './';
}

function renderFooter() {
  var inner = document.querySelector('.site-footer__inner');
  if (!inner) return;
  var b = getSiteRoot();

  inner.innerHTML =
    '<div class="site-footer__grid">' +

      /* Kolom 1 — branding */
      '<div class="site-footer__col">' +
        '<a href="' + b + 'index.html" class="site-footer__logo">' +
          '<img src="' + b + 'assets/images/logo.png" alt="Appschool Munsterbilzen" class="site-footer__logo-img">' +
        '</a>' +
        '<p class="site-footer__tagline">' +
          'Data- en Applicatiebeheer &mdash; Provinciaal secundair onderwijs, 3e&nbsp;graad' +
        '</p>' +
        '<p class="site-footer__copy">&copy; Schooljaar 2025&ndash;2026</p>' +
      '</div>' +

      /* Kolom 2 — 5ADB navigatie */
      '<div class="site-footer__col">' +
        '<div class="site-footer__nav-title">5ADB</div>' +
        '<ul class="site-footer__nav">' +
          '<li><a href="' + b + '5adb/netwerken/index.html">&#127760; Netwerken</a></li>' +
          '<li><a href="' + b + '5adb/app-ontwikkeling/index.html">&#128187; App-ontwikkeling</a></li>' +
          '<li><a href="' + b + '5adb/databeheer/index.html">&#128450; Databeheer</a></li>' +
          '<li><a href="' + b + '5adb/e-stem/index.html">&#9881; E-STEM</a></li>' +
        '</ul>' +
      '</div>' +

      /* Kolom 3 — 6ADB navigatie */
      '<div class="site-footer__col">' +
        '<div class="site-footer__nav-title">6ADB</div>' +
        '<ul class="site-footer__nav">' +
          '<li><a href="' + b + '6adb/netwerken/index.html">&#127760; Netwerken</a></li>' +
          '<li><a href="' + b + '6adb/app-ontwikkeling/index.html">&#128187; App-ontwikkeling</a></li>' +
          '<li><a href="' + b + '6adb/databeheer/index.html">&#128450; Databeheer</a></li>' +
          '<li><a href="' + b + '6adb/e-stem/index.html">&#9881; E-STEM</a></li>' +
        '</ul>' +
      '</div>' +

    '</div>' +

    /* Onderschrift */
    '<div class="site-footer__bottom">' +
      '<p class="site-footer__text">' +
        'Voortgang wordt lokaal opgeslagen in je browser (localStorage) &mdash; geen account vereist.' +
      '</p>' +
      '<p class="site-footer__text">Gemaakt met &#10084; voor de leerlingen van ADB</p>' +
    '</div>';
}

/* ============================================================
   11. SYNTAX HIGHLIGHTING — Monokai Pro Dark stijl
   ============================================================ */

/**
 * Mini syntax highlighter voor Python, JavaScript, HTML,
 * SQL, Bash/Shell, JSON en INI/config bestanden.
 *
 * Werkt volledig client-side zonder externe bibliotheken.
 * Taal wordt automatisch gedetecteerd op basis van de code-inhoud.
 */
function initSyntaxHighlighting() {

  /* ---- hulpfuncties ---- */

  /** Escape HTML-speciale tekens zodat de code veilig in innerHTML staat. */
  function esc(s) {
    return s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /** Wikkel tekst in een <span> met de gegeven CSS-klasse. */
  function span(cls, text) {
    return '<span class="' + cls + '">' + esc(text) + '</span>';
  }

  /**
   * Generieke tokenizer: past regels toe op de resterende tekst.
   * Regels = array van [RegExp, cssKlasse|null].
   * null = geen opmaak (tekst wordt alleen ge-escaped).
   * Niet-gematchte tekens worden teken voor teken verwerkt.
   */
  function tokenize(code, rules) {
    var out = [];
    var rem = code;
    while (rem.length) {
      var hit = false;
      for (var ri = 0; ri < rules.length; ri++) {
        var rule = rules[ri];
        var m = rem.match(rule[0]);
        if (m && m.index === 0) {
          out.push(rule[1] ? span(rule[1], m[0]) : esc(m[0]));
          rem = rem.slice(m[0].length);
          hit = true;
          break;
        }
      }
      if (!hit) {
        out.push(esc(rem[0]));
        rem = rem.slice(1);
      }
    }
    return out.join('');
  }

  /* ---- taaldetectie ---- */

  function detectLang(code) {
    var t = code.trim();
    // HTML
    if (/^<!DOCTYPE|^<html/i.test(t)) return 'html';
    if (/<[a-zA-Z][^>]*>/.test(t) && !(/def |const |SELECT /i.test(t))) return 'html';
    // SQL
    if (/\b(SELECT|INSERT INTO|CREATE TABLE|DROP TABLE|ALTER TABLE|GRANT|REVOKE|SHOW DATABASES|SHOW TABLES)\b/i.test(t)) return 'sql';
    // Python
    if (/def |from .+ import|if __name__|@app\.|import (random|datetime|sqlite3|os|json|flask|pandas|matplotlib|mysql)/.test(t)) return 'python';
    if (/print\(|\.py\b/.test(t) && !/function |const /.test(t)) return 'python';
    // JavaScript
    if (/function |const |let |var |document\.|window\.|addEventListener|fetch\(|async function|=>/.test(t)) return 'javascript';
    // JSON
    if (/^\s*[\[{]/.test(t) && /^\s*"[^"]+"\s*:/m.test(t) && !/def |import /.test(t)) return 'json';
    // systemd / INI config
    if (/\[Unit\]|\[Service\]|\[Install\]|WantedBy=|ExecStart=/.test(t)) return 'ini';
    // Standaard: shell/bash
    return 'bash';
  }

  var LANG_LABEL = {
    python:     'Python',
    javascript: 'JavaScript',
    html:       'HTML',
    sql:        'SQL',
    bash:       'Shell',
    json:       'JSON',
    ini:        'Config'
  };

  /* ---- taalregels ---- */

  var PY_KW = /\b(False|None|True|and|as|assert|async|await|break|class|continue|def|del|elif|else|except|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|raise|return|try|while|with|yield)\b/;
  var PY_BLT = /\b(abs|all|any|bool|bytes|dict|enumerate|eval|exec|filter|float|format|frozenset|getattr|globals|hasattr|hash|hex|id|input|int|isinstance|issubclass|iter|len|list|locals|map|max|min|next|object|open|ord|pow|print|range|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|vars|zip)\b(?=\s*\()/;

  var PYTHON = [
    [/#[^\n]*/,                                         'syn-cm'],
    [/"""[\s\S]*?"""|'''[\s\S]*?'''/,                  'syn-str'],
    [/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,            'syn-str'],
    [/@\w+/,                                             'syn-dec'],
    [PY_KW,                                              'syn-kw'],
    [/\b[A-Z][A-Za-z0-9_]*(?=\s*\()/,                  'syn-fn'],
    [/\b[A-Z][A-Za-z0-9_]*\b/,                          'syn-cls'],
    [PY_BLT,                                             'syn-blt'],
    [/\b[a-z_]\w*(?=\s*\()/,                            'syn-fn'],
    [/\b\d+\.?\d*(?:[eE][+-]?\d+)?\b/,                 'syn-num'],
  ];

  var JS_KW = /\b(async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|finally|for|from|function|if|import|in|instanceof|let|new|of|return|static|super|switch|this|throw|try|typeof|var|void|while|with|yield|true|false|null|undefined|NaN|Infinity)\b/;
  var JS_BLT = /\b(Array|Boolean|console|Date|document|Error|Event|fetch|Function|JSON|localStorage|Math|Number|Object|Promise|RegExp|Set|String|Symbol|TypeError|window)\b/;

  var JAVASCRIPT = [
    [/\/\/[^\n]*/,                                       'syn-cm'],
    [/\/\*[\s\S]*?\*\//,                                'syn-cm'],
    [/`(?:[^`\\]|\\.)*`/,                               'syn-str'],
    [/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,            'syn-str'],
    [JS_KW,                                              'syn-kw'],
    [JS_BLT,                                             'syn-blt'],
    [/\b[A-Z][A-Za-z0-9_]*\b/,                          'syn-cls'],
    [/\b[a-z_]\w*(?=\s*\()/,                            'syn-fn'],
    [/\b\d+\.?\d*(?:[eE][+-]?\d+)?\b/,                 'syn-num'],
  ];

  var SQL_KW = /\b(SELECT|FROM|WHERE|AND|OR|NOT|IN|LIKE|BETWEEN|IS|NULL|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|ADD|COLUMN|PRIMARY|KEY|FOREIGN|REFERENCES|UNIQUE|DEFAULT|AUTO_INCREMENT|AUTOINCREMENT|INT|INTEGER|VARCHAR|TEXT|REAL|FLOAT|DECIMAL|BOOLEAN|DATE|DATETIME|SHOW|DATABASES|TABLES|USE|GRANT|ALL|PRIVILEGES|ON|TO|IDENTIFIED|BY|FLUSH|WITH|ORDER|GROUP|HAVING|LIMIT|OFFSET|JOIN|INNER|LEFT|RIGHT|OUTER|AS|DISTINCT|COUNT|SUM|AVG|MIN|MAX|IF NOT EXISTS|IF EXISTS)\b/i;

  var SQL = [
    [/--[^\n]*/,                                         'syn-cm'],
    [/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,            'syn-str'],
    [SQL_KW,                                             'syn-kw'],
    [/\b[A-Za-z_]\w*(?=\s*\()/,                        'syn-fn'],
    [/\b\d+\.?\d*\b/,                                   'syn-num'],
  ];

  var BASH_KW = /\b(if|then|else|elif|fi|for|while|do|done|case|esac|in|function|return|exit|echo|read|source|export|local|declare|set|unset|alias|cd|ls|pwd|mkdir|rm|cp|mv|cat|grep|awk|sed|find|chmod|chown|sudo|apt|apt-get|pip|pip3|python|python3|systemctl|service|crontab|ssh|scp|curl|wget|tar|touch|head|tail|sort|uniq|wc|ps|kill|df|du|free|hostname|uname|whoami|which|nano|vim|mysql|deactivate)\b/;

  var BASH = [
    [/#[^\n]*/,                                          'syn-cm'],
    [/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,            'syn-str'],
    [/\$[\w{][^}\s]*/,                                  'syn-cls'],
    [BASH_KW,                                            'syn-kw'],
    [/(?:^|\s)(--?[\w-]+)/,                             null],   /* vlaggen: plain */
    [/\b\d+\.?\d*\b/,                                   'syn-num'],
  ];

  var INI = [
    [/#[^\n]*|;[^\n]*/,                                  'syn-cm'],
    [/\[[^\]]+\]/,                                       'syn-cls'],
    [/^[A-Za-z_][\w]*/m,                                'syn-kw'],
    [/"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'/,            'syn-str'],
  ];

  var JSON_RULES = [
    [/"(?:[^"\\]|\\.)*"(?=\s*:)/,                       'syn-atr'],
    [/"(?:[^"\\]|\\.)*"/,                               'syn-str'],
    [/\b(true|false|null)\b/,                            'syn-kw'],
    [/\b\d+\.?\d*\b/,                                   'syn-num'],
  ];

  /* ---- HTML tokenizer (eigen implementatie) ---- */

  function highlightHTML(code) {
    var out = [];
    var i = 0;
    while (i < code.length) {
      // Commentaar <!-- ... -->
      if (code.substr(i, 4) === '<!--') {
        var end = code.indexOf('-->', i + 4);
        var s = end === -1 ? code.slice(i) : code.slice(i, end + 3);
        out.push('<span class="syn-cm">' + esc(s) + '</span>');
        i += s.length;
        continue;
      }
      // Tag < ... >
      if (code[i] === '<') {
        var tagEnd = code.indexOf('>', i);
        if (tagEnd === -1) { out.push(esc(code[i])); i++; continue; }
        var tagStr = code.slice(i, tagEnd + 1);
        var tagMatch = tagStr.match(/^(<\/?)([a-zA-Z][a-zA-Z0-9-]*)?([\s\S]*?)(\/?>)$/);
        if (tagMatch) {
          var open = tagMatch[1], name = tagMatch[2] || '', attrs = tagMatch[3], close = tagMatch[4];
          out.push('<span class="syn-tag">' + esc(open) + esc(name) + '</span>');
          // Attribuutparsing
          var a = attrs, ai = 0, ha = '';
          while (ai < a.length) {
            var ws = a.slice(ai).match(/^\s+/);
            if (ws) { ha += esc(ws[0]); ai += ws[0].length; continue; }
            var nm = a.slice(ai).match(/^[a-zA-Z:@_-][a-zA-Z0-9:@._-]*/);
            if (nm) {
              ha += '<span class="syn-atr">' + esc(nm[0]) + '</span>';
              ai += nm[0].length;
              if (a[ai] === '=') {
                ha += esc('='); ai++;
                var vl = a.slice(ai).match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\S+)/);
                if (vl) { ha += '<span class="syn-val">' + esc(vl[0]) + '</span>'; ai += vl[0].length; }
              }
              continue;
            }
            ha += esc(a[ai]); ai++;
          }
          out.push(ha);
          out.push('<span class="syn-tag">' + esc(close) + '</span>');
        } else {
          out.push(esc(tagStr));
        }
        i = tagEnd + 1;
        continue;
      }
      // Tekst tot volgende tag
      var nextTag = code.indexOf('<', i);
      var txt = nextTag === -1 ? code.slice(i) : code.slice(i, nextTag);
      out.push(esc(txt));
      i += txt.length;
    }
    return out.join('');
  }

  /* ---- hoofd-highlight functie ---- */

  function highlight(code, lang) {
    switch (lang) {
      case 'python':     return tokenize(code, PYTHON);
      case 'javascript': return tokenize(code, JAVASCRIPT);
      case 'sql':        return tokenize(code, SQL);
      case 'bash':       return tokenize(code, BASH);
      case 'html':       return highlightHTML(code);
      case 'ini':        return tokenize(code, INI);
      case 'json':       return tokenize(code, JSON_RULES);
      default:           return esc(code);
    }
  }

  /* ---- toepassen op alle <pre><code> blokken ---- */

  document.querySelectorAll('pre code').forEach(function(codeEl) {
    var pre = codeEl.parentElement;
    var rawCode = codeEl.textContent;
    if (!rawCode.trim()) return;

    var lang = detectLang(rawCode);
    codeEl.innerHTML = highlight(rawCode, lang);
    pre.setAttribute('data-lang', LANG_LABEL[lang] || lang);
  });
}

/* ============================================================
   11. INTERACTIEVE OEFENINGEN
   ============================================================ */

/**
 * Initialiseert alle .oefening blokken op de pagina.
 *
 * Vraagtypen (data-type op .vraag):
 *   "mc"    — één correct antwoord (radio-keuze), data-correct="waarde"
 *   "check" — meerdere correcte antwoorden (aanvinkbaar), data-correct="a,b"
 *   "text"  — open tekstveld, data-correct="antwoord|alternatief"
 *
 * Werking:
 *  1. Klik op een keuzekaartje om het te selecteren (visuele highlight).
 *  2. De "Verbetersleutel"-knop wordt pas actief zodra álle vragen beantwoord zijn.
 *  3. Na klikken op Verbetersleutel: correct/fout feedback + score per oefening.
 *  4. "Opnieuw proberen" reset alles.
 */
function initOefeningen() {
  document.querySelectorAll('.oefening').forEach(function(oef) {
    var controleerBtn = oef.querySelector('.oefening__controleer');
    var resetBtn      = oef.querySelector('.oefening__reset');
    var scoreEl       = oef.querySelector('.oefening__score');
    var scoreTekst    = oef.querySelector('.oefening__score-tekst');
    var scoreVulling  = oef.querySelector('.oefening__score-vulling');

    if (!controleerBtn) return;

    // Hernoem knop naar "Verbetersleutel" en zet initieel op disabled
    controleerBtn.textContent = 'Verbetersleutel';
    controleerBtn.disabled = true;

    // Voeg voortgangsindicator toe vóór de knop
    var footerEl = oef.querySelector('.oefening__footer');
    var voortgangEl = document.createElement('div');
    voortgangEl.className = 'oefening__voortgang';
    if (footerEl) footerEl.insertBefore(voortgangEl, controleerBtn);

    // Unieke groepnaam per MC-vraag zodat radio-knoppen correct werken
    var oefId = oef.dataset.oefId || ('oef-' + Math.random().toString(36).slice(2, 8));
    oef.querySelectorAll('.vraag[data-type="mc"]').forEach(function(vraag, qi) {
      vraag.querySelectorAll('input[type="radio"]').forEach(function(r) {
        r.name = oefId + '-q' + qi;
      });
    });

    var vragen = Array.from(oef.querySelectorAll('.vraag'));

    /* --- Hulpfunctie: is een vraag beantwoord? --- */
    function isBeantwoord(vraag) {
      var type = vraag.dataset.type || 'mc';
      if (type === 'mc')    return !!vraag.querySelector('input[type="radio"]:checked');
      if (type === 'check') return !!vraag.querySelector('input[type="checkbox"]:checked');
      if (type === 'text') {
        var inv = vraag.querySelector('.vraag__invoer');
        return inv && inv.value.trim().length > 0;
      }
      return false;
    }

    /* --- Update voortgangstekst + activeer/deactiveer knop --- */
    function updateVoortgang() {
      var beantwoord = vragen.filter(isBeantwoord).length;
      var totaal = vragen.length;
      var klaar = beantwoord === totaal;
      controleerBtn.disabled = !klaar;
      voortgangEl.classList.toggle('is-klaar', klaar);
      if (klaar) {
        voortgangEl.innerHTML = '<strong>' + totaal + '/' + totaal + '</strong> vragen beantwoord &mdash; klik op Verbetersleutel';
      } else {
        voortgangEl.innerHTML = '<strong>' + beantwoord + '/' + totaal + '</strong> vragen beantwoord';
      }
    }

    /* --- Klik-handlers op keuzekaartjes --- */
    vragen.forEach(function(vraag) {
      var type = vraag.dataset.type || 'mc';

      if (type === 'mc') {
        vraag.querySelectorAll('.vraag__keuze').forEach(function(keuze) {
          keuze.addEventListener('click', function() {
            vraag.querySelectorAll('.vraag__keuze').forEach(function(k) {
              k.classList.remove('is-selected');
            });
            keuze.classList.add('is-selected');
            var inp = keuze.querySelector('input[type="radio"]');
            if (inp) inp.checked = true;
            updateVoortgang();
          });
        });

      } else if (type === 'check') {
        vraag.querySelectorAll('.vraag__keuze').forEach(function(keuze) {
          keuze.addEventListener('click', function() {
            var inp = keuze.querySelector('input[type="checkbox"]');
            if (inp) {
              inp.checked = !inp.checked;
              keuze.classList.toggle('is-selected', inp.checked);
            }
            updateVoortgang();
          });
        });

      } else if (type === 'text') {
        var invoer = vraag.querySelector('.vraag__invoer');
        if (invoer) invoer.addEventListener('input', updateVoortgang);
      }
    });

    updateVoortgang();

    /* --- Verbetersleutel knop --- */
    controleerBtn.addEventListener('click', function() {
      var correctCount = 0;

      vragen.forEach(function(vraag) {
        var type       = vraag.dataset.type || 'mc';
        var correctRaw = (vraag.dataset.correct || '').trim();
        var feedback   = vraag.querySelector('.vraag__feedback');
        var label      = feedback ? (feedback.dataset.correctLabel || correctRaw) : correctRaw;

        vraag.classList.add('is-checked');

        if (type === 'mc') {
          var sel    = vraag.querySelector('input[type="radio"]:checked');
          var selVal = sel ? sel.value : '';
          vraag.querySelectorAll('.vraag__keuze').forEach(function(keuze) {
            var inp = keuze.querySelector('input');
            if (!inp) return;
            if (inp.value === correctRaw) keuze.classList.add('is-correct-choice');
            else if (inp.checked)         keuze.classList.add('is-wrong-choice');
          });
          if (selVal === correctRaw) { vraag.classList.add('is-correct'); correctCount++; }
          else                         vraag.classList.add('is-incorrect');

        } else if (type === 'check') {
          var correctVals = correctRaw.split(',').map(function(s){ return s.trim(); });
          var checked     = Array.from(vraag.querySelectorAll('input[type="checkbox"]:checked'))
                              .map(function(i){ return i.value; });
          var allOk = correctVals.length === checked.length &&
                      correctVals.every(function(v){ return checked.indexOf(v) !== -1; });
          vraag.querySelectorAll('.vraag__keuze').forEach(function(keuze) {
            var inp = keuze.querySelector('input');
            if (!inp) return;
            if (correctVals.indexOf(inp.value) !== -1) keuze.classList.add('is-correct-choice');
            else if (inp.checked)                       keuze.classList.add('is-wrong-choice');
          });
          if (allOk) { vraag.classList.add('is-correct'); correctCount++; }
          else          vraag.classList.add('is-incorrect');

        } else if (type === 'text') {
          var invoer  = vraag.querySelector('.vraag__invoer');
          var userVal = invoer ? invoer.value.trim().toLowerCase() : '';
          var alts    = correctRaw.split('|').map(function(s){ return s.trim().toLowerCase(); });
          if (alts.indexOf(userVal) !== -1) { vraag.classList.add('is-correct'); correctCount++; }
          else                                vraag.classList.add('is-incorrect');
        }

        if (feedback) feedback.textContent = label;
      });

      // Inputs vergrendelen
      oef.querySelectorAll('input').forEach(function(inp){ inp.disabled = true; });
      controleerBtn.hidden = true;
      voortgangEl.hidden = true;
      if (resetBtn) resetBtn.hidden = false;

      // Score tonen
      if (scoreEl && scoreTekst && scoreVulling) {
        scoreEl.hidden = false;
        var pct = vragen.length > 0 ? Math.round((correctCount / vragen.length) * 100) : 0;
        var emoji = pct === 100 ? ' 🎉' : pct >= 60 ? ' 👍' : ' 💪';
        scoreTekst.textContent = correctCount + ' / ' + vragen.length + ' correct (' + pct + '%)' + emoji;
        scoreVulling.style.width = pct + '%';
        scoreVulling.classList.toggle('is-good',    pct >= 60 && pct < 100);
        scoreVulling.classList.toggle('is-perfect', pct === 100);
      }
    });

    /* --- Opnieuw proberen --- */
    if (resetBtn) {
      resetBtn.addEventListener('click', function() {
        vragen.forEach(function(vraag) {
          vraag.classList.remove('is-correct', 'is-incorrect', 'is-checked');
          vraag.querySelectorAll('.vraag__keuze').forEach(function(k){
            k.classList.remove('is-correct-choice', 'is-wrong-choice', 'is-selected');
          });
          vraag.querySelectorAll('input').forEach(function(inp){
            inp.disabled = false;
            if (inp.type === 'radio' || inp.type === 'checkbox') inp.checked = false;
            if (inp.type === 'text') inp.value = '';
          });
          var fb = vraag.querySelector('.vraag__feedback');
          if (fb) fb.textContent = ''; // Geen inline style — CSS klassen bepalen zichtbaarheid
        });
        controleerBtn.hidden = false;
        controleerBtn.disabled = true;
        resetBtn.hidden = true;
        voortgangEl.hidden = false;
        if (scoreEl) {
          scoreEl.hidden = true;
          scoreVulling.style.width = '0%';
          scoreVulling.classList.remove('is-good', 'is-perfect');
        }
        updateVoortgang();
      });
    }
  });
}

/* ============================================================
   VOORBEELD MODAL
   ============================================================ */

function openVoorbeeldModal(src, titel) {
  var modal = document.getElementById('voorbeeld-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'voorbeeld-modal';
    modal.className = 'voorbeeld-modal';
    modal.innerHTML =
      '<div class="voorbeeld-modal__backdrop"></div>' +
      '<div class="voorbeeld-modal__dialog">' +
        '<button class="voorbeeld-modal__close" aria-label="Sluiten">&#x2715;</button>' +
        '<p class="voorbeeld-modal__title"></p>' +
        '<img class="voorbeeld-modal__img" src="" alt="Voorbeeld huistaak">' +
      '</div>';
    document.body.appendChild(modal);
    modal.querySelector('.voorbeeld-modal__backdrop').addEventListener('click', closeVoorbeeldModal);
    modal.querySelector('.voorbeeld-modal__close').addEventListener('click', closeVoorbeeldModal);
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeVoorbeeldModal(); });
  }
  modal.querySelector('.voorbeeld-modal__img').src = src;
  modal.querySelector('.voorbeeld-modal__title').textContent = titel || 'Voorbeeld';
  modal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeVoorbeeldModal() {
  var modal = document.getElementById('voorbeeld-modal');
  if (modal) modal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}
