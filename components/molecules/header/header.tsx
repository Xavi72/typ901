import { getDictionary } from "@/app/[lang]/dictionaries";
import HeaderMenu from "./headerMenu";

export default async function Header({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);

  return (
    <header className="fixed w-full h-20 z-40">
      <HeaderMenu dict={dict} lang={lang} />
    </header>
  );
}
