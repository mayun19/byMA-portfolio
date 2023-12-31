"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const ProjectsData = [
  {
    id: 1,
    title: "SAKAWISATA",
    description:
      "web-based tourism information system for Kampung Wisata Kauman",
    image: "/images/sakawisata.png",
    tag: ["All", "Fullstack"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-Assets",
    description:
      "an Employee Assets Management created for make it easier for users to request and monitor the employee assets",
    image: "/images/e-assets.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Lazy Event",
    description:
      "an Event Planning App created for event planning management and the purpose of study in Sirclo Tech Academy.",
    image: "/images/lazyevent.png",
    tag: ["All", "Frontend"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const FilteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects" className="min-h-screen">
      <div className="flex flex-col gap-6">
        <h2 className="text-center text-4xl font-bold text-white mt-4">
          My Project
        </h2>
        <div className="text-white flex overflow-x-scroll justify-center items-center gap-3 sm:gap-2 py-4">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Frontend"
            isSelected={tag === "Frontend"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Fullstack"
            isSelected={tag === "Fullstack"}
          />
        </div>
        <div className="grid md:grid-cols-3 place-content-center gap-8 md:gap-12">
          {FilteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
        <div className="flex w-full flex-row items-center justify-center">
          <a
            href="/"
            target="_blank"
            className="text-[#ADB7BE] text-base hover:text-white underline decoration-dashed underline-offset-8">
            See All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
