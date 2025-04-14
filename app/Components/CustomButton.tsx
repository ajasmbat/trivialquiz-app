import React from "react";

const CustomButton = ({
  text,
  bgClassName,
  menuButton = false,
  onClick,
  customClass,
}: {
  text: string;
  bgClassName: "bg-success" | "bg-warning" | "bg-secondary" | "bg-error" | "bg-primary";
  menuButton?: boolean;
  onClick?: () => void;
  customClass?: string;
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgClassName}
        ${customClass}
        ${!menuButton ? "w-[75%]" : ""}
        p-2
        rounded-box text-primary-content text-2xl
        transition-all duration-300 
        hover:scale-110 hover:bg-primary
        cursor-pointer
      `}
    >
      {text}
    </button>
  );
};

export default CustomButton;
