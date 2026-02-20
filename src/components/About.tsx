'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" ref={ref} className="py-40 lg:py-44 px-8 lg:px-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
        {/* Left — sticky header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="block text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-[var(--color-text-secondary)] mb-6">
            Who We Are
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.15] tracking-[-0.03em] lg:sticky lg:top-[120px]">
            An independent collective of engineers, strategists &amp; builders.
          </h2>
        </motion.div>

        {/* Right — paragraphs */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="space-y-8 pt-2"
        >
          <p className="text-[1.15rem] text-[var(--color-text-secondary)] leading-[1.9]">
            We&apos;re not a traditional consultancy. We&apos;re practitioners
            who&apos;ve built AI systems at scale and understand both the
            potential and the pitfalls.
          </p>
          <p className="text-[1.15rem] text-[var(--color-text-secondary)] leading-[1.9]">
            We partner with organizations ready to move beyond
            experimentation—to deploy AI that creates real, measurable impact
            while keeping humans at the center.
          </p>
          <p className="text-[1.15rem] text-[var(--color-text-secondary)] leading-[1.9]">
            Two sides of the business:{' '}
            <span className="text-[var(--color-text)] font-medium">
              consulting &amp; services
            </span>{' '}
            that help organizations harness AI today, and an internal{' '}
            <span className="text-[var(--color-text)] font-medium">
              product studio
            </span>{' '}
            building AI-native SaaS applications across healthcare, real estate,
            construction, and operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
