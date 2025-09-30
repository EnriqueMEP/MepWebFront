import React from "react";
import { HeroSection } from "./HeroSection";
import { ProjectDetailsSection } from "./ProjectDetailsSection";
import { ProjectsOverviewSection } from "./ProjectsOverviewSection";
import { StatisticsSection } from "./StatisticsSection";
import image from "./image.png";
import shape from "./shape.png";

export const Body = () => {
  return (
    <div className="flex flex-col w-[1440px] h-[2226px] items-center justify-between pr-[var(--cactus-tokens-semantic-padding-padding-20)] pl-[var(--cactus-tokens-semantic-padding-padding-20)] py-[150px] relative">
      <img
        className="top-[1121px] left-0 w-[446px] absolute h-[204px] aspect-[3.48] object-cover"
        alt="Shape"
        src={shape}
      />

      <HeroSection />
      <ProjectsOverviewSection />
      <StatisticsSection />
      <ProjectDetailsSection />
      <img
        className="top-[415px] left-[893px] w-[547px] absolute h-[204px] aspect-[3.48] object-cover"
        alt="Shape"
        src={image}
      />
    </div>
  );
};
