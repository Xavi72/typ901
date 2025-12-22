/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import ContactForm from "../molecules/contactPageSections/contactForm";
import Link from "next/link";
import Footer from "../molecules/footer/footer";

export default async function ContactPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);
  return (
    <div className="flex flex-col w-full h-auto min-h-[100dvh] pt-24 items-center overflow-scroll bg-gray-800 relative">
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent z-30"></div>
      <div className="flex flex-col w-full max-w-[1280px] h-auto  px-4">
        <div className="flex flex-row w-full h-auto gap-4 items-center">
          <div className="flex w-2 h-10 bg-red-500" />
          <h2 className="text-2xl font-bold text-white">
            {dict?.contact?.title}
          </h2>
        </div>
        <div className="flex flex-col w-full h-auto mt-8 gap-2">
          {dict?.contact?.content?.map((item: any) => (
            <p key={item} className="text-white">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col w-full h-auto mt-8">
          <ContactForm dict={dict?.contact?.form} />
        </div>
      </div>
      <div className="flex flex-col w-full max-w-[1280px] h-auto mt-20 px-4">
        <div className="flex flex-row w-full h-auto gap-4 items-center">
          <div className="flex w-2 h-10 bg-red-500" />
          <h2 className="text-2xl font-bold text-white">
            {dict?.contact?.visit?.title}
          </h2>
        </div>
        <div className="flex flex-col w-full h-auto mt-8 gap-2">
          {dict?.contact?.visit?.content?.map((item: any) => (
            <p key={item} className="text-white">
              {item}
            </p>
          ))}
        </div>
        <div className="flex flex-col md:flex-row w-full h-auto gap-8 mt-8 pl-4">
          <div className="flex flex-col w-full md:w-1/3 h-auto gap-2">
            <div className="flex flex-col w-32 shrink-0 h-auto">
              <img
                src="/assets/images/logo-typ901.webp"
                alt="Type901 logo"
                className="flex w-32 shrink-0 h-auto cursor-pointer active:scale-95 transition-all ease-in-out duration-200"
              />
            </div>
            <div className="flex flex-col ">
              <p className="mt-6 text-xs md:text-sm font-normal text-white">
                {dict?.contact?.visit?.street}
              </p>
              <div className="flex flex-row gap-2">
                <p className="text-xs md:text-sm font-normal text-white">
                  {dict?.contact?.visit?.zip}
                </p>
                <p className="text-xs md:text-sm font-normal text-white">
                  {dict?.contact?.visit?.city}
                </p>
              </div>
              <p className="text-xs md:text-sm font-normal text-white">
                {dict?.contact?.visit?.province}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs md:text-sm font-normal text-white">
                {dict?.contact?.visit?.phone}
              </p>
              <p className="text-xs md:text-sm font-normal text-white">
                {dict?.contact?.visit?.mobile}
              </p>
            </div>
          </div>
          <Link
            href="https://www.google.com/maps/place/TYP901+-+Classic+Expert/@41.4594768,1.9646234,17z/data=!4m6!3m5!1s0x12a48fb7e0caae3f:0x3b21136794affd2a!8m2!3d41.46051!4d1.96369!16s%2Fg%2F11kpn9vslm?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="flex flex-col w-full md:w-2/3 h-96 rounded-sm overflow-hidden"
          >
            <img
              src="/assets/images/typ901-map.webp"
              alt="typ901-map"
              className="w-full h-full object-cover object object-top-left grayscale"
            />
          </Link>
        </div>
      </div>
      <div className="flex w-full h-auto mt-24 border-t-[0.5px] border-white/10">
        <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
      </div>
    </div>
  );
}

/* 
- contact
- contact form
- contact info
- contact hours
- contact location
- contact map
- work with us 
 */
