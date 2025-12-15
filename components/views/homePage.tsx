/* eslint-disable @next/next/no-img-element */
import { getDictionary } from "@/app/[lang]/dictionaries";
import HeroSection from "@/components/molecules/homepageSections/heroSection";
import RestaurationSection from "@/components/molecules/homepageSections/restorationSection";
import ServicesSection from "@/components/molecules/homepageSections/servicesSection";
import ProjectsSection from "@/components/molecules/homepageSections/projectsSection";
import ForSaleSection from "@/components/molecules/homepageSections/forSaleSection";
import RollingMuseumSection from "../molecules/homepageSections/rollingMuseumSection";
import ContactSection from "../molecules/contactSection/contactSection";
import Footer from "../molecules/footer/footer";

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
      <div className="snap-always snap-start h-auto min-h-[100dvh] flex justify-center">
        <ServicesSection dict={dict} usedLanguage={lang} />
      </div>
      <div className="snap-always snap-start h-auto min-h-[100dvh] flex justify-center bg-black/5 ">
        <RestaurationSection
          dict={dict?.landing?.restoration}
          usedLanguage={lang}
        />
      </div>
      <div className="snap-always snap-start h-auto min-h-[100dvh] flex justify-center ">
        <ProjectsSection dict={dict?.landing?.projects} usedLanguage={lang} />
      </div>
      <div className="snap-always snap-start h-auto min-h-[100dvh] flex justify-center bg-black/5">
        <ForSaleSection dict={dict?.landing?.forSale} usedLanguage={lang} />
      </div>
      <div className="snap-always snap-start h-auto min-h-[100dvh] flex justify-center">
        <RollingMuseumSection dict={dict?.landing?.rollingMuseum} />
      </div>
      <div className="snap-always snap-start h-auto  flex justify-center bg-black/5">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>

      <Footer dict={dict?.footer} usedLanguage={lang} />
    </div>
  );
}
