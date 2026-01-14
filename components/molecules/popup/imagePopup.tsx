/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef, useState } from "react";

import CloseIcon from "@/public/assets/icons/close.svg";

const ImagePopup = ({ project, index }: { project: any; index: number }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [imgUrlIndex, setImgUrlIndex] = useState(0);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (
        popupIsOpen &&
        popupRef.current &&
        !popupRef.current.contains(e.target)
      ) {
        setPopupIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [setPopupIsOpen, popupIsOpen]);

  return (
    <div
      className={`flex flex-col w-full sm:max-w-[400px] h-[200px]
               rounded-sm overflow-hidden z-10`}
    >
      {popupIsOpen && (
        <div className="fixed top-0 left-0 flex flex-col w-full h-full z-30 bg-black/50 ">
          <div className="flex w-screen h-[100dvh] px-2 justify-center items-center z-40">
            <div
              ref={popupRef}
              className="flex flex-col sm:flex-row w-full max-w-[1000px] h-[80%] sm:h-[60%] bg-white  rounded-sm overflow-hidden"
            >
              <div className="flex flex-col w-full sm:w-4/5 h-4/5 sm:h-full justify-center bg-gray-800 relative">
                <img
                  src={project?.img_urls[imgUrlIndex]}
                  alt="car"
                  className="w-full h-auto object-cover object-center z-0"
                />
                <div className="absolute top-0 flex sm:hidden w-full h-auto p-2 justify-end z-50 ">
                  <CloseIcon
                    className="w-6 h-6 cursor-pointer text-white"
                    onClick={() => setPopupIsOpen(false)}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-1/5 h-1/5 sm:h-full p-4 gap-8">
                <div className="hidden sm:flex w-full justify-end z-50">
                  <CloseIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setPopupIsOpen(false)}
                  />
                </div>
                <p className="text-black text-xs sm:text-sm font-semibold">
                  Porsche {project?.model} - {project?.model_year}
                </p>
                <div className="flex flex-col w-[100px]sm:w-full h-auto rounded-sm overflow-hidden gap-4">
                  {project?.img_urls.map((img_url: any, index: number) => {
                    return (
                      <img
                        key={index}
                        src={project?.img_urls[index]}
                        alt="car"
                        className="flex w-[100px] sm:w-full h-full object-cover object-center rounded-sm overflow-hidden cursor-pointer active:scale-95"
                        onClick={() => setImgUrlIndex(index)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="flex flex-col w-full h-full relative cursor-pointer active:scale-95"
        onClick={() => setPopupIsOpen(!popupIsOpen)}
      >
        <img
          src={project?.img_urls[0]}
          alt="car"
          className="w-full h-full object-cover object-center z-0"
        />
        <div className="absolute top-0 flex flex-col w-full h-full p-4 justify-end bg-linear-to-t from-black/40 to-black/20 hover:from-black/20  hover:to-black/5 z-20">
          <p className="text-white/80 text-xs sm:text-sm font-semibold">
            Porsche {project?.model} - {project?.model_year}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImagePopup;
