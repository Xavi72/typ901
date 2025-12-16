/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Toggle from "@/components/elements/toggle/toggle";
import { useState, useEffect } from "react";

const CookieBanner = ({ dict, lang }: { dict: any; lang: string }) => {
  const [openSettings, setOpenSettings] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [gaCookies, setGaCookies] = useState(false);

  const [acceptButton, setAcceptButton] = useState("Aceptar todos");
  const [hideBanner, setHideBanner] = useState(false);

  useEffect(() => {
    // Load saved preferences
    const savedGa = localStorage.getItem("ga_cookies");

    setGaCookies(savedGa === "true");
  }, []);

  const handleOpenSettings = () => {
    if (!openSettings) {
      setOpenSettings(!openSettings);
      setTimeout(() => {
        setShowSettings(!showSettings);
      }, 500);
    }

    if (openSettings) {
      setShowSettings(!showSettings);
      setOpenSettings(!openSettings);
    }
  };

  const handleSavePreferences = () => {
    // Save preferences to localStorage
    localStorage.setItem("ga_cookies", gaCookies.toString());

    // Hide banner
    localStorage.setItem("showBanner", "false");
    setHideBanner(true);
  };

  const handleAcceptAll = () => {
    setGaCookies(true);
    handleSavePreferences();
  };

  const handleGetCookies = () => {
    const showBanner = localStorage.getItem("showBanner");
    if (showBanner === "false") {
      setHideBanner(true);
    } else {
      if (localStorage.getItem("gaCookies") !== "false") {
        setGaCookies(true);
      }
    }
  };

  useEffect(() => {
    handleGetCookies();
  }, []);

  useEffect(() => {
    handleGetCookies();
  }, [showSettings]);

  useEffect(() => {
    if (gaCookies === true) {
      setAcceptButton("Aceptar todo");
    }
  }, [gaCookies]);

  const handleSaveAllCookies = () => {
    setGaCookies(true);
    localStorage.setItem("gaCookies", "true");
    localStorage.setItem("showBanner", "false");
    setHideBanner(true);
  };

  const handleSaveCookies = () => {
    localStorage.setItem("gaCookies", String(gaCookies));
    localStorage.setItem("showBanner", "false");
    setHideBanner(true);
    /*  const newValue = gaCookies ? "granted" : "denied";
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    } */
  };

  const handleRejectAllCookies = () => {
    setGaCookies(false);
    localStorage.setItem("gaCookies", "false");
    localStorage.setItem("showBanner", "false");
    setHideBanner(true);
  };

  /* useEffect(() => {
    const newValue = gaCookies ? "granted" : "denied";
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: newValue,
      });
    }
    localStorage.setItem("gaCookies", gaCookies);
  }, [gaCookies]); */

  return (
    <div
      className={`${
        hideBanner ? "hidden" : "fixed"
      } bottom-0 left-0 w-full max-w-[440px] h-auto  px-4 sm:px-0 sm:pl-6 pb-4 overflow-hidden z-[200] `}
    >
      <div className="flex flex-col w-full h-full py-4 px-2 sm:px-4 bg-tertiary border-[0.5px] border-gray-500/30 rounded-sm bg-gray-800">
        <p className="text-sm sm:text-base font-medium text-secondary text-white">
          {dict?.cookies?.banner_title}
        </p>
        <div className="flex flex-row items-center justify-between w-full mt-2">
          <p className="text-xs sm:text-sm text-secondary text-white">
            {dict?.cookies?.banner_text}
          </p>
        </div>

        <div
          className={`flex flex-col w-full ${
            openSettings ? "h-28 my-4" : "h-0 mt-6"
          }  transition-[height] duration-1000 ease-in-out`}
        >
          <div
            className={`${
              showSettings ? "flex" : "hidden"
            } flex-col w-full h-auto`}
          >
            <div className="flex flex-col w-full h-auto">
              <div className="flex flex-col w-full h-auto pl-2">
                <div className="flex flex-col w-full h-auto">
                  <div className="flex flex-row w-full h-auto items-center justify-between">
                    <p className="text-xs sm:text-sm text-secondary text-white">
                      {dict?.cookies?.cookie1}
                    </p>
                    <Toggle
                      value={gaCookies}
                      checked={gaCookies && "checked"}
                      setValue={() => setGaCookies(!gaCookies)}
                    />
                  </div>
                  <div className="flex w-full h-auto mt-2">
                    <span className="text-xs text-primary text-white">
                      {dict?.cookies?.cookie1_text}
                    </span>
                  </div>
                  <div className="flex w-full h-[0.5px] mt-4 bg-gray-500/50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row flex-wrap w-full h-auto justify-around items-center gap-2">
          <button
            className="flex w-auto h-auto text-xs sm:text-sm text-white border-[0.5px] border-gray-500/50 rounded-sm px-2 sm:px-4 py-2 bg-white/10 justify-center items-center cursor-pointer active:scale-95"
            onClick={() => {
              handleOpenSettings(), handleGetCookies();
            }}
          >
            {dict?.cookies?.setting_button}
          </button>

          <button
            className="flex w-auto h-auto text-xs sm:text-sm text-primary text-white border-[0.5px] border-gray-500/50 rounded-sm px-4 py-2 cursor-pointer active:scale-95"
            onClick={() => handleRejectAllCookies()}
          >
            {dict?.cookies?.reject_button}
          </button>
          <button
            className="flex w-auto h-auto text-xs sm:text-sm text-white bg-secondary border-[0.5px] border-secondary/50 rounded-sm px-4 py-2 cursor-pointer active:scale-95"
            onClick={() => {
              acceptButton === "Aceptar"
                ? handleSaveCookies()
                : handleSaveAllCookies();
            }}
          >
            {dict?.cookies?.accept_button}
          </button>
        </div>
      </div>
    </div>
  );
};
export default CookieBanner;
