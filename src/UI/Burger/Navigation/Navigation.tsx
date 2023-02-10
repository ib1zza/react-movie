import * as React from "react";
import { motion } from "framer-motion";
import s from "../Burger.module.scss";

interface Props {
  children?: React.ReactNode;
}
const NavVariants = {
  visible: {
    opacity: 1,
  },
  hidden: { opacity: 0 },
};
export const Navigation: React.FC<Props> = ({ children }) => (
  <>
    <motion.nav
      // layout
      className={s.header__burger__nav}
      variants={NavVariants}
      initial={"hidden"}
      animate={"visible"}
      exit={"hidden"}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      <div>{children}</div>
    </motion.nav>
  </>
);
