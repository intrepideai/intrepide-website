'use client';

import { useRef, useEffect } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';

function AnimatedCounter({
  to,
  suffix,
  duration = 1.5,
}: {
  to: number;
  suffix: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, {
    damping: 30,
    stiffness: 60,
    duration,
  });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) {
      motionVal.set(to);
    }
  }, [isInView, motionVal, to]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: 10, suffix: '×', label: 'Faster workflows', hasCounter: true },
  { value: 40, suffix: '%', label: 'Cost reduction', hasCounter: true },
  { value: 0, suffix: '∞', label: 'New possibilities', hasCounter: false },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      ref={ref}
      className="py-24 lg:py-28 px-8 lg:px-16 border-t border-b border-[var(--color-border)] bg-[var(--color-bg-elevated)]"
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            transition={{ duration: 0.8, ease: 'easeOut', delay: i * 0.15 }}
            className="text-center px-4 py-8"
          >
            <div className="font-[family-name:var(--font-space-grotesk)] text-[clamp(3.5rem,8vw,6rem)] font-semibold leading-[1] mb-3 tracking-[-0.03em]">
              {stat.hasCounter ? (
                <AnimatedCounter to={stat.value} suffix={stat.suffix} />
              ) : (
                stat.suffix
              )}
            </div>
            <p className="text-[0.9rem] text-[var(--color-text-secondary)] font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
