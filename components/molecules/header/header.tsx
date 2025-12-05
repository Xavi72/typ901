import { getDictionary } from "@/app/[lang]/dictionaries";
import Burger from "@/public/assets/icons/burger.svg";

/* eslint-disable @next/next/no-img-element */
export default async function Header({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <header className="fixed w-full h-20 z-40">
      <div className="flex w-full h-full px-[2%] justify-between items-center gap-4 sm:gap-8 md:gap-8">
        <div className="flex w-20 md:w-32 shrink-0 h-auto">
          <img
            src="/assets/images/logo-typ901.webp"
            alt="logo typ901"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* <div className="flex flex-row flex-wrap w-auto h-auto gap-3 text-center justify-center">
          {dict?.landing?.hero.title.map((title: string, index: number) => (
            <div
              className="flex flex-row flex-wrap w-auto h-auto justify-center items-center text-center"
              key={index}
            >
              <h1 className="font-typ901 text-white text-[10px] sm:text-xs md:text-[18px] text-center leading-1.5 md:leading-2.5 tracking-widest">
                {title}
              </h1>
            </div>
          ))}
        </div> */}
        <div className="flex w-auto h-full items-center gap-8 text-white text-sm">
          <Burger className="w-8 h-8 text-red-500 hover:text-white cursor-pointer active:scale-95" />
        </div>
      </div>
    </header>
  );
}
