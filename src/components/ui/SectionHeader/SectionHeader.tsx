import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  title: string;
  accent?: string;
  description?: string;
  eyebrow?: string;
  icon?: LucideIcon;
  children?: ReactNode;
}

export default function SectionHeader({
  title,
  accent,
  description,
  eyebrow,
  icon: Icon,
  children,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
      {(eyebrow || Icon) && (
        <div className="mb-3 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-primary-600">
          {Icon && <Icon size={15} aria-hidden="true" />}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
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
