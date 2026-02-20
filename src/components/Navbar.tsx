'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#industries', label: 'Industries' },
  { href: '#agents', label: 'Agents' },
  { href: '#products', label: 'Products' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-black/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.04)]' : 'bg-white/80 backdrop-blur-sm'}`}>
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-[family-name:var(--font-space-grotesk)] text-[1.1rem] font-semibold tracking-[0.15em] lowercase text-[var(--color-text)] hover:text-[var(--color-text-secondary)] transition-colors"
          >
            intrepide
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm font-medium px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-light)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300${mobileOpen ? ' translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300${mobileOpen ? ' opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-all duration-300${mobileOpen ? ' -translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="font-[family-name:var(--font-space-grotesk)] text-[2rem] font-medium text-[var(--color-text)] no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className="mt-4 text-base font-medium bg-[var(--color-accent)] text-white px-8 py-3 rounded-full no-underline"
          >
            Let&apos;s Talk
          </a>
        </div>
      )}
    </>
  );
}
