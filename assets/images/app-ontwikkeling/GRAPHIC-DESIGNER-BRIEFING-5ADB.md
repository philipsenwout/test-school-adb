# Graphic Designer Briefing — App-ontwikkeling 5ADB
## Afbeeldingen voor cursushoofdstukken HTML + CSS

**Stijlreferentie:** Geïnspireerd op polygon.technology — donkere achtergronden, heldere accenten, cleane layouts. Educatieve context: leesbaarheid en duidelijkheid primeren.

**Formaat:** PNG met transparante achtergrond (tenzij anders vermeld), 1200×800px of 800×600px afhankelijk van het type.

**Opslaglocatie:** `/output/app-ontwikkeling/images/`

**Bestandsnaamconventie:** `H[xx]-[nn]-[beschrijving].png`

---

## H01 — HTML Basisstructuur

### H01-01-html-document-structuur.png
**Type:** Infographic / Diagram
**Beschrijving:** Visuele weergave van een volledig HTML-document. Toon de hiërarchie: `<!DOCTYPE html>` → `<html>` → `<head>` (met meta, title) en `<body>`. Gebruik gekleurde blokken om de nesting aan te tonen. Dark mode stijl. Label elk element duidelijk.
**Kleurgebruik:** Donkere achtergrond (#1a1a2e of gelijkaardig), neon-groen of cyaan voor HTML-tags, wit voor labels.

### H01-02-block-vs-inline.png
**Type:** Visueel schema
**Beschrijving:** Twee kolommen naast elkaar. Links: block-elementen (p, h1, div) — elk op een nieuwe regel, volledige breedte. Rechts: inline-elementen (em, strong, a, img) — naast elkaar in de tekststroom. Gebruik concrete voorbeelden met kleurcodering.
**Kleurgebruik:** Block-elementen in blauw/paars, inline-elementen in oranje/geel.

### H01-03-emmet-shortcuts.png
**Type:** Cheatsheet / Overzicht
**Beschrijving:** Visuele cheatsheet van de meest gebruikte Emmet-shortcuts: `!`, `lorem`, `h1`, `p`, `ul>li*3`, `div.container`, `a[href=#]`. Toon links het commando en rechts het resultaat. Monospace font voor code. Donkere achtergrond.
**Kleurgebruik:** Commando's in groen, resultaat in wit, pijltjes in lichtgrijs.

---

## H02 — HTML Tekst en Opmaak

### H02-01-heading-hierarchie.png
**Type:** Infographic
**Beschrijving:** Visuele voorstelling van h1 t/m h6 als een boomstructuur of inhoudstafel. Toon de hiërarchie (h1 = groots, h6 = klein) met verschillende tekstgroottes. Leg visueel uit dat dit een BETEKENISSTRUCTUUR is, geen opmaak. Gebruik een woordweb of boekstructuur als metafoor.
**Kleurgebruik:** Donkere achtergrond, gradient van groot naar klein, accent in cyaan.

### H02-02-lijsten-overzicht.png
**Type:** Vergelijkingsschema
**Beschrijving:** Drie kolommen: ordered list (ol), unordered list (ul), en geneste lijst. Toon de HTML-code links en het visuele resultaat rechts voor elk type. Concreet voorbeeld: boodschappenlijst (ul), stap-voor-stap recept (ol), geneste categorieen.
**Kleurgebruik:** Donker, code in groen-monospace, resultaat in wit.

### H02-03-speciale-karakters.png
**Type:** Referentietabel
**Beschrijving:** Tabel met de meest gebruikte HTML-entiteiten: `&copy;` → ©, `&lt;` → <, `&gt;` → >, `&amp;` → &, `&nbsp;` → [spatie], `&euro;` → €. Duidelijk georganiseerd met kolommen: HTML-code | Symbool | Naam/uitleg.
**Kleurgebruik:** Tabelstijl, donker, groene accenten voor de HTML-code.

---

## H03 — Semantische HTML

### H03-01-semantische-structuur.png
**Type:** Pagina-layout diagram
**Beschrijving:** Visuele weergave van een webpagina met gekleurde zones voor elk semantisch element: header (boven, blauw), nav (navigatiebalk, paars), main (midden, groen), aside (zijbalk, oranje), footer (onder, rood). Elk blok heeft duidelijk het HTML-element als label. Stijl als wireframe.
**Kleurgebruik:** Elk element heeft een eigen kleur, transparante opvulling, dark background.

### H03-02-html5-flowchart.png
**Type:** Beslissingsboom / Flowchart
**Beschrijving:** Flowchart die helpt beslissen welk semantisch element te gebruiken: Gaat het om de hoofdinhoud? → main. Is het de siteheader? → header. Is het navigatie? → nav. Is het een zelfstandig artikel? → article. Is het een groep verwante inhoud? → section. Is het randinhoud? → aside. Eenvoudig en visueel duidelijk.
**Kleurgebruik:** Donker, beslissingspunten in cyaan, elementen in oranje.

### H03-03-screenreader-toegankelijkheid.png
**Type:** Illustratie / Infographic
**Beschrijving:** Illustratie die toont hoe een screenreader een pagina ervaart. Links: een visuele pagina met header, nav, main, footer. Rechts: wat de screenreader voorleest als de gebruiker vraagt "ga naar navigatie" of "spring naar hoofdinhoud". Toon het belang van semantische HTML voor toegankelijkheid.
**Kleurgebruik:** Links kleurrijke pagina, rechts tekst-representatie in wit op donker.

---

## H04 — Links

### H04-01-absolute-vs-relatief-pad.png
**Type:** Diagram / Mappenstructuur
**Beschrijving:** Toon een mappenstructuur (website/, website/css/, website/img/, website/paginas/). Links: absoluut pad (https://...) — tekst in rood met waarschuwing. Rechts: relatief pad (../img/foto.jpg, ./css/stijl.css) — tekst in groen. Visuele pijlen tonen de navigatie.
**Kleurgebruik:** Mapstructuur in lichtgrijs, absoluut in rood/oranje, relatief in groen.

### H04-02-anker-links.png
**Type:** Illustratie / Diagram
**Beschrijving:** Toon een lange webpagina met een inhoudsopgave bovenaan. Pijlen verbinden de links in de inhoudsopgave met de bijbehorende secties (id-attributen) verderop op de pagina. Toon de code: `<a href="#sectie1">` en `<section id="sectie1">`.
**Kleurgebruik:** Pagina in licht grijs, pijlen in cyaan/neon.

### H04-03-link-types-overzicht.png
**Type:** Vergelijkingskaart
**Beschrijving:** Visueel overzicht van 4 soorten links: (1) interne link (naar andere pagina op dezelfde site), (2) externe link (naar andere site, target="_blank"), (3) ankerlink (#id, zelfde pagina), (4) mailto-link (e-mailadres). Per type: code + icoon + beschrijving.
**Kleurgebruik:** Elk type heeft een eigen kleur/icoon, donkere achtergrond.

---

## H05 — Afbeeldingen

### H05-01-afbeeldingsformaten-vergelijking.png
**Type:** Vergelijkingstabel
**Beschrijving:** Tabel die de meest gebruikte afbeeldingsformaten vergelijkt: JPG, PNG, GIF, SVG, WebP. Per formaat: ondersteunt transparantie? (ja/nee), animatie? (ja/nee), best voor foto's / illustraties / iconen / logo's? (pictogram). Inclusief typische bestandsgrootte indicator.
**Kleurgebruik:** Tabelstijl, ja = groen vinkje, nee = rood kruisje, donkere achtergrond.

### H05-02-img-element-anatomie.png
**Type:** Annotatie-diagram
**Beschrijving:** Groot weergegeven HTML-regel: `<img src="img/foto.jpg" alt="beschrijving" width="800" height="600">`. Elke component is aangeduid met een pijltje en uitleg: src (locatie bestand), alt (alternatieve tekst voor screenreader), width/height (afmetingen in pixels). Duidelijk en overzichtelijk.
**Kleurgebruik:** HTML-tag in groen, attributen in geel, waarden in oranje, uitleg in wit.

### H05-03-alt-tekst-toegankelijkheid.png
**Type:** Vergelijking / Illustratie
**Beschrijving:** Twee versies naast elkaar. Links: FOUT gebruik — `<img src="foto.jpg" alt="">` of geen alt, wat een screenreader hoort: "img" of niets. Rechts: GOED gebruik — `<img src="hond.jpg" alt="Bruine labrador die in het park speelt">`, wat een screenreader hoort: de volledige beschrijving. Toon het perspectief van een blinde gebruiker.
**Kleurgebruik:** Fout in rood/oranje, goed in groen, illustratief icoon van headphones/oor.

---

## H06 — Tabellen

### H06-01-tabel-structuur.png
**Type:** Anatomie-diagram
**Beschrijving:** Visuele tabel met gekleurde zones: thead (blauw/donker), tbody (wit/licht), tfoot (grijs). Elke rij en cel is aangeduid: tr, th (kopcel), td (datacel). Naast de tabel: de bijbehorende HTML-code. Gebruik een concreet voorbeeld (uurrooster of sportresultaten).
**Kleurgebruik:** thead donker-blauw, tbody wit/lichtgrijs, tfoot grijs, borders in cyaan.

### H06-02-colspan-rowspan.png
**Type:** Visueel schema
**Beschrijving:** Twee tabellen naast elkaar. Links: colspan in actie (een cel die 2 kolommen breed is, aangeduid met een dubbele pijl). Rechts: rowspan in actie (een cel die 2 rijen hoog is, aangeduid met een dubbele pijl). De bijbehorende HTML-code staat eronder.
**Kleurgebruik:** Samengestelde cellen in fel accent (cyaan of neon-groen), normale cellen in grijs.

### H06-03-tabel-wanneer-gebruiken.png
**Type:** Beslissingsboom / Infographic
**Beschrijving:** Flowchart: Is het tabeldata (rijen en kolommen met betekenis)? JA → gebruik table. NEE → gebruik Flexbox of Grid voor layout. Voorbeelden van GOEDE tabellen: uurrooster, sportresultaten, prijstabel. Voorbeelden van FOUTE tabellen: paginalayout.
**Kleurgebruik:** JA-pad in groen, NEE-pad in rood, voorbeelden in lichtgrijs kaders.

---

## H07 — Formulieren

### H07-01-form-anatomie.png
**Type:** Annotatie-diagram
**Beschrijving:** Een volledig ingevuld voorbeeld-formulier (contact-formulier) met aanwijzende pijlen naar elk element: form (container), label (beschrijving), input text, input email, select dropdown, textarea, button submit. Toon de koppeling label-for ↔ input-id visueel.
**Kleurgebruik:** Formulier in lichtgrijs, pijlen en labels in cyaan, HTML-tags in groen.

### H07-02-input-types-overzicht.png
**Type:** Cheatsheet / Raster
**Beschrijving:** Grid van input-types: text, email, number, password (verborgen tekens), checkbox, radio, date, file, range, submit. Per type: de HTML-code + visuele preview van hoe het eruit ziet in de browser. Mooi gerangschikt in een 3×4 raster.
**Kleurgebruik:** Donkere achtergrond, inputs in lichtgrijs/wit, HTML-code in groen.

### H07-03-form-usability-10-regels.png
**Type:** Infographic / Genummerde lijst
**Beschrijving:** Visuele infographic met de 10 usability-regels voor formulieren (Kathryn Whitenton). Elke regel heeft een kort pictogram/icoon en een korte tekst. Stijl: moderne infographic, nummers in grote kleurcirkels. Compact en overzichtelijk.
**Kleurgebruik:** Nummers in cyaan cirkels, tekst in wit, achtergrond donker, iconen in lichtgrijs.

---

## H08 — CSS Introductie

### H08-01-css-regel-anatomie.png
**Type:** Annotatie-diagram
**Beschrijving:** Een CSS-regel groot weergegeven: `body { font-family: georgia, serif; color: #000; }`. Elk onderdeel aangeduid met pijlen: selector, declaratieblok (accolades), eigenschap (property), waarde (value), puntkomma. Duidelijk en kleurgecodeerd.
**Kleurgebruik:** Selector in paars, eigenschap in blauw, waarde in oranje, structuurelementen in grijs.

### H08-02-css-koppelen-drie-manieren.png
**Type:** Vergelijkingsschema
**Beschrijving:** Drie kolommen naast elkaar: (1) Extern bestand (link rel="stylesheet") — AANBEVOLEN, groen vinkje, (2) Embedded style (style in head) — SOMS OK, oranje, (3) Inline style (style="" in tag) — VERMIJDEN, rood. Per methode: code + voor- en nadelen.
**Kleurgebruik:** Extern groen, embedded oranje, inline rood, donkere achtergrond.

### H08-03-css-specificiteit-starwars.png
**Type:** Illustratie / Hiërarchiediagram
**Beschrijving:** De Star Wars-metafoor voor specificiteit. Visueel geordend van zwak naar sterk: element-selector (stormtrooper), class-selector (Darth Maul), id-selector (Darth Vader), inline style (The Emperor), !important (Death Star). Gebruik Star Wars-stijl iconen/silhouetten of abstracte hiërarchiediagram.
**Kleurgebruik:** Donker, cinematic stijl, accenten in goud/neon.

---

## H09 — Kleur en Achtergrond

### H09-01-kleur-notaties.png
**Type:** Vergelijkingsschema
**Beschrijving:** Toon dezelfde kleur (bv. een mooie blauwtint) in 4 notaties naast elkaar: kleurenaam (`steelblue`), hex (`#4682b4`), RGB decimaal (`rgb(70, 130, 180)`), HSL (`hsl(207, 44%, 49%)`). Visueel kleurblok + code per notatie. Uitleg wanneer welke notatie te gebruiken.
**Kleurgebruik:** Voorbeeldkleur prominent, code in monospace groen, uitleg in wit.

### H09-02-contrast-toegankelijkheid.png
**Type:** Infographic
**Beschrijving:** Twee secties: (1) Contrastverhouding — toon voorbeelden van voldoende contrast (zwart op wit ✓) en onvoldoende contrast (lichtgrijs op wit ✗). (2) Kleurenblindheid — toon groen/rood voorbeeld en hoe iemand met deuteranopie het ziet. Boodschap: gebruik nooit ALLEEN kleur voor informatie.
**Kleurgebruik:** Heldere voorbeelden, vinkjes groen, kruisjes rood.

### H09-03-css-custom-properties.png
**Type:** Code-illustratie
**Beschrijving:** Toon het voordeel van CSS custom properties. Links: CSS zonder variabelen (kleurcode 6 keer herhaald — rood gemarkeerd als problematisch). Rechts: CSS mét variabelen (:root met --primair-kleur: #4682b4, dan var(--primair-kleur) gebruikt). Pijlen tonen de verbinding tussen definitie en gebruik.
**Kleurgebruik:** Herhaling in rood/problematisch, variabelen in groen/oplossing.

---

## H10 — Box Model en CSS Eenheden

### H10-01-box-model-diagram.png
**Type:** Diagram (klassiek box model)
**Beschrijving:** Het klassieke box model als geneste rechthoeken: content (binnenste, blauw), padding (groen), border (geel), margin (oranje). Elk laagje heeft een label met de CSS-eigenschap. Voeg ook box-sizing: border-box toe als vergelijking (default vs border-box).
**Kleurgebruik:** Content blauw, padding groen, border geel, margin oranje — duidelijk gelabeld.

### H10-02-css-eenheden-vergelijking.png
**Type:** Vergelijkingstabel
**Beschrijving:** Tabel van CSS-eenheden: px (vast), % (relatief t.o.v. parent), em (relatief t.o.v. eigen element), rem (relatief t.o.v. root), vw/vh (relatief t.o.v. viewport). Per eenheid: voorbeeld + wanneer gebruiken + voordeel/nadeel. Visueel voorbeeld van rem vs px bij grote browsertekstinstelling.
**Kleurgebruik:** Absolute eenheden in rood (beperkt gebruik), relatieve eenheden in groen.

### H10-03-padding-margin-verschil.png
**Type:** Visueel vergelijkingsschema
**Beschrijving:** Twee blokken naast elkaar. Links: padding (witruimte BINNEN het element, achtergrondkleur strekt zich uit). Rechts: margin (witruimte BUITEN het element, transparant/doorzichtig). Duidelijke visuele illustratie van het verschil. Voeg collapsing margins toe als extra (pijlen die tonen dat verticale margins samensmelten).
**Kleurgebruik:** Element met achtergrondkleur, padding in lichtgroen, margin in lichtoranje.

---

## H11 — CSS Selectoren

### H11-01-selectoren-overzicht.png
**Type:** Cheatsheet / Raster
**Beschrijving:** Overzicht van de meest gebruikte CSS-selectoren: element (p), .class, #id, nakomelingsselector (main p), kindselector (ul > li), pseudo-klasse (:hover, :first-child). Per selector: syntax + voorbeeld HTML + wat wordt geselecteerd (gemarkeerd in het HTML-fragment).
**Kleurgebruik:** Selector in paars, geselecteerde elementen gemarkeerd in geel/cyaan.

### H11-02-specificity-punten.png
**Type:** Puntentabel / Scorebord
**Beschrijving:** Specificiteit als een puntensysteem. Tabel met 3 kolommen: ID-selectoren | Class-selectoren | Element-selectoren. Voorbeelden: `h1` = 0,0,1 | `p.update` = 0,1,1 | `#container main p` = 1,0,2. Leg uit welke selector wint met concrete voorbeelden.
**Kleurgebruik:** ID-kolom in goud, class-kolom in zilver, element-kolom in brons.

### H11-03-pseudo-klassen.png
**Type:** Voorbeelden-overzicht
**Beschrijving:** Visueel overzicht van pseudo-klassen: :hover (cursor boven knop), :focus (invoerveld geselecteerd met cursor), :first-child (eerste li in lijst gemarkeerd), :last-child, :nth-child(2n) (om-en-om rijen). Per pseudo-klasse: CSS-code + visueel resultaat.
**Kleurgebruik:** Geselecteerd element in cyaan/neon, niet-geselecteerd in grijs.

---

## H12 — Flexbox

### H12-01-flexbox-assen.png
**Type:** Diagram
**Beschrijving:** Visueel diagram van de Flexbox-assen. Horizontaal geval (flex-direction: row): main axis = horizontal, cross axis = vertical. Pijlen tonen de richtingen. Items staan naast elkaar. Onderaan: alternatief met flex-direction: column (main axis = vertical). Duidelijke labels.
**Kleurgebruik:** Main axis in blauw/cyaan, cross axis in oranje, items in lichtgrijs.

### H12-02-justify-content-align-items.png
**Type:** Visueel cheatsheet
**Beschrijving:** Twee rijen van mini-diagrammen. Rij 1: justify-content varianten (flex-start, center, flex-end, space-between, space-around, space-evenly) — elk als klein rechthoekig schema met gekleurde blokjes. Rij 2: align-items varianten (flex-start, center, flex-end, stretch, baseline). Elke variant gelabeld.
**Kleurgebruik:** Container in donkergrijs, items in cyaan/blauw, labels in wit.

### H12-03-flexbox-navigatie-voorbeeld.png
**Type:** Voorbeeld / Voor-na vergelijking
**Beschrijving:** Toon een navigatiebalk (ul > li > a structuur) voor en na Flexbox. VOOR: items staan verticaal onder elkaar (standaard block). NA: items staan horizontaal naast elkaar (display: flex op ul). Code rechts: de minimale CSS die dit bereikt. Toon ook responsive variant (column op mobiel, row op desktop).
**Kleurgebruik:** Navigatiebalk in donkere achtergrond, links in wit, code in groen.

---

## H13 — CSS Grid

### H13-01-grid-structuur.png
**Type:** Diagram
**Beschrijving:** Visueel diagram van een CSS Grid. Toon grid-lijnen (genummerd 1, 2, 3...), kolommen en rijen, en grid-items die erin geplaatst zijn. Labels: grid-container, grid-item, kolom, rij, gap. Concreet voorbeeld: 3 kolommen × 2 rijen met items.
**Kleurgebruik:** Grid-lijnen in lichtgrijs, items in verschillende pastelkleuren, labels in wit.

### H13-02-fr-eenheid.png
**Type:** Visueel vergelijkingsschema
**Beschrijving:** Toon het verschil tussen vaste kolommen (px) en fr-eenheden. Links: 3 kolommen van 200px — overflow op klein scherm (rood). Rechts: 3 kolommen van 1fr — verdeelt beschikbare ruimte eerlijk (groen). Tweede voorbeeld: 1fr 2fr 1fr — middelste kolom 2× zo breed.
**Kleurgebruik:** px-voorbeeld in rood (problematisch), fr-voorbeeld in groen (goed).

### H13-03-grid-vs-flexbox.png
**Type:** Vergelijkingsdiagram
**Beschrijving:** Twee kolommen naast elkaar. Links: Flexbox (één dimensie — items in een rij OF een kolom, gebruik voor navigatie, knoppen naast elkaar). Rechts: CSS Grid (twee dimensies — items in rijen ÉN kolommen, gebruik voor paginalayout, fotogalerij). Rachel Andrew quote erbij: "Flexbox is for one-dimensional layout. Grid is for two-dimensional layout."
**Kleurgebruik:** Flexbox in blauw, Grid in paars, quote in lichtgrijs cursief.

---

## H14 — Float en Positioning

### H14-01-float-gebruik.png
**Type:** Voorbeeld-illustratie
**Beschrijving:** Toon legitiem gebruik van float: afbeelding (float: left) naast een paragraaf tekst die eromheen loopt. Code erbij. Tweede voorbeeld: blockquote (float: right) in een artikel. Duidelijk label: "Float = tekst om element laten vloeien". Waarschuwing: NIET voor algemene layout.
**Kleurgebruik:** Afbeelding in cyaan kader, tekst in wit, float-richting aangeduid met pijl.

### H14-02-position-waarden.png
**Type:** Visueel cheatsheet
**Beschrijving:** 5 mini-diagrammen voor elke position-waarde: static (normaal, grijs), relative (verschoven ten opzichte van normale positie, blauw), absolute (losgemaakt, relatief t.o.v. gepositioneerde parent, rood), fixed (vast op scherm ook bij scrollen, oranje), sticky (plakt aan top bij scrollen, groen). Elk met code-voorbeeld.
**Kleurgebruik:** Elk type heeft eigen kleur, aangegeven element in fel contrast.

### H14-03-z-index-lagen.png
**Type:** 3D-diagram / Laagmodel
**Beschrijving:** Visuele weergave van z-index als een stapel vellen papier. Element met z-index: 1 onderaan, z-index: 2 daarboven, z-index: 3 bovenop. Toon overlapping van elementen. Code: `position: absolute; z-index: 3;`. Uitleg: z-index werkt alleen op gepositioneerde elementen.
**Kleurgebruik:** Lagen in verschillende transparante kleuren (blauw, groen, rood), labels in wit.

---

## H15 — Responsive Web Design

### H15-01-rwd-breakpoints.png
**Type:** Apparaatdiagram
**Beschrijving:** Drie apparaten naast elkaar (mobiel, tablet, desktop) met de bijbehorende breakpoints. Toon hoe dezelfde pagina er op elk apparaat anders uitziet: mobiel = 1 kolom, tablet = 2 kolommen, desktop = 3 kolommen. Pijlen tonen de breakpoints (min-width: 30em, min-width: 60em).
**Kleurgebruik:** Donkere apparaten, pagina-inhoud in kleur, breakpoints als verticale neonlijnen.

### H15-02-mobile-first-aanpak.png
**Type:** Flowchart / Proces
**Beschrijving:** Toon de mobile-first aanpak als een progressieve stijging. Bodem: basis CSS voor mobiel (geen media queries). Daarboven: @media (min-width: 30em) voor tablet. Bovenaan: @media (min-width: 60em) voor desktop. CSS-code groeit op elk niveau. Vergelijking met desktop-first (omgekeerde richting).
**Kleurgebruik:** Mobiel basis in groen, progressieve media queries in blauw/paars, desktop bovenaan.

### H15-03-viewport-meta-tag.png
**Type:** Vergelijking / Illustratie
**Beschrijving:** Twee smartphones naast elkaar. Links: ZONDER viewport meta tag — de pagina zoomt out tot desktopversie (moeilijk leesbaar). Rechts: MET viewport meta tag — pagina past zich aan aan schermgrootte (leesbaar). De HTML-code van de viewport metatag prominent aanwezig.
**Kleurgebruik:** Zonder = rood kader, met = groen kader, telefoonscherm in grijs.

---

## H16 — Typografie

### H16-01-regellengte-leesbaarheid.png
**Type:** Vergelijkingsdiagram
**Beschrijving:** Drie tekstblokken naast elkaar: te smal (< 45 tekens — oncomfortabel, veel regelwissels), ideaal (60-80 tekens — aangenaam lezen, groen kader), te breed (> 100 tekens — ogen moeten ver springen, rood kader). Visuele meter/schaal eronder.
**Kleurgebruik:** Ideaal in groen, te smal/breed in rood/oranje.

### H16-02-line-height-vergelijking.png
**Type:** Visueel voorbeeld
**Beschrijving:** Drie tekstparagrafen naast elkaar: line-height: 1 (te dicht op elkaar — rood), line-height: 1.5 (ideaal voor leestekst — groen), line-height: 2.5 (te veel ruimte — oranje). CSS-code onder elk blok. Duidelijk leesbaarheidsverschil.
**Kleurgebruik:** Kaders in rood/groen/oranje, tekst in wit op donker.

### H16-03-rem-vs-px-toegankelijkheid.png
**Type:** Vergelijkingsdiagram
**Beschrijving:** Twee browsers naast elkaar. Browserinstelling: grote tekst (20px standaard). Links: font-size in px (18px) — onveranderd, kleine tekst voor gebruiker met slechtere ogen. Rechts: font-size in rem (1.1rem) — schaalt mee naar 22px. Duidelijk voordeel van rem voor toegankelijkheid.
**Kleurgebruik:** px = rood "not accessible", rem = groen "accessible".

---

## H17 — Design Principes (CRAP)

### H17-01-crap-overzicht.png
**Type:** Infographic / Kwadranten
**Beschrijving:** Vier kwadranten in één afbeelding: C = Contrast (twee elementen met sterk contrast), R = Repetition (herhaling van stijlen over pagina), A = Alignment (alles op een denkbeeldige lijn), P = Proximity (gerelateerde elementen dicht bij elkaar). Elk kwadrant heeft een icoon en korte uitleg.
**Kleurgebruik:** Elk kwadrant heeft eigen accent (C=rood, R=blauw, A=groen, P=oranje), donkere achtergrond.

### H17-02-voor-na-crap.png
**Type:** Voor-na vergelijking
**Beschrijving:** Een slecht ontworpen webpagina (links) vs. een goed ontworpen versie (rechts). De slechte versie: inconsistente fonts, slechte uitlijning, gerelateerde elementen ver van elkaar, geen contrast. De goede versie: consistent, uitgelijnde elementen, gerelateerde items dicht bij elkaar, duidelijk contrast. Annotaties aanduiden welk CRAP-principe verbeterd werd.
**Kleurgebruik:** Slechte versie grauw, goede versie kleurrijker en cleaner.

### H17-03-proximity-labels-formulier.png
**Type:** Voorbeeld-illustratie
**Beschrijving:** Formulier voorbeeld. Links: FOUT — label staat ver van het bijbehorende inputveld, verwarrend. Rechts: GOED — label staat direct boven het inputveld, duidelijke relatie. Voeg nog een voorbeeld toe: knop direct naast de actie die hij triggert (Proximity) vs knop ergens anders op de pagina.
**Kleurgebruik:** Fout in rood, goed in groen, pijlen/annotaties in wit.

---

## Oefening-resultaat afbeeldingen (browser-mockups)

Deze afbeeldingen tonen hoe het eindresultaat van een oefening eruitziet in de browser. Stijl: een realistisch browservenster (adresbalk, tabs) met daarin de HTML-output. Dark mode browserstijl, inhoud in lichte kleuren.

---

### H04-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `navigatie.html` toont. Bovenaan een `<header>` met de tekst "Mijn Website" en vier navigatielinks naast elkaar (Home, Producten, Over ons, Wikipedia). Daaronder een `<main>` met een inhoudsopgave (3 ankerlinks: Introductie, Kenmerken, Contact) en drie korte secties met h2-titels en een alineatekst. Onderaan een `<footer>` met een klikbaar e-mailadres (blauw onderstreept). De pagina heeft geen CSS — puur standaard browserstijl.
**Opslaglocatie:** `output/app-ontwikkeling/images/H04-oef2-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, links in standaard blauw.

---

### H05-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `galerij.html` toont. Bovenaan een `<header>` met "Mijn Fotogalerij" als h1. Daaronder vier `<figure>`-blokken verticaal gestapeld (geen CSS), elk met een grijs placeholder-rechthoek (400×300) die een afbeelding vertegenwoordigt, en daaronder een `<figcaption>`-tekst in cursief. De placeholders tonen een icoon van een gebroken afbeelding zoals een browser dat weergeeft als het bestand niet bestaat — dit illustreert het belang van het `alt`-attribuut: de alt-tekst is zichtbaar naast het icoon.
**Opslaglocatie:** `output/app-ontwikkeling/images/H05-oef2-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, placeholder-blokken in lichtgrijs met donkergrijze rand.

---

### H01-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `index.html` toont. De pagina heeft geen CSS — puur standaard browserstijl op witte achtergrond. Bovenaan een `<h1>` met een naam (bv. "Thomas Pieters"). Daaronder twee `<p>` elementen: de eerste met een korte zin over de persoon, de tweede met een zin over favoriete vakken waarbij één vak in cursief staat (via `<em>`).
**Opslaglocatie:** `output/app-ontwikkeling/images/H01-oef1-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, standaard zwarte tekst.

---

### H02-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `profiel.html` toont. Geen CSS, puur standaard browserstijl. Bovenaan een `<h1>` met een naam. Daarna een `<h2>` "Over mij" met twee alinea's (één woord cursief via `<em>`, één woord vet via `<strong>`). Dan een `<h2>` "Mijn favoriete programmeertalen" met een ongeordende lijst van 3 à 4 items. Onderaan een `<footer>` met een copyright-bericht (©-symbool). De standaard browserstijl toont de bolletjes van de lijst en het copyright-symbool.
**Opslaglocatie:** `output/app-ontwikkeling/images/H02-oef1-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, standaard zwarte tekst.

---

### H02-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `stappenplan.html` toont. Geen CSS. Een `<h1>` "Website online zetten" bovenaan. Daaronder een genummerde `<ol>` met 5 à 6 stappen. Bij stap 3 "Schrijf je code" is er een geneste ongeordende `<ul>` met 3 subitems (ingesprongen en met bolletjes, zoals de browser dat standaard weergeeft). Toont duidelijk het verschil in inspringing en symbool tussen de buitenste ol en de binnenste ul.
**Opslaglocatie:** `output/app-ontwikkeling/images/H02-oef2-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, standaard zwarte tekst.

---

### H02-oef3-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `recept.html` toont. Geen CSS. Een `<h1>` met de naam van een gerecht. Daaronder een `<figure>` met een grijs placeholder-blok (afbeelding niet gevonden, gebroken afbeelding icoon) en een `<figcaption>` in cursief met bron-vermelding en copyright-symbool. Dan een `<h2>` "Ingrediënten" met een ongeordende lijst van 5 items (met non-breaking spaces en HTML entities zichtbaar als rendered output, bv. "400 g spaghetti"). Dan een `<h2>` "Bereiding" met een geordende lijst van 5 stappen. Onderaan een `<footer>` met copyright.
**Opslaglocatie:** `output/app-ontwikkeling/images/H02-oef3-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, placeholder-blok in lichtgrijs.

---

### H03-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `blog.html` toont. Geen CSS. Bovenaan een `<header>` met een `<h1>` blogtitel en een `<nav>` met 4 links naast elkaar (standaard browserlinks, blauw onderstreept). In de `<main>`: een `<section>` "Recente posts" met twee `<article>` blokken, elk met een `<header>` (h3-titel + datum), twee alinea's tekst. Rechts naast de main (maar zonder CSS dus gewoon eronder) een `<aside>` "Over mij" met een korte tekst. Onderaan een `<footer>` met copyright. Puur standaard browserstijl, elementen staan verticaal gestapeld.
**Opslaglocatie:** `output/app-ontwikkeling/images/H03-oef2-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, pagina-inhoud op witte achtergrond, links in standaard blauw.

---

### H06-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een uurroostertabel toont. De tabel heeft een `<caption>` "Uurrooster 5ADB" bovenaan. De `<thead>` bevat koppen: Tijdstip | Maandag | Dinsdag (vet, gecentreerd via standaard `<th>` stijl). De `<tbody>` toont 4 tijdstips (8u30, 10u00, 13u00, 14u30) met vakken erin — "Netwerken" en "Databeheer" in de Maandag-kolom staan samengevoegd over 2 rijen (rowspan), "App-ontwikkeling" in Dinsdag ook. De `<tfoot>` toont "Week van 6 oktober 2025" over alle 3 kolommen (colspan). Standaard browsertabelstijl zonder extra CSS.
**Opslaglocatie:** `output/app-ontwikkeling/images/H06-oef1-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, tabel op witte achtergrond, `<th>` cellen vet en gecentreerd.

---

### H06-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een factuuratabel toont. De tabel heeft een `<caption>` "Factuur — TechIT Solutions — november 2025". De `<thead>` heeft 4 kolommen: Product/Dienst | Aantal | Eenheidsprijs | Totaal. De `<tbody>` bevat 4 productrijen met fictieve IT-producten en prijzen. De `<tfoot>` heeft een rij met "Totaal (excl. BTW)" als tekst over 3 kolommen (colspan=3) en het eindbedrag in de laatste kolom. Standaard browsertabelstijl.
**Opslaglocatie:** `output/app-ontwikkeling/images/H06-oef2-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, tabel op witte achtergrond, kopteksten vet.

---

### H07-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een registratieformulier toont voor "SchoolApp". Het formulier heeft vier `<fieldset>` secties met `<legend>`: (1) Persoonlijke gegevens (Voornaam*, Achternaam*, E-mailadres*), (2) Inloggegevens (met instructietekst en Wachtwoord*), (3) Klas* (radio buttons: 5ADB / 6ADB), (4) Favoriete vakken (checkboxes: Netwerken, App-ontwikkeling, Databeheer, E-STEM). Onderaan een asterisk-legenda en een "Registreer" knop. Labels staan boven de inputvelden. Standaard browserstijl.
**Opslaglocatie:** `output/app-ontwikkeling/images/H07-oef1-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, formulier op witte achtergrond, fieldset-kaders zichtbaar.

---

### H07-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een zoekformulier toont voor een bibliotheek. Het formulier heeft: een tekstveld "Zoekterm" met placeholder, een dropdown "Categorie" (Boeken, Tijdschriften, Films, Muziek), een `<fieldset>` "Sortering" met 3 radio buttons (Meest relevant geselecteerd, Nieuwste eerst, Alfabetisch), en een "Zoeken" knop. Labels staan boven/naast de velden. Standaard browserstijl, compact en overzichtelijk.
**Opslaglocatie:** `output/app-ontwikkeling/images/H07-oef2-browser.svg`
**Kleurgebruik:** Browserchroom in donkergrijs, formulier op witte achtergrond.

---

### H08-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een gestylede HTML-pagina toont. De pagina heeft een lichtgrijze achtergrond (`#f5f5f5`). Een `<h1>` "Welkom op mijn pagina" in donkerblauw (`#003087`). Daaronder twee `<p>` elementen: de eerste heeft een gele achtergrond (`#fff9c4`) met een oranje rand — dit is de `.uitgelicht` klasse. De tweede alinea heeft geen speciale stijl. Tekst in donkergrijs, lettertype Arial.
**Opslaglocatie:** `output/app-ontwikkeling/images/H08-oef1-browser.svg`
**Kleurgebruik:** Lichtgrijze pagina-achtergrond, donkerblauwe h1, gele uitgelichte alinea met oranje rand.

---

### H09-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een pagina toont met CSS custom properties. Bovenaan een donkere navigatiebalk (`#1a1a2e`) met witte tekst. De pagina-achtergrond is lichtgrijs (`#f8f9fa`). Titels (`h1`, `h2`) zijn donkerblauw (`#003087`). Alineatekst in donkergrijs. Onderaan een oranje (`#ff6b35`) knop "Primaire knop" met witte tekst en afgeronde hoeken. De pagina illustreert het gebruik van CSS variabelen door de consistente kleuren.
**Opslaglocatie:** `output/app-ontwikkeling/images/H09-oef1-browser.svg`
**Kleurgebruik:** Donkere nav, lichtgrijze achtergrond, donkerblauwe titels, oranje accent-knop.

---

### H09-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een `<header>` hero-sectie toont. De hero neemt ongeveer 40% van de browserhoogte in. De achtergrond is een vloeiende gradiënt van donkerblauw (`#003087`) links naar paars (`#6a0572`) rechts. In het midden staat gecentreerde witte tekst: een grote `<h1>` "Welkom bij TechIT School" en een kleinere `<p>` "Data- en Applicatiebeheer — 5ADB". De rest van de pagina-achtergrond is wit.
**Opslaglocatie:** `output/app-ontwikkeling/images/H09-oef2-browser.svg`
**Kleurgebruik:** Blauw-paarse gradiënt, witte gecentreerde tekst.

---

### H11-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat `oefening-selectoren.html` toont met CSS. Bovenaan een donkere navigatiebalk met witte links, één link heeft een donkergrijze achtergrond (klasse `actief`). In de main: een `<h1>` "Mijn portfolio". Een `<p class="intro">` in grotere, vetgedrukte tekst. Een gewone alinea eronder. Daarna een lijst "Project 1" t/m "Project 4": Project 1 en Project 4 zijn onderstreept (first/last-child), Project 2 en Project 4 hebben een lichtgrijze achtergrond (even nth-child), en bij "Project 3" staat "(nieuw)" in rood en cursief.
**Opslaglocatie:** `output/app-ontwikkeling/images/H11-oef1-browser.svg`
**Kleurgebruik:** Donkere navigatiebalk met witte links, lichtgrijze zebra-achtergrond voor even listitems, rode cursieve span.

---

### H12-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat alleen een navigatiebalk toont. De navigatiebalk heeft een donkere achtergrond (`#1a1a2e`). Links staat "MijnSite" in wit en groter lettertype. Rechts staan vier links naast elkaar: Home, Projecten, Blog, Contact — in lichtgrijs. De links staan horizontaal via Flexbox met `justify-content: space-between` (logo links, links rechts). De rest van de pagina is wit en leeg.
**Opslaglocatie:** `output/app-ontwikkeling/images/H12-oef1-browser.svg`
**Kleurgebruik:** Donkere navigatiebalk (`#1a1a2e`), witte sitenaam, lichtgrijze navigatielinks.

---

### H12-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat drie gelijke kaartjes naast elkaar toont. De kaartjes staan op een witte achtergrond met wat padding rondom. Elk kaartje heeft een lichtgrijze achtergrond (`#f5f5f5`), een dunne grijze rand, afgeronde hoeken en binnenpadding. Elk kaartje heeft een `<h3>` titel (Netwerken / App-ontwikkeling / Databeheer) en een korte beschrijvende alinea. De drie kaartjes zijn gelijk breed (via `flex: 1`) met ruimte (`gap: 1.5rem`) ertussen.
**Opslaglocatie:** `output/app-ontwikkeling/images/H12-oef2-browser.svg`
**Kleurgebruik:** Witte achtergrond, lichtgrijze kaartjes met grijze randen, zwarte tekst.

---

### H13-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een fotogalerij toont op een donkere achtergrond (`#111`) met witte tekst. Bovenaan een `<h1>` "Mijn fotogalerij" in wit. Daaronder een responsief grid van 6 foto's (placeholder-afbeeldingen van picsum.photos): 3 kolommen op een brede browser, met gelijke gap (`1rem`) ertussen. Elke foto vult zijn cel volledig (object-fit: cover), vaste hoogte van 180px, afgeronde hoeken.
**Opslaglocatie:** `output/app-ontwikkeling/images/H13-oef1-browser.svg`
**Kleurgebruik:** Donkere achtergrond (`#111`), witte h1, kleurrijke placeholder-foto's in het grid.

---

### H14-oef1-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat een artikel toont met een gefloate afbeelding. De pagina heeft een maximumbreedte en Georgia-lettertype. Bovenaan een `<h1>` "De natuur in de lente". Daaronder een `<p>` met links daaraan een afbeelding (200×150px, afgeronde hoeken) die naar links zweeft — de tekst van de alinea vloeit rechts naast de afbeelding. Onder deze eerste alinea staat een tweede alinea die gewoon volle breedte inneemt (onder de afbeelding). Toont duidelijk het float-effect: tekst loopt om de afbeelding heen.
**Opslaglocatie:** `output/app-ontwikkeling/images/H14-oef1-browser.svg`
**Kleurgebruik:** Witte achtergrond, Georgia-tekst in zwart, kleurrijke placeholder-afbeelding links.

---

### H14-oef2-browser.svg
**Type:** Browser-mockup
**Beschrijving:** Een browservenster dat twee productenkaartjes naast elkaar toont (via Flexbox op body). Elk kaartje is 200px breed, heeft een grijze rand en afgeronde hoeken. Het eerste kaartje heeft een afbeelding bovenaan (140px hoog, object-fit: cover) met in de rechterbovenhoek een rode badge "Nieuw" (rode achtergrond, witte tekst, afgeronde pill-vorm). Daarna de productnaam "Laptop Stand Pro" en prijs "€ 29,99". Het tweede kaartje (USB-C Hub, € 49,99) heeft geen badge. Toont duidelijk het position: absolute effect voor de badge.
**Opslaglocatie:** `output/app-ontwikkeling/images/H14-oef2-browser.svg`
**Kleurgebruik:** Witte achtergrond, lichtgrijze kaartranden, rode badge met witte tekst.

---

## Prioriteitsvolgorde

Maak de afbeeldingen in deze volgorde (meest gebruikt in cursus eerste):

1. H01-02 (block vs inline)
2. H03-01 (semantische structuur pagina)
3. H08-01 (CSS regel anatomie)
4. H10-01 (box model diagram)
5. H12-01 (flexbox assen)
6. H12-02 (justify-content / align-items)
7. H15-01 (RWD breakpoints)
8. H08-03 (specificiteit Star Wars)
9. H13-01 (grid structuur)
10. Overige afbeeldingen

**Totaal: 51 afbeeldingen** (3 per hoofdstuk × 17 hoofdstukken)

Lever elke afbeelding op als beschreven in de briefing. Bij twijfel: educatieve duidelijkheid primeert boven visuele spectaculaire effecten.
