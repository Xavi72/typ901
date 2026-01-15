/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Clock from "@/public/assets/icons/clock.svg";
import Link from "next/link";
import ProjectSlider from "../projectsSlider/projectSlider";

const ProjectsSection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  const slotsNumber = [1, 2, 3, 4, 5, 6];
  const remainingSlots = [1, 2, 3];

  return (
    <section className="flex flex-col w-full max-w-[1280px] h-auto my-20 px-4 md:px-8 md:justify-center items-center overflow-scroll">
      <div className="flex flex-col w-full h-auto items-center gap-4">
        <div className="flex flex-row md:flex-col w-auto h-auto gap-x-2">
          <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
            {dict?.projects?.title}
          </h3>
        </div>
        <div className="flex flex-col w-full max-w-[540px] h-auto items-center gap-2">
          {dict?.projects?.subtitle?.map((content: any, index: number) => (
            <p
              key={index}
              className="flex w-full h-auto text-xs md:text-sm text-white font-normal text-pretty text-center"
            >
              {content}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full h-auto">
        <ProjectSlider dict={dict?.projects} />
      </div>
      <div className="flex flex-col w-full h-auto mt-20 items-center">
        <div className="flex flex-col w-full h-auto items-center gap-4">
          <div className="flex flex-col w-full h-auto items-center gap-4">
            <div className="flex flex-row w-auto h-auto bg-white/5 rounded-full px-4 py-2 items-center gap-4">
              <Clock className="w-5 h-5 text-red-500" />
              <p className="flex w-auto h-auto text-xs md:text-sm text-red-500 font-medium">
                {dict?.slots?.badge}
              </p>
            </div>
            <p className="flex w-full h-auto justify-center text-[20px] sm:text-[32px] text-white text-shadow-black text-shadow-sm font-semibold items-center">
              {dict?.slots?.title}
            </p>
          </div>
          <div className="flex flex-col w-full max-w-[540px] h-auto items-center gap-2">
            {dict?.slots?.content?.map((content: string, index: number) => (
              <p
                key={index}
                className="flex w-full h-auto text-xs md:text-sm text-white font-normal text-pretty text-center"
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
              {dict?.slots?.cta_1}
            </p>
          </Link>
          <div className="flex flex-row w-auto min-w-[192px] h-auto justify-center items-center border-red-500/50 border-[0.5px] rounded-sm px-4 py-2 mt-2 gap-2 hover:bg-white/10 transition-all ease-in-out duration-200 ">
            {dict?.slots?.cta_2?.map((cta: string, index: number) => (
              <p
                key={index}
                className="text-xs md:text-sm text-white font-semibold text-center text-pretty"
              >
                {cta}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-full h-auto mt-10 items-center gap-3">
          <p className="text-xs text-white font-normal uppercase text-center">
            {dict?.slots?.slot_year}
          </p>
          <div className="flex flex-row w-auto h-auto gap-2">
            {slotsNumber.map((slot: number, index: number) => (
              <p
                key={index}
                className={`flex w-8 h-8 justify-center items-center text-sm text-white font-normal uppercase text-center rounded-sm  ${
                  remainingSlots.includes(slot)
                    ? "border-red-500/40 border-[0.5px] "
                    : "border-red-500  border-[2px]"
                }`}
              >
                {remainingSlots.includes(slot) && "/"}
              </p>
            ))}
          </div>
          <p className="text-xs text-red-500/80 font-semibold text-center ">
            {slotsNumber.length - remainingSlots.length}{" "}
            {dict?.slots?.remaining_slots}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

/* "Some of them will be special customers projects and the rest valuable cars found around the globe that we may sell or will join our private collection." */
