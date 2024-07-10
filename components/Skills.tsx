"use client";

import React from "react";

import { companies, skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Skills </span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={skills.map((skill) => ({
              quote: skill.quote,
              name: skill.name || "",
              title: skill.title,
              image: skill.image,
            }))}
            direction="right"
            speed="normal"
          />
        </div>

        <div className="flex width-50flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
