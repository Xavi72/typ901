/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Elferspot from "@/public/assets/images/elferspot.svg";
import { carsList } from "@/utils/carsList.json";

/* eslint-disable @typescript-eslint/no-explicit-any */
const ForSaleSection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  return (
    <section className="flex flex-col w-full max-w-[1280px] h-auto py-20 md:justify-center items-center overflow-scroll">
      <div className="flex flex-col w-full h-auto items-center">
        <div className="flex flex-col w-full h-auto px-4 items-center gap-4">
          <h2 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
            {dict?.title}
          </h2>
          <p className="text-xs md:text-sm text-white font-normal text-pretty text-center">
            {dict?.subtitle}
          </p>
        </div>
        <Link
          href="https://www.elferspot.com/en/dealer/typ901-classic-porsche-expert/"
          target="_blank"
          className="flex w-full h-auto mt-4 justify-center text-xs md:text-sm text-white font-normal text-pretty text-center"
        >
          <Elferspot className="w-24 h-24 text-white" />
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 flex w-full h-auto mt-8 px-4 md:px-8 justify-center items-center gap-4 ">
        {carsList?.map((car: any, index: number) => (
          <Link
            href={
              car?.elferSpot_url ||
              "https://www.elferspot.com/en/dealer/typ901-classic-porsche-expert/"
            }
            target="_blank"
            key={index}
            className={`flex flex-col w-full sm:max-w-[400px] h-[250px] pb-2
                bg-white/5 rounded-sm overflow-hidden cursor-pointer active:scale-95`}
          >
            <img
              src={car?.image_url}
              alt="car"
              className="w-full h-[170px] object-cover object-center"
            />
            <p className="px-4 pt-2 text-xs md:text-sm text-white font-semibold text-pretty text-left">
              {car?.year} - {car?.model}
            </p>
            <p className="px-4  text-xs md:text-sm text-white font-medium text-pretty text-left">
              <span className="text-white/50 pr-2">Kms:</span>
              {car?.mileage}
            </p>
            <p
              className={
                car?.price === "RESERVED" || car?.price === "SOLD"
                  ? "px-4  text-xs md:text-sm text-red-500 font-medium text-pretty text-left"
                  : "px-4  text-xs md:text-sm text-white font-medium text-pretty text-left"
              }
            >
              <span className="text-white/50 pr-2">{dict?.price_title}:</span>
              {car?.price}{" "}
              {car?.price === "RESERVED" || car?.price === "SOLD" ? "" : "€"}
            </p>
          </Link>
        ))}
        <Link
          href="https://www.elferspot.com/en/car/porsche-968-club-sport-1993-4618699/"
          target="_blank"
          className={`hidden md:flex xl:hidden flex-col w-full sm:max-w-[400px] h-[250px] pb-2
                bg-white/5 rounded-sm overflow-hidden cursor-pointer`}
        >
          <img
            src="/assets/images/cars/968-sold.webp"
            alt="car"
            className="w-full h-[170px] object-cover object-center"
          />
          <p className="px-4 pt-2 text-xs md:text-sm text-white font-semibold text-pretty text-left">
            1993 - 968 Club Sport
          </p>
          <p className="px-4  text-xs md:text-sm text-white font-medium text-pretty text-left">
            <span className="text-white/50 pr-2">Kms:</span>64.241
          </p>
          <p className="px-4  text-xs md:text-sm text-red-500 font-medium text-pretty text-left">
            <span className="text-white/50 pr-2">{dict?.price_title}:</span>
            SOLD
          </p>
        </Link>
      </div>
      <div className="flex flex-col w-full h-auto mt-8 items-center">
        <div className="flex flex-col w-full h-auto items-center gap-4">
          <div className="flex flex-col w-full max-w-[540px] h-auto items-center gap-2">
            {dict?.sourcing?.content?.map((subtitle: string, index: number) => (
              <p
                key={index}
                className="flex w-full h-auto justify-center text-xs md:text-sm text-white font-normal text-pretty text-center"
              >
                {subtitle}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-row w-full h-auto mt-6 justify-center gap-8">
          <Link
            href={`/${usedLanguage}/restoration`}
            className="flex w-auto h-auto bg-red-500/80 items-center rounded-sm px-4 py-2 mt-2 gap-4 hover:bg-white/10 transition-all ease-in-out duration-200 cursor-pointer active:scale-95"
          >
            <p className="flex w-full h-auto text-xs md:text-sm text-white font-semibold text-center sm:text-left">
              {dict?.sourcing?.cta_1}
            </p>
          </Link>
          <Link
            href={`/${usedLanguage}/restoration`}
            className="flex flex-col w-auto h-auto items-center border-red-500/50 border-[0.5px] rounded-sm px-4 py-2 mt-2 gap-0 hover:bg-white/10 transition-all ease-in-out duration-200 cursor-pointer active:scale-95"
          >
            {dict?.sourcing?.cta_2?.map((cta: string, index: number) => (
              <p
                key={index}
                className="flex w-full h-auto justify-center  text-xs md:text-sm text-white font-semibold text-center sm:text-left text-pretty"
              >
                {cta}
              </p>
            ))}
          </Link>
        </div>
      </div>
      {/* button cta go to elferspot 
      we can sell your car or source your next one
          button cta contact us*/}
    </section>
  );
};

export default ForSaleSection;
