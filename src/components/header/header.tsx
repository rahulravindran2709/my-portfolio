import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";
import Navigation from "../navigation/navigation";
import { Link } from "@tanstack/react-router";

const Brand = () => {
  return (
    <ul className="xl:gap-x-35px flex items-center gap-x-[15px]">
      <li>
        <Link to="/" className="logo">
          <span className="text-lg">RR</span>
        </Link>
      </li>
      <li className="hidden md:block">
        <a
          href="mailto:rahul.ravindran.work@gmail.com"
          className="text-size-15 text-seondary-color dark:text-white-color font-medium"
        >
          rahul.ravindran.work@gmail.com
        </a>
      </li>
    </ul>
  );
};
const Header = () => (
  <header className="absolute top-0 left-0 z-50 w-full bg-transparent">
    <div className="relative pt-4 pb-5 md:pb-7 xl:pt-5 xl:pb-5">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between">
          <div>
            <Brand />
          </div>
          <div className="flex items-center gap-2">
            <Navigation />
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
