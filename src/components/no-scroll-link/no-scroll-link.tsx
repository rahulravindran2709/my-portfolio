import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  href: string;
}

const NoScrollLink = ({ children }: IProps) => <span>{children}</span>;

export default NoScrollLink;
