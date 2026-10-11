import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ITZFIZZ — Motion That Moves People',
  description: 'A cinematic, scroll-driven hero experience built with Next.js, Tailwind CSS, and GSAP ScrollTrigger.',
  applicationName: 'ITZFIZZ Scroll Hero',
  keywords: ['GSAP', 'ScrollTrigger', 'scroll animation', 'Next.js', 'creative studio'],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#111211' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
