import { Link } from "@tanstack/react-router";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav xl:gap-x-30px flex items-center gap-x-5 2xl:gap-x-[45px]">
        <li className="nav_item group relative hidden lg:block">
          <Link
            to="/skills"
            className="after:bg-gradient relative z-0 py-2.5 text-lg font-medium capitalize after:absolute after:right-0 after:bottom-6 after:h-0.5 after:w-0 after:transition-all after:duration-500 hover:after:left-0 hover:after:w-full md:py-4 lg:py-6 2xl:py-7 dark:text-white"
          >
            Skills
          </Link>
        </li>

        <li>
          <button className="bg-y bg-gradient ml-2.5 rounded-full px-8 py-4 text-sm leading-1 font-bold text-white capitalize transition-all duration-300 hover:bg-[-100%]">
            Contact me
          </button>
        </li>
        <li className="menu-bar lg:hidden">
          <div className="menu-bar">
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
