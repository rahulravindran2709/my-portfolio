import { Link, LinkProps } from "@tanstack/react-router";

export interface NavLinkProps {
  href: LinkProps["to"];
  label: string;
}

export const NavLink = ({ href, label }: NavLinkProps) => {
  return (
    <Link
      to={href}
      className="after:bg-gradient-primary relative z-0 py-2.5 text-base font-medium text-white capitalize after:absolute after:left-0 after:bottom-[10px] after:h-0.5 after:w-0 after:transition-all after:duration-500 hover:after:w-full hover:after:left-0 md:py-4 md:after:bottom-[15px] lg:py-6 lg:after:bottom-[25px] 2xl:py-7"
    >
      {label}
    </Link>
  );
};
