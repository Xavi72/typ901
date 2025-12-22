"use client";

const ActionButtonDouble = ({
  buttonText1,
  action1,
  buttonText2,
  action2,
}: {
  buttonText1: string;
  action1: () => void;
  buttonText2: string;
  action2: () => void;
}) => {
  return (
    <div className="flex w-auto h-auto gap-6">
      <div
        className={`flex w-auto h-auto px-6 py-2 justify-center items-center rounded-sm bg-black/20 hover:bg-gray-600 cursor-pointer active:scale-95 group`}
        onClick={action1}
      >
        <span className="text-white/60 text-xs md:text-sm font-normal text-center">
          {buttonText1}
        </span>
      </div>
      <div
        className={`flex w-auto h-auto px-6 py-2 justify-center items-center bg-red-500 rounded-sm hover:bg-black/20 cursor-pointer active:scale-95`}
        onClick={action2}
      >
        <span className="text-white text-xs md:text-sm font-normal text-center whitespace-nowrap">
          {buttonText2}
        </span>
      </div>
    </div>
  );
};

export default ActionButtonDouble;
