'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  'Human-centered',
  'Responsible AI',
  'Radical transparency',
  'Long-term thinking',
  'Measurable impact',
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-40 lg:py-44 px-8 lg:px-16 text-center">
      <div className="max-w-[700px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-[var(--color-text-secondary)] mb-6">
            Our Values
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.15] tracking-[-0.03em] mb-12">
            Built on principles that matter
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {values.map((v, i) => (
              <motion.span
                key={v}
                variants={fadeInUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 + i * 0.08 }}
                className="px-5 py-3 border border-[var(--color-border)] rounded-full text-[0.9rem] font-medium transition-all duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white cursor-default"
              >
                {v}
              </motion.span>
            ))}
          </div>

          <p className="text-[0.95rem] text-[var(--color-text-secondary)]">
            We believe AI should serve people, not replace them.{' '}
            <a
              href="#contact"
              className="text-[var(--color-text)] font-medium hover:underline"
            >
              Learn more →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
