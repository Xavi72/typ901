/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import Footer from "../molecules/footer/footer";
import ContactSection from "../molecules/contactSection/contactSection";

export default async function ServicesPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  const dict: any = await getDictionary(lang);

  return (
    <div className="flex flex-col w-full h-auto pt-24 items-center overflow-scroll bg-gray-800 relative">
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-800 to-transparent z-30"></div>

      <div className="flex flex-col w-full h-auto px-4 items-center gap-4">
        <h2 className="flex w-full h-auto justify-center text-xs md:text-sm text-white/50 font-normal uppercase text-center">
          {dict?.services?.claim}
        </h2>
        <h3 className="flex w-full h-auto justify-center text-[24px] sm:text-[36px] text-red-500 text-shadow-black text-shadow-sm font-semibold items-center">
          {dict?.services?.title}
        </h3>
        <div className="flex flex-col w-auto h-auto items-center ">
          {dict?.services?.subtitle?.map((title: any, index: number) => (
            <h2
              key={index}
              className=" text-sm md:text-base text-white font-normal text-pretty text-center"
            >
              {title}
            </h2>
          ))}
        </div>
      </div>

      <div
        id="maintenance"
        className="flex flex-col w-full max-w-[1280px] h-auto my-20 px-4 gap-8"
      >
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-8 items-center">
          <div className="flex flex-col w-full md:w-1/2 ">
            <div className="flex flex-row w-full h-auto gap-4 items-center">
              <div className="flex w-2 h-8 bg-red-500" />
              <h2 className="text-base sm:text-xl font-bold text-white">
                {dict?.services?.maintenance?.title}
              </h2>
            </div>
            <div className="flex flex-col w-full h-auto mt-4 md:mt-8 gap-2">
              {dict?.services?.maintenance?.subtitle?.map((item: any) => (
                <p key={item} className="text-white/70 text-xs sm:text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/2 h-[260px] gap-2 rounded-sm overflow-hidden bg-blue-500">
            <img
              src="/assets/images/workshop-exterior.webp"
              alt="maintenance"
              className="w-auto h-full object-cover object-right"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row w-full h-auto gap-4 ">
          {dict?.services?.maintenance?.items?.map(
            (item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col w-full h-auto bg-black/10  rounded-sm overflow-hidden"
              >
                <div className="flex flex-col w-full h-full justify-between">
                  <div className="flex flex-col w-full h-auto">
                    <h3 className="text-sm sm:text-base font-medium text-white p-2 md:p-4">
                      {item.title}
                    </h3>
                    <div className="flex w-full h-auto px-2 md:px-4">
                      <ul className="list-disc flex flex-col w-full h-auto gap-2 sm:mt-2 pl-4 ">
                        {item.services?.map((service: any, index: number) => (
                          <li
                            key={index}
                            className="text-white/50 text-xs sm:text-sm"
                          >
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex w-full h-[160px] md:h-[180px] mt-2 md:mt-4 overflow-hidden">
                    {item.img && (
                      <img
                        src={item.img.src}
                        alt={item.img.alt}
                        className="w-full h-full object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>

      <div
        id="bodywork"
        className="flex flex-col w-full h-auto  py-20 px-4 gap-8 bg-black/20 items-center"
      >
        <div className="flex flex-col md:flex-row w-full max-w-[1280px] gap-4  items-center">
          <div className="flex flex-col w-full md:w-1/2 h-[260px] gap-2 rounded-sm overflow-hidden bg-blue-500">
            <img
              src="/assets/images/bodywork/bodywork-paint.webp"
              alt="maintenance"
              className="w-auto h-full object-cover object-right"
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2 ">
            <div className="flex flex-row w-full h-auto gap-4 items-center">
              <div className="flex w-2 h-8 bg-red-500" />
              <h2 className="text-base sm:text-xl font-bold text-white">
                {dict?.services?.bodywork?.title}
              </h2>
            </div>
            <div className="flex flex-col w-full h-auto mt-4 md:mt-8 gap-2">
              {dict?.services?.bodywork?.subtitle?.map((item: any) => (
                <p key={item} className="text-white/70 text-xs sm:text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-[1280px] gap-4 items-center">
          {dict?.services?.bodywork?.images?.map(
            (image: any, index: number) => (
              <div
                key={index}
                className="flex flex-col w-full h-[200px] gap-2 rounded-sm overflow-hidden bg-blue-500"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            ),
          )}
          <div className="hidden sm:flex xl:hidden flex-col w-full h-[200px] gap-2 rounded-sm overflow-hidden bg-blue-500">
            <img
              src="/assets/images/bodywork/bodywork-paint-1.webp"
              alt="Bodywork & Paint image"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
      <div
        id="preservation"
        className="flex flex-col w-full max-w-[1280px] h-auto my-20 px-4 gap-8"
      >
        <div className="flex flex-col md:flex-row w-full gap-4 ">
          <div className="flex flex-col w-full lg:w-1/2 ">
            <div className="flex flex-row w-full h-auto gap-4 items-center">
              <div className="flex w-2 h-8 bg-red-500" />
              <h2 className="text-base sm:text-xl font-bold text-white">
                {dict?.services?.preservation?.title}
              </h2>
            </div>
            <div className="flex flex-col w-full h-auto mt-4 md:mt-8 gap-2">
              {dict?.services?.preservation?.subtitle?.map((item: any) => (
                <p key={item} className="text-white/70 text-xs sm:text-sm">
                  {item}
                </p>
              ))}
            </div>

            <div className="hidden lg:flex flex-col w-full h-auto mt-8 gap-4">
              {dict?.services?.preservation?.services?.map(
                (service: any, index: number) => (
                  <div
                    key={index}
                    className="flex flex-col w-full h-auto p-4 bg-black/10 rounded-sm overflow-hidden"
                  >
                    <p className="text-white text-sm font-bold">
                      {service.title}
                    </p>
                    <p className="flex flex-col mt-2 text-white/70 text-xs">
                      {service?.content?.map((item: any) => (
                        <span key={item}>{item}</span>
                      ))}
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="flex flex-col shrink-0 w-full md:w-1/2 h-[260px] lg:h-full lg:min-h-[642px] gap-2 rounded-sm overflow-hidden bg-blue-500">
            <img
              src="/assets/images/red-cars-grup.webp"
              alt="maintenance"
              className="w-auto h-full min-h-[642px] object-cover object-center"
            />
          </div>
        </div>
        <div className="flex lg:hidden flex-col w-full h-auto lg:mt-8 gap-4">
          {dict?.services?.preservation?.services?.map(
            (service: any, index: number) => (
              <div
                key={index}
                className="flex flex-col w-full h-auto p-4 bg-black/10 rounded-sm overflow-hidden"
              >
                <p className="text-white text-sm font-bold">{service.title}</p>
                <p className="flex flex-col mt-2 text-white/70 text-xs">
                  {service?.content?.map((item: any) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </div>
            ),
          )}
        </div>
        {/* 
        storage with controls
        hielo seco
        cleaning for sale
         */}
      </div>
      <div className="flex flex-col w-full h-auto bg-black/5 items-center">
        <ContactSection dict={dict?.contact_section} usedLanguage={lang} />
      </div>
      <Footer dict={dict?.footer} menu={dict?.menu} usedLanguage={lang} />
    </div>
  );
}

/* 
- maintenance 
    -> manufacturer specifications

- repairs
    -> Mechanical parts
    -> Electrical parts
    -> Motors and gearboxes, IMS RMS

- Parts Genuine EOM and Nos
- 
 */
