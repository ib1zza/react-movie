import React, { useEffect, useState } from "react";
import s from "./HeaderNavigation.module.scss";
import { useLocation } from "react-router-dom";
const HeaderNavigation = () => {
  const { pathname } = useLocation();
  const [value, setValue] = useState("");

  useEffect(() => {
    const n = pathname.split("/")[1];
    setValue(n);
  }, [pathname]);
  return <div className={s.container}>{value || "home"}</div>;
};

export default HeaderNavigation;
