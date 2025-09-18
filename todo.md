# HeimdallWWW Improvement Plan (Todo)

This checklist consolidates all recommended improvements to enhance type safety, DX, performance, accessibility, testing, security, analytics, SEO, and documentation. Items are ordered for efficient execution. Check off as you go.

Legend

- [ ] Not started
- [~] In progress
- [x] Done

## 0. Prep and Baseline

- [ ] Ensure dependencies are installed
  - Command: `pnpm install`
- [ ] Verify dev server runs
  - Command: `pnpm dev`
- [ ] Create a working branch
  - Command: `git checkout -b chore/improvement-sweep`

## 1. TypeScript Configuration and Type Safety

- [ ] Simplify tsconfig to a single file (remove broken project references)
  - Update `tsconfig.json`: remove `references`; set stricter options.
  - Suggested compilerOptions: `{ "strict": true, "noImplicitAny": true, "strictNullChecks": true, "skipLibCheck": true, "baseUrl": ".", "paths": { "@/*": ["./src/*"] } }`
- [ ] Add typecheck script
  - In `package.json` scripts: `"typecheck": "tsc -p tsconfig.json --noEmit"`
- [ ] Run typecheck and fix any surfaced issues
  - Command: `pnpm run typecheck`
- [ ] Consider disabling `allowJs` unless needed
- [ ] Re-enable unused-var detection gradually
  - ESLint rule: set `@typescript-eslint/no-unused-vars` to `"warn"` initially

## 2. Linting, Formatting, and Pre-commit Hooks

- [ ] Add Prettier
  - Dev deps: `pnpm add -D prettier`
  - Create `.prettierrc` and `.prettierignore` (node_modules, dist, pnpm-lock.yaml)
- [ ] Add format scripts
  - `"format": "prettier --write ."`, `"format:check": "prettier --check ."`
- [ ] Integrate lint-staged + simple pre-commit hook (optional)
  - Dev deps: `pnpm add -D lint-staged simple-git-hooks`
  - package.json:
    - `"lint-staged": { "**/*.{ts,tsx,css,md}": ["prettier --write", "eslint --fix"] }`
    - `"simple-git-hooks": { "pre-commit": "pnpm lint-staged" }`
  - Command: `pnpm dlx simple-git-hooks`
- [ ] Run repo-wide lint and format
  - Commands: `pnpm lint` and `pnpm format`

## 3. Tailwind and Theming Cleanup

- [ ] Streamline Tailwind content globs to only `./src/**/*.{ts,tsx}` in `tailwind.config.ts`
- [ ] Decide on theme strategy
  - If dark-only: optionally set `darkMode: false` and remove unused `.dark` paths in styles
  - If supporting light/dark: use `next-themes` to toggle `.dark` and move dark palette under `.dark`, keep light palette in `:root`
- [ ] Verify globals still match Tailwind tokens after the change

## 4. Routing and A11y Improvements

- [ ] Use SPA navigation in NotFound
  - Replace `<a href="/">` with `<Link to="/">` from `react-router-dom`
- [ ] Add a Skip to Content link for keyboard users
  - Add a visually-hidden but focusable link near the top of the page that jumps to `<main>`
- [ ] Ensure interactive elements have accessible names and focus styles
  - Confirm buttons/links: aria-labels where needed; focus-visible rings present
- [ ] Charts: verify legends/tooltips provide text labels, not color alone

## 5. Performance Enhancements

- [ ] Keep lazy loading for heavy components; consider prefetch on intent
  - Use `IntersectionObserver` to preload above-the-fold lazy components just before they enter viewport
- [ ] Audit bundle split results
  - Build: `pnpm build`
  - Analyze (optional): add `rollup-plugin-visualizer` to inspect chunk sizes
- [ ] Image optimization
  - Replace remote avatar placeholders in production with optimized images or a proxy if needed

## 6. Testing Setup (Unit and E2E)

- [ ] Add Vitest + React Testing Library
  - Dev deps: `pnpm add -D vitest @vitest/ui @testing-library/react @testing-library/user-event @testing-library/jest-dom jsdom`
  - Configure `vitest.config.ts` with `jsdom` environment and alias `@`
  - Add script: `"test": "vitest"`, `"test:ui": "vitest --ui"`, `"test:run": "vitest run"`
- [ ] Create minimal smoke tests
  - App renders without crashing; Index page renders hero; Charts render without errors (mock recharts if needed)
- [ ] Optional: Add Playwright for critical-path e2e (landing renders; CTA visible)
  - Dev deps: `pnpm create playwright@latest`

## 7. Analytics, Monitoring, and Error Boundaries

- [ ] Add an error boundary at app root to catch lazy-load and render errors
  - Wrap routes with a simple ErrorBoundary component
- [ ] Integrate basic analytics (if desired)
  - Add provider (Plausible, PostHog, GA4) behind an env flag
- [ ] Basic runtime logging hooks
  - Log route changes; throttle noisy logs; ensure no PII in logs

## 8. Security and Headers

- [ ] CSP and security headers (for deployment target)
  - If using a static host/reverse proxy, configure CSP, frame-ancestors, referrer-policy, and strict-transport-security
- [ ] Dependabot/Renovate (optional)
  - Add configuration for automated dep updates
- [ ] Audit deps
  - Commands: `pnpm audit` (note: PNPM audit quality varies), consider `npm audit` if mirrored

## 9. SEO and Metadata

- [ ] Add document <title> and meta descriptions
  - Set via an SEO helper or react-helmet-async
- [ ] Open Graph / Twitter card tags for sharing
  - Include title, description, and image
- [ ] Sitemap and robots.txt (if deploying publicly)

## 10. CI/CD (Optional but Recommended)

- [ ] Add GitHub Actions for lint + typecheck + build on PRs
  - Workflow steps: setup PNPM, install, `pnpm lint`, `pnpm run typecheck`, `pnpm build`
- [ ] Cache PNPM store for faster builds
- [ ] Optionally run unit tests in CI once testing is set up

## 11. Documentation

- [ ] Update README with:
  - Project overview (already strong in WARP.md — summarize and link)
  - Setup steps, scripts, development tips, theming approach
  - Testing instructions, CI status badge
- [ ] Document Code Style and Conventions
  - How to add new pages, components, and charts; patterns for React.lazy and Suspense fallbacks

---

Quick patches (can be applied early)

- Tailwind content globs: update `tailwind.config.ts` content to only `"./src/**/*.{ts,tsx}"`.
- NotFound link: replace anchor with `Link`.
- Add scripts: `typecheck`, `format`, (later `test`).

Post-change verification

- [ ] pnpm lint
- [ ] pnpm run typecheck
- [ ] pnpm build
- [ ] pnpm preview
- [ ] Run tests (once configured): `pnpm test`

Notes

- Keep manualChunks for vendor split; revisit as dependencies grow.
- Only enable light/dark if needed; otherwise simplify to dark-only to reduce complexity.
- Prefer placing shared logic in `src/lib/` or `src/hooks/` per current structure.

New tasks

- [ ] Center the main page content (hero and sections) so it’s not left-justified on large screens.
- [ ] Add two more testimonial cards with compelling quotes. Draft quotes (or ask Claude) and add to the testimonials array in src/pages/Index.tsx.
