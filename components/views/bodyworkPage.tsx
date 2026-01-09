/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Footer from "../molecules/footer/footer";
import ContactSection from "../molecules/contactSection/contactSection";

export default async function BodyworkPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full h-auto pt-24 items-center overflow-scroll bg-gray-800 relative">
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent z-30"></div>
      <div className="flex flex-col w-full max-w-[1280px] h-auto px-4 ">
        <div className="flex flex-col w-full h-auto">
          <div className="flex flex-row w-full h-auto gap-4 items-center">
            <div className="flex w-2 h-10 bg-red-500" />
            <h2 className="text-2xl font-bold text-white">
              {dict?.bodywork?.title}
            </h2>
          </div>
          <div className="flex flex-col w-full max-w-[640px] h-auto mt-8 gap-4">
            {dict?.bodywork?.subtitle?.map((text: any) => (
              <p key={text} className="text-white leading-relaxed">
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  gap-4 sm:gap-8 w-full max-w-[1280px] h-auto px-2 mt-8"></div>
      <div className="flex flex-col w-full h-auto bg-black/5 items-center">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>
      <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
    </div>
  );
}
