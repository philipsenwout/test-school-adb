# Graphic Designer Briefing — 6ADB App-ontwikkeling

**Stijlreferentie:** polygon.technology — donkere tinten, felle accenten, technische uitstraling  
**Formaat:** SVG met transparante achtergrond  
**Kleurenpalet 6ADB JavaScript:**
- Primair: `#6c63ff` (paars-blauw)
- Accent: `#ff6b6b` (koraalrood)
- Groen/succes: `#43e97b`
- Oranje/waarschuwing: `#f9a825`
- Achtergrond kaarten: `#1a1a2e` (donker) / `#f0f0f8` (licht)
- Receptenapp categoriekleuren: voorgerecht `#e74c3c`, hoofdgerecht `#3498db`, dessert `#9b59b6`, snack `#f39c12`

**Stijl:** Educatief maar modern. Gebruik icoontjes, pijlen, kleurvlakken. Geen stock-foto's. Vlakke illustraties met subtiele schaduwen.

---

## H01 — Arrays

### 6adb-H01-afb1.svg
**Beschrijving:** Visualisatie van een array als rij van genummerde vakjes (index 0 t.e.m. 4), met pijlen naar de waarden. Elke cel heeft een index-label (0, 1, 2...) bovenaan in klein grijs, en de waarde groot in het midden. Variabelenaam `mijnArray` links met een pijl naar de rij.

### 6adb-H01-afb2.svg
**Beschrijving:** Schema van push/pop (rechterkant) vs shift/unshift (linkerkant) met vóór/na-situatie. Twee rijen: VOOR en NA. Groene pijlen voor toevoegen, rode pijlen voor verwijderen. Labels push, pop, unshift, shift duidelijk benoemd.

### 6adb-H01-oef1-browser.svg
**Beschrijving:** Browser console mockup. DevTools-console open, output van de boodschappenlijst-oefening. Regels zoals `> mijnLijst`, `['Melk', 'Brood', 'Appels', 'Kaas']`, `> mijnLijst.length`, `4`. Donkere consolestijl.

---

## H02 — Objecten

### 6adb-H02-afb1.svg
**Beschrijving:** Object als "doos met lades". Een 3D-achtige kast/doos met 4 lades. Elke lade heeft een label (naam, leeftijd, stad, isStudent) en inhoud rechts (Jana, 17, Hasselt, true). Paars/blauw kleurschema.

### 6adb-H02-afb2.svg
**Beschrijving:** Dot notation vs bracket notation vergeleken. Twee kolommen naast elkaar. Links: `persoon.naam` in groene code. Rechts: `persoon['naam']` in blauwe code. Pijlen wijzen naar hetzelfde resultaat: `"Jana"`. Label "Gebruik dot notation tenzij..." onderaan.

### 6adb-H02-afb3.svg
**Beschrijving:** Array van objecten: rij van 3 identieke dozen (objecten) naast elkaar, elk met dezelfde lades (naam, bereidingstijd) maar andere waarden. Index [0], [1], [2] boven elke doos.

### 6adb-H02-oef1-browser.svg
**Beschrijving:** Browser console met output van de boeken-oefening. Toont een uitgevouwen object: `{ titel: "Harry Potter", auteur: "J.K. Rowling", paginas: 309, isGelezen: true }`. DevTools-stijl met blauw pijltje naast object.

---

## H03 — Template Literals

### 6adb-H03-afb1.svg
**Beschrijving:** Vergelijking van string concatenatie met `+` (links, rood kruis) vs template literal met backticks (rechts, groen vinkje). Links: `"Hallo " + naam + "!"` — rommelig. Rechts: `` `Hallo ${naam}!` `` — overzichtelijk. Zelfde resultaat onderaan: `"Hallo Jana!"`.

### 6adb-H03-afb2.svg
**Beschrijving:** Overzichtskaart van de 8 belangrijkste string methodes. Kaart-formaat (zoals een spiekbriefje). Per methode: naam in vetgedrukte code + kort voorbeeld + resultaat. Methodes: length, toUpperCase, toLowerCase, includes, slice, trim, padStart, split.

### 6adb-H03-oef1-browser.svg
**Beschrijving:** Browser-pagina met de output van de naamkaartje-generator. Een gestyled kader met: naam groot bovenaan, gebruikersnaam klein in grijs, hobby en woonplaats in twee kolommen. Moderne kaart-stijl.

---

## H04 — DOM Manipulatie

### 6adb-H04-afb1.svg
**Beschrijving:** Boomdiagram van het DOM. Bovenaan `document`, dan `html`, dan twee takken: `head` (met `title`, `meta`) en `body` (met `header`, `main`, `footer`). `main` heeft een `ul` met drie `li`-kinderen. Verbindingen als dunne lijnen. Elk element in een afgerond rechthoekje, kleurgecodeerd per niveau.

### 6adb-H04-afb2.svg
**Beschrijving:** Vergelijking textContent (links, veilig) vs innerHTML (rechts, gevaarlijk). Links: groen kader, invoer `<b>Tekst</b>`, resultaat "**<b>Tekst</b>**" (letterlijk). Rechts: oranje kader, zelfde invoer maar resultaat "**Tekst**" (vet). Waarschuwingsicoon bij innerHTML: "Pas op voor XSS!".

### 6adb-H04-afb3.svg
**Beschrijving:** Schema van insertAdjacentHTML posities. Een `div`-element in het midden. Vier labels met pijlen: `beforebegin` (vóór de div), `afterbegin` (begin van de inhoud), `beforeend` (einde van de inhoud), `afterend` (na de div). Kleurvlakken voor elke positie.

### 6adb-H04-oef1-browser.svg
**Beschrijving:** Browser mockup van de to-do app. Inputveld met placeholder "Nieuwe taak..." en knop "Voeg toe". Eronder een lijst van 3 taken: "HTML bestuderen" (afgevinkt, doorstreept), "CSS oefenen" (niet afgevinkt), "JavaScript schrijven" (niet afgevinkt). Elke taak heeft een rood prullenbak-icoon rechts.

---

## H05 — Events

### 6adb-H05-afb1.svg
**Beschrijving:** Event bubbling diagram. Een geneste HTML-structuur: `document > body > div > button`. De knop wordt geklikt (sterpje/klik-icoon). Pijlen gaan omhoog van button → div → body → document. Label: "Event bubbling". Kleurverloop van donker (button) naar licht (document).

### 6adb-H05-afb2.svg
**Beschrijving:** Schema van `addEventListener`. Drie blokken verbonden met pijlen: [Element] → ['click'] → [callback functie]. Elk blok heeft een label en codevoorbeeld. Onderaan: het resultaat in de browser.

### 6adb-H05-oef1-browser.svg
**Beschrijving:** Browser mockup van de kleurkiezer. Rij van 6 gekleurde ronde knoppen (rood, blauw, groen, geel, paars, oranje). Grote rechthoek eronder die de gekozen kleur toont (bv. blauw). Label "Huidige kleur: #3498db". Onderaan een klein tekstvak met "Je drukte op: A".

---

## H06 — Array Methodes

### 6adb-H06-afb1.svg
**Beschrijving:** Vergelijking forEach, map, filter naast elkaar. Drie kolommen. Zelfde input-array bovenaan `[2, 4, 6, 8]`. forEach: output = "console log, geen return". map: output = `[4, 8, 12, 16]` (×2). filter: output = `[4, 8]` (alleen > 5). Kleurcodering per kolom.

### 6adb-H06-afb2.svg
**Beschrijving:** Visueel schema van method chaining. Array `[1,2,3,4,5,6]` links. Pijl naar `.filter(n => n > 2)` → `[3,4,5,6]`. Pijl naar `.map(n => n * 10)` → `[30,40,50,60]`. Pijl naar resultaat. Elke stap in een apart gekleurd blok.

### 6adb-H06-oef1-browser.svg
**Beschrijving:** Browser console met output van de studenten-oefening. Toont: `Geslaagde studenten: ['Jana', 'Pieter', 'Emma']`, `Gemiddelde: 72`, `Hoogste score: { naam: 'Emma', punten: 91 }`.

---

## H07 — ES Modules

### 6adb-H07-afb1.svg
**Beschrijving:** Diagram van een modulair project. Drie bestanden als rechthoekige blokken: `data.js` (blauw), `hulpfuncties.js` (groen), `script.js` (paars). Pijlen van data.js en hulpfuncties.js → naar script.js. Boven de pijlen: `export` en `import`. Bestandspictogrammen naast de namen.

### 6adb-H07-afb2.svg
**Beschrijving:** Vergelijking named export vs default export. Twee kolommen. Links (named): `export const x` en `import { x }` — accolades gemarkeerd in geel. Rechts (default): `export default x` en `import x` — geen accolades, naam vrij te kiezen.

### 6adb-H07-oef1-browser.svg
**Beschrijving:** Browser console met output van de modulaire rekenmachine. Twee getallen: 12 en 4. Vijf regels output: `Optelling: 16`, `Aftrekking: 8`, `Vermenigvuldiging: 48`, `Deling: 3`, `Gemiddelde: 8`.

---

## H08 — localStorage & JSON

### 6adb-H08-afb1.svg
**Beschrijving:** Vergelijking drie kolommen: localStorage, sessionStorage, cookies. Elke kolom heeft een icoon (persistentie-icoon), levensduur, capaciteit en gebruik. localStorage: groen vinkje "Blijft na sluiten". sessionStorage: oranje "Weg na sluiten tab". Cookies: rood "Maximaal 4KB".

### 6adb-H08-afb2.svg
**Beschrijving:** Workflow-diagram links naar rechts. Stap 1: JavaScript array (code). Stap 2: `JSON.stringify()` (omzetting). Stap 3: String in localStorage (opslag als tekst). Stap 4: `localStorage.getItem()`. Stap 5: `JSON.parse()`. Stap 6: JavaScript array (terug). Pijlen verbinden elke stap.

### 6adb-H08-afb3.svg
**Beschrijving:** Browser mockup met DevTools Application-tab. Links de navigatiestructuur (Application > Storage > Local Storage > localhost). Rechts een tabel met twee kolommen: Key en Value. Rij: `opgeslagenRecepten` | `[{"naam":"Pasta",...}]`. Waarde ingekort met "...".

### 6adb-H08-oef1-browser.svg
**Beschrijving:** Browser mockup van de favorieten-opslager. Bovenaan: inputveld met "Typ een favoriet..." en groene knop "Opslaan". Eronder een ul met 3 favorieten als groene lijstitems. Onderaan rode knop "Wis alles".

---

## H09 — Receptenapp: Projectopzet

### 6adb-H09-afb1.svg
**Beschrijving:** Wireframe van de receptenapp index-pagina. Header met logo links en nav rechts. H1 "Mijn Recepten". Zoekbalk. Rij van 4 checkboxes (voorgerecht, hoofdgerecht, dessert, snack) in de bijhorende kleur. Grid van 3×2 receptkaarten. Statistieken-sectie onderaan. Footer met klok.

### 6adb-H09-afb2.svg
**Beschrijving:** Wireframe van de add-pagina. Zelfde header. H1, H2 "Voeg recept toe". Formulier met 4 gelabelde velden: Naam (text), Beschrijving (textarea), Categorie (select), Bereidingstijd (number + "min"). Drie knoppen: "Voeg toe" (groen), "Willekeurig basisrecept" (blauw), "Verwijder alles" (rood). Feedbackvak.

### 6adb-H09-afb3.svg
**Beschrijving:** Bestandsstructuurdiagram. Mappenstructuur als boom: receptenapp/ met 7 bestanden. Pijlen: `recepten.js` → `add.js` (import basisRecepten), `hulpfuncties.js` → `script.js` en `add.js` (import updateLS). `index.html` → `script.js`, `add.html` → `add.js`. Gekleurde bestandsicoontjes.

### 6adb-H09-oef1-browser.svg
**Beschrijving:** Browser met DevTools open op Application-tab. localStorage-tabel toont `opgeslagenRecepten` met een JSON-array van 2 recepten. De JSON-waarde is gedeeltelijk zichtbaar.

---

## H10 — Receptenapp: Weergeven

### 6adb-H10-afb1.svg
**Beschrijving:** Schema van de voegReceptToe() functie. Links: invoer = receptobject (naam, beschrijving, categorie, bereidingstijd). Midden: functie-blok met stappen: createElement → innerHTML → classList.add → deleteKnop aanmaken → appendChild. Rechts: uitvoer = article-element in het DOM (kaart-preview).

### 6adb-H10-afb2.svg
**Beschrijving:** Mockup van een receptkaart. Afgeronde kaart met gekleurde linkerrand (blauw voor hoofdgerecht). Titel "Spaghetti carbonara" als h2. Beschrijving als kleine paragraaf. Meta-rij onderaan: categorielabel + "25 min". Prullenbak-icoon rechtsboven. Lichte achtergrond, subtiele schaduw.

### 6adb-H10-oef1-browser.svg
**Beschrijving:** Browser met 3 receptkaarten in een grid (2 kolommen). Elke kaart heeft een andere kleur linkerrand: rood (voorgerecht), blauw (hoofdgerecht), paars (dessert). Cards zien er netjes uit met naam, beschrijving en meta-info.

---

## H11 — Receptenapp: Formulier

### 6adb-H11-afb1.svg
**Beschrijving:** Stroomdiagram van de formulier-submit flow. Start: "Gebruiker klikt Submit". Stap 1: `e.preventDefault()`. Stap 2: `voegToe()`. Stap 3: Validatie (3 checks, diamant-vormen): Alle velden ingevuld? → Naam uniek? → Bereidingstijd positief? Succes-pad: `push` → `updateLS` → Succes-melding. Fout-paden: rode pijlen naar foutmelding.

### 6adb-H11-afb2.svg
**Beschrijving:** Browser mockup van het formulier na succesvolle submit. Groene melding bovenaan: "✓ Recept 'Lasagne' is toegevoegd!". Formulier eronder is leeg (reset). Mooie form-stijl met afgeronde velden.

### 6adb-H11-oef1-browser.svg
**Beschrijving:** Formulier mockup met live tekenteller. Beschrijving-veld heeft "42 / min. 10 tekens" als kleine teller eronder. Een rood foutbericht: "Naam moet minstens 3 tekens bevatten." Rode rand rondom het naam-veld.

---

## H12 — Receptenapp: localStorage & Custom Events

### 6adb-H12-afb1.svg
**Beschrijving:** SVG delete-knop aanmaken: stap-voor-stap schema. 4 stappen naast elkaar: (1) `createElementNS` met namespace-URL, (2) `setAttribute('viewBox', ...)`, (3) `innerHTML` met SVG paths, (4) `insertAdjacentElement('afterbegin', ...)`. Elke stap in een blok met code-snippets en resultaat.

### 6adb-H12-afb2.svg
**Beschrijving:** Animatie-achtig schema van array-verwijdering. Rij van 3 receptkaarten: Pasta [0], Soep [1], Salade [2]. `findIndex(r => r.naam === 'Soep')` → index 1 gemarkeerd. `splice(1, 1)` → Soep-kaart verdwijnt (rood gekleurd/doorstreept). Resultaat: Pasta [0], Salade [1].

### 6adb-H12-afb3.svg
**Beschrijving:** DevTools Application-tab mockup. localStorage-tabel met key `opgeslagenRecepten` en een JSON-array van 2 recepten na verwijdering. Vergeleken met "vóór" (3 recepten) en "na" (2 recepten) in twee screenshots naast elkaar.

### 6adb-H12-oef1-browser.svg
**Beschrijving:** Browser met `confirm()` dialoogvenster. Tekst: "Ben je zeker dat je 'Pasta carbonara' wil verwijderen?" Twee knoppen: Annuleren en OK. Achtergrond: de receptenapp, licht vervaagd.

---

## H13 — Filteren op categorie

### 6adb-H13-afb1.svg
**Beschrijving:** Mockup van de filterzone. Vier checkboxes in een rij, elk in de kleur van de categorie: ☑ Voorgerecht (rood), ☑ Hoofdgerecht (blauw), ☐ Dessert (paars, uitgevinkt), ☑ Snack (oranje). Duidelijke labels. Kaarten eronder: enkel voorgerecht en hoofdgerecht zichtbaar.

### 6adb-H13-afb2.svg
**Beschrijving:** Flowdiagram van de filterlogica. Start: "checkbox change". Pijl → `maakCategoriesLijst()` → array `['voorgerecht', 'hoofdgerecht']`. Pijl → `dispatchEvent(update)` → `toonRecepten()` → forEach met filter → DOM rebuild. Elke stap in een gekleurd blok.

### 6adb-H13-oef1-browser.svg
**Beschrijving:** Browser mockup. Filterzone bovenaan: "Hoofdgerecht" en "Dessert" aangevinkt, rest uitgevinkt. Grid eronder toont enkel 2 kaarten: één blauw (hoofdgerecht) en één paars (dessert).

---

## H14 — Zoekfunctie

### 6adb-H14-afb1.svg
**Beschrijving:** Wireframe van de zoekzone. Zoekveld met vergrootglas-icoon, placeholder "Zoek een recept...". Eronder klein: "Aantal tekens: 5". Recepten eronder gefilterd: 2 kaarten zichtbaar, 3 kaarten "vervaagd" (niet gevonden).

### 6adb-H14-afb2.svg
**Beschrijving:** Stroomdiagram gecombineerde filter + zoeklogica. Input: zoekterm (string) + aangevinkte categorieën (array). Centrale functie: `toonRecepten()`. Twee conditie-checks: (1) naam/beschrijving bevat zoekterm? (2) categorie in geselecteerde lijst? Alleen bij beide JA → `voegReceptToe()`.

### 6adb-H14-oef1-browser.svg
**Beschrijving:** Browser met zoekterm "pasta" ingetypt (5 tekens, teller toont "5"). Recepten: "Spaghetti carbonara" en "Pastasalade" zichtbaar, andere recepten verborgen. Checkboxes: alle aangevinkt.

---

## H15 — Verwijderen uitdieping

### 6adb-H15-afb1.svg
**Beschrijving:** Browser confirm-dialoog. Tekst: "Ben je zeker dat je 'Spaghetti carbonara' wil verwijderen?" Knoppen: Annuleren (grijs) en OK (rood). Achtergrond: recepten-app vervaagd.

### 6adb-H15-afb2.svg
**Beschrijving:** Schema van filter() voor categorie-verwijdering. Links: array van 5 recepten (voorgerecht rood, 2× hoofdgerecht blauw, dessert paars, snack oranje). `.filter(r => r.categorie !== 'dessert')`. Rechts: array van 4 recepten, dessert ontbreekt. Pijl met filter-icoon ertussen.

### 6adb-H15-oef1-browser.svg
**Beschrijving:** Browser mockup met herstel-melding. Bovenaan een gele/oranje banner: `"Tiramisu" verwijderd — [Herstellen]`. De knop "Herstellen" is een link-stijl knop. Recepten eronder, Tiramisu ontbreekt. Teller: "5 seconden om te herstellen".

---

## H16 — Statistieken & Afwerking

### 6adb-H16-afb1.svg
**Beschrijving:** Statistieken-sectie mockup. Drie lijstitems met iconen: 🍽️ "Totaal: 6 recepten", ⚡ "Snelste: 'Omelet' (10 min)", ⏱️ "Gemiddeld: 28 min". Lichte kaart-stijl met subtiele achtergrond.

### 6adb-H16-afb2.svg
**Beschrijving:** Afgewerkte footer. Donkere achtergrond. Links: "© 2025 — Receptenapp". Rechts: "donderdag 3 april 2025 — 14:32:07" met een klok-icoon. De seconden zijn vetgedrukt want die tikken.

### 6adb-H16-oef1-browser.svg
**Beschrijving:** Volledige receptenapp in de browser, afgewerkt. Header met logo + nav. "Recept van de dag: Spaghetti carbonara" in een uitgelichte kaart bovenaan. Zoekbalk. Checkboxes in 4 kleuren. Grid van 4 receptkaarten. Statistieken-sectie. Live footer met datum en klok.

---

*Briefing 6ADB App-ontwikkeling — Graphic Designer*  
*Alle SVG-bestanden bewaren in: `output/app-ontwikkeling/images/` met de prefix `6adb-`*
