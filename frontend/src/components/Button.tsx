import { MouseEvent, ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  type?: "primary" | "secondary"; // Add more types as needed
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  classes?: string;
};

const Button = ({ children, type, onClick, classes }: ButtonProps) => {
  if (type === "primary") {
    return (
      <button
        onClick={onClick}
        type="button"
        className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg ${"bg-white text-black"}  transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 link ${"cursor-none"}  ${classes}`}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      onClick={onClick}
      type="button"
      className={`text-sm tablet:text-base p-1 laptop:p-2 m-1 laptop:m-2 rounded-lg flex items-center transition-all ease-out duration-300 ${"hover:bg-slate-600 text-white"} hover:scale-105 active:scale-100  tablet:first:ml-0  ${"cursor-none"} ${classes} link`}
    >
      {children}
    </button>
  );
};

export default Button;
