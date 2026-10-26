# DeeRiver Landing Page

Official marketing website and landing page for **DeeRiver** — Infinite Cloud Storage on Telegram Infrastructure with Native OS Mounts.

---

## 🛠 Tech Stack
- **Framework:** React 18 + TypeScript (Strict mode)
- **Bundler:** Vite
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI primitives)
- **Icons:** [Lucide React](https://lucide.dev/) (official shadcn icon family)
- **Styling:** Tailwind CSS with CSS Variables & HSL design tokens
- **Architecture:** **Atomic Design** (`atoms`, `molecules`, `organisms`, `templates`, `pages`)

---

## 🏛 Project Structure (Atomic Design)
```
src/
├── components/
│   ├── ui/          # Raw shadcn/ui components (Button, Dialog, Card, Tooltip, etc.)
│   ├── atoms/       # Low-level building blocks (custom badges, status pills, gradient chips)
│   ├── molecules/   # Compound components (Stat cards, copy-to-clipboard snippets, search)
│   ├── organisms/   # Full marketing sections (HeroSection, BentoGrid, StorageCalculator, ComparisonTable, FAQ)
│   └── templates/   # Layout structures (MarketingLayout with Navigation and Footer slots)
├── pages/           # High-level route pages (LandingPage.tsx)
├── hooks/           # Reusable custom React hooks
├── types/           # TypeScript types and data models
├── lib/             # Utility functions (`cn` helper)
└── styles/          # Tailwind base layers, fonts, and global variables
```

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 📋 Guidelines & Best Practices
1. **Strict Atomic Hierarchy:** Atoms must never depend on molecules or organisms. Molecules must never depend on organisms.
2. **Icons:** Exclusively use `lucide-react`.
3. **Accessibility:** Semantic HTML elements, single `<h1>`, visible focus outlines, and proper ARIA labels.
4. **Clean Tailwind:** Always use `cn()` from `@/lib/utils` for conditional class combinations.
