# Testing Checklist

## Build checks

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`

## Visual and interaction checks

- [ ] The initial viewport is light grey with the headline near the top and a centered dark road.
- [ ] The headline reveals smoothly on load.
- [ ] Four metric cards appear sequentially with the exact reference values and descriptions.
- [ ] Scrolling pins the stage while the car moves horizontally.
- [ ] The green trail grows from the left with car progress.
- [ ] Letters darken when the car passes them.
- [ ] Scrolling upward reverses the car and letter reveal.
- [ ] The car remains within the viewport at desktop widths.
- [ ] Cards remain readable and do not obscure the car on mobile.
- [ ] `prefers-reduced-motion: reduce` leaves content visible without scroll animation.
- [ ] No horizontal page overflow occurs.
