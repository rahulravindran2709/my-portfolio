import { AnimateSharedLayout, motion } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { isActiveLink } from "../../utils";
import Link from "../no-scroll-link/no-scroll-link";

const links: { name: string; href: string }[] = [
  {
    name: "Employment history",
    href: "/employment-history",
  },
  {
    name: "Skills",
    href: "/skills",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "About me",
    href: "/about",
  },
];

const Navigation = (): JSX.Element => {
  const router = useRouter();

  return (
    <AnimateSharedLayout>
      <nav className="flex">
        {links.map(({ name, href }) => (
          <Link key={name} href={href}>
            <a className="mr-6 sm:mr-8 flex flex-col relative">
              {name}
              {isActiveLink(href, router.pathname) && (
                <motion.div layoutId="navigation-underline" className="h-1 bg-purple-500" />
              )}
            </a>
          </Link>
        ))}
      </nav>
    </AnimateSharedLayout>
  );
};

export default Navigation;
