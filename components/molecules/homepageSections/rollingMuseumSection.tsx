/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";

const RollingMuseumSection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] h-auto min-h-[100dvh] py-20 px-4 md:px-8 md:justify-center items-left overflow-scroll">
      <div className="flex flex-col w-full h-auto items-center">
        <div className="flex flex-col w-full h-auto px-4 items-center gap-4">
          <h2 className="flex w-full h-auto justify-center text-xs md:text-sm text-white/50 font-normal uppercase text-center">
            {dict?.sectionTitle}
          </h2>
          <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
            {dict?.title}
          </h3>
          <div className="flex flex-col w-full max-w-[540px] h-auto items-center gap-2">
            {dict?.content?.map((content: any, index: number) => (
              <p
                key={index}
                className="flex w-full h-auto text-xs md:text-sm text-white font-normal text-pretty text-center"
              >
                {content}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full h-auto mt-12 rounded-sm overflow-hidden">
        <img
          src="/assets/images/rolling-museum.webp"
          alt="typ901 responsability"
          className="flex w-full h-[320px] object-cover object-center rounded-sm brightness-90 hover:brightness-100"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-[1000px] h-auto mt-12 md:items-center gap-8">
        <div className="flex flex-col w-full h-auto gap-4">
          <div className="flex flex-row md:flex-col w-auto max-w-[440px] h-auto gap-x-2">
            {dict?.experience?.title?.map((title: any, index: number) => (
              <p
                key={index}
                className="text-[18px] md:text-[24px] text-white font-semibold italic text-left text-pretty"
              >
                {title}
              </p>
            ))}
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            {dict?.experience?.content?.map((content: any, index: number) => (
              <p
                key={index}
                className="text-xs md:text-sm text-white/50 font-normal text-pretty text-left"
              >
                {content}
              </p>
            ))}
          </div>
          <div className="flex flex-row w-full h-auto items-start gap-8 ">
            <img
              src="/assets/images/rolling-museum-logo.webp"
              alt="Rolling museum Logo"
              className="flex w-[140px] h-auto invert mt-1"
            />
            <Link
              href={dict?.cta_link}
              target="_blank"
              className="flex w-auto h-auto border-[0.5px] rounded-sm px-4 py-2 mt-2 gap-4 hover:bg-white/10 transition-all ease-in-out duration-200 bg-red-500 cursor-pointer active:scale-95"
            >
              <p className="flex w-full h-auto text-xs md:text-sm text-white font-semibold">
                {dict?.cta}
              </p>
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[440px] h-auto gap-4">
          {dict?.calendar?.content?.map((content: any, index: number) => (
            <div
              key={index}
              className="flex flex-col w-auto h-auto gap-4 border-[0.5px] border-red-500/40 rounded-sm px-4 py-2"
            >
              <p className="text-sm md:text-base text-white font-medium text-pretty text-left">
                {content?.name}
              </p>
              <p className="text-xs md:text-sm text-white/50 font-normal text-pretty text-left">
                {content?.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RollingMuseumSection;

/* about us
- foto of boss on klein 1965 911
- team of pro backed by 2o year off automotive business and activities
- we are looking for mecancis and bodywork section  */
