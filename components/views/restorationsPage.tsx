/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Footer from "@/components/molecules/footer/footer";
import ContactSection from "@/components/molecules/contactSection/contactSection";
import MethodologySection from "@/components/molecules/methodologySection/methodologySection";
import MoreProjectSection from "@/components/molecules/projectSection/moreProjectSection";
import ProjectSection from "@/components/molecules/projectSection/projectsSection";
import CurrentProjectsSection from "@/components/molecules/projectSection/currentProjectsSection";

export default async function RestorationsPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full h-auto pt-24 items-center overflow-scroll bg-gray-800 relative">
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent z-30"></div>

      <div
        id="hero-section"
        className="flex flex-col w-full h-auto px-4 items-center gap-4"
      >
        <h2 className="flex w-full h-auto justify-center text-xs md:text-sm text-white/50 font-normal uppercase text-center">
          {dict?.restorations?.claim}
        </h2>
        <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
          {dict?.restorations?.title}
        </h3>
        <div className="flex flex-col w-auto h-auto items-center ">
          {dict?.restorations?.subtitle?.map((title: any, index: number) => (
            <h2
              key={index}
              className=" text-sm md:text-base text-white font-normal text-pretty text-center"
            >
              {title}
            </h2>
          ))}
        </div>
      </div>

      <div
        id="responsability-section"
        className="flex flex-col w-full max-w-[1280px] h-auto px-4 mt-16"
      >
        <div className="flex flex-col w-full max-w-[640px] h-auto gap-4">
          <div className="flex flex-row w-full h-auto gap-4 items-center">
            <div className="flex w-2 h-8 bg-red-500" />
            <div className="flex flex-row w-auto h-auto gap-x-2">
              {dict?.restorations?.responsability?.title?.map(
                (title: any, index: number) => (
                  <h2
                    key={index}
                    className="text-base sm:text-xl font-bold text-white "
                  >
                    {title}
                  </h2>
                )
              )}
            </div>
          </div>
          <div className="flex flex-col w-full h-auto gap-2">
            {dict?.restorations?.responsability?.content?.map(
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
        </div>
        <div className="flex flex-col w-full max-w-[1280px] h-auto mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="flex w-full h-[240px]  overflow-hidden">
              <img
                src="/assets/images/process/restoration-process-2.png"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px]  overflow-hidden">
              <img
                src="/assets/images/bodywork-2.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px]  overflow-hidden">
              <img
                src="/assets/images/bodywork-3.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px]  overflow-hidden">
              <img
                src="/assets/images/engine.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="methodology-section"
        className="flex flex-col w-full max-w-[1280px] h-auto px-4 mt-16"
      >
        <div className="flex flex-col w-full h-auto mt-16 ">
          <div className="flex flex-col w-full h-auto gap-4">
            <div className="flex flex-row w-full max-w-[640px] h-auto gap-4 items-center">
              <div className="flex w-2 h-8  bg-red-500" />
              <div className="flex flex-row w-auto h-auto gap-x-2">
                <h2 className="text-base sm:text-xl font-bold text-white ">
                  {dict?.restorations?.methodology?.title}
                </h2>
              </div>
            </div>
            <div className="flex flex-col w-full h-auto gap-2">
              {dict?.restorations?.methodology?.subtitle?.map(
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
            <div className="flex flex-col md:flex-row w-full w-full h-auto mt-2 gap-4">
              {dict?.restorations?.methodology?.content?.map(
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
        </div>
        <div className="flex flex-col w-full max-w-[1280px] h-auto mt-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="flex w-full h-[240px] overflow-hidden">
              <img
                src="/assets/images/exploted-928.png"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px] overflow-hidden">
              <img
                src="/assets/images/process/restoration-process-10.png"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px] overflow-hidden">
              <img
                src="/assets/images/process/restoration-process-3.jpg"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px] overflow-hidden">
              <img
                src="/assets/images/process/restoration-process-4.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="current-projects-section"
        className="flex flex-col w-full max-w-[1280px] h-auto my-8 px-4"
      >
        <div className="flex flex-col w-full max-w-[640px] h-auto mt-20">
          <div className="flex flex-row w-full h-auto gap-4 items-center">
            <div className="flex w-2 h-8 bg-red-500" />
            <h2 className="text-base sm:text-xl font-bold text-white">
              {dict?.restorations?.current_projects?.title}
            </h2>
          </div>
          <div className="flex flex-col w-full h-auto mt-4 gap-2">
            {dict?.restorations?.current_projects?.subtitle?.map(
              (item: any) => (
                <p key={item} className="text-white/50 text-xs sm:text-sm">
                  {item}
                </p>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col w-full max-w-[1280px] h-auto ">
          <CurrentProjectsSection dict={dict} />
        </div>
      </div>

      <div
        id="past-projects-section"
        className="flex flex-col w-full max-w-[1280px] h-auto my-8 px-4"
      >
        <div className="flex flex-col w-full max-w-[1280px] h-auto mt-20">
          <div className="flex flex-row w-full h-auto gap-4 items-center">
            <div className="flex w-2 h-8 sm:h-10 bg-red-500" />
            <h2 className="text-base sm:text-xl font-bold text-white">
              {dict?.restorations?.past_projects?.title}
            </h2>
          </div>
          <div className="flex flex-col w-full h-auto mt-4 gap-2">
            {dict?.restorations?.past_projects?.subtitle?.map((item: any) => (
              <p key={item} className="text-white/50 text-xs sm:text-sm">
                {item}
              </p>
            ))}
          </div>
        </div>
        <ProjectSection dict={dict} />
        <MoreProjectSection dict={dict} />
      </div>

      <div className="flex flex-col w-full h-auto bg-black/5 items-center">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>

      <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
    </div>
  );
}

/* 
- Introduction
- Total / partial
- methodology
- body, mechanics, interiors
- Projects
- available slots
- Contact

*/
