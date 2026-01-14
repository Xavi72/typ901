/* eslint-disable @typescript-eslint/no-explicit-any */
const MethodologySection = ({
  dict,
  usedLanguage,
}: {
  dict: any;
  usedLanguage: string;
}) => {
  return (
    <div className="flex flex-col w-full h-auto gap-4">
      <div className="flex flex-col w-full h-auto gap-4">
        <p className="flex w-full h-auto text-[18px] md:text-[24px] text-white font-semibold italic">
          {dict?.title}
        </p>
        <div className="flex flex-col w-full h-auto gap-2">
          {dict?.subtitle?.map((subtitle: any, index: number) => (
            <p
              key={index}
              className="flex w-full h-auto text-xs md:text-sm text-white/50 font-normal text-pretty"
            >
              {subtitle}
            </p>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full w-full h-auto mt-2 gap-4">
        {dict?.content?.map((content: any, index: number) => (
          <div
            key={index}
            className="flex flex-row md:flex-col w-full max-w-[520px] h-auto bg-white/5 rounded-sm px-2 py-4 items-center md:items-start gap-6 md:gap-4"
          >
            <p className="text-4xl text-red-500 font-semibold">0{index + 1}</p>
            <div className="flex flex-col w-full h-auto gap-2 md:gap-4">
              <p className="text-xs md:text-sm text-white font-semibold">
                {content.title}
              </p>
              <p className="text-xs md:text-sm  text-white/50 font-normal text-pretty">
                {content.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MethodologySection;
