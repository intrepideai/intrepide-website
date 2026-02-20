'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    num: '01',
    title: 'AI Strategy',
    desc: 'Identify high-impact opportunities. Map the path from concept to production with clarity.',
  },
  {
    num: '02',
    title: 'Custom Solutions',
    desc: 'Build AI systems tailored to your specific needs—not generic tools, but precision instruments.',
  },
  {
    num: '03',
    title: 'Integration',
    desc: 'Embed AI seamlessly into existing workflows. No disruption, just amplification.',
  },
  {
    num: '04',
    title: 'Training & Enablement',
    desc: 'Empower your team to work alongside AI effectively and confidently.',
  },
];

function ServiceCard({
  service,
  delay,
  isInView,
}: {
  service: (typeof services)[0];
  delay: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
      className="group bg-white border border-[var(--color-border)] rounded-xl p-12 transition-all duration-400 hover:border-[var(--color-border-hover)] hover:-translate-y-1 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)]"
    >
      <div className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold text-[var(--color-text-secondary)] tracking-[0.1em] mb-6">
        {service.num}
      </div>
      <h3 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium tracking-[-0.02em] mb-4">
        {service.title}
      </h3>
      <p className="text-[var(--color-text-secondary)] leading-[1.7]">
        {service.desc}
      </p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="products"
      ref={ref}
      className="py-40 lg:py-44 px-8 lg:px-16 bg-[var(--color-bg-elevated)] border-t border-[var(--color-border)]"
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-16"
        >
          <span className="block text-[0.7rem] font-semibold tracking-[0.25em] uppercase text-[var(--color-text-secondary)] mb-6">
            What We Do
          </span>
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.15] tracking-[-0.03em]">
            From strategy to deployment
          </h2>
        </motion.div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <ServiceCard
              key={s.num}
              service={s}
              delay={0.1 + i * 0.1}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
