import React from "react";

const CustomButton = ({ text, bgClassName, menuButton = false }: { text: string; bgClassName: "bg-success" | "bg-warning" | "bg-secondary" | "bg-error"; menuButton?: boolean }) => {
  return (
    <button
      className={`
        ${bgClassName}
        ${!menuButton ? "w-[75%] hover:w-[100%]" : ""}
        p-2
        rounded-box text-primary-content text-2xl
        transition-all duration-300 ease-in-out
        hover:-translate-y-1 hover:scale-110 hover:bg-primary
      `}
    >
      {text}
    </button>
  );
};

export default CustomButton;
