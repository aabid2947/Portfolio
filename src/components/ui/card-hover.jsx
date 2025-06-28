import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { GlowButton } from "@/components/ui/glow-button"; // adjust this import based on your structure

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.liveLink || "#"}
          key={item.githubLink}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={(e) => {
            if (!item.liveLink) e.preventDefault();
          }}
          target="_blank"
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl z-0"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.Name}</CardTitle>
            <CardDescription>{item.Desc}</CardDescription>

            {/* Buttons for GitHub and Live */}
            <div className="mt-4 flex gap-3">
              <a href={item.githubLink} target="_blank"   onClick={(e) => {
    console.log(item.githubLink);
  }}>
                <GlowButton  variant="cached">
                  GitRepo <span className="ml-2">↗</span>
                </GlowButton>
              </a>

              <a
                href={item.liveLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (!item.liveLink) e.preventDefault();
                }}
              >
                <GlowButton variant="live" disabled={!item.liveLink}>
                  Live <span className="ml-2">↗</span>
                </GlowButton>
              </a>
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-10 rounded-2xl h-full w-full p-4 overflow-hidden bg-zinc-950 border border-transparent dark:border-yellow/[0.2] group-hover:border-yellow-700",
        className
      )}
    >
      <div className="relative z-10">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold text-lg tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p className={cn("mt-4   font-mono text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>
  );
};
