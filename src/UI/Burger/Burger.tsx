import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import s from "./Burger.module.scss";
import MenuToggle from "./MenuToggle/MenuToggle";
import { Navigation } from "./Navigation/Navigation";

import { NavLink, useLocation } from "react-router-dom";
import { AppRoutes } from "../../types/AppRoutes";

import { useModalContext } from "../../context/ModalContext";

const NavLinkVariants = {
  visible: (custom: number) => ({
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
    },
  }),
  hidden: (custom: number) => ({
    opacity: 0,
    transition: {
      delay: 0.15 * custom,
    },
  }),
};

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 20px 25px)`,

    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(20px at 30px 30px)",

    transition: {
      delay: 0,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const overlayVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const links = [
  { name: "home", to: AppRoutes.HOME },
  { name: "search", to: AppRoutes.SEARCH },
  { name: "genres", to: AppRoutes.GENRES },
  { name: "lists", to: AppRoutes.LISTS },
];

const Burger: React.FC = () => {
  const { pathname } = useLocation();
  const {
    menu: isOpened,
    setMenu: setIsOpened,
    setModal: showModal,
  } = useModalContext();
  const toggle = () => setIsOpened(!isOpened);

  useEffect(() => {
    setIsOpened(false);
  }, [pathname, setIsOpened]);

  return (
    <div>
      <motion.div
        className={s.header__burger}
        animate={isOpened ? "open" : "closed"}
      >
        <motion.div
          initial={false}
          className={s.burger__background}
          variants={sidebar}
          style={{ position: "fixed" }}
        />
        <MenuToggle toggle={toggle} />

        <AnimatePresence mode="wait">
          {isOpened && (
            <>
              <Navigation>
                {links.map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={NavLinkVariants}
                    animate={"visible"}
                    initial={"hidden"}
                    exit={"hidden"}
                    className={s.header__burger__nav__link}
                  >
                    <NavLink
                      className={({ isActive }) => (isActive ? s.active : "")}
                      to={link.to}
                    >
                      {link.name}
                    </NavLink>
                  </motion.div>
                ))}
              </Navigation>

              <motion.div
                onClick={() => setIsOpened(false)}
                className={s.header__burger__overlay}
                variants={overlayVariants}
                initial={"hidden"}
                animate={"visible"}
                exit={"hidden"}
                transition={{ duration: 0.3 }}
              />
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Burger;
