"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface Item {
  quote: string;
  name: string;
  title: string;
  image: string;
}

interface InfiniteMovingCardsProps {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      setDirection();
      setSpeed();
      setStart(true);
    }
  };

  const setDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty(
        "--animation-direction",
        animationDirection
      );
    }
  };

  const setSpeed = () => {
    if (containerRef.current) {
      let duration;
      switch (speed) {
        case "fast":
          duration = "10s";
          break;
        case "normal":
          duration = "20s";
          break;
        case "slow":
          duration = "40s";
          break;
        default:
          duration = "20s";
      }
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 h-64 md:h-80 lg:h-96 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 md:gap-8 py-4 w-full flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-8 lg:p-12"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={item.image}
                alt="item"
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4"
              />
              <span className="relative z-20 text-sm md:text-base lg:text-lg leading-[1.6] text-white font-normal text-center">
                {item.quote}
              </span>
            </div>
          </li>
        ))}
        {/* Duplicate items for smooth infinite scrolling */}
        {items.map((item, idx) => (
          <li
            key={`duplicate-${idx}`}
            className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-800 p-5 md:p-8 lg:p-12"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={item.image}
                alt="item"
                className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 mb-4"
              />
              <span className="relative z-20 text-sm md:text-base lg:text-lg leading-[1.6] text-white font-normal text-center">
                {item.quote}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
