import { Link } from "@tanstack/react-router";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner bg-seondary-color dark:bg-dark-color">
        <div className="container">
          <div className="pt-50px md:pt-60px flex flex-col items-center pb-5">
            <div className="footer-logo w-75px h-75px mb-6">
              <Link to="/">
                <img src="./assets/img/logo/logo.png" alt="" />
              </Link>
            </div>
            <div>
              <ul className="nav gap-x-35px flex flex-wrap items-center justify-center">
                <li className="nav_item group relative">
                  <Link
                    to="/skills"
                    className="lg:py-25px after:bg-gradient-primary relative z-0 py-2.5 text-base font-medium text-white capitalize after:absolute after:right-0 after:bottom-[10px] after:h-0.5 after:w-0 after:transition-all after:duration-500 group-hover:after:w-full hover:after:left-0 md:py-4 md:after:bottom-[15px] lg:after:bottom-[25px] 2xl:py-7"
                  >
                    Skills
                  </Link>
                </li>
              </ul>
            </div>
            <div className="copyright text-gray-color mt-5 text-sm whitespace-nowrap md:text-base">
              © {new Date().getFullYear()} All rights reserved by
              <a
                href="index.html"
                className="text-white-color hover:text-primary-color"
              >
                Rahul Ravindran
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
