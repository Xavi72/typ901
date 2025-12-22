/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import CustomCheckBox from "@/components/elements/checkbox/customCheckbox";
import { useState } from "react";

const NewsletterSubscription = ({ dict }: { dict: any }) => {
  const [emailValue, setEmailValue] = useState("");
  const [consent, setConsent] = useState(false);

  return (
    <div className="flex flex-col w-full  h-full px-2 justify-center items-center md:items-start gap-4">
      <div className="flex flex-row w-auto h-auto items-center gap-2">
        <span className="text-white/60 text-sm font-light">
          {dict?.stay_updated}
        </span>
        {/* <div className="flex flex-col w-auto h-auto items-center gap-2">
          {errorConsent && (
            <span className="text-red-500 text-sm">{dict.error_consent}</span>
          )}
          {errorEmail && (
            <span className="text-red-500 text-sm">{dict.error_email}</span>
          )}
        </div> */}
      </div>
      <div className="flex flex-row w-auto h-auto gap-4">
        <label htmlFor="email" className="hidden" />

        <input
          type="text"
          placeholder="Email"
          aria-label="Email"
          className="flex w-auto min-w-48 h-auto pl-2 py-1 bg-white text-black border rounded-md text-sm placeholder:text-sm focus:ring-0 focus:outline-none"
          value={emailValue}
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
        />
        <div
          className="flex w-auto h-auto px-4 py-2 justify-center items-center bg-gray-700 rounded-md text-white text-sm font-light cursor-pointer hover:bg-gray-600 active:scale-95"
          /* onClick={() => {
            handleSubscribe();
          }} */
        >
          {dict?.subscribe}
        </div>
      </div>
      <div className="flex flex-row w-auto h-auto gap-4 items-center">
        <CustomCheckBox
          id="id"
          name="name"
          setInputValue={setConsent}
          inputValue={consent}
        />
        <span className="flex flex-row text-white/70 text-sm font-light gap-1 whitespace-nowrap">
          {dict?.consent.acceptation}
          <div className="text-white/40 hover:text-gray-500 cursor-pointer active:scale-95">
            {dict?.consent.terms}
          </div>
          {dict?.consent.and}
          <div className="text-white/40 hover:text-gray-500 cursor-pointer active:scale-95">
            {dict?.consent.policies}
          </div>
        </span>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
