/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from "next/link";
import NewsletterSubscription from "./newsletterSubscription";

import Instagram from "@/public/assets/icons/instagram.svg";
import Facebook from "@/public/assets/icons/facebook.svg";
import Whatsapp from "@/public/assets/icons/whatsapp.svg";

export default async function Footer({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) {
  return (
    <footer className="flex flex-col w-full h-auto pt-12 sm:pt-16 pb-4 px-4 md:px-8 bg-gray-800 items-center">
      <div className="flex flex-col sm:flex-row w-full max-w-[1280px] h-auto px-4 md:px-8 sm:justify-between sm:items-center gap-8">
        <div className="flex flex-col lg:flex-row w-full sm:w-auto h-auto items-center gap-8">
          <Link
            href={`/${usedLanguage}/`}
            className="flex flex-col w-32 shrink-0 h-auto"
          >
            <img
              src="/assets/images/logo-typ901.webp"
              alt="Type901 logo"
              className="flex w-32 shrink-0 h-auto cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
            />
          </Link>
          <div className="flex flex-col w-auto h-auto">
            <NewsletterSubscription dict={dict?.subscription} />
          </div>
        </div>
        <div className="flex flex-row w-full md:w-auto h-auto gap-8 md:gap-16 justify-around">
          <div className="flex flex-col w-auto h-auto gap-2 items-center sm:items-start">
            <p className="text-xs sm:text-sm text-white/50">
              {dict?.menu?.menu_col_1?.title}
            </p>
            <ul className="flex flex-col w-auto h-auto gap-2">
              {dict?.menu?.menu_col_1?.content?.map((item: any, index: any) => (
                <li key={index} className="flex flex-col w-auto h-auto gap-2">
                  <Link
                    href={item.link}
                    target={item.target}
                    className="text-xs sm:text-sm text-center sm:text-left text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col w-auto h-auto gap-2 items-center sm:items-start">
            <p className="text-xs sm:text-sm text-white/50">
              {dict?.menu?.menu_col_2?.title}
            </p>
            <ul className="flex flex-col w-auto h-auto gap-2">
              {dict?.menu?.menu_col_2?.content?.map((item: any, index: any) => (
                <li key={index} className="flex flex-col w-auto h-auto gap-2">
                  <Link
                    href={item.link}
                    target={item.target}
                    className="text-xs sm:text-sm text-center sm:text-left text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-row w-auto h-auto gap-2 items-center sm:items-start">
              <Link
                href="https://www.instagram.com/typ901_classic_porsche_expert/"
                target="_blank"
              >
                <Instagram className="w-5 h-5 text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200" />
              </Link>
              <Link
                href="https://wa.me/674571857"
                target="_blank"
                className="flex flex-row w-full h-auto items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-20"
                rel="noopener noreferrer"
                aria-label="whatsapp"
              >
                <Whatsapp className="w-5 h-5 text-white hover:text-white/50" />
              </Link>
              <Link
                href="https://www.instagram.com/typ901_classic_porsche_expert/"
                target="_blank"
              >
                <Facebook className="w-5 h-5 text-white hover:text-white/50 cursor-pointer active:scale-95 transition-all ease-in-out duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full h-auto px-4 md:px-8 mt-8">
        <div className="flex flex-col sm:flex-row w-full h-auto justify-end gap-1">
          <p className="text-[10px] md:text-xs text-white/50">
            {dict?.copyright?.title}
          </p>

          <Link
            href={dict?.copyright?.codekickers_url}
            target="_blank"
            className="flex flex-row w-auto h-auto items-center justify-center cursor-pointer active:scale-95 transition-all ease-in-out duration-20"
          >
            <p className="text-[10px] md:text-xs text-white/50 hover:text-white ">
              {dict?.copyright?.codekickers}
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
