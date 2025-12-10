/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

const RestaurationSection = ({ dict }: { dict: any }) => {
  return (
    <section className="flex flex-col w-full h-auto min-h-[100dvh] justify-center items-center overflow-scroll">
      <div className="flex flex-col md:flex-row w-full h-full ">
        <div className="flex flex-col w-full md:w-1/2 h-full px-4 md:px-8">
          <div className="flex flex-col w-full h-full justify-center gap-12 md:gap-16">
            <div className="flex flex-row flex-wrap w-full h-auto px-4 md:px-0 justify-center text-center gap-x-4 gap-y-0">
              {dict?.landing?.services?.title.map(
                (text: string, index: number) => (
                  <p
                    key={index}
                    className="font-typ901 text-white text-[16px] sm:text-[24px] font-normal text-pretty text-center text-shadow-black text-shadow-sm"
                  >
                    {text}
                  </p>
                )
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 flex-row flex-wrap w-full h-auto gap-4 md:gap-8">
              {dict?.landing?.services?.content?.map(
                (service: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col w-full h-auto min-h-36 p-4 border-[0.5px] border-white/20 rounded-sm overflow-hidden gap-8 cursor-pointer hover:bg-white/5 active:scale-95 transition-all ease-in-out duration-200"
                  >
                    <h3 className="flex h-6 text-sm  text-white font-bold">
                      {service.title}
                    </h3>
                    <p className="text-xs  text-white leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          {/* <div className="flex w-full h-auto mt-8 px-4 md:px-0 justify-start">
            <button className="px-4 py-3 bg-white/10 text-xs sm:text-sm text-white hover:bg-white/20 hover:text-gray-300 rounded-sm cursor-pointer active:scale-95 transition-all ease-in-out duration-200">
              {dict?.landing?.intro?.cta}
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default RestaurationSection;
