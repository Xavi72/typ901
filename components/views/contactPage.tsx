/* eslint-disable @typescript-eslint/no-explicit-any */
import { getDictionary } from "@/app/[lang]/dictionaries";
import ContactForm from "../molecules/contactPageSections/contactForm";

export default async function ContactPage({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);
  return (
    <div className="flex flex-col w-full h-auto min-h-[100dvh] items-center overflow-scroll bg-gray-800">
      <div className="flex flex-col w-full max-w-[1280px] h-auto mt-24 px-[4px]">
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
