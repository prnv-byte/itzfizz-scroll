'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { stats } from '@/data/stats';
import { CarTopView } from './CarTopView';

const headline = 'WELCOME ITZFIZZ';
const letters = Array.from(headline);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const track = trackRef.current;
    const car = carRef.current;
    const trail = trailRef.current;
    const title = titleRef.current;

    if (!track || !car || !trail || !title) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const chars = gsap.utils.toArray<HTMLElement>('[data-letter]');
    const statCards = gsap.utils.toArray<HTMLElement>('[data-stat]');

    if (reducedMotion) {
      // Keep content accessible without requiring scroll for users who prefer
      // reduced motion.
      gsap.set(chars, { opacity: 1, y: 0, color: '#111111' });
      gsap.set(statCards, { opacity: 1, y: 0 });
      gsap.set(car, { x: 0 });
      gsap.set(trail, { scaleX: 0.08, transformOrigin: 'left center' });
      return;
    }

    // Nothing is revealed on page load: the headline and statistic cards begin
    // hidden and are revealed only as the user scrolls through the pinned hero.
    gsap.set(chars, { opacity: 0, y: 12, color: '#111111' });
    gsap.set(statCards, { opacity: 0, y: 18 });
    gsap.set(trail, { scaleX: 0, transformOrigin: 'left center' });

    const getTravel = () =>
      Math.max(0, track.clientWidth - car.getBoundingClientRect().width);

    let letterPositions: number[] = [];

    const measureLetters = () => {
      const trackLeft = track.getBoundingClientRect().left;
      letterPositions = chars.map((char) => {
        const rect = char.getBoundingClientRect();
        return rect.left - trackLeft + rect.width / 2;
      });
    };

    const updateHeadlineReveal = () => {
      const carRect = car.getBoundingClientRect();
      const trackRect = track.getBoundingClientRect();
      const carCenter = carRect.left - trackRect.left + carRect.width / 2;

      chars.forEach((char, index) => {
        const revealed = carCenter >= letterPositions[index];
        gsap.set(char, {
          opacity: revealed ? 1 : 0,
          y: revealed ? 0 : 12,
        });
      });

      const progress = Math.min(
        1,
        Math.max(0, carCenter / Math.max(track.clientWidth, 1)),
      );
      gsap.set(trail, { scaleX: progress });
    };

    const scrollTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: root.current,
        start: 'top top',
        end: 'bottom top',
        pin: track,
        scrub: true,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        onRefreshInit: measureLetters,
      },
      onUpdate: updateHeadlineReveal,
    });

    // Main car movement is directly tied to scroll progress, not autoplay.
    scrollTimeline.to(car, { x: getTravel, ease: 'none' }, 0);

    // Reveal one metric at a time as the user scrolls. Because these tweens live
    // on the scrubbed timeline, scrolling upward hides them again.
    statCards.forEach((card, index) => {
      const revealAt = 0.12 + index * 0.2;
      scrollTimeline.fromTo(
        card,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.12,
          ease: 'none',
          immediateRender: false,
        },
        revealAt,
      );
    });

    const refresh = () => {
      measureLetters();
      updateHeadlineReveal();
    };

    measureLetters();
    updateHeadlineReveal();
    ScrollTrigger.addEventListener('refresh', refresh);

    return () => {
      ScrollTrigger.removeEventListener('refresh', refresh);
      scrollTimeline.scrollTrigger?.kill();
      scrollTimeline.kill();
    };
  }, { scope: root, dependencies: [] });

  return (
    <section
      ref={root}
      className="hero-section"
      aria-label="ITZFIZZ car scroll animation"
    >
      <div ref={trackRef} className="reference-stage">
        <div className="road" aria-label="Scroll to move the car across the road">
          <div className="road-trail" ref={trailRef} />
          <div className="road-centerline" />
          <div ref={carRef} className="car-wrap">
            <CarTopView className="car-illustration" />
          </div>

          <div className="headline-wrap">
            <h1 ref={titleRef} className="reference-title" aria-label={headline}>
              {letters.map((letter, index) => (
                <span
                  key={`${letter}-${index}`}
                  data-letter
                  className={`reference-letter ${
                    letter === ' ' ? 'reference-space' : ''
                  }`}
                  aria-hidden="true"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </span>
              ))}
            </h1>
          </div>
        </div>

        {stats.map((stat) => (
          <article
            key={stat.index}
            data-stat
            className={`stat-card stat-${stat.tone}`}
          >
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </article>
        ))}

        <div className="scroll-hint">
          <span className="scroll-hint-line" /> SCROLL TO DRIVE{' '}
          <span aria-hidden="true">↓</span>
        </div>
      </div>
    </section>
  );
}
