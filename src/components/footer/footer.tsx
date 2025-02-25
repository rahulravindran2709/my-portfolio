import { Link } from "@tanstack/react-router";
import { NavLink } from "@/components/nav-link/nav-link";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-inner bg-seondary-color dark:bg-dark-color">
        <div className="container">
          <div className="flex flex-col items-center pt-12 pb-5 md:pt-16">
            <div className="footer-logo mb-6 h-[75px] w-[75px]">
              <Link to="/">
                <img src="/assets/img/logo/logo.png" alt="" />
              </Link>
            </div>
            <div>
              <ul className="nav flex flex-wrap items-center justify-center gap-x-8">
                <li className="nav_item group relative">
                  <NavLink href="/skills" label="Skills" />
                </li>
              </ul>
            </div>
            <div className="copyright text-gray-color mt-5 text-sm whitespace-nowrap md:text-lg">
              © {new Date().getFullYear()} All rights reserved by
              <Link to="/" className="hover:text-primary text-white">
                Rahul Ravindran
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
