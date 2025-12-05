import { getDictionary } from "@/app/[lang]/dictionaries";
import HeroSection from "@/components/molecules/homepageSections/heroSection";
import IntroSection from "@/components/molecules/homepageSections/introSection";

export default async function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen">
      <div className="snap-always snap-start h-[100dvh]">
        <HeroSection dict={dict} />
      </div>
      <div className="snap-always snap-start h-auto min-h-[70%] flex justify-center bg-gray-800">
        <IntroSection dict={dict} />
      </div>
    </div>
  );
}
