"use client";
import { memo, useState } from "react";
import Image from "next/image";
import Tool from "../helpers/tool"
import scrollToView from "../helpers/scrollToView";

const preventPropagation = (event) => {
  event.stopPropagation();
};

const ExperienceCard = ({
  employmentType,
  endDate,
  expandedContent,
  name,
  iconCompany,
  startDate,
  website,
  tools,
  handleExpand,
}) => {
  const [expandContent, setExpandContent] = useState(false);

  const handleOnClick = () => {
    handleExpand(name);
    setTimeout(
      () => scrollToView(`${name.toLocaleLowerCase()}-experience`),
      400
    );
  };

  const handleExpandContent = () => setExpandContent(!expandContent);

  const handleOnClickCompany = (event) => {
    if (website) {
      preventPropagation(event);
      window.open(website);
    }
  };

  return (
    <div className="flex space-x-4 w-full ml-3">
      <div className="w-[20px] h-[20px] bg-transparent rounded-full border-2 border-white absolute left-[7px]">
        <div className="w-[10px] h-[10px] bg-gradient-to-br purple-600 from-purple-500 to-pink-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>
      <div
        className="cursor-pointer flex-grow bg-[#181818] p-4 rounded-xl mt-[-30px] min-w-0 mb-10"
        onClick={handleOnClick}
        id={`${name.toLocaleLowerCase()}-experience`}>
        <div className="flex md:items-center items-start">
          <Image
            src={`/images/${iconCompany}.webp`}
            alt={`${iconCompany} logo`}
            className="w-[55px] mr-3 p-1 rounded-xl cursor-newTab"
            width={55}
            height={55}
            onClick={handleOnClickCompany}
          />
          <div className="flex-grow">
            <h3 className="font-bold text-sm md:text-lg text-white mb-2">
              {website ? (
                <a
                  href={website}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={handleOnClickCompany}
                  className="border-b-2 border-dotted border-white dark:text-white underline-offset-8">
                  {name}
                </a>
              ) : (
                name
              )}
            </h3>
            <div className="md:flex items-center dark:text-white text-xs">
              <p className="mr-2">{employmentType}</p>
              <div className="hidden md:mr-2 md:block w-1 h-1 bg-black rounded-full dark:bg-white" />
              <p>
                {startDate} - {endDate}
              </p>
            </div>
          </div>
          <div className="pr-4" onClick={handleExpandContent}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className={`transition-transform duration-300 ease-in-out ${
                expandContent ? "-rotate-180" : ""
              } fill-black dark:fill-white`}>
              <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
            </svg>
          </div>
        </div>
        <div className="px-2 pb-2 pt-4 min-w-0">
          <div
            className={
              expandContent == false
                ? "overflow-hidden transition-maxHeight duration-500 ease-in-out max-h-12"
                : "overflow-hidden transition-maxHeight duration-500 ease-in-out"
            }>
            <div className="text-base text-[#ADB7BE] break-word">
              {expandedContent}
              <div className="mt-4">
                <h4 className="font-medium text-white mb-4">Tech Stack : </h4>
                <div className="flex flex-wrap">
                  {tools.map((tool, idx) => (
                    <Tool name={tool} size="small" key={`${tool}-${idx}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ExperienceCard, (prevProps, nextProps) => {
  return prevProps.expand === nextProps.expand;
});
