/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";

import CloseIcon from "@/public/assets/icons/close.svg";

const ImagePopup = ({
  project,
  setSelectedProject,
  popupIsOpen,
  setPopupIsOpen,
}: {
  project: any;
  setSelectedProject: any;
  popupIsOpen: boolean;
  setPopupIsOpen: any;
}) => {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleOpenPopup = () => {
    if (popupIsOpen) return;
    setPopupIsOpen(true);
    setSelectedProject(project);
  };

  return (
    <div
      className={`flex flex-col w-full h-[200px]
               rounded-sm overflow-hidden z-0`}
    >
      <div
        className="flex flex-col w-full h-full relative cursor-pointer active:scale-95 z-0"
        onClick={() => handleOpenPopup()}
      >
        <img
          src={project?.img_urls[0]}
          alt="car"
          className="w-full h-full object-cover object-center"
        />
        <div className="sm:absolute top-0 flex flex-col w-full h-full p-4 justify-end bg-linear-to-t from-gray-800/60 to-transparent hover:from-gray-800/20 hover:to-transparent">
          <p className="text-white/80 text-xs sm:text-sm font-semibold">
            Porsche {project?.model} - {project?.model_year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
