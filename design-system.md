# Design System — Appschool Munsterbilzen: Data- en Applicatiebeheer
**Versie:** 1.0.0 — Draft
**Datum:** 2026-03-21
**Auteur:** Graphic Designer
**Doel:** Fundament voor website én cursusmateriaal van de Appschool Munsterbilzen (richting Data- en Applicatiebeheer, Provinciaal secundair onderwijs)

---

## Ontwerpfilosofie

De stijl is geïnspireerd op [polygon.technology](https://polygon.technology): donkere achtergronden, levendige paarse/blauwe gradiëntaccenten en strakke geometrische typografie. Omdat het primaire gebruik educatief is, wordt die esthetiek vertaald naar een systeem waarbij **leesbaarheid en toegankelijkheid** (WCAG AA minimaal) altijd voorrang krijgen op spectaculaire visuele effecten. Elke keuze — van kleurcontrast tot regelafstand — dient eerst de leerling, daarna de brand.

---

## 1. Kleurenpalet — Dark Mode (standaard)

### 1.1 Achtergrond & Surface

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-bg-base` | Base Background | `#0D0E14` | Pagina-achtergrond |
| `--color-bg-elevated` | Elevated Surface | `#13141D` | Kaarten, modals, sidebars |
| `--color-bg-overlay` | Overlay | `#1A1C28` | Hover-states, dropdowns |
| `--color-bg-sunken` | Sunken | `#09090F` | Code-achtergronden, input-velden |
| `--color-border-subtle` | Subtle Border | `#1F2035` | Rasterlijnen, dividers |
| `--color-border-default` | Default Border | `#2A2C45` | Kaartomlijningen, input-borders |
| `--color-border-strong` | Strong Border | `#3D3F62` | Actieve states, focus-rings |

### 1.2 Primaire, Secundaire en Accent (Polygon-stijl)

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-primary-400` | Primary Light | `#9B6FFA` | Hover-states, links |
| `--color-primary-500` | Primary | `#7B3FE4` | Primaire CTA-knoppen, actieve nav-items |
| `--color-primary-600` | Primary Dark | `#5E25C0` | Pressed-states |
| `--color-secondary-400` | Secondary Light | `#60BFFF` | Decoratieve highlights |
| `--color-secondary-500` | Secondary | `#2D9CDB` | Secundaire knoppen, iconen |
| `--color-secondary-600` | Secondary Dark | `#1A6FA3` | Pressed-states |
| `--color-accent-glow` | Glow | `#8B5CF680` | Glowing ring/shadow (50% opacity) |
| `--color-gradient-primary` | Primary Gradient | `linear-gradient(135deg, #7B3FE4 0%, #2D9CDB 100%)` | Hero-secties, omslagen |
| `--color-gradient-subtle` | Subtle Gradient | `linear-gradient(135deg, #1A1C28 0%, #13141D 100%)` | Kaart-achtergronden |

### 1.3 Vakaccenten

| Vak | Token | Hex | Naam |
|---|---|---|---|
| Netwerken | `--color-vak-netwerken` | `#00C2A8` | Cyber Teal |
| App-ontwikkeling | `--color-vak-appdev` | `#F97316` | Code Orange |
| Databeheer | `--color-vak-data` | `#3B82F6` | Data Blue |
| E-STEM | `--color-vak-estem` | `#A855F7` | STEM Purple |

### 1.4 Tekstkleuren

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-text-primary` | Text Primary | `#F0F0FA` | Hoofdtekst, titels |
| `--color-text-secondary` | Text Secondary | `#A8AACB` | Subtitels, labels |
| `--color-text-muted` | Text Muted | `#6B6E8E` | Placeholders, metadata, voettekst |
| `--color-text-inverse` | Text Inverse | `#0D0E14` | Tekst op lichte knoppen/badges |
| `--color-text-link` | Link | `#9B6FFA` | Hyperlinks |
| `--color-text-link-hover` | Link Hover | `#BCA0FF` | Hover-state hyperlinks |

### 1.5 Statuskleuren

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-success-bg` | Success BG | `#0D2E1A` | Toastachtergrond |
| `--color-success` | Success | `#22C55E` | Icoon, tekst, border |
| `--color-success-subtle` | Success Subtle | `#16A34A40` | Lichte achtergrond |
| `--color-warning-bg` | Warning BG | `#2A1E08` | Toastachtergrond |
| `--color-warning` | Warning | `#F59E0B` | Icoon, tekst, border |
| `--color-warning-subtle` | Warning Subtle | `#D9770640` | Lichte achtergrond |
| `--color-error-bg` | Error BG | `#2A0D0D` | Toastachtergrond |
| `--color-error` | Error | `#EF4444` | Icoon, tekst, border |
| `--color-error-subtle` | Error Subtle | `#DC262640` | Lichte achtergrond |
| `--color-info` | Info | `#60BFFF` | Informatieve berichten |

---

## 2. Kleurenpalet — Light Mode

Light mode hanteert lichtgrijze achtergronden met hoge contrastverhoudingen. De paarse/blauwe accenten worden donkerder gemaakt zodat ze leesbaar blijven op witte vlakken (WCAG AA ≥ 4.5:1 voor tekst, ≥ 3:1 voor grote elementen).

### 2.1 Achtergrond & Surface

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-bg-base` | Base Background | `#F4F5FA` | Pagina-achtergrond |
| `--color-bg-elevated` | Elevated Surface | `#FFFFFF` | Kaarten, modals |
| `--color-bg-overlay` | Overlay | `#ECEEF6` | Hover-states |
| `--color-bg-sunken` | Sunken | `#E8EAF4` | Code-achtergronden, inputs |
| `--color-border-subtle` | Subtle Border | `#D5D8EC` | Rasterlijnen |
| `--color-border-default` | Default Border | `#B8BCE0` | Kaartomlijningen |
| `--color-border-strong` | Strong Border | `#7B3FE4` | Actieve states, focus-rings |

### 2.2 Primaire, Secundaire en Accent

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-primary-400` | Primary Light | `#7B3FE4` | Hover-states, links |
| `--color-primary-500` | Primary | `#5E25C0` | Primaire CTA-knoppen |
| `--color-primary-600` | Primary Dark | `#4A1A99` | Pressed-states |
| `--color-secondary-400` | Secondary Light | `#2D9CDB` | Decoratieve highlights |
| `--color-secondary-500` | Secondary | `#1A6FA3` | Secundaire knoppen |
| `--color-secondary-600` | Secondary Dark | `#125480` | Pressed-states |
| `--color-accent-glow` | Glow | `#7B3FE430` | Glow shadow (20% opacity) |
| `--color-gradient-primary` | Primary Gradient | `linear-gradient(135deg, #5E25C0 0%, #1A6FA3 100%)` | Hero-secties |
| `--color-gradient-subtle` | Subtle Gradient | `linear-gradient(135deg, #F4F5FA 0%, #FFFFFF 100%)` | Kaartachtergronden |

### 2.3 Vakaccenten (Light Mode)

| Vak | Token | Hex | Noot |
|---|---|---|---|
| Netwerken | `--color-vak-netwerken` | `#007A6A` | Donkerder voor contrast op wit |
| App-ontwikkeling | `--color-vak-appdev` | `#C2510A` | Donkerder oranje |
| Databeheer | `--color-vak-data` | `#1D4ED8` | Donkerder blauw |
| E-STEM | `--color-vak-estem` | `#7C3AED` | Donkerder paars |

### 2.4 Tekstkleuren

| Token | Naam | Hex | Gebruik |
|---|---|---|---|
| `--color-text-primary` | Text Primary | `#0D0E14` | Hoofdtekst, titels |
| `--color-text-secondary` | Text Secondary | `#3D3F62` | Subtitels, labels |
| `--color-text-muted` | Text Muted | `#6B6E8E` | Placeholders, metadata |
| `--color-text-inverse` | Text Inverse | `#F0F0FA` | Tekst op donkere knoppen |
| `--color-text-link` | Link | `#5E25C0` | Hyperlinks |
| `--color-text-link-hover` | Link Hover | `#7B3FE4` | Hover-state |

### 2.5 Statuskleuren (Light Mode)

| Token | Naam | Hex |
|---|---|---|
| `--color-success-bg` | Success BG | `#F0FDF4` |
| `--color-success` | Success | `#16A34A` |
| `--color-success-subtle` | Success Subtle | `#DCFCE7` |
| `--color-warning-bg` | Warning BG | `#FFFBEB` |
| `--color-warning` | Warning | `#D97706` |
| `--color-warning-subtle` | Warning Subtle | `#FEF3C7` |
| `--color-error-bg` | Error BG | `#FEF2F2` |
| `--color-error` | Error | `#DC2626` |
| `--color-error-subtle` | Error Subtle | `#FEE2E2` |
| `--color-info` | Info | `#1A6FA3` |

---

## 3. CSS Custom Properties

```css
/* ============================================
   DESIGN SYSTEM — Appschool Munsterbilzen: DAB
   Dark Mode (standaard)
   ============================================ */

:root {
  /* --- Achtergrond & Surface --- */
  --color-bg-base:          #0D0E14;
  --color-bg-elevated:      #13141D;
  --color-bg-overlay:       #1A1C28;
  --color-bg-sunken:        #09090F;
  --color-border-subtle:    #1F2035;
  --color-border-default:   #2A2C45;
  --color-border-strong:    #3D3F62;

  /* --- Primaire kleur --- */
  --color-primary-400:      #9B6FFA;
  --color-primary-500:      #7B3FE4;
  --color-primary-600:      #5E25C0;

  /* --- Secundaire kleur --- */
  --color-secondary-400:    #60BFFF;
  --color-secondary-500:    #2D9CDB;
  --color-secondary-600:    #1A6FA3;

  /* --- Accenten & Gradiënten --- */
  --color-accent-glow:      #8B5CF680;
  --color-gradient-primary: linear-gradient(135deg, #7B3FE4 0%, #2D9CDB 100%);
  --color-gradient-subtle:  linear-gradient(135deg, #1A1C28 0%, #13141D 100%);

  /* --- Vakaccenten --- */
  --color-vak-netwerken:    #00C2A8;
  --color-vak-appdev:       #F97316;
  --color-vak-data:         #3B82F6;
  --color-vak-estem:        #A855F7;

  /* --- Tekstkleuren --- */
  --color-text-primary:     #F0F0FA;
  --color-text-secondary:   #A8AACB;
  --color-text-muted:       #6B6E8E;
  --color-text-inverse:     #0D0E14;
  --color-text-link:        #9B6FFA;
  --color-text-link-hover:  #BCA0FF;

  /* --- Statuskleuren --- */
  --color-success-bg:       #0D2E1A;
  --color-success:          #22C55E;
  --color-success-subtle:   #16A34A40;
  --color-warning-bg:       #2A1E08;
  --color-warning:          #F59E0B;
  --color-warning-subtle:   #D9770640;
  --color-error-bg:         #2A0D0D;
  --color-error:            #EF4444;
  --color-error-subtle:     #DC262640;
  --color-info:             #60BFFF;

  /* --- Typografie --- */
  --font-display:           'Space Grotesk', 'Inter', sans-serif;
  --font-body:              'Inter', 'Segoe UI', sans-serif;
  --font-mono:              'JetBrains Mono', 'Fira Code', monospace;

  --text-xs:                0.75rem;    /* 12px */
  --text-sm:                0.875rem;   /* 14px */
  --text-base:              1rem;       /* 16px */
  --text-lg:                1.125rem;   /* 18px */
  --text-xl:                1.25rem;    /* 20px */
  --text-2xl:               1.5rem;     /* 24px */
  --text-3xl:               1.875rem;   /* 30px */
  --text-4xl:               2.25rem;    /* 36px */
  --text-5xl:               3rem;       /* 48px */
  --text-6xl:               3.75rem;    /* 60px */

  --font-weight-regular:    400;
  --font-weight-medium:     500;
  --font-weight-semibold:   600;
  --font-weight-bold:       700;
  --font-weight-extrabold:  800;

  --leading-tight:          1.2;
  --leading-snug:           1.35;
  --leading-normal:         1.6;
  --leading-relaxed:        1.75;

  /* --- Spacing (8px grid) --- */
  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */

  /* --- Borders & Radius --- */
  --radius-sm:   0.25rem;   /* 4px */
  --radius-md:   0.5rem;    /* 8px */
  --radius-lg:   0.75rem;   /* 12px */
  --radius-xl:   1rem;      /* 16px */
  --radius-2xl:  1.5rem;    /* 24px */
  --radius-full: 9999px;

  /* --- Shadows --- */
  --shadow-sm:    0 1px 3px rgba(0, 0, 0, 0.4);
  --shadow-md:    0 4px 12px rgba(0, 0, 0, 0.5);
  --shadow-lg:    0 8px 24px rgba(0, 0, 0, 0.6);
  --shadow-glow:  0 0 20px rgba(123, 63, 228, 0.35);
  --shadow-glow-sm: 0 0 10px rgba(123, 63, 228, 0.25);

  /* --- Transities --- */
  --transition-fast:    150ms ease;
  --transition-base:    250ms ease;
  --transition-slow:    400ms ease;

  /* --- Z-index schaal --- */
  --z-base:     0;
  --z-raised:   10;
  --z-dropdown: 100;
  --z-sticky:   200;
  --z-modal:    300;
  --z-toast:    400;
}

/* ============================================
   Light Mode
   ============================================ */

[data-theme="light"] {
  /* --- Achtergrond & Surface --- */
  --color-bg-base:          #F4F5FA;
  --color-bg-elevated:      #FFFFFF;
  --color-bg-overlay:       #ECEEF6;
  --color-bg-sunken:        #E8EAF4;
  --color-border-subtle:    #D5D8EC;
  --color-border-default:   #B8BCE0;
  --color-border-strong:    #7B3FE4;

  /* --- Primaire kleur --- */
  --color-primary-400:      #7B3FE4;
  --color-primary-500:      #5E25C0;
  --color-primary-600:      #4A1A99;

  /* --- Secundaire kleur --- */
  --color-secondary-400:    #2D9CDB;
  --color-secondary-500:    #1A6FA3;
  --color-secondary-600:    #125480;

  /* --- Accenten & Gradiënten --- */
  --color-accent-glow:      #7B3FE430;
  --color-gradient-primary: linear-gradient(135deg, #5E25C0 0%, #1A6FA3 100%);
  --color-gradient-subtle:  linear-gradient(135deg, #F4F5FA 0%, #FFFFFF 100%);

  /* --- Vakaccenten --- */
  --color-vak-netwerken:    #007A6A;
  --color-vak-appdev:       #C2510A;
  --color-vak-data:         #1D4ED8;
  --color-vak-estem:        #7C3AED;

  /* --- Tekstkleuren --- */
  --color-text-primary:     #0D0E14;
  --color-text-secondary:   #3D3F62;
  --color-text-muted:       #6B6E8E;
  --color-text-inverse:     #F0F0FA;
  --color-text-link:        #5E25C0;
  --color-text-link-hover:  #7B3FE4;

  /* --- Statuskleuren --- */
  --color-success-bg:       #F0FDF4;
  --color-success:          #16A34A;
  --color-success-subtle:   #DCFCE7;
  --color-warning-bg:       #FFFBEB;
  --color-warning:          #D97706;
  --color-warning-subtle:   #FEF3C7;
  --color-error-bg:         #FEF2F2;
  --color-error:            #DC2626;
  --color-error-subtle:     #FEE2E2;
  --color-info:             #1A6FA3;

  /* --- Shadows (lichter in light mode) --- */
  --shadow-sm:    0 1px 3px rgba(13, 14, 20, 0.08);
  --shadow-md:    0 4px 12px rgba(13, 14, 20, 0.12);
  --shadow-lg:    0 8px 24px rgba(13, 14, 20, 0.16);
  --shadow-glow:  0 0 20px rgba(94, 37, 192, 0.2);
  --shadow-glow-sm: 0 0 10px rgba(94, 37, 192, 0.12);
}
```

---

## 4. Typografie

### 4.1 Lettertype-keuze

| Rol | Familie | Google Fonts | Stijlnoot |
|---|---|---|---|
| Display / Titels | **Space Grotesk** | `Space+Grotesk:wght@400;500;600;700` | Geometrisch, technisch — nauw aansluitend bij polygon.technology |
| Body / Interface | **Inter** | `Inter:wght@400;500;600` | Maximale leesbaarheid op scherm, neutrale basis |
| Code / Mono | **JetBrains Mono** | `JetBrains+Mono:wght@400;500` | Uitstekend voor codeblokken in cursusmateriaal |

**Import snippet:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 4.2 Type Scale

| Element | Klasse / Tag | Grootte | Gewicht | Line-height | Familie |
|---|---|---|---|---|---|
| Display Hero | `.text-display` | 3.75rem (60px) | 700 | 1.1 | Space Grotesk |
| H1 | `h1` | 3rem (48px) | 700 | 1.2 | Space Grotesk |
| H2 | `h2` | 2.25rem (36px) | 600 | 1.25 | Space Grotesk |
| H3 | `h3` | 1.875rem (30px) | 600 | 1.3 | Space Grotesk |
| H4 | `h4` | 1.5rem (24px) | 600 | 1.35 | Space Grotesk |
| H5 | `h5` | 1.25rem (20px) | 600 | 1.4 | Inter |
| H6 | `h6` | 1.125rem (18px) | 600 | 1.4 | Inter |
| Body Large | `.text-lg` | 1.125rem (18px) | 400 | 1.75 | Inter |
| Body (standaard) | `body`, `p` | 1rem (16px) | 400 | 1.7 | Inter |
| Body Small | `.text-sm` | 0.875rem (14px) | 400 | 1.6 | Inter |
| Caption / Label | `.text-xs` | 0.75rem (12px) | 500 | 1.5 | Inter |
| Code Inline | `code` | 0.875rem (14px) | 400 | 1.6 | JetBrains Mono |
| Code Block | `pre code` | 0.875rem (14px) | 400 | 1.7 | JetBrains Mono |
| Badge / Tag | `.badge` | 0.75rem (12px) | 600 | 1 | Inter |

### 4.3 Typografie-regels

- **Titels** (h1–h4): Space Grotesk, letter-spacing `-0.02em` voor compacte technische uitstraling.
- **Body-tekst** in cursusmateriaal: minimaal 16px, regellengte max. 70 tekens (ch) voor optimale leesbaarheid.
- **Code**: JetBrains Mono met font-feature-settings `"liga" 1` voor ligaturen.
- **Nooit** meer dan 2 lettertypen per pagina tegelijk actief (display + body OF display + mono).

---

## 5. Componentstijlen

### 5.1 Knoppen

#### Beschrijving
Drie varianten: **Primary** (filled gradient), **Secondary** (filled met secundaire kleur), **Ghost** (transparant met border). Alle knoppen hebben een minimum touch-target van 44px hoogte.

```css
/* Basis knopstijl */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  padding: var(--space-3) var(--space-6);
  min-height: 44px;
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
  border-radius: var(--radius-md);
  border: 1.5px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: all var(--transition-fast);
  letter-spacing: 0.01em;
  white-space: nowrap;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary-400);
  outline-offset: 2px;
}

/* Primary */
.btn-primary {
  background: var(--color-gradient-primary);
  color: #FFFFFF;
  border-color: transparent;
  box-shadow: var(--shadow-glow-sm);
}

.btn-primary:hover {
  filter: brightness(1.1);
  box-shadow: var(--shadow-glow);
  transform: translateY(-1px);
}

.btn-primary:active {
  filter: brightness(0.95);
  transform: translateY(0);
  box-shadow: var(--shadow-glow-sm);
}

/* Secondary */
.btn-secondary {
  background: var(--color-bg-overlay);
  color: var(--color-secondary-400);
  border-color: var(--color-secondary-500);
}

.btn-secondary:hover {
  background: var(--color-secondary-600);
  color: #FFFFFF;
  border-color: var(--color-secondary-400);
}

.btn-secondary:active {
  background: var(--color-secondary-600);
  filter: brightness(0.9);
}

/* Ghost */
.btn-ghost {
  background: transparent;
  color: var(--color-text-secondary);
  border-color: var(--color-border-default);
}

.btn-ghost:hover {
  background: var(--color-bg-overlay);
  color: var(--color-text-primary);
  border-color: var(--color-border-strong);
}

/* Groottes */
.btn-sm {
  padding: var(--space-2) var(--space-4);
  font-size: var(--text-xs);
  min-height: 36px;
}

.btn-lg {
  padding: var(--space-4) var(--space-8);
  font-size: var(--text-base);
  min-height: 52px;
  border-radius: var(--radius-lg);
}

/* Disabled state */
.btn:disabled,
.btn[aria-disabled="true"] {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

### 5.2 Kaarten

#### Cursuskaart (`.card-cursus`)

Toont een vak, bevat: vakaccent-kleurband bovenaan, vakicoon, vaknaam, korte beschrijving, voortgangsindicator en een CTA-knop.

```css
.card-cursus {
  position: relative;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-xl);
  overflow: hidden;
  padding: var(--space-6);
  transition: border-color var(--transition-base),
              box-shadow var(--transition-base),
              transform var(--transition-base);
  cursor: pointer;
}

.card-cursus::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-accent, var(--color-primary-500));
}

.card-cursus:hover {
  border-color: var(--card-accent, var(--color-primary-500));
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4),
              0 0 0 1px var(--card-accent, var(--color-primary-500));
  transform: translateY(-2px);
}

/* Vak-specifieke accenten via CSS-variabele op het element zelf */
.card-cursus[data-vak="netwerken"]   { --card-accent: var(--color-vak-netwerken); }
.card-cursus[data-vak="appdev"]      { --card-accent: var(--color-vak-appdev); }
.card-cursus[data-vak="data"]        { --card-accent: var(--color-vak-data); }
.card-cursus[data-vak="estem"]       { --card-accent: var(--color-vak-estem); }

.card-cursus__icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-lg);
  background: var(--color-bg-overlay);
  border: 1px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-4);
  color: var(--card-accent, var(--color-primary-400));
}

.card-cursus__titel {
  font-family: var(--font-display);
  font-size: var(--text-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-2);
}

.card-cursus__beschrijving {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-6);
}
```

#### Hoofdstukkaart (`.card-hoofdstuk`)

Compact, toont hoofdstuknummer, -titel, voortgangsstatus en schatting van doorlooptijd.

```css
.card-hoofdstuk {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  transition: border-color var(--transition-fast),
              background var(--transition-fast);
  cursor: pointer;
  text-decoration: none;
}

.card-hoofdstuk:hover {
  background: var(--color-bg-overlay);
  border-color: var(--color-border-strong);
}

.card-hoofdstuk__nummer {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: var(--color-bg-overlay);
  border: 1px solid var(--color-border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-secondary);
}

.card-hoofdstuk__titel {
  flex: 1;
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.card-hoofdstuk__meta {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}
```

---

### 5.3 Navigatiebalk (`.navbar`)

Vaste balk bovenaan. Donkere glasachtige achtergrond in dark mode, lichte variant in light mode. Links: logo + schoolnaam. Midden: hoofdnavigatie. Rechts: zoek, thematoggle, profielavatar.

```css
.navbar {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 var(--space-6);
  background: rgba(13, 14, 20, 0.85);
  backdrop-filter: blur(12px) saturate(1.5);
  -webkit-backdrop-filter: blur(12px) saturate(1.5);
  border-bottom: 1px solid var(--color-border-subtle);
}

[data-theme="light"] .navbar {
  background: rgba(244, 245, 250, 0.9);
  border-bottom-color: var(--color-border-default);
}

.navbar__logo {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-mark {
  width: 32px;
  height: 32px;
  /* Geometrisch logo: gebruik SVG inline */
}

.navbar__logo-name {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-bold);
  background: var(--color-gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.navbar__nav {
  display: flex;
  align-items: center;
  gap: var(--space-1);
  margin: 0 auto;
}

.navbar__nav-item {
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: color var(--transition-fast),
              background var(--transition-fast);
}

.navbar__nav-item:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-overlay);
}

.navbar__nav-item.is-active {
  color: var(--color-primary-400);
  background: var(--color-bg-overlay);
}

.navbar__actions {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}
```

---

### 5.4 Voortgangsindicator (`.progress-indicator`)

Drie toestanden: **voltooid**, **bezig**, **niet begonnen**. Gebruikt als statusdot voor hoofdstukken, maar ook als brede voortgangsbalk voor een volledig vak.

```css
/* --- Status Dot (voor hoofdstuklijsten) --- */
.status-dot {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
}

.status-dot__icon {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-full);
  flex-shrink: 0;
}

.status-dot--voltooid .status-dot__icon {
  background: var(--color-success);
  box-shadow: 0 0 6px var(--color-success);
}

.status-dot--voltooid .status-dot__label {
  color: var(--color-success);
}

.status-dot--bezig .status-dot__icon {
  background: var(--color-warning);
  box-shadow: 0 0 6px var(--color-warning);
  /* Pulserende animatie */
  animation: pulse-dot 2s ease-in-out infinite;
}

.status-dot--bezig .status-dot__label {
  color: var(--color-warning);
}

.status-dot--niet-begonnen .status-dot__icon {
  background: transparent;
  border: 2px solid var(--color-border-strong);
}

.status-dot--niet-begonnen .status-dot__label {
  color: var(--color-text-muted);
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.6; transform: scale(1.3); }
}

/* --- Voortgangsbalk (voor cursuskaarten) --- */
.progress-bar {
  width: 100%;
  height: 6px;
  background: var(--color-bg-sunken);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  border-radius: var(--radius-full);
  background: var(--color-gradient-primary);
  transition: width var(--transition-slow);
}

/* Percentage als data-attribuut op .progress-bar__fill */
/* Gebruik: style="width: 65%" */
```

---

### 5.5 Dark / Light Toggle (`.theme-toggle`)

Icoonknop die de zon (light) en de maan (dark) toont. Visueel subtiel, altijd in de navbar.

```css
.theme-toggle {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-md);
  background: transparent;
  border: 1px solid var(--color-border-default);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-secondary);
  transition: background var(--transition-fast),
              color var(--transition-fast),
              border-color var(--transition-fast);
}

.theme-toggle:hover {
  background: var(--color-bg-overlay);
  color: var(--color-text-primary);
  border-color: var(--color-border-strong);
}

.theme-toggle__icon-sun,
.theme-toggle__icon-moon {
  position: absolute;
  width: 18px;
  height: 18px;
  transition: opacity var(--transition-fast),
              transform var(--transition-base);
}

/* Dark mode: toon zon (klik om naar light te gaan) */
:root .theme-toggle__icon-sun   { opacity: 1; transform: rotate(0deg); }
:root .theme-toggle__icon-moon  { opacity: 0; transform: rotate(90deg); }

/* Light mode: toon maan (klik om naar dark te gaan) */
[data-theme="light"] .theme-toggle__icon-sun  { opacity: 0; transform: rotate(-90deg); }
[data-theme="light"] .theme-toggle__icon-moon { opacity: 1; transform: rotate(0deg); }
```

---

### 5.6 Leerplandoel-badge (`.badge-leerplandoel`)

Toont het officieel leerplandoelnummer en het beheersingsniveau (Onthouden / Begrijpen / Toepassen / Analyseren). Gebruikt in marges van cursusmateriaal en online naast paragraaftitels.

```css
.badge-leerplandoel {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 2px var(--space-2);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  border: 1px solid currentColor;
  white-space: nowrap;
}

/* Niveau-kleuren (Bloom-taxonomie) */
.badge-leerplandoel--onthouden {
  color: var(--color-info);
  background: color-mix(in srgb, var(--color-info) 12%, transparent);
}

.badge-leerplandoel--begrijpen {
  color: var(--color-secondary-400);
  background: color-mix(in srgb, var(--color-secondary-400) 12%, transparent);
}

.badge-leerplandoel--toepassen {
  color: var(--color-warning);
  background: color-mix(in srgb, var(--color-warning) 12%, transparent);
}

.badge-leerplandoel--analyseren {
  color: var(--color-primary-400);
  background: color-mix(in srgb, var(--color-primary-400) 12%, transparent);
}

/* Nummer-deel: vetgedrukt prefix */
.badge-leerplandoel__nummer {
  font-weight: var(--font-weight-bold);
}

/* Niveau-label: minder prominent */
.badge-leerplandoel__niveau {
  font-weight: var(--font-weight-medium);
  opacity: 0.85;
}
```

**HTML-voorbeeld:**
```html
<span class="badge-leerplandoel badge-leerplandoel--toepassen">
  <span class="badge-leerplandoel__nummer">LD 3.2</span>
  <span class="badge-leerplandoel__niveau">Toepassen</span>
</span>
```

---

## 6. Vak-identiteit

### 6.1 Netwerken
**Accentkleur dark:** `#00C2A8` — Cyber Teal
**Accentkleur light:** `#007A6A`

**Stijlomschrijving:** Netwerken krijgt een koele, cyaan-groene toon die refereert aan terminalsoftware, datastromen en netwerkdiagrammen. Geometrische patronen in de vorm van knooppunten en verbindingslijnen (lijndikte 1px, 20% dekking) vormen de achtergrondtextuur. Iconografie: topologie-iconen, Ethernet-symbolen, serverrekken. Titels in Space Grotesk benadrukken de technische, infrastructurele aard. Call-outs over protocollen en CLI-commando's gebruiken de mono-font in teal-kleur.

**Gebruik:** Kaartbovenbalk, badges, voortgangsbalk, omslag-accentlijn, icoonkleur.

---

### 6.2 App-ontwikkeling
**Accentkleur dark:** `#F97316` — Code Orange
**Accentkleur light:** `#C2510A`

**Stijlomschrijving:** Oranje staat voor creativiteit, energie en bouw. Het vak richt zich op het schrijven van code en het ontwikkelen van applicaties — dat dynamisme krijgt een warme toon tegenover de koele donkere achtergrond. Achtergrondtextuur: fijne coderegels (tekst-lorem-stijl) in 5% dekking. Syntaxhighlighting in cursusmateriaal gebruikt de oranje accentkleur voor keywords. Iconografie: code-haakjes, terminal-icoon, bouwblokken.

**Gebruik:** Kaartbovenbalk, badges, accentlijn in codeblokken, omslag-kleurband.

---

### 6.3 Databeheer
**Accentkleur dark:** `#3B82F6` — Data Blue
**Accentkleur light:** `#1D4ED8`

**Stijlomschrijving:** Blauw staat universeel voor vertrouwen, data en technologie. Voor Databeheer wordt een helder, elektrisch blauw gekozen dat aansluit bij de databankwereld (SQL, grafieken, tabellen). Achtergrondtextuur: subtiele rasterpatronen die tabellen en grafieken oproepen. SQL-keywords in cursusmateriaal worden in dit blauw gemarkeerd. Iconografie: database-cilinder, tabelraster, grafiekiconen.

**Gebruik:** Kaartbovenbalk, SQL-syntaxhighlighting, badges, omslag-accentlijn.

---

### 6.4 E-STEM
**Accentkleur dark:** `#A855F7` — STEM Purple
**Accentkleur light:** `#7C3AED`

**Stijlomschrijving:** Paars verbindt wetenschap, technologie en creativiteit. E-STEM is het overkoepelende vak dat wiskunde, elektriciteit en digitale technologie integreert. De paarse toon sluit direct aan bij de algemene brand-kleur van de school (en polygon.technology-inspiratie), maar wordt iets verzadigd voor eigen identiteit. Achtergrondtextuur: hexagonale rasterpatronen (honing-structuur) refereren aan moleculen en circuitboards. Iconografie: atoom, schakelschema, golfvorm.

**Gebruik:** Kaartbovenbalk, badges, formule-highlighting, omslag-accentlijn.

---

## 7. Cursus-document stijl

### 7.1 Omslag-layout

De omslag van een cursus (PDF en printversie) volgt een vaste rasterstructuur:

```
┌─────────────────────────────────────────────────────┐
│  [Vakaccent-kleurband — 6px, full-width bovenaan]   │
│                                                     │
│  ┌───────────────────────────┐  ┌─────────────────┐ │
│  │                           │  │  Schoollogo     │ │
│  │  Geometrisch patroon      │  │  (rechts boven) │ │
│  │  (vakspecifiek, 15% opac) │  └─────────────────┘ │
│  │                           │                     │
│  │  [Vakicoon — 80px]        │                     │
│  │                           │                     │
│  │  VAKNAAM                  │                     │
│  │  (Space Grotesk, 48px,    │                     │
│  │   bold, accentkleur)      │                     │
│  │                           │                     │
│  │  Cursustittel             │                     │
│  │  (Space Grotesk, 32px,    │                     │
│  │   wit/donker)             │                     │
│  │                           │                     │
│  │  Ondertitel / Module X    │                     │
│  │  (Inter, 18px, muted)     │                     │
│  └───────────────────────────┘                     │
│                                                     │
│  ─────────────────────────────────────────────────  │
│  Schooljaar 202X–202X | Richting: DAB | Leerjaar X  │
│  (Inter, 12px, muted — footer van omslag)           │
└─────────────────────────────────────────────────────┘
```

**Kleurschema omslag (dark/print):**
- Achtergrond: `#0D0E14` (of diepblauw `#0A0B16`)
- Vaknaam: vakaccent-hex
- Cursustittel: `#F0F0FA`
- Ondertitel: `#A8AACB`
- Geometrisch patroon: vakaccent @ 12% dekking

---

### 7.2 Hoofdstuktitel-stijl

Elk nieuw hoofdstuk begint op een nieuwe pagina. De structuur:

```
┌─────────────────────────────────────────────────────┐
│  [Dunne accentlijn links — 3px, vakkleur]           │
│                                                     │
│  Hoofdstuk 03                                       │
│  (Inter, 12px, uppercase, letter-spacing 0.15em,   │
│   muted-kleur, margin-bottom 8px)                  │
│                                                     │
│  Netwerktopologieën en -protocollen                 │
│  (Space Grotesk, 30px, semibold, text-primary)      │
│                                                     │
│  ─────────────────────── [horizontale lijn, 1px]   │
└─────────────────────────────────────────────────────┘
```

**CSS voor digitale weergave:**
```css
.cursus-hoofdstuk-titel {
  position: relative;
  padding-left: var(--space-6);
  margin-bottom: var(--space-8);
  padding-top: var(--space-4);
}

.cursus-hoofdstuk-titel::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--card-accent, var(--color-primary-500));
  border-radius: var(--radius-full);
}

.cursus-hoofdstuk-titel__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: var(--space-2);
  display: block;
}

.cursus-hoofdstuk-titel__tekst {
  font-family: var(--font-display);
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  line-height: var(--leading-snug);
  margin: 0;
}
```

---

### 7.3 Margenotitie-stijl voor leerplandoelnummers

In het gedrukte en digitale cursusmateriaal worden leerplandoelnummers in de marge geplaatst naast de relevante paragraaf. In digitale cursussen verschijnen ze als floating badge.

**Print / PDF:**
- Positie: rechter marge (buiten de tekstkolom), verticaal uitgelijnd met de begintekstregel
- Breedte: 48px
- Lettertype: JetBrains Mono, 9px, vakaccentkleur
- Achtergrond: vakaccent @ 15% op witte achtergrond
- Boven- en onderborder: 1px, vakaccent @ 30%
- Padding: 4px 6px

**Digitaal (CSS):**
```css
.margenoot-leerplandoel {
  position: absolute;
  left: calc(-1 * var(--space-16));
  top: 0;
  width: 52px;
  font-family: var(--font-mono);
  font-size: 0.6875rem; /* 11px */
  font-weight: var(--font-weight-medium);
  color: var(--card-accent, var(--color-primary-400));
  background: color-mix(in srgb, var(--card-accent, var(--color-primary-500)) 10%, transparent);
  border: 1px solid color-mix(in srgb, var(--card-accent, var(--color-primary-500)) 30%, transparent);
  border-radius: var(--radius-sm);
  padding: 3px 6px;
  text-align: center;
  line-height: 1.4;
}

/* Wrapper vereist position: relative */
.cursus-sectie {
  position: relative;
  padding-left: 0; /* Op brede schermen: padding-left: 80px */
}

@media (min-width: 1024px) {
  .cursus-sectie {
    padding-left: var(--space-16);
  }
}

/* Op smalle schermen: badge bovenaan de sectie */
@media (max-width: 1023px) {
  .margenoot-leerplandoel {
    position: static;
    display: inline-flex;
    margin-bottom: var(--space-2);
  }
}
```

---

### 7.4 Codeblok-stijl

Codeblokken (`.code-block`) zijn het meest voorkomende inhoudselement in App-ontwikkeling en Databeheer. Ze moeten maximaal leesbaar zijn, taalspecifiek gemarkeerd worden en de vakidentiteit versterken.

```css
/* Container */
.code-block {
  position: relative;
  background: var(--color-bg-sunken);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin: var(--space-6) 0;
}

/* Header met taal-label en kopieerknop */
.code-block__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-2) var(--space-4);
  background: var(--color-bg-elevated);
  border-bottom: 1px solid var(--color-border-subtle);
}

.code-block__taal {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Taalspecifieke accentkleur in header */
.code-block[data-taal="python"] .code-block__taal    { color: var(--color-vak-appdev); }
.code-block[data-taal="sql"] .code-block__taal       { color: var(--color-vak-data); }
.code-block[data-taal="bash"] .code-block__taal      { color: var(--color-vak-netwerken); }
.code-block[data-taal="javascript"] .code-block__taal { color: var(--color-warning); }

.code-block__kopieer {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast),
              background var(--transition-fast);
}

.code-block__kopieer:hover {
  color: var(--color-text-primary);
  background: var(--color-bg-overlay);
}

/* Code-inhoud */
.code-block pre {
  margin: 0;
  padding: var(--space-5) var(--space-6);
  overflow-x: auto;
}

.code-block code {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  line-height: 1.75;
  color: var(--color-text-primary);
  tab-size: 2;
}

/* Inline code */
:not(pre) > code {
  font-family: var(--font-mono);
  font-size: 0.875em;
  color: var(--color-primary-400);
  background: color-mix(in srgb, var(--color-primary-500) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--color-primary-500) 25%, transparent);
  border-radius: var(--radius-sm);
  padding: 0.1em 0.4em;
}

/* Basistoken-kleuren voor syntaxhighlighting
   (te koppelen aan Prism.js of highlight.js) */
.token.keyword    { color: #C084FC; } /* Paars */
.token.string     { color: #86EFAC; } /* Groen */
.token.number     { color: #FCA5A5; } /* Rood-roze */
.token.comment    { color: var(--color-text-muted); font-style: italic; }
.token.function   { color: #93C5FD; } /* Blauw */
.token.operator   { color: #F0F0FA; }
.token.punctuation{ color: #A8AACB; }
.token.class-name { color: #FCD34D; } /* Geel */
```

---

## 8. Cursuspagina-componenten

### 8.1 Oefening-kaart (`.card-oefening`)

Groepeert een concrete oefening of opdracht. Bevat: moeilijkheidsgraad-badge, instructietekst, opgave en optioneel een hint-toggle. De kaart heeft een linker accentlijn in de vakkleur.

```css
.card-oefening {
  position: relative;
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-default);
  border-radius: var(--radius-lg);
  padding: var(--space-5) var(--space-6);
  padding-left: var(--space-8);
  margin: var(--space-6) 0;
  overflow: hidden;
}

/* Verticale accentlijn links — vakkleur */
.card-oefening::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background: var(--card-accent, var(--color-primary-500));
  border-radius: var(--radius-full) 0 0 var(--radius-full);
}

.card-oefening__header {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-4);
}

.card-oefening__label {
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--card-accent, var(--color-primary-400));
}

.card-oefening__nummer {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
}

/* Moeilijkheidsgraad-badges */
.badge-moeilijkheid {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 2px var(--space-2);
  border-radius: var(--radius-full);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1;
}

.badge-moeilijkheid--basis {
  background: color-mix(in srgb, var(--color-success) 15%, transparent);
  color: var(--color-success);
  border: 1px solid color-mix(in srgb, var(--color-success) 30%, transparent);
}

.badge-moeilijkheid--gemiddeld {
  background: color-mix(in srgb, var(--color-warning) 15%, transparent);
  color: var(--color-warning);
  border: 1px solid color-mix(in srgb, var(--color-warning) 30%, transparent);
}

.badge-moeilijkheid--uitdagend {
  background: color-mix(in srgb, var(--color-error) 15%, transparent);
  color: var(--color-error);
  border: 1px solid color-mix(in srgb, var(--color-error) 30%, transparent);
}

.card-oefening__titel {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin: 0 0 var(--space-3) 0;
}

.card-oefening__tekst {
  font-size: var(--text-base);
  color: var(--color-text-secondary);
  line-height: var(--leading-normal);
  margin: 0;
}

/* Hint-toggle — verborgen tot de leerling klikt */
.card-oefening__hint {
  margin-top: var(--space-4);
  padding-top: var(--space-4);
  border-top: 1px solid var(--color-border-subtle);
}

.card-oefening__hint-toggle {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0;
  transition: color var(--transition-fast);
}

.card-oefening__hint-toggle:hover {
  color: var(--color-text-secondary);
}

.card-oefening__hint-inhoud {
  margin-top: var(--space-3);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  display: none; /* Zichtbaar via JS: .is-open klasse */
}

.card-oefening__hint.is-open .card-oefening__hint-inhoud {
  display: block;
}
```

**HTML-voorbeeld:**
```html
<div class="card-oefening" data-vak="netwerken" style="--card-accent: var(--color-vak-netwerken)">
  <div class="card-oefening__header">
    <span class="card-oefening__label">Oefening</span>
    <span class="card-oefening__nummer">3.2</span>
    <span class="badge-moeilijkheid badge-moeilijkheid--basis">Basis</span>
    <span class="badge-leerplandoel badge-leerplandoel--toepassen">
      <span class="badge-leerplandoel__nummer">LD-NET-07</span>
    </span>
  </div>
  <h4 class="card-oefening__titel">Bereken het subnetmasker</h4>
  <p class="card-oefening__tekst">Gegeven een IP-adres 192.168.10.0/26: hoeveel hosts zijn mogelijk? Schrijf het subnetmasker in decimale notatie.</p>
  <div class="card-oefening__hint">
    <button class="card-oefening__hint-toggle" aria-expanded="false">💡 Toon hint</button>
    <p class="card-oefening__hint-inhoud">Gebruik de formule: 2<sup>n</sup> − 2 waarbij n het aantal hostbits is.</p>
  </div>
</div>
```

---

### 8.2 Definitie-blok (`.block-definitie`)

Markeert een sleutelbegrip met een formele definitie. Compact, visueel onderscheidend van de broodtekst. Lichtpaars/blauw accent (primaire kleur) om neutraliteit te bewaren over alle vakken.

```css
.block-definitie {
  position: relative;
  background: color-mix(in srgb, var(--color-primary-500) 8%, var(--color-bg-elevated));
  border: 1px solid color-mix(in srgb, var(--color-primary-500) 25%, transparent);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
  margin: var(--space-5) 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-3) var(--space-4);
  align-items: start;
}

/* Definitie-icoon (D-symbool of boeicoon) */
.block-definitie__icoon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-primary-500) 20%, transparent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-sm);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-400);
  flex-shrink: 0;
  grid-row: 1 / 3;
}

.block-definitie__term {
  font-family: var(--font-display);
  font-size: var(--text-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-400);
  margin: 0;
}

.block-definitie__tekst {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  margin: 0;
}

/* Variant: vakkleur gebruiken i.p.v. primary */
.block-definitie[data-vak] {
  background: color-mix(in srgb, var(--card-accent) 8%, var(--color-bg-elevated));
  border-color: color-mix(in srgb, var(--card-accent) 25%, transparent);
}

.block-definitie[data-vak] .block-definitie__icoon {
  background: color-mix(in srgb, var(--card-accent) 20%, transparent);
  color: var(--card-accent);
}

.block-definitie[data-vak] .block-definitie__term {
  color: var(--card-accent);
}
```

**HTML-voorbeeld:**
```html
<div class="block-definitie" data-vak="data" style="--card-accent: var(--color-vak-data)">
  <div class="block-definitie__icoon">D</div>
  <p class="block-definitie__term">Primaire sleutel (PRIMARY KEY)</p>
  <p class="block-definitie__tekst">
    Een kolom (of combinatie van kolommen) waarvan elke waarde uniek is binnen een tabel
    en die nooit <code>NULL</code> mag zijn. De primaire sleutel identificeert elke rij eenduidig.
  </p>
</div>
```

---

### 8.3 Tip-blok (`.block-tip`)

Vier varianten: **tip** (groen), **waarschuwing** (geel), **gevaar** (rood), **info** (blauw). Lichte achtergrond + linker accentlijn. Compact inline-gebruik naast de broodtekst.

```css
.block-tip {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: var(--space-2) var(--space-3);
  align-items: start;
  padding: var(--space-4) var(--space-5);
  border-radius: var(--radius-md);
  margin: var(--space-4) 0;
  border-left: 4px solid transparent;
  font-size: var(--text-sm);
  line-height: var(--leading-relaxed);
}

.block-tip__icoon {
  grid-row: 1 / 3;
  font-size: 1rem;
  line-height: 1.5;
  flex-shrink: 0;
}

.block-tip__label {
  font-weight: var(--font-weight-bold);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.block-tip__tekst {
  color: var(--color-text-secondary);
  margin: 0;
}

/* Variant: Tip (groen) */
.block-tip--tip {
  background: var(--color-success-subtle);
  border-left-color: var(--color-success);
}
.block-tip--tip .block-tip__label { color: var(--color-success); }

/* Variant: Waarschuwing (geel) */
.block-tip--waarschuwing {
  background: var(--color-warning-subtle);
  border-left-color: var(--color-warning);
}
.block-tip--waarschuwing .block-tip__label { color: var(--color-warning); }

/* Variant: Gevaar / fout (rood) */
.block-tip--gevaar {
  background: var(--color-error-subtle);
  border-left-color: var(--color-error);
}
.block-tip--gevaar .block-tip__label { color: var(--color-error); }

/* Variant: Info (blauw) */
.block-tip--info {
  background: color-mix(in srgb, var(--color-info) 10%, transparent);
  border-left-color: var(--color-info);
}
.block-tip--info .block-tip__label { color: var(--color-info); }

/* Light mode aanpassingen */
[data-theme="light"] .block-tip--tip        { background: var(--color-success-subtle); }
[data-theme="light"] .block-tip--waarschuwing { background: var(--color-warning-subtle); }
[data-theme="light"] .block-tip--gevaar     { background: var(--color-error-subtle); }
[data-theme="light"] .block-tip--info       { background: color-mix(in srgb, var(--color-info) 12%, transparent); }
```

**HTML-voorbeeld:**
```html
<!-- Tip -->
<div class="block-tip block-tip--tip">
  <span class="block-tip__icoon">✓</span>
  <span class="block-tip__label">Tip</span>
  <p class="block-tip__tekst">
    Gebruik altijd een betekenisvolle naam voor je variabelen. <code>leeftijd</code>
    is duidelijker dan <code>x</code>.
  </p>
</div>

<!-- Waarschuwing -->
<div class="block-tip block-tip--waarschuwing">
  <span class="block-tip__icoon">⚠</span>
  <span class="block-tip__label">Let op</span>
  <p class="block-tip__tekst">
    Vergeet niet je bestand op te slaan (<kbd>Ctrl+S</kbd>) voor je de browser ververst.
  </p>
</div>

<!-- Gevaar -->
<div class="block-tip block-tip--gevaar">
  <span class="block-tip__icoon">✕</span>
  <span class="block-tip__label">Fout</span>
  <p class="block-tip__tekst">
    Gebruik nooit <code>DELETE FROM tabel</code> zonder een <code>WHERE</code>-clausule
    in productieomgevingen — dit verwijdert alle rijen.
  </p>
</div>

<!-- Info -->
<div class="block-tip block-tip--info">
  <span class="block-tip__icoon">i</span>
  <span class="block-tip__label">Info</span>
  <p class="block-tip__tekst">
    Het OSI-model heeft 7 lagen. In de praktijk wordt TCP/IP (4 lagen) vaker gebruikt.
  </p>
</div>
```

---

## 9. Leerplandoel-badges — Basis / Verdieping

Naast de Bloom-taxonomie-badges (sectie 5.6) worden er ook **niveau-badges** gebruikt die aangeven of leerstof op basis- of verdiepingsniveau staat. Deze badges zijn vakkleur-gebonden.

```css
/* Niveau-badge: basis (5e jaar) of verdieping (6e jaar) */
.badge-niveau {
  display: inline-flex;
  align-items: center;
  gap: var(--space-1);
  padding: 3px var(--space-2);
  border-radius: var(--radius-sm);
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  line-height: 1.4;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  border: 1px solid currentColor;
  white-space: nowrap;
}

/* Basis — lichtgroen accent */
.badge-niveau--basis {
  color: var(--color-success);
  background: color-mix(in srgb, var(--color-success) 10%, transparent);
  border-color: color-mix(in srgb, var(--color-success) 30%, transparent);
}

/* Verdieping — primaire accentkleur (paars) */
.badge-niveau--verdieping {
  color: var(--color-primary-400);
  background: color-mix(in srgb, var(--color-primary-500) 10%, transparent);
  border-color: color-mix(in srgb, var(--color-primary-500) 30%, transparent);
}

/* Gecombineerde badge: leerplandoelnummer + niveau + beschrijving */
.badge-ld {
  display: inline-flex;
  align-items: center;
  gap: 0;
  border-radius: var(--radius-md);
  overflow: hidden;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-semibold);
  border: 1px solid var(--color-border-default);
  white-space: nowrap;
}

/* Linker cel: LD-nummer in vakkleur */
.badge-ld__nummer {
  padding: 3px var(--space-2);
  background: color-mix(in srgb, var(--card-accent, var(--color-primary-500)) 20%, transparent);
  color: var(--card-accent, var(--color-primary-400));
  font-family: var(--font-mono);
  border-right: 1px solid var(--color-border-default);
}

/* Midden: niveau (basis/verdieping) */
.badge-ld__niveau {
  padding: 3px var(--space-2);
  background: var(--color-bg-sunken);
  color: var(--color-text-muted);
}

/* Rechter cel: beschrijving */
.badge-ld__beschrijving {
  padding: 3px var(--space-2);
  background: transparent;
  color: var(--color-text-secondary);
  font-family: var(--font-body);
  font-weight: var(--font-weight-medium);
}
```

**HTML-voorbeelden:**
```html
<!-- Enkelvoudige niveau-badge -->
<span class="badge-niveau badge-niveau--basis">Basis</span>
<span class="badge-niveau badge-niveau--verdieping">Verdieping</span>

<!-- Gecombineerde badge (naast paragraaftitel) -->
<span class="badge-ld" style="--card-accent: var(--color-vak-netwerken)">
  <span class="badge-ld__nummer">LD-NET-05</span>
  <span class="badge-ld__niveau">Basis</span>
  <span class="badge-ld__beschrijving">IP-adressering</span>
</span>

<!-- Verdieping-variant -->
<span class="badge-ld" style="--card-accent: var(--color-vak-data)">
  <span class="badge-ld__nummer">LD-DB-03</span>
  <span class="badge-ld__niveau">Verdieping</span>
  <span class="badge-ld__beschrijving">Normalisatie 3NF</span>
</span>
```

---

## 10. Voortgangsindicatoren — Uitgebreid

Aanvulling op sectie 5.4: voortgangsindicatoren voor gebruik in cursuspagina's (per hoofdstuk), op de startpagina (per vak) en in de navigatie (breadcrumb-stijl).

```css
/* ---- Voortgangsstap-rij (horizontaal, voor vak-overzicht) ---- */
.progress-steps {
  display: flex;
  align-items: center;
  gap: 0;
  padding: var(--space-2) 0;
}

.progress-step {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex: 1;
  position: relative;
}

/* Verbindingslijn tussen stappen */
.progress-step::after {
  content: '';
  flex: 1;
  height: 2px;
  background: var(--color-border-default);
  margin-left: var(--space-2);
}

.progress-step:last-child::after {
  display: none;
}

.progress-step__dot {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
  border: 2px solid transparent;
  transition: all var(--transition-base);
}

.progress-step__label {
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  white-space: nowrap;
}

/* Staten */
.progress-step--voltooid .progress-step__dot {
  background: var(--color-success);
  color: #fff;
  border-color: var(--color-success);
}

.progress-step--voltooid::after {
  background: var(--color-success);
}

.progress-step--bezig .progress-step__dot {
  background: var(--color-bg-overlay);
  color: var(--color-warning);
  border-color: var(--color-warning);
  box-shadow: 0 0 8px color-mix(in srgb, var(--color-warning) 40%, transparent);
}

.progress-step--niet-begonnen .progress-step__dot {
  background: var(--color-bg-sunken);
  color: var(--color-text-muted);
  border-color: var(--color-border-default);
}

/* ---- Circulaire voortgangsindicator (voor dashboard) ---- */
.progress-ring {
  position: relative;
  width: 56px;
  height: 56px;
  flex-shrink: 0;
}

.progress-ring svg {
  transform: rotate(-90deg);
}

.progress-ring__track {
  fill: none;
  stroke: var(--color-border-default);
  stroke-width: 4;
}

.progress-ring__fill {
  fill: none;
  stroke: var(--color-gradient-primary);
  stroke-width: 4;
  stroke-linecap: round;
  /* stroke-dasharray en stroke-dashoffset via JS/inline-style */
  transition: stroke-dashoffset var(--transition-slow);
}

.progress-ring__percentage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

/* ---- Checkpoint-lijst (voor hoofdstuk-detailpagina) ---- */
.checkpoint-lijst {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.checkpoint-item {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  background: var(--color-bg-elevated);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: border-color var(--transition-fast),
              background var(--transition-fast);
}

.checkpoint-item:hover {
  background: var(--color-bg-overlay);
  border-color: var(--color-border-default);
}

.checkpoint-item__checkbox {
  width: 20px;
  height: 20px;
  border-radius: var(--radius-sm);
  border: 2px solid var(--color-border-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all var(--transition-fast);
}

.checkpoint-item.is-voltooid .checkpoint-item__checkbox {
  background: var(--color-success);
  border-color: var(--color-success);
}

.checkpoint-item__tekst {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  flex: 1;
}

.checkpoint-item.is-voltooid .checkpoint-item__tekst {
  text-decoration: line-through;
  color: var(--color-text-muted);
}
```

**HTML-voorbeeld (voortgangsstappen):**
```html
<div class="progress-steps">
  <div class="progress-step progress-step--voltooid">
    <div class="progress-step__dot">✓</div>
    <span class="progress-step__label">H01</span>
  </div>
  <div class="progress-step progress-step--voltooid">
    <div class="progress-step__dot">✓</div>
    <span class="progress-step__label">H02</span>
  </div>
  <div class="progress-step progress-step--bezig">
    <div class="progress-step__dot">3</div>
    <span class="progress-step__label">H03</span>
  </div>
  <div class="progress-step progress-step--niet-begonnen">
    <div class="progress-step__dot">4</div>
    <span class="progress-step__label">H04</span>
  </div>
</div>
```

**JavaScript (localStorage-voortgang):**
```javascript
// Sla voortgang op per leerjaar/vak/hoofdstuk
function setHoofdstukStatus(leerjaar, vak, hoofdstuk, status) {
  // status: 'niet-begonnen' | 'bezig' | 'voltooid'
  const key = `voortgang_${leerjaar}_${vak}_${hoofdstuk}`;
  localStorage.setItem(key, status);
  renderVoortgang();
}

function getHoofdstukStatus(leerjaar, vak, hoofdstuk) {
  const key = `voortgang_${leerjaar}_${vak}_${hoofdstuk}`;
  return localStorage.getItem(key) || 'niet-begonnen';
}

// Bereken percentage per vak
function getVakVoortgang(leerjaar, vak, aantalHoofdstuken) {
  let voltooid = 0;
  for (let i = 1; i <= aantalHoofdstuken; i++) {
    if (getHoofdstukStatus(leerjaar, vak, i) === 'voltooid') voltooid++;
  }
  return Math.round((voltooid / aantalHoofdstuken) * 100);
}
```

---

## 11. Navigatiestructuur Website

### 11.1 Sitemapoverzicht

```
output/website/
├── index.html                     ← Startpagina (keuze 5e / 6e jaar)
├── 5e-jaar/
│   ├── index.html                 ← Overzicht 5ADB (4 vakken)
│   ├── netwerken/
│   │   ├── index.html             ← Inhoudsopgave Netwerken 5ADB
│   │   ├── H01-introductie.html
│   │   ├── H02-osi-model.html
│   │   └── ...
│   ├── app-ontwikkeling/
│   │   ├── index.html
│   │   ├── H01-html-basics.html
│   │   └── ...
│   ├── databeheer/
│   │   ├── index.html
│   │   └── ...
│   └── e-stem/
│       ├── index.html
│       └── ...
└── 6e-jaar/
    ├── index.html                 ← Overzicht 6ADB (4 vakken + GIP)
    ├── netwerken/
    ├── app-ontwikkeling/
    ├── databeheer/
    ├── e-stem/
    └── gip/
        └── index.html             ← GIP-informatie en templates
```

### 11.2 Navigatie-hiërarchie (breadcrumb)

```
Home → [Leerjaar] → [Vak] → [Hoofdstuk]
```

**Breadcrumb CSS:**
```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  font-size: var(--text-sm);
  color: var(--color-text-muted);
  padding: var(--space-3) 0;
  flex-wrap: wrap;
}

.breadcrumb__separator {
  color: var(--color-border-strong);
  font-size: var(--text-xs);
  user-select: none;
}

.breadcrumb__item {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.breadcrumb__item:hover {
  color: var(--color-text-secondary);
}

.breadcrumb__item.is-actief {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  pointer-events: none;
}
```

### 11.3 Zijbalk-navigatie cursus (`.sidebar-cursus`)

Op cursuspagina's verschijnt links een zijbalk met de volledige inhoudsopgave van het vak. Vak-accentkleur voor de actieve sectie.

```css
.sidebar-cursus {
  width: 260px;
  flex-shrink: 0;
  position: sticky;
  top: calc(64px + var(--space-6)); /* Under the navbar */
  max-height: calc(100vh - 64px - var(--space-12));
  overflow-y: auto;
  padding-right: var(--space-4);

  /* Scrollbar stijl */
  scrollbar-width: thin;
  scrollbar-color: var(--color-border-default) transparent;
}

.sidebar-cursus__vak-titel {
  font-family: var(--font-display);
  font-size: var(--text-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--card-accent, var(--color-primary-400));
  padding: var(--space-2) 0;
  margin-bottom: var(--space-2);
  border-bottom: 1px solid var(--color-border-subtle);
}

.sidebar-cursus__lijst {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.sidebar-cursus__item {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  padding: var(--space-2) var(--space-3);
  border-radius: var(--radius-md);
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: background var(--transition-fast),
              color var(--transition-fast);
}

.sidebar-cursus__item:hover {
  background: var(--color-bg-overlay);
  color: var(--color-text-primary);
}

.sidebar-cursus__item.is-actief {
  background: color-mix(in srgb, var(--card-accent, var(--color-primary-500)) 12%, transparent);
  color: var(--card-accent, var(--color-primary-400));
  font-weight: var(--font-weight-medium);
}

.sidebar-cursus__item-nummer {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  color: var(--color-text-muted);
  flex-shrink: 0;
  width: 28px;
}

.sidebar-cursus__item-status {
  margin-left: auto;
  flex-shrink: 0;
}

/* Mobile: sidebar wordt een collapsible bovenaan de pagina */
@media (max-width: 1023px) {
  .sidebar-cursus {
    position: static;
    width: 100%;
    max-height: none;
    overflow: visible;
    padding-right: 0;
    margin-bottom: var(--space-6);
  }
}
```

### 11.4 Pagina-layout raster

```css
/* Cursuspagina layout: sidebar + hoofdinhoud */
.layout-cursus {
  display: flex;
  gap: var(--space-8);
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

.layout-cursus__hoofd {
  flex: 1;
  min-width: 0; /* Voorkomt overflow in flex */
  max-width: 70ch; /* Optimale leeslengte */
}

/* Jaarjaar-keuze startpagina (2 grote kaarten naast elkaar) */
.layout-start {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-16) var(--space-6);
}

/* Vakkenoverzicht (2×2 raster op desktop) */
.layout-vakken {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5);
  max-width: 1100px;
  margin: 0 auto;
}

/* Responsive aanpassingen */
@media (max-width: 768px) {
  .layout-start,
  .layout-vakken {
    grid-template-columns: 1fr;
  }

  .layout-cursus {
    flex-direction: column;
    padding: var(--space-4);
  }
}
```

---

## Bijlage A: Checklist toegankelijkheid (aangevuld)

| Vereiste | Standaard | Status |
|---|---|---|
| Contrastverhouding normale tekst | ≥ 4.5:1 (WCAG AA) | Gecontroleerd voor alle tekst-tokens |
| Contrastverhouding grote tekst / UI | ≥ 3:1 | Gecontroleerd voor knoppen en borders |
| Focus-indicator zichtbaar | Altijd 2px outline | Geïmplementeerd op alle interactieve elementen |
| Touch-target minimumgrootte | ≥ 44×44px | Knoppen en nav-items voldoen |
| Kleur nooit de enige informatiedrager | — | Status-dots combineren kleur + vorm/tekst |
| Tekst schaalbaar tot 200% | — | Gebruik rem-eenheden door heel systeem |
| Animaties uitschakelbaar | `prefers-reduced-motion` | Zie bijlage B |
| Toetsenbordnavigatie | Tab + Enter + Escape | Sidebar, modals, toggles |
| ARIA-labels | aria-label / aria-expanded | Hint-toggles, theme-toggle, sidebar |
| Semantische HTML | nav, main, section, article | Vereist in alle templates |

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

*Design System v1.1 — Appschool Munsterbilzen: Data- en Applicatiebeheer — 2026-03-22*
*Toegevoegd in v1.1: cursuspagina-componenten (oefening-kaart, definitie-blok, tip-blok), leerplandoel-badges basis/verdieping, uitgebreide voortgangsindicatoren, navigatiestructuur en pagina-layouts.*
*Volgende stap: UX/UI Designer implementeert componentbibliotheek op basis van dit document.*
