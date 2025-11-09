import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "motion/react";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    image : {
        src: string
    },
    position : string
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-[#38b6ff] block  rounded-3xl"
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
        <Card className="flex flex-row items-center gap-4 ">
            <div className="w-1/2 shrink-0">
                <CardImage src={item.image.src} className="h-32 md:h-40 lg:h-48" />
            </div>
            <div className="flex flex-col justify-center flex-1 min-w-0">
              <div className="min-w-0">
                <CardTitle className="mt-0 truncate">{item.title}</CardTitle>
                <CardPosition className="mt-1">{item.position}</CardPosition>
              </div>
              <CardDescription className="mt-2">{item.description}</CardDescription>
            </div>
        </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full overflow-hidden bg-white border border-transparent group-hover:border-slate-100 relative z-20 p-3",
        className
      )}
    >
      
    {children}
    </div>
      

  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black text-xl font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardPosition = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-slate-500 text-sm font-semibold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-800 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) => {
  return (
    <div className={cn("w-full overflow-hidden rounded-xl bg-transparent", className)}>
      <img
        src={src}
        alt={alt ?? ""}
        loading="lazy"
        className="w-full h-full object-cover block"
      />
    </div>
  );
};
