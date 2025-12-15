import Link from "next/link";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ContactSection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] h-auto py-20 px-4 md:px-8 md:justify-center items-left overflow-scroll">
      <div className="flex flex-col w-full h-auto items-center">
        <div className="flex flex-col w-full h-auto px-4 items-center gap-4">
          <h2 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
            {dict?.title}
          </h2>
          <div className="flex flex-col w-full max-w-[540px] h-auto items-center gap-2">
            {dict?.content?.map((content: any, index: number) => (
              <p
                key={index}
                className="flex w-full h-auto justify-center text-xs md:text-sm text-white font-normal text-pretty text-center"
              >
                {content}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row w-full h-auto mt-6 justify-center items-center gap-4 sm:gap-8">
          <Link
            href={`/${usedLanguage}/contact`}
            className="flex w-auto min-w-[192px] h-auto bg-red-500/80 items-center rounded-sm px-4 py-2 mt-2 gap-4 hover:bg-white/10 transition-all ease-in-out duration-200 cursor-pointer active:scale-95"
          >
            <p className="flex w-full h-auto justify-center text-xs md:text-sm text-white font-semibold text-center sm:text-left">
              {dict?.cta_1}
            </p>
          </Link>
          <div className="flex flex-row w-auto min-w-[192px] h-auto justify-center items-center border-red-500/50 border-[0.5px] rounded-sm px-4 py-2 mt-2 gap-2 hover:bg-white/10 transition-all ease-in-out duration-200 cursor-pointer active:scale-95">
            {dict?.cta_2?.map((cta: string, index: number) => (
              <p
                key={index}
                className="text-xs md:text-sm text-white font-semibold text-center text-pretty"
              >
                {cta}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
