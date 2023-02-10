import React, { useEffect, useState } from "react";
import s from "./Layout.module.scss";
import LeftNavigation from "../LeftNavigation/LeftNavigation";

import { Outlet } from "react-router";
import Burger from "../../UI/Burger/Burger";
import ModalProvider from "../../context/ModalContext";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
const Layout = () => {
  const { width } = useWindowDimensions();
  return (
    <div>
      <ModalProvider>
        {width < 850 ? (
          <>
            <Burger />
            <HeaderNavigation />
          </>
        ) : (
          <LeftNavigation />
        )}

        <div className={s.container}>
          <Outlet />
        </div>

        <footer>this is footer</footer>
      </ModalProvider>
    </div>
  );
};

export default Layout;
