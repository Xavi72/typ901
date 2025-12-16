/* eslint-disable @next/next/no-img-element */

/* eslint-disable @typescript-eslint/no-explicit-any */
const HeroSection = ({ dict }: { dict: any }) => {
  return (
    <section className="flex flex-row w-full h-full justify-center relative ">
      <img
        src="/assets/images/hero.webp"
        alt="hero"
        className="w-full h-[100dvh] object-cover object-center"
      />
      <div className="absolute bottom-24 md:bottom-48 flex w-full h-full px-[2%] justify-center items-end z-30">
        <div className="flex flex-col w-full max-w-[800px] h-auto gap-x-4 ">
          <h1
            className={`text-shadow-black text-shadow-sm font-semibold text-white
              text-[20px] sm:text-[32px] md:text-[48px] text-center tracking-widest text-pretty
                `}
          >
            {dict?.landing?.hero.title[0]}{" "}
            <span className="text-red-500">{dict?.landing?.hero.title[1]}</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
