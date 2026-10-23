import { motion } from 'framer-motion';
import { Chip } from '@heroui/react';
import { TECH_MARQUEE } from '../Home.constants';

export default function HomeTechMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.8 }}
      className="mt-16 relative"
    >
      <div className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-default-400 mb-4">
        Core Technologies I Work With
      </div>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex gap-3 w-max animate-marquee">
          {[...TECH_MARQUEE, ...TECH_MARQUEE].map((tech, i) => (
            <Chip
              key={`${tech}-${i}`}
              size="sm"
              variant="flat"
              className="bg-white/60 border border-white/70 text-default-700 text-xs font-medium shadow-sm"
            >
              {tech}
            </Chip>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
