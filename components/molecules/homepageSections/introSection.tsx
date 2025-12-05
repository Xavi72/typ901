/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

const IntroSection = ({ dict }: { dict: any }) => {
  return (
    <section className="flex flex-col w-full max-w-[1200px] h-auto px-[2%] py-20 justify-center items-center ">
      <div className="flex flex-col md:flex-row w-full h-auto items-start z-30 gap-y-8">
        <div className="flex flex-col w-full md:w-1/2 h-auto justify-start">
          <h2 className="px-4 md:px-0 md:pr-4 text-white text-[24px] sm:text-[32px] md:text-[48px] text-left font-medium text-pretty italic">
            {`"${dict?.landing?.intro.quote}"`}
          </h2>
          <div className="flex flex-col w-full h-auto mt-4 md:mt-8 px-4 md:px-0 md:pr-4 justify-start gap-4">
            {dict?.landing?.intro.texts.map((text: string, index: number) => (
              <p
                key={index}
                className="text-white text-sm sm:text-[16px]  text-left font-light text-pretty "
              >
                {text}
              </p>
            ))}
          </div>
          <div className="flex flex-col w-full h-auto mt-8 px-4 md:px-0 md:pr-4 justify-start gap-4">
            {dict?.landing?.intro.content.map((text: string, index: number) => (
              <p
                key={index}
                className="text-white text-sm sm:text-[16px] text-left font-light text-pretty "
              >
                {text}
              </p>
            ))}
          </div>
          <div className="flex w-full h-auto mt-8 justify-center">
            <button className="px-4 py-2 bg-white/10 text-xs sm:text-sm text-white hover:bg-white/20 hover:text-gray-300 rounded-sm cursor-pointer active:scale-95 transition-all ease-in-out duration-200">
              {dict?.landing?.intro.cta}
            </button>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/2 h-auto px-4 md:px-0 justify-end gap-8">
          <div className="flex flex-col w-full h-68 bg-gray-900/30 rounded-sm overflow-hidden">
            <img
              src="/assets/images/restauration-1.webp"
              alt="Type901 Barcelona restauration 356"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col w-full h-68 bg-gray-900/30 rounded-sm overflow-hidden">
            <img
              src="/assets/images/restauration-2.webp"
              alt="Type901 Barcelona restauration 356"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
