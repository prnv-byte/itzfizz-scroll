# ITZFIZZ — Reference-Matched Scroll Car Animation

A Next.js / React implementation of the supplied [ITZFIZZ car-scroll reference](https://paraschaturvedi.github.io/car-scroll-animation/). This revision prioritizes the reference's composition and interaction over an original landing-page redesign.

## What matches the reference

- Charcoal page background with a light-grey, full-viewport pinned stage.
- Oversized `WELCOME ITZFIZZ` headline with individual letter spans.
- Horizontal dark road centered in the viewport.
- Green progress trail behind a horizontally moving, top-view orange sports car.
- Four metric cards with the reference values, descriptions, colors, and approximate corner placements.
- A 200vh scroll section pinned for the animation, with the car motion tied to scroll position via GSAP ScrollTrigger.
- Headline letters darken as the car passes their horizontal position.
- Staggered initial reveal for headline and metrics, plus reduced-motion handling.
- Responsive layout and static export support.

## Differences to be aware of

- The car is an original inline SVG illustration inspired by the reference's top-view orange car; it is not the original PNG asset.
- Responsive breakpoints and reduced-motion handling are additions for usability.
- Exact pixel parity can vary by browser, viewport, font rendering, and scroll behavior. Compare at the same viewport size as the reference.

## Requirements

- Node.js 20.9+ recommended
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000 and scroll slowly through the pinned hero.

## Validate

```bash
npm run lint
npm run typecheck
npm run build
```

The production build exports a static site to `out/`.

## Project structure

```text
src/
├── app/
│   ├── globals.css       # Reference-inspired composition and responsive styles
│   ├── layout.tsx        # Root metadata and document
│   └── page.tsx          # Single hero page
├── components/
│   ├── CarTopView.tsx    # Inline top-view orange car SVG
│   └── Hero.tsx          # Hero markup and GSAP timelines
├── data/
│   └── stats.ts          # Reference metric values and descriptions
└── lib/
    └── gsap.ts           # Central ScrollTrigger registration
```

## Tune the animation

- Scroll length: `end: 'bottom top'` in `src/components/Hero.tsx` and section height in CSS.
- Scroll smoothing: change `scrub: true` to a small number such as `0.4` if desired.
- Car size: update `.car-wrap` width.
- Accent trail: update `--trail` in `src/app/globals.css`.
- Metrics: edit `src/data/stats.ts`.

## Reference and asset note

The layout and content are based on the public reference page. This project does not bundle the reference site's original car image; its SVG illustration is locally authored so the project remains self-contained.
