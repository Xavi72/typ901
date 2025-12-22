import { getDictionary } from "@/app/[lang]/dictionaries";
import Footer from "../molecules/footer/footer";
import ContactSection from "../molecules/contactSection/contactSection";

export default async function AboutUsPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full h-screen items-center overflow-scroll bg-gray-800 relative">
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent z-30"></div>
      <div className="flex flex-row flex-wrap w-full max-w-[400px] sm:max-w-[600px] h-auto  mt-24 justify-center text-center gap-x-4 gap-y-0">
        {/* {dict?.landing?.services?.title.map((text: string, index: number) => (
          <h2
            key={index}
            className="font-typ901 text-red-500 text-[16px] sm:text-[26px] font-normal text-pretty text-center text-shadow-black text-shadow-sm"
          >
            {text}
          </h2>
        ))} */}
      </div>
      <div className="flex flex-col w-auto h-auto"></div>
      <div className="flex flex-row w-full h-auto my-20 px-[5%] gap-8">
        <div className="flex flex-col w-full h-full text-white text-pretty text-wrap"></div>
        <div className="flex flex-col w-full h-auto gap-8">
          <div className="flex flex-col w-full h-96 bg-white"></div>
          <div className="flex flex-col w-full h-96 bg-white"></div>
        </div>
      </div>
      {/* 
      Type901 fundado en 2017
      - parte de un grupo automotive de 20 años fundado en 2004 especializado en el remarketing de VO
      --> grupo tiene Ibermotion , Retrofit, the Rolling Museum

      - Stéphane Vrinat fundador de typ901
      - image S V en la 911 de klein (instagram video)
      



      */}
      <div className="flex flex-col w-full h-auto bg-black/5">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>
      <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
    </div>
  );
}
