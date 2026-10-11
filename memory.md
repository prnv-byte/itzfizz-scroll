# Project Memory

## Current goal

Recreate the behavior and composition of https://paraschaturvedi.github.io/car-scroll-animation/ for a frontend assignment using Next.js, React, Tailwind CSS, GSAP, and ScrollTrigger.

## Decisions in the reference-matched revision

- Removed the previous branded dark/lime agency landing-page styling.
- Removed the extra “GOOD THINGS KEEP MOVING” second section.
- Restored reference metric values and descriptions exactly:
  - 58% — Increase in pick up point use
  - 23% — Decreased in customer phone calls
  - 27% — Increase in pick up point use
  - 40% — Decreased in customer phone calls
- Recreated the light-grey viewport stage, centered dark road, green trail, large letter-spaced headline, and colored metric cards.
- Replaced the dark custom car graphic with an orange top-view SVG approximation. It is not the original reference image asset.
- Preserved initial load reveals while keeping the car's main movement and letter emphasis scroll-driven.

## Last known validation before this revision

The previous revision passed `npm run lint`, `npm run typecheck`, and `npm run build` on the user's Windows machine. This revision has not yet been run in that environment.

## Next steps

1. Extract the updated ZIP over a fresh folder.
2. Run `npm install`.
3. Run `npm run lint`, `npm run typecheck`, and `npm run build`.
4. Run `npm run dev` and compare against the reference at desktop and mobile sizes.
5. Tune typography, card positions, and car width based on visual comparison.
