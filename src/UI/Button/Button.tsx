import React from "react";
import s from "./Button.module.scss";
interface ButtonProps {
  children?: React.ReactNode;
  className?: string;
  [x: string]: any;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <button className={s.button + (className ? " " + className : "")} {...rest}>
      {children}
    </button>
  );
};

export default Button;
