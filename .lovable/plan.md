
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

## Status: In Arbeit

### ✅ Erledigt
- [x] Wiederverwendbare Komponenten erstellt (PageHero, CTABanner, StepByStep, ComparisonTable, FeatureCard)
- [x] Draft Orders Feature-Seite (`/:lang/features/draft-orders`)
- [x] Routing in App.tsx aktualisiert
- [x] Navbar mit Dropdown-Menü für Features
- [x] Übersetzungen für DE, EN, NO

### 🔄 Nächste Schritte (Priorität)
- [ ] Vergleichsseite: LiveDealz vs. Manuelle Prozesse (`/:lang/compare/manual-processes`)
- [ ] Use-Case: TikTok/Instagram Live (`/:lang/use-cases/tiktok-instagram-live`)
- [ ] Use-Case: WhatsApp Story (`/:lang/use-cases/whatsapp-story`)
- [ ] Feature: Shopify Integration (`/:lang/features/shopify-integration`)
- [ ] Success Stories (`/:lang/success-stories`)

---

## Phase 1: Kernseiten (Consideration)

### 1.1 Feature-Seite: "Wie Draft Orders funktionieren" ✅

**Route:** `/:lang/features/draft-orders`

**Zweck:** Erklärt das Herzstuck von LiveDealz - wie Shopify Draft Orders die Reservierungslogik ermoglichen.

**Inhalte:**
- Was sind Draft Orders in Shopify?
- Wie LiveDealz diese nutzt (atomare Reservierung)
- Schritt-fur-Schritt-Ablauf mit Grafiken
- Automatische Bestandsfreigabe bei Nichtzahlung
- Vergleich: Manuelle Prozesse vs. Draft Orders

### 1.2 Feature-Seite: "Shopify Integration"

**Route:** `/:lang/features/shopify-integration`

**Zweck:** Zeigt die nahtlose Integration ohne Stoerung bestehender Systeme.

### 1.3 Feature-Seite: "Barcode Scanning"

**Route:** `/:lang/features/barcode-scanning`

**Zweck:** Zeigt die einfache Bedienung wahrend des Streams.

---

## Phase 2: Use-Case Landing Pages (Awareness)

### 2.1 TikTok/Instagram Live Seller

**Route:** `/:lang/use-cases/tiktok-instagram-live`

### 2.2 WhatsApp Story Haendler

**Route:** `/:lang/use-cases/whatsapp-story`

### 2.3 Community Sammelaktionen

**Route:** `/:lang/use-cases/community-campaigns`

---

## Phase 3: Vergleichsseiten (Decision)

### 3.1 LiveDealz vs. Manuelle Prozesse

**Route:** `/:lang/compare/manual-processes`

### 3.2 Warum Shopify?

**Route:** `/:lang/compare/why-shopify`

---

## Phase 4: Case Studies / Testimonials (Decision)

### 4.1 Success Stories Seite

**Route:** `/:lang/success-stories`

---

## Technische Umsetzung

### Erstellte Dateien

```text
src/components/
├── PageHero.tsx          ✅
├── CTABanner.tsx         ✅
├── StepByStep.tsx        ✅
├── ComparisonTable.tsx   ✅
├── FeatureCard.tsx       ✅

src/pages/features/
├── DraftOrders.tsx       ✅
```

### Noch zu erstellen

```text
src/pages/
├── features/
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

---

## Priorisierte Reihenfolge

| Priorität | Seite | Status |
|-----------|-------|--------|
| 1 | Draft Orders Feature | ✅ Erledigt |
| 2 | LiveDealz vs. Manuell | 🔄 Nächster Schritt |
| 3 | TikTok/Instagram Live | ⏳ Ausstehend |
| 4 | WhatsApp Story | ⏳ Ausstehend |
| 5 | Shopify Integration | ⏳ Ausstehend |
| 6 | Success Stories | ⏳ Ausstehend |
| 7 | Restliche Seiten | ⏳ Ausstehend |
