
# Connected Website System: Draft Orders & Buyer Journey

## Zusammenfassung

Basierend auf dem LinkedIn-Artikel bauen wir ein zusammenhangendes Website-System, das Besucher von "Ich bin neugierig" zu "Ich bin bereit zu kaufen" führt. Das Kernthema ist das **Draft Order System von Shopify** - die technische Grundlage, die LiveDealz von manuellen Prozessen unterscheidet.

---

## Buyer Journey Architektur

```text
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   AWARENESS     │ -> │  CONSIDERATION  │ -> │    DECISION     │ -> │   CONVERSION    │
│                 │    │                 │    │                 │    │                 │
│ - Blog Posts    │    │ - Feature Pages │    │ - Vergleiche    │    │ - Pricing       │
│ - Use Case      │    │ - How it Works  │    │ - Case Studies  │    │ - Demo Booking  │
│   Landing Pages │    │ - Integrations  │    │ - Testimonials  │    │ - Free Trial    │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## Phase 1: Kernseiten (Consideration)

### 1.1 Feature-Seite: "Wie Draft Orders funktionieren"

**Route:** `/:lang/features/draft-orders`

**Zweck:** Erklärt das Herzstuck von LiveDealz - wie Shopify Draft Orders die Reservierungslogik ermoglichen.

**Inhalte:**
- Was sind Draft Orders in Shopify?
- Wie LiveDealz diese nutzt (atomare Reservierung)
- Schritt-fur-Schritt-Ablauf mit Grafiken
- Automatische Bestandsfreigabe bei Nichtzahlung
- Vergleich: Manuelle Prozesse vs. Draft Orders

**Verknüpfungen:**
- Link zur Shopify-Integration-Seite
- CTA: "Demo buchen" / "Jetzt testen"
- Weiter zu: Preise, Use Cases

### 1.2 Feature-Seite: "Shopify Integration"

**Route:** `/:lang/features/shopify-integration`

**Zweck:** Zeigt die nahtlose Integration ohne Stoerung bestehender Systeme.

**Inhalte:**
- Native Shopify-Integration (keine Drittanbieter)
- Synchronisation mit bestehendem Bestand
- Parallelbetrieb: Onlineshop + Livestream
- ERP-Kompatibilitoet
- Technische Vorteile (Webhooks, Echtzeit-Sync)

### 1.3 Feature-Seite: "Barcode Scanning"

**Route:** `/:lang/features/barcode-scanning`

**Zweck:** Zeigt die einfache Bedienung wahrend des Streams.

**Inhalte:**
- Smartphone-basiertes Scanning
- Kundennummer + Produkt-Scan = Reservierung
- Live-Demo-Video
- Unterstuetzte Barcode-Formate

---

## Phase 2: Use-Case Landing Pages (Awareness)

### 2.1 TikTok/Instagram Live Seller

**Route:** `/:lang/use-cases/tiktok-instagram-live`

**Zweck:** Rollenbasierte Seite fuer die groesste Zielgruppe.

**Inhalte:**
- Hero: "Verkaufe live auf TikTok & Instagram - ohne Chaos"
- Problem: Kommentar-Chaos, manuelle Zuordnung
- Loesung: LiveDealz Dashboard waehrend Stream
- Workflow: Stream -> Kundennummer -> Scan -> Reservierung
- Testimonial von Live-Sellern
- CTA: Demo buchen

### 2.2 WhatsApp Story Haendler

**Route:** `/:lang/use-cases/whatsapp-story`

**Zweck:** Seite fuer WhatsApp-basierte Verkoeufer.

**Inhalte:**
- Produkte in Stories zeigen
- "Ich will" Antworten verarbeiten
- Sammelaktionen ueber mehrere Tage
- Checkout-Links am Ende versenden

### 2.3 Community Sammelaktionen

**Route:** `/:lang/use-cases/community-campaigns`

**Zweck:** Discord, Telegram, WhatsApp-Gruppen.

**Inhalte:**
- Multi-Tag-Sammelperioden
- Aggregation aller Reservierungen
- Batch-Checkout am Ende
- Ideal fuer Limited Drops, Vorbestellungen

---

## Phase 3: Vergleichsseiten (Decision)

### 3.1 LiveDealz vs. Manuelle Prozesse

**Route:** `/:lang/compare/manual-processes`

**Zweck:** Behandelt Einwaende und zeigt konkreten Mehrwert.

**Aufbau:**
```text
┌────────────────────────┬────────────────────────┐
│   MANUELLER PROZESS    │      LIVEDEALZ         │
├────────────────────────┼────────────────────────┤
│ Excel-Tabellen         │ Automatische Zuordnung │
│ WhatsApp-Screenshots   │ Kundennummern-System   │
│ Doppelverkäufe         │ Atomare Reservierung   │
│ Stundenlange Nacharbeit│ Sofortige Draft Orders │
│ Nichtzahler blockieren │ Auto-Freigabe          │
└────────────────────────┴────────────────────────┘
```

**Inhalte:**
- Feature-fuer-Feature Vergleichstabelle
- Zeitersparnis-Kalkulator (optional)
- "Wir waren dort" - Origin Story Link
- CTA: "Schluss mit dem Chaos - Demo buchen"

### 3.2 Warum Shopify?

**Route:** `/:lang/compare/why-shopify`

**Zweck:** Erkloert die strategische Entscheidung fuer Shopify.

**Inhalte:**
- Breiteste ERP-Integration
- Native Mobile App
- Zukunftssicher und skalierbar
- Keine Vendor-Lock-In-Risiken

---

## Phase 4: Case Studies / Testimonials (Decision)

### 4.1 Success Stories Seite

**Route:** `/:lang/success-stories`

**Zweck:** Soziale Beweise, echte Ergebnisse.

**Aufbau pro Case Study:**
- Haendler-Profil (Name, Branche, Groesse)
- Ausgangssituation (Probleme vor LiveDealz)
- Loesung (wie LiveDealz geholfen hat)
- Ergebnisse (Zeitersparnis, Umsatzsteigerung)
- Zitat des Haendlers

**Erste Case Study:** LSQ24 (bereits als Origin Story vorhanden)

---

## Technische Umsetzung

### Neue Dateien

```text
src/pages/
├── features/
│   ├── DraftOrders.tsx
│   ├── ShopifyIntegration.tsx
│   └── BarcodeScanning.tsx
├── use-cases/
│   ├── TikTokInstagramLive.tsx
│   ├── WhatsAppStory.tsx
│   └── CommunityCampaigns.tsx
├── compare/
│   ├── ManualProcesses.tsx
│   └── WhyShopify.tsx
└── SuccessStories.tsx
```

### Routing Updates (App.tsx)

```text
/:lang/features/draft-orders
/:lang/features/shopify-integration
/:lang/features/barcode-scanning
/:lang/use-cases/tiktok-instagram-live
/:lang/use-cases/whatsapp-story
/:lang/use-cases/community-campaigns
/:lang/compare/manual-processes
/:lang/compare/why-shopify
/:lang/success-stories
```

### Navigation Updates

Dropdown-Menu in der Navbar:
- Funktionen (Dropdown)
  - Draft Orders
  - Shopify Integration
  - Barcode Scanning
- Anwendungsfaelle (Dropdown)
  - TikTok/Instagram Live
  - WhatsApp Stories
  - Community Sammelaktionen
  - B2B Wholesale
- Vergleich
- Erfolgsgeschichten

### Wiederverwendbare Komponenten

```text
src/components/
├── PageHero.tsx          (konsistenter Hero fuer alle Seiten)
├── ComparisonTable.tsx   (Vergleichstabellen)
├── FeatureCard.tsx       (Feature-Karten)
├── StepByStep.tsx        (Workflow-Darstellung)
├── TestimonialCard.tsx   (Testimonial-Komponente)
└── CTABanner.tsx         (konsistente Call-to-Actions)
```

### Uebersetzungen

Erweiterung von `LanguageContext.tsx` mit allen neuen Seiteninhalten (DE, EN, NO).

---

## Priorisierte Reihenfolge

| Priorität | Seite | Grund |
|-----------|-------|-------|
| 1 | Draft Orders Feature | Kernthema, differenziert von Wettbewerbern |
| 2 | LiveDealz vs. Manuell | Behandelt Haupteinwoende |
| 3 | TikTok/Instagram Live | Groesste Zielgruppe |
| 4 | WhatsApp Story | Zweite Kernzielgruppe |
| 5 | Shopify Integration | Technische Glaubwuerdigkeit |
| 6 | Success Stories | Soziale Beweise |
| 7 | Restliche Seiten | Vollstaendigkeit |

---

## Verknuepfungsmatrix

Jede Seite verlinkt strategisch zu anderen Seiten:

| Von Seite | Verlinkt zu |
|-----------|-------------|
| Draft Orders | Shopify Integration, Preise, Demo |
| Vergleich | Draft Orders, Success Stories, Preise |
| Use Case Pages | Features, Vergleich, Preise |
| Success Stories | Features, Demo buchen |
| Preise | Features, Demo, FAQ |

---

## Zusammenfassung der Vorteile

- Konsistente Messaging ueber alle Seiten
- Klare Buyer Journey von Awareness zu Conversion
- Kernthema "Draft Orders" wird prominent erklaert
- Rollenbasierte Seiten fuer verschiedene Zielgruppen
- Vergleichsseiten behandeln Einwaende proaktiv
- Wiederverwendbare Komponenten fuer schnelle Entwicklung
- Vollstaendige Mehrsprachigkeit (DE, EN, NO)
