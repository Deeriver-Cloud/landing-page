# AGENTS.md - DeeRiver Landing Page Guidelines

This repository contains the marketing website and official landing page for **DeeRiver** (Unlimited Cloud Storage on Telegram Infrastructure).

## Core Architecture & Stack
- **Framework:** React 18+ with TypeScript
- **Bundler:** Vite
- **UI Components:** **shadcn/ui** (Radix UI primitives + Tailwind CSS)
- **Icons:** **Lucide Icons** (`lucide-react`, official shadcn icon set)
- **Styling:** Tailwind CSS with CSS Variables / HSL color tokens (dark-mode first, glassmorphism, glowing borders)
- **Architecture:** **Atomic Design** (`atoms/`, `molecules/`, `organisms/`, `templates/`, `pages/`)

---

## Directory Structure
```
src/
├── components/
│   ├── ui/          # Standard shadcn/ui components (button, card, dialog, tooltip, etc.)
│   ├── atoms/       # Base elements (badges, custom icon wrappers, pills, gradients)
│   ├── molecules/   # Simple groupings (feature item, search bar, stat box, switch)
│   ├── organisms/   # High-level sections (Hero, Bento Grid, Cost Calculator, Vault Demo, FAQ)
│   └── templates/   # Layout templates (MarketingLayout with Navigation and Footer)
├── pages/           # Page routes (LandingPage.tsx)
├── hooks/           # Reusable custom React hooks
├── types/           # TypeScript definitions and interfaces
├── lib/             # Utilities (cn helper, formatting)
└── styles/          # Global CSS, Tailwind layers, font definitions
```

---

## Strict Rules & Best Practices
1. **Atomic Design Separation:**
   - Atoms never import molecules or organisms.
   - Molecules only import atoms or ui primitives.
   - Organisms compose molecules and atoms.
   - Templates define layout structure and slots.
   - Pages wire data and render templates.
2. **Icons:**
   - Use `lucide-react` exclusively for all UI iconography.
3. **Type Safety:**
   - Strict TypeScript everywhere; no `any`.
   - All components export explicit props interfaces.
4. **Accessibility (a11y):**
   - Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
   - One `<h1>` per page.
   - Visible keyboard focus states (`focus-visible:ring-2`).
   - `aria-label` on icon-only buttons.
5. **Class Merging:**
   - Always use the `cn(...)` utility function from `@/lib/utils` for dynamic class names.
