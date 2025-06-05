'use client';

import { cn } from "@/lib/utils";
import React from "react";

export const Marquee = ({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  duration = "40s",
  gap = "1rem",
}: {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  duration?: string;
  gap?: string;
}) => {
  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        vertical ? "flex-col" : "",
        className
      )}
      style={{
        '--duration': duration,
        '--gap': gap,
      } as React.CSSProperties}
    >
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent" />

      {/* First copy */}
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] animate-marquee",
          vertical ? "flex-col" : "",
          reverse ? "[animation-direction:reverse]" : "",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        )}
      >
        {children}
      </div>

      {/* Second copy */}
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-[--gap] animate-marquee",
          vertical ? "flex-col" : "",
          reverse ? "[animation-direction:reverse]" : "",
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        )}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
}; 