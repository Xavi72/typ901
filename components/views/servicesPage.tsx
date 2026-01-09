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
    <div className="flex flex-col w-full h-auto pt-24 items-center overflow-scroll bg-gray-800 relative">
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
      </div>
      <h1>Services</h1>
      <h2> Maintenance</h2>
      <h2> Repairs</h2>
      <h2> Bodywork</h2>
      <h2> Preservation</h2>
      <div className="flex flex-col w-full h-auto bg-black/5 items-center">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>
      <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
    </div>
  );
}
