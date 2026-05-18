"use client";

import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Background = "canvas" | "warm" | "cool" | "deep";

const backgroundClass: Record<Background, string> = {
  canvas: "bg-canvas text-ink",
  warm: "bg-canvas-warm text-ink",
  cool: "bg-canvas-cool text-ink",
  deep: "bg-deep text-canvas",
};

export function SectionWrapper({
  id,
  background = "canvas",
  eyebrow,
  title,
  description,
  children,
  className,
  contentClassName,
}: {
  id: string;
  background?: Background;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={clsx(
        "relative isolate overflow-hidden border-b border-line/70",
        "px-6 py-20 sm:px-8 md:px-10 lg:px-12 lg:py-24",
        backgroundClass[background],
        className,
      )}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto w-full max-w-7xl">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow ? (
              <p className="type-eyebrow mb-4 text-ink-muted/90">{eyebrow}</p>
            ) : null}
            {title ? (
              <div className="type-display-medium text-4xl sm:text-5xl lg:text-6xl">
                {title}
              </div>
            ) : null}
            {description ? (
              <div className="type-body mt-6 text-lg text-current/74 sm:text-xl">
                {description}
              </div>
            ) : null}
          </div>
        )}
        <div className={contentClassName}>{children}</div>
      </div>
    </motion.section>
  );
}
