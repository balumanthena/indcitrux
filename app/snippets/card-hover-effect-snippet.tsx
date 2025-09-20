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

/**
 * CitrUX Branded Hover Cards (blue/purple accents)
 */

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export type HoverItem = {
  icon?: React.ReactNode;
  title: string;
  description: string;
  href?: string;
  badges?: string[];
  imageSrc?: string;
};

export function HoverEffect({ items, className }: { items: HoverItem[]; className?: string }) {
  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {items.map((item, i) => (
        <HoverCard key={i} {...item} />
      ))}
    </div>
  );
}

function HoverCard({ icon, title, description, href, badges, imageSrc }: HoverItem) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-60, 60], [6, -6]);
  const rotateY = useTransform(x, [-60, 60], [-6, 6]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (r.left + r.width / 2));
    y.set(e.clientY - (r.top + r.height / 2));
  }

  const Wrapper = href ? "a" : "div";
  const wrapperProps = href ? { href, target: "_self", rel: "noreferrer" } : {};

  return (
    <motion.article
      onMouseMove={onMove}
      style={{ rotateX, rotateY }}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 24, mass: 0.5 }}
      className={cn(
        "group relative rounded-2xl border shadow-md",
        // CitrUX brand accent with subtle gradient
        "bg-gradient-to-b from-white to-white dark:from-neutral-900 dark:to-neutral-900/80",
        "border-neutral-200 dark:border-white/10",
        "p-6 flex flex-col gap-4 min-h-[220px]",
        "transition-all duration-300 will-change-transform"
      )}
      tabIndex={0}
      aria-label={title}
      role="article"
    >
      {/* branded glow */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl",
          "ring-0 group-hover:ring-4 group-focus:ring-4",
          // CitrUX blue-purple accent glow
          "group-hover:ring-blue-500/30 dark:group-hover:ring-purple-500/40",
          "transition-all duration-300"
        )}
        aria-hidden
      />

      {/* subtle brand edge highlight */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl",
          "[mask-image:linear-gradient(to_bottom,black,transparent_80%)]",
          "bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent",
          "opacity-0 group-hover:opacity-100 group-focus:opacity-100",
          "transition-opacity duration-300"
        )}
        aria-hidden
      />

      <Wrapper
        className={cn(
          "relative z-10 flex items-start gap-4 focus:outline-none",
          href && "after:absolute after:inset-0"
        )}
        {...(wrapperProps as any)}
      >
        {/* Icon or image slot */}
        {imageSrc ? (
          <div className="shrink-0 overflow-hidden rounded-xl border w-16 h-16 border-neutral-200 dark:border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imageSrc} alt="" className="w-full h-full object-cover" />
          </div>
        ) : (
          <div
            className={cn(
              "shrink-0 rounded-xl p-3",
              // Branded tile with gradient
              "bg-gradient-to-br from-blue-600 to-purple-600 text-white",
              "shadow-inner border border-white/20"
            )}
          >
            <div className="w-9 h-9 grid place-items-center">{icon}</div>
          </div>
        )}

        <div className="flex-1">
          <h3 className={cn("text-[15px] sm:text-base font-semibold tracking-tight", "text-neutral-900 dark:text-white")}>{title}</h3>
          <p className={cn("mt-1 text-[13px] sm:text-sm leading-relaxed", "text-neutral-700 dark:text-neutral-200")}>{description}</p>

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
      </Wrapper>

      <div className="mt-auto pt-2">
        <div
          className={cn(
            "h-px w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent dark:via-purple-500/40",
            "opacity-0 group-hover:opacity-100 group-focus:opacity-100",
            "transition-opacity duration-300"
          )}
        />
      </div>
    </motion.article>
  );
}

// ----------------------
// Demo with CitrUX branding
// ----------------------
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
    description: "Responsive, conversion-focused websites with crisp typography and balanced spacing.",
    href: "/services/web-design",
    badges: ["SEO-ready", "Next.js", "A11y"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E‑commerce Store",
    description: "Fast carts, clean PDPs, and streamlined checkout flows that scale.",
    href: "/services/ecommerce",
    badges: ["Stripe", "Analytics"],
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UI / UX",
    description: "Delightful, intuitive interfaces designed for clarity, speed, and consistency.",
    href: "/services/ui-ux",
    badges: ["Design Systems", "Prototyping"],
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Health Service",
    description: "Comprehensive R1 and RCM services with reliable, measurable outcomes.",
    href: "/services/health",
    badges: ["R1", "RCM"],
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "App Development",
    description: "Custom iOS & Android apps built for performance, stability, and growth.",
    href: "/services/apps",
    badges: ["iOS", "Android", "API"],
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Support",
    description: "Proactive support with clear SLAs—real people, real answers, on time.",
    href: "/support",
    badges: ["24/7", "SLA"],
  },
];

export default CardHoverEffectDemo;
