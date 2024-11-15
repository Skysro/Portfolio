"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import { PiAirplaneTilt } from "react-icons/pi";
import { GlareCard } from "./ui/GlareCard";

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add("grow");
    }
  }, []);

  return (
    <div className="pb-20 pt-36 relative">
      <div className="absolute inset-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-20 -left-30 md:-left-32 md:-top-20 h-screen"
          fill="purple"
        />
        <Spotlight
          className="-top-28 -left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center relative my-20 z-10 space-y-8 md:space-y-0 md:space-x-8 px-4 md:px-0">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2
            ref={titleRef}
            className="uppercase tracking-widest text-xs text-center pb-3 text-blue-100 max-w-80 transform transition-transform duration-1000"
          >
            Pritam <span className="text-purple"> Panda </span>
          </h2>
          <TextGenerateEffect
            className="text-left text-2xl text-[40px] md:text-4xl lg:text-5xl"
            words="I love to build web applications to help make world a better place."
          />
          <p className="text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I&apos;m a full stack developer with a passion for creating dynamic
            and interactive web applications.
          </p>
          <a href="#about">
            <MagicButton
              title="About Me"
              icon={<PiAirplaneTilt />}
              position="right"
              handleClick={() => {}}
              otherClasses=""
            />
          </a>
        </div>
        <div className="flex justify-center items-center">
          <GlareCard className="flex flex-col items-center justify-center">
            <Image
              className="relative inset-0 object-cover"
              src="https://firebasestorage.googleapis.com/v0/b/silent-echoes.appspot.com/o/profileImages%2FSkysro420?alt=media&token=d83f4709-1f2b-49cb-9ebc-9d43e11db222"
              alt="Profile Image"
              width={230}
              height={230}
            />
          </GlareCard>
        </div>
      </div>
    </div>
  );
};

export default Hero;
