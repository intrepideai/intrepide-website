'use client';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] py-8 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left */}
        <div className="flex items-center gap-6">
          <span className="font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-[0.15em] lowercase text-[var(--color-text-secondary)]">
            intrepide
          </span>
          <span className="text-sm text-[var(--color-text-secondary)]/60">
            © {year} Intrepide. All rights reserved.
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <a
            href="mailto:clyde@intrepide.ai"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            clyde@intrepide.ai
          </a>
          <a
            href="https://linkedin.com/company/intrepide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
