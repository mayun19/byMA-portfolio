import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? "text-white bg-purple-500" : "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 md:first:ml-0 first:ml-6 px-4 md:px-6 py-3 text-xl cursor-pointer`} onClick={() => onClick(name)}>
      {name}
    </button>
  );
};

export default ProjectTag;
