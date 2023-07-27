import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button
      className="py-2 px-4 bg-primary text-white hover:bg-secondary transition-all rounded-lg"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
