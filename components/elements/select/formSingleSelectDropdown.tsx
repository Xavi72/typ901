/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect, useRef } from "react";
import ArrowDown from "@/public/assets/icons/arrow-down.svg";

const FormSingleSelectDropdown = ({
  noOptionsMessage,
  options,
  selectedValue,
  setSelectedSlug,
  setSelectedOption,
}: any) => {
  const [dropdownIsOpened, setDropdownIsOpened] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInputValue(selectedValue);
  }, [selectedValue]);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (dropdownIsOpened && ref.current && !ref.current.contains(e.target)) {
        setDropdownIsOpened(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [dropdownIsOpened, setDropdownIsOpened]);

  const toggleOption = (option: any) => {
    const newValue = inputValue === option ? "" : option;
    setInputValue(newValue);
    setSelectedOption(newValue);
  };

  return (
    <div className="c-multi-select-dropdown relative" ref={ref}>
      <div
        className="flex w-full auto min-h-8 py-2 justify-between items-center border-b-[0.5px] border-gray-500/50 cursor-pointer"
        onClick={() => setDropdownIsOpened(!dropdownIsOpened)}
      >
        <div className="flex flex-row w-full h-auto px-4 py-0 justify-between items-center">
          <span
            className={`flex  ${
              inputValue ? "text-white text-sm" : "text-white/60 italic text-xs"
            }`}
          >
            {inputValue || noOptionsMessage}
          </span>
          <ArrowDown
            className={`ml-4 shrink-0 w-2 h-2 text-white fill-current transition-all duration-200 group-hover:text-gray-500 ${
              dropdownIsOpened &&
              "transform rotate-180 transition-all duration-200"
            }`}
          />
        </div>
      </div>
      {dropdownIsOpened && (
        <div className="absolute flex flex-col w-full gap-1 bg-gray-800 rounded-sm border-b-[0.5px] border-gray-500/20 z-50 cursor-pointer">
          {options.map((option: any, index: any) => (
            <div
              key={index}
              className="flex flex-row w-full px-4 py-2 text-white/80 hover:text-white/60 hover:bg-gray-500/20 items-center"
            >
              <span
                className={`text-sm  ${
                  inputValue === option.text ? "text-white" : "text-white/60"
                } text-sm cursor-pointer`}
                onClick={() => {
                  toggleOption(option.text);
                  setSelectedSlug(option.slug);
                  setDropdownIsOpened(false);
                }}
              >
                {option.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FormSingleSelectDropdown;
