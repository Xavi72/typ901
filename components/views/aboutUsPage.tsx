/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Footer from "../molecules/footer/footer";
import ContactSection from "../molecules/contactSection/contactSection";
import Link from "next/link";

export default async function AboutUsPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full h-sauto pt-24 items-center overflow-scroll bg-gray-800 relative">
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent z-30"></div>
      <div className="flex flex-col w-full max-w-[1280px] h-auto px-4 ">
        <div className="flex flex-col w-full h-auto">
          <div className="flex flex-row w-full h-auto gap-4 items-center">
            <div className="flex w-2 h-10 bg-red-500" />
            <h2 className="text-2xl font-bold text-white">
              {dict?.about_us?.title}
            </h2>
          </div>
          <div className="flex flex-col w-full max-w-[640px] h-auto mt-8 gap-4">
            {dict?.about_us?.content?.map((text: any) => (
              <p key={text} className="text-white leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-auto h-auto"></div>
        <div className="flex flex-col md:flex-row w-full h-auto my-20 gap-8 ">
          <div className="flex flex-col w-full max-w-[700px] h-auto pl-4 gap-6">
            {dict?.about_us?.timeline?.map((item: any, index: number) => {
              return (
                <div key={index} className="flex flex-row w-full h-auto gap-4">
                  <div className="flex flex-col w-auto h-auto gap-2">
                    <div className="flex flex-row w-auto h-auto gap-4">
                      <div className="flex w-2 h-6 bg-red-500" />
                      <p className="text-white font-bold">{item.date}</p>
                    </div>
                    <div className="flex flex-row w-auto h-auto gap-2">
                      <div className="flex ml-[2px] w-1 h-full mb-4 border-l-[2px] border-red-500 border-dotted" />
                      <div className="flex flex-col w-auto h-auto pb-4">
                        {item.content.map((item: any) => {
                          return (
                            <p
                              key={item}
                              className="pl-2 text-white text-sm sm:text-base"
                            >
                              {item}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col w-full md:max-w-[300px] h-auto md:mt-10 items-center">
            <div className="flex flex-col w-full h-auto items-center rounded-sm overflow-hidden">
              <img
                src="/assets/images/s-v.webp"
                alt="Stéphane Vrinat"
                className="w-full max-w-[400px] h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto pb-24 items-center gap-8">
        <p className="text-white font-bold">{dict?.about_us?.more_info}</p>
        <div className="flex w-full h-auto justify-center items-center gap-8">
          <Link href="https://therollingmuseum.com/" target="_blank">
            <img
              src="/assets/images/rolling-museum-logo.webp"
              alt="Typ901"
              className="w-full max-w-[160px] h-full object-cover object-top invert"
            />
          </Link>
          <Link href="https://m.ibermocion.com/" target="_blank">
            <img
              src="/assets/images/logo-ibermocion.webp"
              alt="Typ901"
              className="w-full max-w-[160px] h-full object-cover object-top "
            />
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full h-auto bg-black/5 items-center">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>
      <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
    </div>
  );
}
