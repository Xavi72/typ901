/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

import Burger from "@/public/assets/icons/burger.svg";
import CloseIcon from "@/public/assets/icons/close.svg";
import Instagram from "@/public/assets/icons/instagram.svg";
import Facebook from "@/public/assets/icons/facebook.svg";
import Whatsapp from "@/public/assets/icons/whatsapp.svg";
import EsFlag from "@/public/assets/icons/es-flag.svg";
import EnFlag from "@/public/assets/icons/en-flag.svg";
import FrFlag from "@/public/assets/icons/fr-flag.svg";

const HeaderMenu = ({ dict, lang }: { dict: any; lang: string }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleShowMenu = () => {
    if (menuIsOpen) {
      setShowMenu(false);
      setMenuIsOpen(false);
    } else {
      setMenuIsOpen(!menuIsOpen);
      setTimeout(() => setShowMenu(!showMenu), 800);
    }
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (showMenu && menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
        setMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [showMenu, setShowMenu]);

  const handleLanguageChange = (lang: string) => {
    router.push(`/${lang}`);
  };

  return (
    <div className="flex flex-col w-full h-full relative z-40">
      <div className="flex w-full h-full px-[2%] justify-between items-center gap-4 sm:gap-8 md:gap-8 relative">
        <Link
          href={`/${lang}`}
          className="flex w-20 md:w-32 shrink-0 h-auto cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
        >
          <img
            src="/assets/images/logo-typ901.webp"
            alt="logo typ901"
            className="w-full h-auto object-cover"
          />
        </Link>
        <div className="flex w-auto h-full items-center gap-8 text-white text-sm">
          <Burger
            className="w-8 h-8 text-red-500 hover:text-white cursor-pointer active:scale-95"
            onClick={() => handleShowMenu()}
          />
        </div>
      </div>
      <div
        className={`
            absolute top-0 right-0 
            flex flex-col w-full
            ${menuIsOpen ? "h-96" : "h-0"}
            bg-gray-800 border-b-[0.5px] border-red-500/20
            transition-[height] duration-1000 ease-in-out
            z-20`}
      >
        {showMenu && (
          <div ref={menuRef} className="flex flex-col w-full h-96 bg-gray-800">
            <div className="flex w-full h-20 px-[2%] justify-between items-center gap-4 sm:gap-8 md:gap-8 relative">
              <Link
                href={`/${lang}`}
                className="flex w-20 md:w-32 shrink-0 h-auto cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                onClick={() => handleShowMenu()}
              >
                <img
                  src="/assets/images/logo-typ901.webp"
                  alt="logo typ901"
                  className="w-full h-auto object-cover"
                />
              </Link>
              <div className="flex flex-row mt-4 justify-end ">
                <CloseIcon
                  className="w-8 h-8 text-red-500 cursor-pointer active:scale-95"
                  onClick={() => handleShowMenu()}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-full h-auto px-[5%] mt-8 justify-end">
              <div className="flex flex-col w-full md:w-auto h-auto ">
                <div className="flex flex-row w-full md:w-auto h-auto gap-8 md:gap-32 justify-around ">
                  <div className="flex flex-col w-auto h-auto gap-2 items-center ">
                    <p className="text-xs sm:text-sm text-white/50">
                      {dict?.menu?.menu_col_1?.title}
                    </p>
                    <ul className="flex flex-col w-auto h-auto gap-2">
                      {dict?.menu?.menu_col_1?.content?.map(
                        (item: any, index: any) => (
                          <li
                            key={index}
                            className="flex flex-col w-auto h-auto gap-2"
                          >
                            <Link
                              href={`/${lang}/${item.link}`}
                              target={item.target}
                              className="text-xs sm:text-sm text-center  text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                              onClick={() => handleShowMenu()}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="flex flex-col w-auto h-auto gap-2 items-center ">
                    <p className="text-xs sm:text-sm text-white/50">
                      {dict?.menu?.menu_col_2?.title}
                    </p>
                    <ul className="flex flex-col w-auto h-auto gap-2">
                      {dict?.menu?.menu_col_2?.content?.map(
                        (item: any, index: any) => (
                          <li
                            key={index}
                            className="flex flex-col w-auto h-auto gap-2"
                          >
                            <Link
                              href={`/${lang}/${item.link}`}
                              target={item.target}
                              className="text-xs sm:text-sm text-center  text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                              onClick={() => handleShowMenu()}
                            >
                              {item.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                    <div className="flex flex-row w-auto h-auto gap-2 items-center sm:items-start">
                      <Link
                        href="https://www.instagram.com/typ901_classic_porsche_expert/"
                        target="_blank"
                        onClick={() => handleShowMenu()}
                      >
                        <Instagram className="w-5 h-5 text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200" />
                      </Link>
                      <Link
                        href="https://wa.me/674571857"
                        target="_blank"
                        className="flex flex-row w-full h-auto items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-20"
                        rel="noopener noreferrer"
                        aria-label="whatsapp"
                        onClick={() => handleShowMenu()}
                      >
                        <Whatsapp className="w-5 h-5 text-white hover:text-white/50" />
                      </Link>
                      <Link
                        href="https://www.facebook.com/typ901"
                        target="_blank"
                        onClick={() => handleShowMenu()}
                      >
                        <Facebook className="w-5 h-5 text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row w-full h-auto justify-center">
                  <div className="flex flex-row w-auto h-auto mt-8 px-4 py-2 gap-4 bg-black/10 rounded-sm justify-center">
                    <EsFlag
                      className="w-5 h-5 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                      onClick={() => {
                        handleLanguageChange("es"), handleShowMenu();
                      }}
                    />
                    <EnFlag
                      className="w-5 h-5 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                      onClick={() => {
                        handleLanguageChange("en"), handleShowMenu();
                      }}
                    />
                    <FrFlag
                      className="w-5 h-5 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                      onClick={() => {
                        handleLanguageChange("fr"), handleShowMenu();
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default HeaderMenu;
