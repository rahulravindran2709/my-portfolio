import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import PageTitle from "../page-title/page-title";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants: Variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 3,
    },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: -100,
    zoom: 20,
    transition: {
      duration: 3,
    },
  },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <div className="grow">
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: "linear" }}
      className="flex flex-col items-start w-full pt-10 px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96 pt-24 h-full">
      <PageTitle title={title} center subtitle={description} />
      {children}
    </motion.main>
  </div>
);

export default Layout;
