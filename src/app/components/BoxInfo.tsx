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
  const hoverAnimationsStyles = hoverAnimations
    ? "hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all"
    : "";

  return (
    <div
      className={`bg-background-light border-2 border-gray-light rounded-lg w-full h-full flex flex-col ${className} ${hoverAnimationsStyles}`}
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
