"use client";
import { useState } from "react";

const Toggle = ({ value, setValue, checked }) => {
  return (
    <div className="flex w-auto h-auto">
      <label className="flex flex-row w-full h-auto items-center p-2 relative">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={checked}
          onChange={(e) => setValue(!value)}
        />

        <div className="w-10 h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-0 rounded-full peer peer-checked:bg-green-500"></div>
        <div className="absolute left-[10px] top-[10px] w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
      </label>
    </div>
  );
};

export default Toggle;
