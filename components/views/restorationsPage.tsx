/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Footer from "../molecules/footer/footer";
import ContactSection from "../molecules/contactSection/contactSection";
import MethodologySection from "@/components/molecules/methodologySection/methodologySection";
import ImagePopup from "@/components/molecules/popup/imagePopup";

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
      <div className="flex flex-col w-full h-auto px-4 items-center gap-4">
        <h2 className="flex w-full h-auto justify-center text-xs md:text-sm text-white/50 font-normal uppercase text-center">
          {dict?.restorations?.claim}
        </h2>
        <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
          {dict?.restorations?.title}
        </h3>
        <div className="flex flex-col w-full h-auto items-center">
          <div className="flex flex-col w-full max-w-[640px] h-auto mt-8 gap-4 items-center">
            {dict?.restorations?.subtitle?.map((text: any) => (
              <p
                key={text}
                className="text-white leading-relaxed text-center text-white"
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full max-w-[1280px] h-auto px-4 mt-16">
        <div className="flex flex-col w-full max-w-[640px] h-auto gap-4">
          <div className="flex flex-row w-auto h-auto gap-x-2">
            {dict?.restorations?.responsability?.title?.map(
              (title: any, index: number) => (
                <p
                  key={index}
                  className="text-[18px] md:text-[24px] text-white font-semibold italic"
                >
                  {title}
                </p>
              )
            )}
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
        <div className="flex flex-col w-full max-w-[1280px] h-auto mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="flex w-full h-[240px] md:h[360px] min-h-[360px] overflow-hidden">
              <img
                src="/assets/images/exploted-928.png"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px] md:h[360px] min-h-[360px] overflow-hidden">
              <img
                src="/assets/images/bodywork-2.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px] md:h[360px] min-h-[360px] overflow-hidden">
              <img
                src="/assets/images/bodywork-3.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
            <div className="flex w-full h-[240px] md:h[360px] min-h-[360px] overflow-hidden">
              <img
                src="/assets/images/engine.webp"
                alt="typ901 responsability"
                className="flex w-full h-full object-cover object-center rounded-sm brightness-90 hover:brightness-100"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-auto mt-16 ">
          <MethodologySection
            dict={dict?.restorations?.methodology}
            usedLanguage={lang}
          />
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1280px] h-auto mt-8 px-4">
        <div className="flex flex-col w-full max-w-[1280px] h-auto mt-20">
          <div className="flex flex-row w-full h-auto gap-4 items-center">
            <div className="flex w-2 h-10 bg-red-500" />
            <h2 className="text-2xl font-bold text-white">
              {dict?.restorations?.past_projects?.title}
            </h2>
          </div>
          <div className="flex flex-col w-full h-auto mt-4 gap-2">
            {dict?.restorations?.past_projects?.subtitle?.map((item: any) => (
              <p key={item} className="text-white">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row flex-wrap w-full h-auto mt-4 gap-2">
          {dict?.restorations?.past_projects?.tabs.map(
            (tab: any, index: number) => {
              return (
                <div
                  className="flex px-4 py-1 bg-white/10 rounded-full cursor-pointer hover:bg-black/40 active:scale-95"
                  key={index}
                >
                  <p className="text-white text-xs sm:text-sm">
                    {tab.tab_name}
                  </p>
                </div>
              );
            }
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex w-full h-auto mt-8 justify-center items-center gap-4">
          {dict?.restorations?.past_projects?.projects.map(
            (project: any, index: number) => {
              return <ImagePopup project={project} index={index} key={index} />;
            }
          )}
        </div>
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
