import React from "react";
import s from "./Layout.module.scss";
import LeftNavigation from "../LeftNavigation/LeftNavigation";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import { Outlet } from "react-router";
const Layout = () => {
  return (
    <div>
      <LeftNavigation />

      <div className={s.container}>
        <HeaderNavigation />
        <Outlet />
      </div>

      <footer>this is footer</footer>
    </div>
  );
};

export default Layout;
