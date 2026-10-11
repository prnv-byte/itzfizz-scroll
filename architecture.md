# Architecture

## Overview

The project uses Next.js App Router with one client-side hero component. React owns markup and content; GSAP owns entrance and scroll-linked motion.

## Component map

- `src/app/page.tsx`: renders the single hero section.
- `src/components/Hero.tsx`: creates refs for the pinned stage, car, trail, and headline; runs GSAP timelines; measures letter positions; cleans up listeners and animations.
- `src/components/CarTopView.tsx`: inline, accessible SVG car illustration.
- `src/data/stats.ts`: four metric values, descriptions, and color variants.
- `src/lib/gsap.ts`: central GSAP / ScrollTrigger registration.

## Scroll model

The `.hero-section` is `200vh` tall. ScrollTrigger pins `.reference-stage` from `top top` to `bottom top`, giving the user approximately one viewport of scroll travel while the stage remains visible. The car's `x` position is scrubbed across the available stage width. The trail uses `scaleX` with a left transform origin. The oversized headline sits inside the road above the trail; each letter is darkened when the car's center crosses its measured horizontal center, so the green trail provides contrast behind the revealed letters.

## Performance

- ScrollTrigger handles scroll observation and pinning.
- Car and trail motion use transforms.
- Letter measurements are cached and refreshed with ScrollTrigger refreshes.
- GSAP context cleanup is handled by `useGSAP`; custom ScrollTrigger refresh listeners are removed in cleanup.
- `prefers-reduced-motion` disables the scroll-driven movement and exposes the content.

## Visual fidelity choices

The layout uses the reference's grey stage, dark road, green trail, orange car, and four differently colored metric cards. The car itself is an original inline SVG, not the original reference PNG. Responsive adjustments are included for smaller viewports.
