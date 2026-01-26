/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import ImagePopup from "@/components/molecules/popup/imagePopup";
import { useEffect, useRef, useState } from "react";

import CloseIcon from "@/public/assets/icons/close.svg";

const CurrentProjectsSection = ({ dict }: { dict: any }) => {
  const [popupIsOpen, setPopupIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const [imgUrlIndex, setImgUrlIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<any>("");

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
    <div className="flex flex-col w-full h-auto relative">
      {popupIsOpen && (
        <div className="fixed top-0 left-0 flex flex-col w-full h-full z-[90] bg-black/50 z-[600]">
          <div className="flex w-screen h-[100dvh] px-4 justify-center items-center">
            <div
              ref={popupRef}
              className="flex flex-col sm:flex-row w-full max-w-[1000px] h-[80%] sm:h-[60%] bg-white  rounded-sm overflow-hidden"
            >
              <div className="flex flex-col w-full sm:w-4/5 h-4/5 sm:h-full justify-center bg-gray-800 relative">
                <img
                  src={selectedProject.img_urls[imgUrlIndex]}
                  alt="car"
                  className="w-full h-auto object-cover object-center"
                />
                <div className="absolute top-0 flex sm:hidden w-full h-auto p-2 justify-end ">
                  <CloseIcon
                    className="w-6 h-6 cursor-pointer text-white"
                    onClick={() => setPopupIsOpen(false)}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full sm:w-1/5 h-1/5 sm:h-full p-4 gap-8">
                <div className="hidden sm:flex w-full justify-end">
                  <CloseIcon
                    className="w-6 h-6 cursor-pointer"
                    onClick={() => setPopupIsOpen(false)}
                  />
                </div>
                <p className="text-black text-xs sm:text-sm font-semibold">
                  {selectedProject?.model} - {selectedProject?.model_year}
                </p>
                <div className="flex flex-row sm:flex-col w-full h-auto rounded-sm overflow-scroll gap-4 pb-2 pr-2">
                  {selectedProject?.img_urls.map(
                    (img_url: any, index: number) => {
                      return (
                        <div key={index} className="flex">
                          <img
                            src={selectedProject?.img_urls[index]}
                            alt="car"
                            className="flex w-[100px] shrink-0 sm:w-full h-full object-cover object-center rounded-sm overflow-hidden cursor-pointer active:scale-95"
                            onClick={() => setImgUrlIndex(index)}
                          />
                        </div>
                      );
                    },
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 flex w-full h-auto mt-8 justify-center items-center gap-4">
        {dict?.restorations?.current_projects?.projects.map(
          (project: any, index: number) => {
            return (
              <ImagePopup
                project={project}
                key={index}
                setSelectedProject={setSelectedProject}
                popupIsOpen={popupIsOpen}
                setPopupIsOpen={setPopupIsOpen}
              />
            );
          },
        )}
      </div>
    </div>
  );
};

export default CurrentProjectsSection;
