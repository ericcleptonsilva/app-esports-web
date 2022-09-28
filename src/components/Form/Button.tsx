import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}
export const Button = (props: ButtonProps) => {
  return (
    <button {...props} className="w-8 h-8 rounded bg-zinc-900 ">
      {props.text}
    </button>
  );
};
