"use client";

import { useState } from "react";
import CustomCheckBox from "@/components/elements/checkbox/customCheckbox";
import FormSingleSelectDropdown from "@/components/elements/select/formSingleSelectDropdown";
import ActionButtonDouble from "@/components/elements/button/actionButtonDouble";
/* eslint-disable @typescript-eslint/no-explicit-any */
const ContactForm = ({ dict }: { dict: any }) => {
  const [loading, setLoading] = useState(false);
  const [errorSending, setErrorSending] = useState(false);
  const [errorUploading, setErrorUploading] = useState(false);
  const [successSending, setSuccessSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [contactType, setContactType] = useState("");
  const [firstnameValue, setFirstnameValue] = useState("");
  const [lastnameValue, setLastnameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState("opcion-1");

  const handleSubmit = () => {};

  const handleReset = () => {};

  return (
    <div className="flex flex-col w-full h-auto justify-start items-start gap-2  relative">
      <div
        className={`
        flex flex-col 
        w-full max-w-[900px] h-auto
        sm:p-8 
        sm:border-[0.5px] sm:border-gray-700/50
        rounded-sm 
        `}
      >
        <div className="flex flex-col w-full h-full relative ">
          <form className="flex flex-col w-full h-auto justify-between ">
            <div className="flex flex-col w-full h-auto pb-12 item-center">
              <p className="font-light text-white/40 text-[10px] sm:text-xs text-center">
                ({dict?.requiered_fields})
              </p>
            </div>
            <div className="flex flex-row w-full h-auto items-center gap-4 sm:gap-8">
              <div className="flex flex-col w-full h-auto">
                <div className="flex flex-row w-auto h-auto items-center gap-2">
                  <label
                    htmlFor="contact_type"
                    className="text-sm text-white/80 font-light text-left whitespace-nowrap"
                  >
                    {dict?.contact_type} *
                  </label>
                </div>
                <FormSingleSelectDropdown
                  options={dict?.contact_options}
                  selectedValue={contactType}
                  setSelectedOption={setContactType}
                  noOptionsMessage={dict?.select_contact_type}
                  setSelectedSlug={setSelectedSlug}
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full h-auto mt-4 sm:mt-8 items-center gap-4 sm:gap-8">
              <div className="flex flex-col w-full h-auto ">
                <div className="flex flex-row w-full h-auto gap-4">
                  <label
                    htmlFor="firstname"
                    className="text-sm text-white/80 font-light text-left whitespace-nowrap"
                  >
                    {dict?.firstname} *
                  </label>
                </div>
                <input
                  id="firstname"
                  name="firstname"
                  type="text"
                  value={firstnameValue}
                  required
                  className="flex w-full h-8 pl-4 text-white text-base text-decoration-none bg-transparent focus:ring-0 focus:outline-none border-b-[0.5px] border-gray-500/50 text-white"
                  onChange={(e) => setFirstnameValue(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full h-auto ">
                <div className="flex flex-row w-full h-auto gap-4">
                  <label
                    htmlFor="lastname"
                    className="text-sm text-white/80 font-light text-left whitespace-nowrap"
                  >
                    {dict?.lastname} *
                  </label>
                </div>
                <input
                  id="lastname"
                  name="lastname"
                  type="text"
                  value={lastnameValue}
                  required
                  className="flex w-full h-8 pl-4 text-white text-base text-decoration-none bg-transparent focus:ring-0 focus:outline-none border-b-[0.5px] border-gray-500/50 text-white"
                  onChange={(e) => setLastnameValue(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full h-auto mt-4 sm:mt-8 items-center gap-4 sm:gap-8">
              <div className="flex flex-col w-full h-auto ">
                <div className="flex flex-row w-full h-auto gap-4">
                  <label
                    htmlFor="phone"
                    className="text-sm text-white/80 font-light text-left whitespace-nowrap"
                  >
                    {dict?.phone} *
                  </label>
                </div>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={phoneValue}
                  required
                  className="flex w-full h-8 pl-4 text-white text-base text-decoration-none bg-transparent focus:ring-0 focus:outline-none border-b-[0.5px] border-gray-500/50 text-white"
                  onChange={(e) => setPhoneValue(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full h-auto ">
                <div className="flex flex-row w-full h-auto gap-4">
                  <label
                    htmlFor="email"
                    className="text-sm text-white/80 font-light text-left whitespace-nowrap"
                  >
                    {dict?.email} *
                  </label>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={emailValue}
                  required
                  className="flex w-full h-8 pl-4 text-white text-base text-decoration-none bg-transparent focus:ring-0 focus:outline-none border-b-[0.5px] border-gray-500/50 text-white"
                  onChange={(e) => setEmailValue(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row w-full h-auto mt-4 sm:mt-8 items-center gap-4 sm:gap-8">
              <div className="flex flex-col w-full h-auto ">
                <div className="flex flex-row w-full h-auto gap-4">
                  <label
                    htmlFor="userMessage"
                    className="text-sm text-white/80 font-light text-left whitespace-nowrap"
                  >
                    {dict?.user_message}
                  </label>
                </div>
                <textarea
                  id="userMessage"
                  name="userMessage"
                  value={userMessage}
                  required
                  className="flex w-full h-8 pl-4 text-white text-base text-decoration-none bg-transparent focus:ring-0 focus:outline-none border-b-[0.5px] border-gray-500/50 text-white"
                  onChange={(e) => setUserMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-row w-auto h-auto gap-4 items-center mt-8">
              <CustomCheckBox
                id="id"
                name="name"
                setInputValue={setConsent}
                inputValue={consent}
              />
              <span className="flex flex-row text-white/70 text-sm font-light gap-1 whitespace-nowrap">
                {dict?.consent.acceptation}
                <div className="text-white/40 hover:text-gray-500 cursor-pointer active:scale-95">
                  {dict?.consent.policies}
                </div>
              </span>
            </div>
            <div className="flex flex-col w-full h-auto mt-8">
              <div className="flex w-full h-auto mt-0 justify-center items-center">
                <ActionButtonDouble
                  buttonText1={dict?.button_text1}
                  action1={() => {
                    handleReset();
                  }}
                  buttonText2={dict?.button_text2}
                  action2={() => handleSubmit()}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
