import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const P = ({ children, className }: Props) => {
  return <p className={`${className} text-font`}>{children}</p>;
};

export default P;
