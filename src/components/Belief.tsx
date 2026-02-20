'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Belief() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-48 lg:py-52 px-8 lg:px-16 text-center border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1000px] mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2.5rem,6vw,4.5rem)] font-normal leading-[1.15] tracking-[-0.03em]"
        >
          The best AI doesn&apos;t replace people.
          <br />
          <span className="font-semibold">It gives them superpowers.</span>
        </motion.h2>
      </div>
    </section>
  );
}
