import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import PageTitle from "../page-title/page-title";
import { cx } from "@emotion/css";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  coverImage: ReactNode;
};

const imageAnimation: Variants = {
  hidden: { opacity: 0, y: "-100%", x: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1,
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
const bodyAnimation: Variants = {
  hidden: { opacity: 0 },
  enter: {
    opacity: 1,

    transition: {
      duration: 2,
      delay: 0.5,
      delayChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
    x: "+200%",
    y: 0,
    transition: {
      duration: 3,
    },
  },
};

const Layout = ({
  children,
  title,
  description,
  coverImage,
}: Props): JSX.Element => (
  <div className="flex h-screen overflow-hidden mt-20">
    <div className={cx("grow hidden ", { "w-2/5 sm:block": !!coverImage })}>
      <motion.div
        initial="hidden"
        animate="enter"
        exit="exit"
        className="object-fill"
        variants={imageAnimation}
      >
        {coverImage}
      </motion.div>
    </div>
    <div className={cx("w-full  h-screen", { "sm:w-3/5": !!coverImage })}>
      <motion.main
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={bodyAnimation}
        transition={{ type: "linear" }}
        className="flex flex-col items-start w-full pt-4 px-2 sm:px-4 md:px-16 lg:px-24 xl:px-28 2xl:px-32 h-full"
      >
        <PageTitle title={title} center subtitle={description} />
        <div className="grow w-full">{children}</div>
      </motion.main>
    </div>
  </div>
);

export default Layout;
