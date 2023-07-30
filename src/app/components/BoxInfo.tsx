import { ReactNode } from "react";
import Title from "./Title";

type Props = {
  children: ReactNode;
  title?: string;
  smallLabel?: string;
  className?: string;
  hoverAnimations?: boolean;
};

const BoxInfo = ({
  children,
  title,
  smallLabel,
  className,
  hoverAnimations = false,
}: Props) => {
  return (
    <div
      className={`bg-background-light border-2 transition-all border-gray-light rounded-lg w-full h-full flex flex-col ${className} ${
        hoverAnimations ? "hover:border-primary" : ""
      }`}
    >
      {title && (
        <div className="border-b-2 border-gray-light p-4 flex items-center">
          <Title smallLabel={smallLabel}>{title}</Title>
        </div>
      )}
      {children}
    </div>
  );
};

export default BoxInfo;
