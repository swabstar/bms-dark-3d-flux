# Implementation Plan - BMS Studios Cinematic Website

Develop a high-performance, dark-themed cinematic website for BMS Studios featuring 3D elements, glassmorphism, and fluid animations.

## Scope Summary
- **Visual Identity:** Premium dark theme, glassmorphism, neon/soft white accents.
- **Hero Section:** Auto-playing loopable showreel background, 3D animated logo, atmospheric overlays.
- **Interactive Elements:** Floating 3D cards (tilt effect), cinematic hover states, parallax scrolling.
- **Components:** Navigation, Project Cards, About Section, Contact/Footer.
- **Tech Stack:** React, Tailwind CSS (v4), Framer Motion (for animations), Lucide React (icons).

## Non-Goals
- Server-side video hosting (will use placeholder/stock cinematic loops).
- Backend CMS or database persistence.
- Complex 3D modeling (will use CSS/Framer Motion for 3D UI effects).

## Assumptions
- The project is frontend-only (no Supabase).
- Performance is a priority (using lightweight animation libraries).
- Modern browser support for backdrop-filter (glassmorphism).

## Affected Areas
- `src/App.tsx`: Main layout and section orchestration.
- `src/index.css`: Global dark theme variables and glassmorphism utilities.
- `src/components/`: New components for Hero, Project Cards, and Navigation.
- `package.json`: Addition of `framer-motion` and `lucide-react`.

## Phases

### Phase 1: Foundation & Styling
- Install dependencies: `framer-motion`, `lucide-react`.
- Update `src/index.css` with dark-themed OKLCH variables and custom glassmorphism utilities.
- Set up a basic layout structure in `src/App.tsx`.
- **Owner:** `frontend_engineer`

### Phase 2: Core Components (Glassmorphism & Navigation)
- Create a `Navbar` component with glassmorphism and soft glow effects.
- Build a reusable `GlassCard` component with 3D tilt interaction using Framer Motion.
- **Owner:** `frontend_engineer`

### Phase 3: Hero Section & 3D Logo
- Implement the `Hero` section with a background video overlay.
- Create a "3D" animated BMS Studios logo (likely a stylized SVG with Framer Motion depth effects).
- Add atmospheric overlays (vignette, noise grain).
- **Owner:** `frontend_engineer`

### Phase 4: Content Sections & Parallax
- Build the `Projects` grid using the `GlassCard` components.
- Implement parallax scrolling effects for background elements.
- Create an "About" or "Services" section with cinematic transitions.
- **Owner:** `frontend_engineer`

### Phase 5: Refinement & Responsiveness
- Ensure pixel-perfect mobile-first layout.
- Optimize animations for performance.
- Final polish on hover states and transitions.
- **Owner:** `quick_fix_engineer`

## Execution Handoff

**Plan status:** ready

**Dispatch order:**
1. frontend_engineer — Setup foundation, core components, and high-complexity animations.
2. quick_fix_engineer — Final responsiveness polish and minor CSS adjustments.

**Per-agent instructions:**

### 1. frontend_engineer
- **Phases:** 1, 2, 3, 4
- **Scope:** 
    - Install `framer-motion` and `lucide-react`.
    - Configure `index.css` for a deep dark aesthetic (use oklch(0.1 0 0) for backgrounds).
    - Implement the `Hero` with background video (use a high-quality placeholder URL).
    - Build the 3D tilt cards and smooth scroll transitions.
    - Use `framer-motion` for all "cinematic" transitions.
- **Files:** `src/App.tsx`, `src/index.css`, `src/components/*.tsx`
- **Depends on:** none
- **Acceptance criteria:** Video background works, cards tilt on hover, glassmorphism is visible, layout matches "cinematic" description.

### 2. quick_fix_engineer
- **Phases:** 5
- **Scope:** 
    - Review mobile responsiveness across viewports.
    - Fine-tune transition timings or glow intensities if needed.
    - Fix any overlapping elements on small screens.
- **Files:** `src/index.css`, `src/App.tsx`
- **Depends on:** frontend_engineer
- **Acceptance criteria:** Website is fully responsive and performs smoothly on mobile.
