/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import RightArrow from "@/public/assets/icons/arrow-right.svg";

const ServicesSection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  return (
    <section className="flex flex-col w-full h-auto min-h-[100dvh] justify-center items-center overflow-scroll">
      <div className="flex flex-col md:flex-row w-full h-full ">
        <div className="flex flex-col w-full md:w-1/2 h-2/5 md:h-full bg-gray-900/30  overflow-hidden">
          <img
            src="/assets/images/front-workshop-typ901.png"
            alt="Type901 workshop front door"
            className="w-auto h-full object-cover object-top-right"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-full px-4 md:px-8">
          <div className="flex flex-col w-full h-full justify-center gap-6 md:gap-8">
            <div className="flex flex-row flex-wrap w-full h-auto px-4 md:px-0 justify-center text-center gap-x-4 gap-y-0">
              {dict?.landing?.services?.title.map(
                (text: string, index: number) => (
                  <h2
                    key={index}
                    className="font-typ901 text-red-500 text-[16px] sm:text-[26px] font-normal text-pretty text-center text-shadow-black text-shadow-sm"
                  >
                    {text}
                  </h2>
                )
              )}
            </div>
            <div className="flex flex-row flex-wrap w-full h-auto justify-center gap-2">
              {dict?.landing?.services?.subtitle?.map(
                (subtitle: string, index: number) => (
                  <h3
                    key={index}
                    className="flex h-6 text-sm sm:text-base text-white font-medium"
                  >
                    {subtitle}
                  </h3>
                )
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 flex-row flex-wrap w-full h-auto mt-8 gap-4 md:gap-8">
              {dict?.landing?.services?.content?.map(
                (service: any, index: number) => (
                  <Link
                    href={`/${usedLanguage}${service.link}`}
                    key={index}
                    className={`
                      flex flex-col w-full h-auto min-h-36 px-2 py-4 overflow-hidden gap-4 bg-black/10 
                      hover:bg-white/5 rounded-sm transition-all ease-in-out duration-200
                      cursor-pointer active:scale-95 
                    `}
                  >
                    <h3 className="flex h-8 items-center text-sm  text-white font-bold border-l-[10px] border-b-[0px] border-red-500 pl-2">
                      {service.title}
                    </h3>
                    <p className="text-xs  text-white leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-row w-full h-auto pr-4 justify-end">
                      <RightArrow className="w-6 h-6 text-white hover-text-red-500 " />
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
