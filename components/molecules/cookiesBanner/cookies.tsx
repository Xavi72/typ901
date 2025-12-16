import { getDictionary } from "@/app/[lang]/dictionaries";
import CookieBanner from "./cookiesBanner";

export default async function Cookies({
  params,
}: {
  params: { lang: string };
}) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);
  return <CookieBanner dict={dict} lang={lang} />;
}
