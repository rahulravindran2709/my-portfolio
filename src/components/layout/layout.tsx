import { Variants } from "framer-motion";
import { ReactNode } from "react";

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

const Layout = ({ children, title, description, coverImage }: Props) => (
  <main className="h-screen overflow-hidden w-full">{children}</main>
);

export default Layout;
