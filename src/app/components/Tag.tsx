import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Tag = ({ children }: Props) => {
  return (
    <div className="flex w-max bg-background rounded-lg border-2 border-gray-light p-1 ">
      {children}
    </div>
  );
};

export default Tag;
