"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  MonitorSmartphone,
  ShoppingCart,
  Palette,
  Heart,
  Smartphone,
  Headphones,
} from "lucide-react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type HoverItem = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  badges?: string[];
  imageSrc?: string;
};

export function HoverEffect({ items, className }: { items: HoverItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {items.map((item, i) => (
        <HoverCard key={i} {...item} />
      ))}
    </div>
  );
}

function HoverCard({ icon, title, description, badges, imageSrc }: HoverItem) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [8, -8]);
  const rotateY = useTransform(x, [-60, 60], [-8, 8]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY }}
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20, mass: 0.5 }}
      className={cn(
        "relative group rounded-2xl border shadow-md overflow-hidden",
        "bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-neutral-900 dark:via-blue-950/30 dark:to-purple-950/30",
        "border-neutral-200 dark:border-white/10",
        "p-6 flex flex-col justify-between min-h-[280px] h-[280px]",
        "transition-all duration-300 will-change-transform transform-gpu"
      )}
      tabIndex={0}
      aria-label={title}
      role="article"
    >
      {/* Outer glow (brand accent) */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] dark:shadow-[0_0_45px_-10px_rgba(147,51,234,0.5)]"
        )}
        aria-hidden
      />

      {/* Top gradient light */}
      <div
        className={cn(
          "absolute inset-0 rounded-2xl",
          "bg-gradient-to-t from-transparent via-blue-500/5 to-purple-500/10",
          "opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        )}
        aria-hidden
      />

      <div className="relative z-10 flex items-start gap-4">
        {imageSrc ? (
          <div className="shrink-0 overflow-hidden rounded-xl border w-16 h-16 border-neutral-200 dark:border-white/10">
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className={cn(
              "shrink-0 rounded-xl p-3",
              "bg-gradient-to-br from-blue-600 to-purple-600 text-white",
              "shadow-inner border border-white/20"
            )}
          >
            <div className="w-9 h-9 grid place-items-center">{icon}</div>
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-[15px] sm:text-base font-semibold tracking-tight text-neutral-900 dark:text-white">
            {title}
          </h3>
          <p className="mt-1 text-[13px] sm:text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
            {description}
          </p>

          {badges?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {badges.map((b, i) => (
                <span
                  key={i}
                  className={cn(
                    "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium",
                    "border-blue-500/30 text-blue-700 bg-blue-50",
                    "dark:border-purple-500/30 dark:text-purple-200 dark:bg-purple-900/30"
                  )}
                >
                  {b}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </div>

      {/* Bottom light line */}
      <div className="mt-auto pt-2">
        <div
          className={cn(
            "h-px w-full bg-gradient-to-r from-transparent via-blue-400/70 to-transparent dark:via-purple-500/60",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        />
      </div>
    </motion.article>
  );
}

// Demo Component
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects: HoverItem[] = [
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Website Design",
    description:
      "Responsive, conversion-focused websites with crisp typography and balanced spacing.",
    badges: ["SEO-ready", "Next.js", "A11y"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Store",
    description:
      "Fast carts, clean PDPs, and streamlined checkout flows that scale.",
    badges: ["Stripe", "Analytics"],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI / UX",
    description:
      "Delightful, intuitive interfaces designed for clarity, speed, and consistency.",
    badges: ["Design Systems", "Prototyping"],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health Service",
    description:
      "Comprehensive R1 and RCM services with reliable, measurable outcomes.",
    badges: ["R1", "RCM"],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App Development",
    description:
      "Custom iOS & Android apps built for performance, stability, and growth.",
    badges: ["iOS", "Android", "API"],
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Support",
    description:
      "Proactive support with clear SLAs—real people, real answers, on time.",
    badges: ["24/7", "SLA"],
  },
];

export default CardHoverEffectDemo;
