import React from "react";
import { motion } from "framer-motion";
import { Chip } from "@heroui/react";

export default function SectionHeader({
  title,
  accent,
  description,
  children,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto mb-14"
    >
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
