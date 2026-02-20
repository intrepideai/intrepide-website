'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-48 lg:py-52 px-8 lg:px-16 text-center border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3rem,8vw,6rem)] font-medium leading-[1.05] tracking-[-0.03em] mb-10">
            Let&apos;s build
            <br />
            something bold.
          </h2>
          <a
            href="mailto:clyde@intrepide.ai"
            className="inline-block font-[family-name:var(--font-space-grotesk)] text-[clamp(1.2rem,3vw,2rem)] font-medium text-[var(--color-text)] border-2 border-[var(--color-text)] rounded-full px-10 py-5 mb-8 transition-all duration-300 hover:bg-[var(--color-accent)] hover:text-white hover:border-[var(--color-accent)]"
          >
            clyde@intrepide.ai
          </a>
          <div className="mt-4">
            <a
              href="https://linkedin.com/company/intrepide"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.95rem] text-[var(--color-text-secondary)] font-medium hover:text-[var(--color-text)] transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
