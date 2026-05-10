#!/usr/bin/env python3
"""
Bouwscript: zet markdown cursusbestanden om naar HTML-pagina's.
Uitvoeren vanuit output/website/:
  python3 _build_chapters.py
"""

import os, re, html as html_mod

BASE = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.abspath(os.path.join(BASE, '..', '..'))
OUTPUT = BASE

def md_path(vak_folder, jaar, filename):
    return os.path.join(PROJECT_ROOT, 'output', vak_folder, 'cursus', jaar, filename)

def read_md(path):
    try:
        with open(path, encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return None

# ---------------------------------------------------------------------------
# Markdown -> HTML converter
# ---------------------------------------------------------------------------

def escape(s):
    return html_mod.escape(str(s), quote=False)

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^\w\s-]', '', text)
    text = re.sub(r'[\s]+', '-', text).strip('-')
    return text

def inline_md(text):
    """Inline markdown: bold, italic, code, links, LD-badges."""
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'__(.+?)__', r'<strong>\1</strong>', text)
    text = re.sub(r'\*([^*\n]+?)\*', r'<em>\1</em>', text)
    text = re.sub(r'`([^`\n]+?)`', r'<code>\1</code>', text)
    text = re.sub(r'\[([^\]]+)\]\(([^\)]+)\)',
                  r'<a href="\2" target="_blank" rel="noopener">\1</a>', text)
    return text

def detect_callout_type(first_line):
    """Detecteer het type callout."""
    fl = first_line.strip()
    if re.search(r'🔵|^\*\*Definitie', fl): return 'definitie', '📘 Definitie'
    if re.search(r'💡|^\*\*Tip\b', fl):     return 'tip', '💡 Tip'
    if re.search(r'⚠️|^\*\*Let op\b', fl): return 'waarschuwing', '⚠️ Let op'
    if re.search(r'🟢|^\*\*Voorbeeld', fl): return 'voorbeeld', '🟢 Voorbeeld'
    if re.search(r'🟠|^\*\*Oefening', fl): return 'oefening', '🟠 Oefening'
    if re.search(r'📋.*Samenvatting|^\*\*Samenvatting', fl): return 'samenvatting', '📋 Samenvatting'
    if re.search(r'📚.*Huistaak|^###\s*📚', fl): return 'huistaak', '📚 Huistaak'
    if re.search(r'🏷️|\[LD-|\[ADB', fl):   return 'ld', 'Leerplandoelen'
    return None, None

def render_bq_lines(bq_lines):
    """Verwerk de inhoud van een callout."""
    out = []
    in_pre = False
    in_ul = False
    in_ol = False

    for raw_line in bq_lines:
        line = raw_line.strip()

        if line.startswith('```'):
            if in_pre:
                out.append('</code></pre>')
                in_pre = False
            else:
                lang = line[3:].strip()
                out.append(f'<pre data-lang="{escape(lang)}"><code>')
                in_pre = True
            continue

        if in_pre:
            out.append(escape(raw_line))
            continue

        # Sluit open lijsten
        is_bullet = line.startswith('- ') or line.startswith('* ')
        is_ordered = bool(re.match(r'^\d+\. ', line))
        if in_ul and not is_bullet:
            out.append('</ul>')
            in_ul = False
        if in_ol and not is_ordered:
            out.append('</ol>')
            in_ol = False

        # LD badge rij
        if line.startswith('🏷️') or re.match(r'^\[LD-', line):
            # Parse LD badge
            m = re.search(r'\[(LD-[^\]]+|ADB\d+|VAT\d+|SV[\d.]+)\][^\s]*\s*(.*?)(?:\s+—\s+(basis|verdieping))?$', line)
            if m:
                code = m.group(1)
                desc = m.group(2).strip() if m.group(2) else ''
                level = m.group(3) or ''
                lvl_html = f' <span class="badge badge-{level}">{level}</span>' if level else ''
                out.append(f'<div class="ld-badges" style="margin:var(--space-2) 0"><span class="badge badge-ld">[{escape(code)}]</span> {inline_md(desc)}{lvl_html}</div>')
            continue

        # Skip callout type headers
        skip = re.match(r'^[🔵💡⚠️🟢🟠📋📚🏷️]\s*\*\*[^*]+\*\*\s*$|^\*\*(Definitie|Tip|Let op|Voorbeeld|Oefening|Samenvatting|Huistaak)[^*]*\*\*\s*$', line)
        if skip:
            continue

        # Checkbox
        cb = re.match(r'^- \[( |x|X)\] (.*)', line)
        if cb:
            if not in_ul:
                out.append('<ul class="oefening-checklist">')
                in_ul = True
            checked = 'checked' if cb.group(1).lower() == 'x' else ''
            out.append(f'<li><input type="checkbox" {checked}> {inline_md(cb.group(2))}</li>')
            continue

        # Bullet list
        if is_bullet:
            if not in_ul:
                out.append('<ul>')
                in_ul = True
            out.append(f'<li>{inline_md(line[2:])}</li>')
            continue

        # Ordered list
        if is_ordered:
            if not in_ol:
                out.append('<ol>')
                in_ol = True
            out.append(f'<li>{inline_md(re.sub(r"^\d+\. ", "", line))}</li>')
            continue

        # Heading
        hm = re.match(r'^(#{1,4})\s+(.*)', line)
        if hm:
            lvl = len(hm.group(1))
            t = re.sub(r'^[\U0001F300-\U0001FFFF\u2600-\u26FF\u2700-\u27BF\s]+', '', hm.group(2)).strip()
            out.append(f'<h{lvl}>{inline_md(t)}</h{lvl}>')
            continue

        # Horizontal rule
        if re.match(r'^(-{3,}|\*{3,})$', line):
            continue

        # Empty
        if not line:
            continue

        # Remove leading > from nested blockquotes
        line = re.sub(r'^>', '', line).strip()
        # Remove callout header prefix
        line = re.sub(r'^[🔵💡⚠️🟢🟠📋📚🏷️]\s*', '', line)
        line = re.sub(r'^\*\*(Definitie|Tip|Let op|Voorbeeld|Oefening|Samenvatting|Huistaak)[^:]*:\*\*\s*', '', line)
        if line:
            out.append(f'<p>{inline_md(line)}</p>')

    if in_ul: out.append('</ul>')
    if in_ol: out.append('</ol>')
    if in_pre: out.append('</code></pre>')
    return '\n'.join(out)

def md_to_html(text):
    """Converteer markdown naar HTML."""
    lines = text.split('\n')
    result = []
    i = 0
    in_pre = False
    in_table = False
    in_ul = False
    in_ol = False

    def close_lists():
        nonlocal in_ul, in_ol
        if in_ul: result.append('</ul>'); in_ul = False
        if in_ol: result.append('</ol>'); in_ol = False

    while i < len(lines):
        line = lines[i]

        # --- Fenced code block ---
        if line.strip().startswith('```'):
            close_lists()
            if in_table:
                result.append('</tbody></table></div>'); in_table = False
            if in_pre:
                result.append('</code></pre>'); in_pre = False
            else:
                lang = line.strip()[3:].strip()
                result.append(f'<pre data-lang="{escape(lang)}"><code>'); in_pre = True
            i += 1; continue

        if in_pre:
            result.append(escape(line)); i += 1; continue

        # --- Blockquote (callouts) ---
        if line.startswith('>'):
            close_lists()
            if in_table:
                result.append('</tbody></table></div>'); in_table = False
            # Collect all blockquote lines
            bq_lines = []
            while i < len(lines) and lines[i].startswith('>'):
                bq_lines.append(lines[i][1:].lstrip())
                i += 1
            if not bq_lines:
                continue
            first = bq_lines[0].strip()
            ctype, clabel = detect_callout_type(first)
            if ctype == 'ld':
                # LD badges row
                badges_html = []
                for bl in bq_lines:
                    bl = bl.strip()
                    m = re.search(r'\[(LD-[^\]]+|ADB\d+|VAT\d+|SV[\d.]+)\][^\s]*\s*(.*?)(?:\s+—\s+(basis|verdieping))?$', bl)
                    if m:
                        code = m.group(1)
                        desc = (m.group(2) or '').strip()
                        lvl = m.group(3) or ''
                        lvl_badge = f'<span class="badge badge-{lvl}">{lvl}</span>' if lvl else ''
                        badges_html.append(f'<span class="badge badge-ld">[{escape(code)}]</span> {inline_md(desc)} {lvl_badge}')
                if badges_html:
                    result.append('<div class="ld-badges">' + ' &nbsp; '.join(badges_html) + '</div>')
            elif ctype:
                inner = render_bq_lines(bq_lines)
                result.append(f'<div class="callout callout--{ctype}">')
                result.append(f'<div class="callout-header">{clabel}</div>')
                result.append(inner)
                result.append('</div>')
            else:
                inner = render_bq_lines(bq_lines)
                result.append(f'<blockquote>{inner}</blockquote>')
            continue

        # --- Table ---
        if line.startswith('|'):
            if not in_table:
                close_lists()
                result.append('<div style="overflow-x:auto"><table>'); in_table = True
                cells = [c.strip() for c in line.strip('|').split('|')]
                result.append('<thead><tr>' + ''.join(f'<th>{inline_md(c)}</th>' for c in cells) + '</tr></thead><tbody>')
                i += 1
                # skip separator
                if i < len(lines) and re.match(r'^[\|\s\-:]+$', lines[i]):
                    i += 1
                continue
            else:
                cells = [c.strip() for c in line.strip('|').split('|')]
                result.append('<tr>' + ''.join(f'<td>{inline_md(c)}</td>' for c in cells) + '</tr>')
                i += 1; continue
        elif in_table:
            result.append('</tbody></table></div>'); in_table = False

        # --- Heading ---
        hm = re.match(r'^(#{1,6})\s+(.*)', line)
        if hm:
            close_lists()
            level = len(hm.group(1))
            txt = re.sub(r'^[\U0001F300-\U0001FFFF\u2600-\u26FF\u2700-\u27BF\s]+', '', hm.group(2)).strip()
            # Remove emoji
            txt = re.sub(r'[\U0001F300-\U0001FFFF\u2600-\u27BF]', '', txt).strip()
            slug = slugify(txt)
            result.append(f'<h{level} id="{slug}">{inline_md(txt)}</h{level}>')
            i += 1; continue

        # --- HR ---
        if re.match(r'^(-{3,}|\*{3,}|_{3,})$', line.strip()):
            close_lists()
            if in_table:
                result.append('</tbody></table></div>'); in_table = False
            i += 1; continue

        # --- Bullet list ---
        if line.startswith('- ') or line.startswith('* '):
            if not in_ul:
                if in_ol: result.append('</ol>'); in_ol = False
                result.append('<ul>'); in_ul = True
            item = line[2:]
            cb = re.match(r'^\[( |x|X)\] (.*)', item)
            if cb:
                checked = 'checked' if cb.group(1).lower() == 'x' else ''
                result.append(f'<li><input type="checkbox" {checked}> {inline_md(cb.group(2))}</li>')
            else:
                result.append(f'<li>{inline_md(item)}</li>')
            i += 1; continue

        # --- Ordered list ---
        olm = re.match(r'^(\d+)\. (.*)', line)
        if olm:
            if not in_ol:
                if in_ul: result.append('</ul>'); in_ul = False
                result.append('<ol>'); in_ol = True
            result.append(f'<li>{inline_md(olm.group(2))}</li>')
            i += 1; continue

        # --- Empty line ---
        if line.strip() == '':
            close_lists()
            i += 1; continue

        # --- Paragraph ---
        close_lists()
        result.append(f'<p>{inline_md(line)}</p>')
        i += 1

    close_lists()
    if in_pre:  result.append('</code></pre>')
    if in_table:result.append('</tbody></table></div>')

    return '\n'.join(result)

# ---------------------------------------------------------------------------
# HTML sjablonen
# ---------------------------------------------------------------------------

def nav_html(root, jaar):
    a5 = ' active' if jaar == '5adb' else ''
    a6 = ' active' if jaar == '6adb' else ''
    return f"""<nav class="site-nav" role="navigation" aria-label="Hoofdnavigatie">
  <div class="container">
    <div class="site-nav__inner">
      <a href="{root}index.html" class="site-nav__logo">
        <span class="site-nav__logo-icon">&#9889;</span>
        AI School DAB
      </a>
      <ul class="site-nav__links" role="list">
        <li><a href="{root}index.html" class="site-nav__link">Home</a></li>
        <li><a href="{root}5adb/index.html" class="site-nav__link{a5}">5ADB</a></li>
        <li><a href="{root}6adb/index.html" class="site-nav__link{a6}">6ADB</a></li>
      </ul>
      <div class="site-nav__actions">
        <button class="theme-toggle" id="theme-toggle" title="Schakel thema" aria-label="Schakel thema">&#x2600;&#xFE0F;</button>
        <button class="nav-hamburger" id="nav-hamburger" aria-expanded="false" aria-controls="nav-mobile" aria-label="Menu">&#9776;</button>
      </div>
    </div>
  </div>
  <div class="site-nav__mobile" id="nav-mobile">
    <a href="{root}index.html" class="site-nav__link">Home</a>
    <a href="{root}5adb/index.html" class="site-nav__link">5ADB</a>
    <a href="{root}6adb/index.html" class="site-nav__link">6ADB</a>
  </div>
</nav>"""

def breadcrumb_html(crumbs):
    parts = ['<nav class="breadcrumb" aria-label="Paginapad">']
    for i, (label, href) in enumerate(crumbs):
        if href:
            parts.append(f'<a href="{href}">{label}</a>')
        else:
            parts.append(f'<span>{label}</span>')
        if i < len(crumbs) - 1:
            parts.append('<span class="breadcrumb-sep">&#8250;</span>')
    parts.append('</nav>')
    return '\n'.join(parts)

def page_html(title, desc, root, nav, breadcrumb, body, jaar_label='5ADB', extra_js='', narrow=False):
    narrow_cls = ' container-narrow' if narrow else ''
    return f"""<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{escape(title)} &mdash; AI School DAB</title>
  <meta name="description" content="{escape(desc)}">
  <link rel="stylesheet" href="{root}assets/css/style.css">
  <script>(function(){{var t=localStorage.getItem('ai-school-theme');if(t==='light')document.documentElement.setAttribute('data-theme','light');}})();</script>
</head>
<body>
<a href="#main" class="skip-link">Ga naar de inhoud</a>
{nav}
<main id="main">
  <div class="container{narrow_cls}">
{breadcrumb}
{body}
  </div>
</main>
<footer class="site-footer">
  <div class="container">
    <div class="site-footer__inner">
      <p class="site-footer__text">AI School &mdash; Data- en Applicatiebeheer &mdash; {jaar_label} &mdash; 2025&ndash;2026</p>
    </div>
  </div>
</footer>
<div class="toast" id="toast" role="status" aria-live="polite"></div>
<script src="{root}assets/js/app.js"></script>
{extra_js}
</body>
</html>"""

# ---------------------------------------------------------------------------
# Vakken configuratie
# ---------------------------------------------------------------------------

VAKKEN = {
    'netwerken': {
        'naam': 'Netwerken', 'icon': '&#127760;', 'klasse': 'netwerken',
        '5adb': {
            'beschrijving': 'Van basisnetwerken tot IPv6. Je leert netwerktopologieen, IP-adressering, subnetting en sluit af met een eigen netwerkontwerp in Packet Tracer.',
            'lesuren': '~88 u', 'per_week': '2 u/week',
            'hoofdstukken': [
                ('H01','Wat is een netwerk?','4 u','H01-wat-is-een-netwerk.md'),
                ('H02','Computerarchitectuur als basis','6 u','H02-computerarchitectuur.md'),
                ('H03','Het OSI-model','8 u','H03-osi-model.md'),
                ('H04','Fysieke laag & bekabeling','6 u','H04-fysieke-laag-bekabeling.md'),
                ('H05','Datalinklaag & Ethernet','6 u','H05-datalink-ethernet.md'),
                ('H06','IPv4-adressering','10 u','H06-ipv4-adressering.md'),
                ('H07','Subnetting','8 u','H07-subnetting.md'),
                ('H08','Transportlaag: TCP en UDP','6 u','H08-transportlaag-tcp-udp.md'),
                ('H09','Toepassingslaag: protocollen','8 u','H09-toepassingslaag-protocollen.md'),
                ('H10','Basisroutering & switches instellen','8 u','H10-basisroutering.md'),
                ('H11','IPv6 introductie','4 u','H11-ipv6-introductie.md'),
                ('H12','Cyberveiligheid: basisprincipes','6 u','H12-cyberveiligheid-basis.md'),
                ('H13','Netwerkontwerp met Packet Tracer','8 u','H13-netwerkontwerp-packet-tracer.md'),
            ]
        }
    },
    'app-ontwikkeling': {
        'naam': 'App-ontwikkeling', 'icon': '&#128187;', 'klasse': 'appdev',
        '5adb': {
            'beschrijving': 'HTML, CSS en JavaScript van nul. Je bouwt je eerste interactieve webpaginas en leert werken met Git.',
            'lesuren': '~80 u', 'per_week': '6 u/week',
            'hoofdstukken': [
                ('H01','Werkomgeving en introductie','4 u','H01-werkomgeving-en-introductie.md'),
                ('H02','HTML basics','8 u','H02-html-basics.md'),
                ('H03','HTML structuur & semantiek','8 u','H03-html-structuur-en-semantiek.md'),
                ('H04','CSS opmaak','8 u','H04-css-opmaak.md'),
                ('H05','CSS layout','10 u','H05-css-layout.md'),
                ('H06','JavaScript basics','10 u','H06-javascript-basics.md'),
                ('H07','Functies & DOM-manipulatie','10 u','H07-functies-en-dom.md'),
                ('H08','Miniproject: interactieve pagina','12 u','H08-miniproject.md'),
                ('H09','Testen, debuggen & documenteren','6 u','H09-testen-debuggen-documenteren.md'),
                ('H10','Privacy & professioneel werken','4 u','H10-privacy-en-professioneel-werken.md'),
            ]
        }
    },
    'databeheer': {
        'naam': 'Databeheer', 'icon': '&#128452;', 'klasse': 'data',
        '5adb': {
            'beschrijving': 'Databases ontwerpen en bouwen, SQL schrijven en data visualiseren met Python. Afsluiter: een volledig miniproject.',
            'lesuren': '~60 u', 'per_week': '4 u/week',
            'hoofdstukken': [
                ('H01','Introductie databases en privacy','4 u','H01-wat-is-een-database.md'),
                ('H02','Werkomgeving en versiebeheer','4 u','H02-werkomgeving-en-versiebeheer.md'),
                ('H03','Datamodellering: tabellen en relaties','8 u','H03-datamodellering.md'),
                ('H04','Databank aanmaken en vullen','6 u','H04-databank-aanmaken-en-vullen.md'),
                ('H05','SQL bevraging: SELECT','8 u','H05-sql-bevraging-select.md'),
                ('H06','SQL manipulatie: UPDATE en DELETE','4 u','H06-sql-manipulatie-update-delete.md'),
                ('H07','Relaties en JOIN','8 u','H07-relaties-en-join.md'),
                ('H08','Python, Excel en JSON','6 u','H08-python-excel-json.md'),
                ('H09','Datavisualisatie met Python','8 u','H09-datavisualisatie-python.md'),
                ('H10','Miniproject 5ADB','10 u','H10-miniproject-5adb.md'),
            ]
        }
    },
    'e-stem': {
        'naam': 'E-STEM', 'icon': '&#127827;', 'klasse': 'estem',
        '5adb': {
            'beschrijving': 'Raspberry Pi, Linux terminal, Python scripting en SSH. Je werkt aan een individueel project en start een groepsproject.',
            'lesuren': '~60 u', 'per_week': '2 u/week',
            'hoofdstukken': [
                ('H01','Introductie Raspberry Pi en Linux','4 u','H01-introductie-arduino-raspberry-pi.md'),
                ('H02','Linux basiscommandos','6 u','H02-linux-basiscommandos.md'),
                ('H03','Python basics op de Raspberry Pi','6 u','H03-python-basics.md'),
                ('H04','SSH en netwerkconfiguratie','4 u','H04-raspberry-pi-linux-basis.md'),
                ('H05','Python: bestanden en data','4 u','H05-python-bestanden-en-data.md'),
                ('H06','Individueel project','10 u','H06-individueel-project.md'),
                ('H07','Introductie groepsproject','8 u','H07-groepsproject-intro.md'),
            ]
        }
    },
}

# ---------------------------------------------------------------------------
# Bouw 6ADB index
# ---------------------------------------------------------------------------

def build_6adb_index():
    root = '../'
    nav = nav_html(root, '6adb')
    bc = breadcrumb_html([('Home', f'{root}index.html'), ('6ADB', None)])
    body = """
    <div class="page-header">
      <div class="page-header__vak">&#128215; Zesde jaar &mdash; Verdiepingsniveau</div>
      <h1 class="page-header__title">6ADB &mdash; Zesde jaar</h1>
      <p class="page-header__desc">Het zesde jaar bouwt verder op de fundamenten van 5ADB. De cursuspagina&#8217;s zijn beschikbaar via de onderstaande links.</p>
    </div>
    <div class="callout callout--info">
      <div class="callout-header">&#8505;&#65039; Status</div>
      <p>De 6ADB-cursuspagina&#8217;s zijn momenteel in opbouw. De 5ADB-cursus is volledig beschikbaar.</p>
    </div>
    <div class="vak-grid" style="margin-top:var(--space-8);">
      <a href="../6adb/netwerken/index.html" class="card-vak card-vak--netwerken">
        <span class="card-vak__icon">&#127760;</span>
        <div class="card-vak__title">Netwerken</div>
        <p class="card-vak__subtitle">VLANs, firewallregels, serverbeheer en UniFi-praktijkproject.</p>
        <div class="card-vak__meta"><span>7 H.</span><span>~84 u</span><span>2 u/week</span></div>
      </a>
      <a href="../6adb/app-ontwikkeling/index.html" class="card-vak card-vak--appdev">
        <span class="card-vak__icon">&#128187;</span>
        <div class="card-vak__title">App-ontwikkeling</div>
        <p class="card-vak__subtitle">JavaScript verdieping, API&#8217;s, Node.js en GIP-voorbereiding.</p>
        <div class="card-vak__meta"><span>6 H.</span><span>~90 u</span><span>6 u/week</span></div>
      </a>
      <a href="../6adb/databeheer/index.html" class="card-vak card-vak--data">
        <span class="card-vak__icon">&#128452;</span>
        <div class="card-vak__title">Databeheer</div>
        <p class="card-vak__subtitle">Normalisatie, stored procedures en dashboarding.</p>
        <div class="card-vak__meta"><span>6 H.</span><span>~70 u</span><span>4 u/week</span></div>
      </a>
      <a href="../6adb/e-stem/index.html" class="card-vak card-vak--estem">
        <span class="card-vak__icon">&#127827;</span>
        <div class="card-vak__title">E-STEM</div>
        <p class="card-vak__subtitle">Flask, SQLite-koppeling, IoT/MQTT en groepsproject.</p>
        <div class="card-vak__meta"><span>5 H.</span><span>~60 u</span><span>1 u/week</span></div>
      </a>
    </div>
"""
    out = page_html('6ADB', 'Overzicht 6e jaar', root, nav, bc, body, '6ADB', narrow=True)
    outdir = os.path.join(OUTPUT, '6adb')
    os.makedirs(outdir, exist_ok=True)
    with open(os.path.join(outdir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(out)
    print('  Geschreven: 6adb/index.html')

# ---------------------------------------------------------------------------
# Bouw vak index
# ---------------------------------------------------------------------------

def build_vak_index(vak_key, jaar='5adb'):
    vak = VAKKEN[vak_key]
    vd = vak[jaar]
    root = '../../'
    naam = vak['naam']
    klasse = vak['klasse']
    icon = vak['icon']
    hdst = vd['hoofdstukken']
    total = len(hdst)

    nav = nav_html(root, jaar)
    bc = breadcrumb_html([
        ('Home', f'{root}index.html'),
        (jaar.upper(), f'{root}{jaar}/index.html'),
        (naam, None),
    ])

    items = []
    for idx, (hnum, htitle, huren, _) in enumerate(hdst):
        key = f'{jaar}/{vak_key}/{hnum}'
        items.append(f"""    <a href="{hnum}.html" class="card-hoofdstuk vak-{klasse}">
      <div class="card-hoofdstuk__num">{idx+1:02d}</div>
      <div class="card-hoofdstuk__info">
        <div class="card-hoofdstuk__title">{hnum} &mdash; {escape(htitle)}</div>
        <p class="card-hoofdstuk__meta">{huren}</p>
      </div>
      <div class="card-hoofdstuk__status">
        <span class="progress-badge progress-badge--not-started" data-progress-key="{key}">&#9675; Niet begonnen</span>
      </div>
    </a>""")

    body = f"""
    <div class="page-header vak-{klasse}">
      <div class="page-header__vak">{icon} {jaar.upper()} &mdash; {'Basis' if jaar=='5adb' else 'Verdieping'}</div>
      <h1 class="page-header__title">{escape(naam)}</h1>
      <p class="page-header__desc">{escape(vd['beschrijving'])}</p>
    </div>
    <div class="meta-strip">
      <div class="meta-item"><span class="meta-item__label">Hoofdstukken</span><span class="meta-item__value">{total}</span></div>
      <div class="meta-item"><span class="meta-item__label">Lesuren</span><span class="meta-item__value">{vd['lesuren']}</span></div>
      <div class="meta-item"><span class="meta-item__label">Per week</span><span class="meta-item__value">{vd['per_week']}</span></div>
      <div class="meta-item"><span class="meta-item__label">Niveau</span><span class="meta-item__value">{'Basis' if jaar=='5adb' else 'Verdieping'}</span></div>
    </div>
    <div style="margin-bottom:var(--space-6);">
      <div class="progress-label">
        <span data-progress-label="{jaar}/{vak_key}">0 / {total} hoofdstukken voltooid</span>
      </div>
      <div class="progress-bar-wrap">
        <div class="progress-bar" data-progress-bar="{jaar}/{vak_key}" data-total="{total}" style="width:0%"></div>
      </div>
    </div>
    <div>
{chr(10).join(items)}
    </div>
"""
    out = page_html(f'{naam} &mdash; {jaar.upper()}', vd['beschrijving'], root, nav, bc, body, jaar.upper(), narrow=True)
    outdir = os.path.join(OUTPUT, jaar, vak_key)
    os.makedirs(outdir, exist_ok=True)
    with open(os.path.join(outdir, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'  Geschreven: {jaar}/{vak_key}/index.html')

# ---------------------------------------------------------------------------
# Bouw hoofdstukpagina
# ---------------------------------------------------------------------------

def build_chapter(vak_key, jaar, idx, hnum, htitle, huren, hfile):
    vak = VAKKEN[vak_key]
    vd = vak[jaar]
    hdst = vd['hoofdstukken']
    root = '../../../'
    naam = vak['naam']
    klasse = vak['klasse']
    icon = vak['icon']

    # Lees & converteer markdown
    src = md_path(vak_key, jaar, hfile)
    md = read_md(src)
    if not md:
        print(f'  NIET GEVONDEN: {src}')
        md = f'# {htitle}\n\nDeze cursuspagina is nog niet beschikbaar.\n'
    body_html = md_to_html(md)

    # Sidebar
    headings = re.findall(r'<h([23]) id="([^"]+)">([^<]+)</h\1>', body_html)
    sidebar_items = []
    for lvl, hid, htxt in headings:
        indent = ' style="padding-left:1.25rem"' if lvl == '3' else ''
        sidebar_items.append(f'<li><a href="#{hid}"{indent}>{htxt}</a></li>')

    sidebar = f'<div class="chapter-sidebar"><div class="chapter-sidebar__title">Inhoud</div><ul class="chapter-sidebar__list">{"".join(sidebar_items)}</ul></div>' if sidebar_items else '<div></div>'

    # Vorig/volgend
    prev_html = ''
    if idx > 0:
        ph, pt, _, _ = hdst[idx-1]
        prev_html = f'<a href="{ph}.html" class="chapter-nav__link"><span>&#8592;</span><div><span class="chapter-nav__link-label">Vorig</span><span class="chapter-nav__link-title">{ph} &mdash; {escape(pt)}</span></div></a>'
    next_html = ''
    if idx < len(hdst) - 1:
        nh, nt, _, _ = hdst[idx+1]
        next_html = f'<a href="{nh}.html" class="chapter-nav__link chapter-nav__link--next"><div><span class="chapter-nav__link-label">Volgend</span><span class="chapter-nav__link-title">{nh} &mdash; {escape(nt)}</span></div><span>&#8594;</span></a>'

    chapter_key = f'{jaar}/{vak_key}/{hnum}'
    nav = nav_html(root, jaar)
    bc = breadcrumb_html([
        ('Home', f'{root}index.html'),
        (jaar.upper(), f'{root}{jaar}/index.html'),
        (naam, f'{root}{jaar}/{vak_key}/index.html'),
        (hnum, None),
    ])

    body = f"""
    <div class="chapter-layout">
      {sidebar}
      <div class="chapter-content">
        <div class="page-header vak-{klasse}" style="padding-bottom:var(--space-6)">
          <div class="page-header__vak">{icon} {escape(naam)} &mdash; {jaar.upper()}</div>
          <h1 class="page-header__title">{hnum} &mdash; {escape(htitle)}</h1>
          <div style="display:flex;gap:var(--space-3);flex-wrap:wrap;align-items:center;margin-top:var(--space-3);">
            <span class="badge badge-{'basis' if jaar=='5adb' else 'verdieping'}">{'basis' if jaar=='5adb' else 'verdieping'}</span>
            <span style="color:var(--color-text-muted);font-size:var(--text-sm);">{huren}</span>
          </div>
        </div>

        {body_html}

        <div class="complete-btn-wrap">
          <p>Klaar met dit hoofdstuk? Markeer het als voltooid om je voortgang bij te houden.</p>
          <button class="btn btn-primary" id="complete-btn" data-chapter-key="{chapter_key}">Markeer als voltooid</button>
        </div>
        <div class="chapter-nav">
          {prev_html}
          {next_html}
        </div>
      </div>
    </div>
"""
    out = page_html(f'{hnum} &mdash; {escape(htitle)}', f'{htitle} &mdash; {naam} {jaar.upper()}', root, nav, bc, body, jaar.upper())
    outdir = os.path.join(OUTPUT, jaar, vak_key)
    os.makedirs(outdir, exist_ok=True)
    with open(os.path.join(outdir, f'{hnum}.html'), 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'  Geschreven: {jaar}/{vak_key}/{hnum}.html')

# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    print('AI School — Website Builder')
    print('=' * 50)

    print('\n[6ADB index]')
    build_6adb_index()

    for vak_key in VAKKEN:
        vak = VAKKEN[vak_key]
        jaar = '5adb'
        if jaar not in vak:
            continue
        print(f'\n[{jaar.upper()} / {vak["naam"]}]')
        build_vak_index(vak_key, jaar)
        for idx, (hnum, htitle, huren, hfile) in enumerate(vak[jaar]['hoofdstukken']):
            build_chapter(vak_key, jaar, idx, hnum, htitle, huren, hfile)

    print('\nKlaar!')

if __name__ == '__main__':
    main()
