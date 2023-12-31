"use client";
import { useCallback, useState } from "react";
import ExperienceCard from "./ExperienceCard";
import Experience from "../data";

const ExperienceSection = () => {
  const [target, setTarget] = useState("");

  const handleExpand = useCallback((name) => {
    setTarget((prev) => (prev === name ? "" : name));
  }, []);

  return (
    <section id="experiences" className="w-full">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl text-center text-white font-bold pb-12">
          Work Experiences
        </h2>
        <div className="flex pl-4 relative">
          <div className="w-[2px] border-l-2 border-black dark:border-white border-solid"></div>
          <div className="w-full space-y-4 mt-12">
            {Experience.map((experience, idx) => (
              <ExperienceCard
                key={`${experience.name}-${idx}`}
                {...experience}
                expand={target === experience.name}
                handleExpand={handleExpand}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
