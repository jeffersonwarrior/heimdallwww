# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Stack: Vite + React + TypeScript + TailwindCSS
- UI kit: shadcn/ui primitives under src/components/ui (with class-variance-authority for variants, and utility cn() in src/lib/utils.ts)
- Routing: react-router-dom with top-level routes in src/App.tsx
- Data: @tanstack/react-query provider wired in App
- Charts: recharts, wrapped by local Chart components (src/components/ui/chart.tsx) and used in feature charts
- Build tooling: vite.config.ts uses @vitejs/plugin-react-swc and @dyad-sh/react-vite-component-tagger; alias @ -> ./src
- Styling: Tailwind configured in tailwind.config.ts with custom Heimdall color tokens and animations
- Linting: ESLint (typescript-eslint, react-hooks, react-refresh); config in eslint.config.js
- TS paths: tsconfig.json maps @/* -> ./src/*

Common commands
- Start dev server (port 8080 per vite.config.ts)
  ```sh path=null start=null
  pnpm dev
  ```
- Type-check only
  ```sh path=null start=null
  pnpm exec tsc -p tsconfig.json --noEmit
  ```
- Lint entire repo
  ```sh path=null start=null
  pnpm lint
  ```
- Build (production)
  ```sh path=null start=null
  pnpm build
  ```
- Preview built app (local static server)
  ```sh path=null start=null
  pnpm preview
  ```
- Notes
  - There is no test runner configured in package.json; running a single test is not applicable in this codebase as-is.

Architecture and structure
- Entry and Providers
  - src/main.tsx mounts App via createRoot.
  - src/App.tsx wraps routes with QueryClientProvider (react-query), TooltipProvider, and two toast systems (Toaster and Sonner).
- Routing
  - BrowserRouter with two routes defined: "/" -> src/pages/Index.tsx, and a catch-all "*" -> src/pages/NotFound.tsx.
  - Add new routes in App.tsx above the catch-all.
- UI system (shadcn)
  - Reusable UI primitives live in src/components/ui/* (buttons, dialogs, inputs, menus, sidebar, etc.). Many components export both the primitive and its variant builder (e.g., buttonVariants). For hot-refresh stability, some files intentionally disable react-refresh’s only-export-components rule.
  - Utility: src/lib/utils.ts exposes cn() which merges Tailwind class names.
- Styling
  - tailwind.config.ts defines custom color tokens under heimdall and standard design tokens (border, background, etc.). Plugin tailwindcss-animate is used. Animations include accordion and slide-in-fade-in.
  - src/globals.css contains the global CSS variables consumed by Tailwind tokens (and page theming).
- Data and feedback
  - Toasts via src/components/ui/toaster and src/components/ui/sonner.
  - TooltipProvider wraps the app to enable unified tooltip behavior.
  - React Query is configured with a single QueryClient at app root (no custom options by default).
- Feature modules and code-splitting
  - Charts: src/components/charts/* use recharts and local Chart wrappers (src/components/ui/chart). On the landing page, these charts are lazily loaded with Suspense fallbacks to reduce initial bundle size.
  - Visuals: NetworkVisual (and GeometricPattern) are lazily loaded on the landing page.
  - Bundling: vite.config.ts defines Rollup manualChunks for vendor splitting: vendor_react, vendor_radix, vendor_charts. This reduces the size of the main application chunk and isolates large dependencies like recharts.
- App pages
  - src/pages/Index.tsx is the primary landing page composed of:
    - Header/Footer shells
    - A hero section (includes a lazily loaded NetworkVisual)
    - Problem/capability sections with stat blocks and shadcn UI components
    - Charts area (three lazy-loaded recharts-based components)
    - FAQ and CTA sections
  - src/pages/NotFound.tsx logs any unmatched route to console and renders a basic 404 page.

Environment notes for Warp
- pnpm is the package manager; lockfile exists (pnpm-lock.yaml). Use pnpm commands for install and scripts.
- Vite dev server defaults to port 8080 and host :: (IPv6) per vite.config.ts; adjust if your environment needs different settings.
- ESLint is configured to ignore dist and to allow shadcn patterns. Prefer file-scoped disables only where components co-exist with exported helpers required by the pattern.

Important repo files to be aware of
- package.json: scripts (dev, build, build:dev, lint, preview) and dependencies
- vite.config.ts: plugin setup, aliasing, dev server, and manualChunks for vendor splitting
- eslint.config.js: base lint rules; typescript-eslint + react-hooks + react-refresh
- tailwind.config.ts: theme tokens, plugin usage
- tsconfig.json: path alias @/* and compiler options

When extending the project
- Add new routes in src/App.tsx and corresponding page components under src/pages/.
- Prefer placing shared, non-visual logic in src/lib/ or src/hooks/.
- For heavy UI/features (e.g., additional charts), prefer dynamic import with React.lazy and a Suspense fallback to keep the initial bundle small. You can also extend manualChunks in vite.config.ts for other large vendor groups as needed.

