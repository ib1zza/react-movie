import React from "react";
import s from "./Wrapper.module.scss";

interface Props {
  children: React.ReactNode;
}
const Wrapper: React.FC<Props> = ({ children }) => {
  return <div className={s.wrapper}>{children}</div>;
};

export default Wrapper;
