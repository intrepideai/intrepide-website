'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function AgentsTeaser() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Early Access Request',
          email,
          message: 'Early access signup for AI Agents.',
        }),
      });
    } catch {
      // Silent fail — optimistic UX
    }
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <section
      id="agents"
      ref={ref}
      className="py-32 lg:py-40 px-8 lg:px-16 border-t border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <div className="max-w-[800px] mx-auto text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
        >
          {/* Coming soon badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-white mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
            </span>
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-secondary)]">
              Coming Soon
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,6vw,4rem)] font-medium leading-[1.1] tracking-[-0.03em] mb-6">
            AI Agents that work
            <br />
            <span className="italic font-normal">while you sleep.</span>
          </h2>

          {/* Description */}
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-4 max-w-[600px] mx-auto">
            Imagine autonomous AI agents that handle your operations 24/7 —
            monitoring systems, responding to customers, managing workflows, and
            making intelligent decisions on your behalf.
          </p>

          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-[600px] mx-auto">
            Not chatbots. Not copilots. Fully autonomous agents that think, plan,
            and execute — with human oversight when it matters.
          </p>

          {/* Email signup */}
          {submitted ? (
            <p className="text-base text-[var(--color-text-secondary)] italic">
              You&apos;re on the list. We&apos;ll be in touch.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-[460px] mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-[var(--color-border)] bg-white text-[var(--color-text)] placeholder-[var(--color-text-secondary)]/50 focus:outline-none focus:border-[var(--color-border-hover)] transition-colors text-sm"
              />
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-3.5 rounded-full bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[#222] transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
              >
                Get Early Access
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
