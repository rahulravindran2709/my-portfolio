import Link from "../no-scroll-link/no-scroll-link";

import Navigation from "../navigation/navigation";
import DarkModeToggle from "../dark-mode-toggle/dark-mode-toggle";

const Header = (): JSX.Element => (
  <header
    className="
        w-full fixed bg-white flex flex-row justify-between items-center
        h-16 md:h-20 border-b border-gray-200 z-50
        px-8 sm:px-16 md:px-36 lg:px-52 xl:px-80 2xl:px-96
        text-black
        dark:bg-gray-800/5 
        dark:border-gray-600
        dark:text-white
    "
  >
    <Link href="/">
      <a>
        <span className="sm:hidden">RR</span>
        <span className="hidden sm:inline">Rahul Ravindran</span>
      </a>
    </Link>
    <div className="flex flex-row items-center">
      <Navigation />
      <DarkModeToggle />
    </div>
  </header>
);

export default Header;
