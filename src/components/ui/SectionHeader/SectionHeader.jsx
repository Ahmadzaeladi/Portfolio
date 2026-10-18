import React from 'react';
import { motion } from 'framer-motion';
import { Chip } from '@heroui/react';

export default function SectionHeader({ icon: Icon, eyebrow, title, accent, description, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      <div className="mb-3">
        <Chip
          variant="flat"
          size="sm"
          classNames={{
            base: 'glass-pill border border-white/70 gap-1.5 px-3 py-2 h-auto',
            content: 'text-xs font-semibold text-primary-600 uppercase tracking-wider',
          }}
          startContent={Icon ? <Icon size={14} className="ml-0.5 text-sky-500" /> : undefined}
        >
          {eyebrow}
        </Chip>
      </div>
      <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
        {title} {accent && <span className="gradient-text">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-default-600 leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
