/* eslint-disable @next/next/no-img-element */
import { getDictionary } from "@/app/[lang]/dictionaries";
import HeroSection from "@/components/molecules/homepageSections/heroSection";
import RestaurationSection from "@/components/molecules/homepageSections/restorationSection";
import ServicesSection from "@/components/molecules/homepageSections/servicesSection";
import ProjectsSection from "@/components/molecules/homepageSections/projectsSection";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-gray-800">
      <div className="snap-always snap-start h-[100dvh]">
        <HeroSection dict={dict} />
      </div>
      <div className="snap-always snap-start h-full flex justify-center">
        <ServicesSection dict={dict} usedLanguage={lang} />
      </div>
      <div className="snap-always snap-start h-full flex justify-center bg-black/5 ">
        <RestaurationSection
          dict={dict?.landing?.restoration}
          usedLanguage={lang}
        />
      </div>
      <div className="snap-always snap-start h-auto flex justify-center bg-gray-800">
        <ProjectsSection dict={dict?.landing?.projects} usedLanguage={lang} />
      </div>
      <div className="snap-always snap-start h-auto flex justify-center bg-gray-800">
        {/* Cars for sale or to buy looking for special units */}
      </div>
      <div className="snap-always snap-start h-auto flex justify-center bg-gray-800">
        {/* Slots available for restoration 2026 */}
        {/* <img
          src="/assets/images/exploted-928.png"
          alt="image typ901"
          className="w-full h-full object-cover object-center backdrop-hue-rotate-90"
        /> */}
        <div className="bg-[url(/assets/images/exploted-928.png)] flex w-full h-screen bg-no-repeat bg-cover bg-center">
          <div className="bg-white/0 flex w-full h-screen backdrop-brightness-50 justify-center items-center">
            <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
              Preserving Porsche Heritage
            </h3>
          </div>
        </div>
      </div>
      <div className="snap-always snap-start h-auto flex justify-center bg-gray-800">
        {/* Rolling museum */}
      </div>
      <div className="snap-always snap-start h-auto flex justify-center bg-gray-800">
        {/* Contact us */}
      </div>
    </div>
  );
}
