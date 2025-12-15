"use client";
const CustomCheckBox = ({ id, name, setInputValue, inputValue }) => {
  const handleChange = () => {
    setInputValue(!inputValue);
  };

  return (
    <div className={"flex w-auto flex-row items-center"}>
      <input
        id={id}
        name={name}
        type="checkbox"
        value={inputValue}
        checked={inputValue === true ? true : false}
        onChange={() => {
          handleChange();
        }}
        className={`relative peer shrink-0 appearance-none w-4 h-4 border border-white rounded-sm bg-transparent cursor-pointer `}
      />
      <svg
        className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none text-white border border-white rounded-sm bg-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        /* fill="none" */
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CustomCheckBox;
