/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";

const RestaurationSection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] h-auto min-h-[100dvh] py-24 md:justify-center items-center overflow-scroll">
      <div className="flex flex-col w-full h-auto items-center">
        <div className="flex flex-col w-full h-auto px-4 items-center gap-4">
          <h2 className="flex w-full h-auto justify-center text-xs md:text-sm text-white/50 font-normal uppercase text-center">
            {dict?.sectionTitle}
          </h2>
          <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
            {dict?.title}
          </h3>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full h-auto mt-12 px-4 md:px-8 gap-8">
        <div className="flex flex-col w-full sm:w-2/3 md:w-1/3 h-auto gap-4">
          <div className="flex flex-row md:flex-col w-auto h-auto gap-x-2">
            {dict?.responsability?.title?.map((title: any, index: number) => (
              <p
                key={index}
                className="text-[18px] md:text-[24px] text-white font-semibold italic"
              >
                {title}
              </p>
            ))}
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            {dict?.responsability?.content?.map(
              (content: any, index: number) => (
                <p
                  key={index}
                  className="flex w-full h-auto text-xs md:text-sm text-white/50 font-normal text-pretty"
                >
                  {content}
                </p>
              )
            )}
          </div>
          <div className="flex w-full h-auto ">
            <Link
              href={`/${usedLanguage}/restoration`}
              className="flex w-auto h-auto bg-white/5 rounded-sm px-4 py-2 mt-2 gap-4 hover:bg-white/10 transition-all ease-in-out duration-200 cursor-pointer active:scale-95"
            >
              <p className="flex w-full h-auto text-xs md:text-sm text-white font-semibold">
                {dict?.responsability?.cta}
              </p>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 w-full md:w-2/3 h-auto min-h-[360px] lg:min-h-auto lg:max-h-[300px] gap-4 rounded-sm overflow-hidden">
          <img
            src="/assets/images/engine.webp"
            alt="typ901 responsability"
            className="flex w-auto h-[360px] md:h-auto min-h-[360px] object-cover object-center rounded-sm brightness-90 hover:brightness-100"
          />
          <img
            src="/assets/images/bodywork-2.webp"
            alt="typ901 responsability"
            className="flex w-auto h-[360px] md:h-auto min-h-[360px] object-cover object-center rounded-sm brightness-90 hover:brightness-100"
          />
        </div>
      </div>
      <div className="flex flex-col w-full h-auto mt-16 px-4 md:px-8 gap-4">
        <div className="flex flex-col w-full h-auto gap-4">
          <p className="flex w-full h-auto text-[18px] md:text-[24px] text-white font-semibold italic">
            {dict?.restoration?.methodology?.title}
          </p>
          <div className="flex flex-col w-full h-auto gap-2">
            {dict?.restoration?.methodology?.subtitle?.map(
              (subtitle: any, index: number) => (
                <p
                  key={index}
                  className="flex w-full h-auto text-xs md:text-sm text-white/50 font-normal text-pretty"
                >
                  {subtitle}
                </p>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full w-full h-auto mt-2 gap-4">
          {dict?.restoration?.methodology?.content?.map(
            (content: any, index: number) => (
              <div
                key={index}
                className="flex flex-row md:flex-col w-full max-w-[520px] h-auto bg-white/5 rounded-sm px-2 py-4 items-center md:items-start gap-6 md:gap-4"
              >
                <p className="text-4xl text-red-500 font-semibold">
                  0{index + 1}
                </p>
                <div className="flex flex-col w-full h-auto gap-2 md:gap-4">
                  <p className="text-xs md:text-sm text-white font-semibold">
                    {content.title}
                  </p>
                  <p className="text-xs md:text-sm  text-white/50 font-normal text-pretty">
                    {content.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default RestaurationSection;
