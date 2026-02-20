'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden px-8 lg:px-16 pt-24"
    >
      {/* Decorative radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none">
        <div className="absolute inset-0 rounded-full bg-radial-[closest-side] from-black/[0.02] to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1000px]">
        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-[0.7rem] font-semibold tracking-[0.3em] uppercase text-[var(--color-text-secondary)] mb-8"
        >
          AI Consulting &amp; Solutions
        </motion.p>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,10vw,8rem)] font-medium leading-[1] tracking-[-0.04em] mb-8"
        >
          <span className="block">AI that amplifies</span>
          <span className="block italic font-normal">human ingenuity</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.35 }}
          className="text-[1.3rem] text-[var(--color-text-secondary)] max-w-[580px] mx-auto mb-12 leading-[1.7] font-normal"
        >
          We partner with visionary organizations to harness frontier AI—creating extraordinary value while keeping humans at the center.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-[var(--color-accent)] text-white font-medium text-[0.95rem] hover:bg-[#222] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
          >
            Start a conversation
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-[0.1em] uppercase text-[var(--color-text-secondary)]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[var(--color-text-secondary)] to-transparent" />
      </motion.div>
    </section>
  );
}
