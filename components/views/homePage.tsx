import { getDictionary } from "@/app/[lang]/dictionaries";
import HeroSection from "@/components/molecules/homepageSections/heroSection";
import RestaurationSection from "@/components/molecules/homepageSections/restorationSection";
import ServicesSection from "@/components/molecules/homepageSections/servicesSection";

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
      <div className="snap-always snap-start h-auto flex justify-center bg-gray-800">
        <ServicesSection dict={dict} usedLanguage={lang} />
      </div>
      <div className="snap-always snap-start h-full min-h-[100dvh] flex justify-center bg-gray-700">
        <RestaurationSection dict={dict} />
      </div>
    </div>
  );
}
