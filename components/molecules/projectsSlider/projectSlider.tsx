/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

const ProjectSlider = ({ dict }: { dict: any }) => {
  const [currentProject, setCurrentProject] = useState(
    dict?.content?.[0]?.title || ""
  );
  const [selectedProject, setSelectedProject] = useState(
    dict?.content?.[0]?.image_url || ""
  );
  return (
    <div className="flex flex-col w-full h-auto ">
      <div className="flex flex-col-reverse md:flex-row w-full h-auto mt-8 gap-4 md:gap-8">
        <div className="flex w-full md:w-1/2 h-auto min-h-[360px] max-h-[360px] gap-4 rounded-sm overflow-hidden">
          <img
            src={`${selectedProject}` || "/assets/images/rk-1965.webp"}
            alt="typ901 responsability"
            className="flex w-full h-[360px] object-cover object-center rounded-sm brightness-90 hover:brightness-100"
          />
        </div>
        <div className="flex flex-row md:flex-col w-full md:w-1/2 h-auto gap-2 md:gap-4 overflow-scroll">
          {dict?.content?.map((content: any) => (
            <div
              key={content?.title}
              className={`flex flex-col w-auto md:w-full h-auto md:h-1/3 gap-2 items-center rounded-sm px-4 py-2 cursor-pointer ${
                currentProject === content?.title
                  ? "border-[2px] border-red-500"
                  : "border-[0.5px] border-red-500/40 "
              } `}
              onClick={() => {
                setCurrentProject(content?.title);
                setSelectedProject(content?.image_url);
              }}
            >
              <p className="flex w-full h-auto text-sm md:text-base text-white font-semibold text-pretty whitespace-nowrap">
                {content?.title}
              </p>
              <p className="hidden md:flex w-full h-auto text-xs md:text-sm text-white/50 font-normal text-pretty">
                {content?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSlider;
