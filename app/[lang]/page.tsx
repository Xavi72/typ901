import { getDictionary } from "@/app/[lang]/dictionaries";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dict: any = await getDictionary(lang);
  console.log(dict?.landing?.title);
  return (
    <div>
      <h1 className="fle flex-col gap-8 font-typ901 text-blue-500 text-4xl font-normal">
        {dict?.landing?.title}
      </h1>
      <p className="text-black text-5xl font-light">
        {dict?.landing?.hero.title1}
      </p>
      <p className="text-black text-5xl font-bold">
        {dict?.landing?.hero.title2}
      </p>
    </div>
  );
}
