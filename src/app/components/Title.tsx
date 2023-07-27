import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  smallLabel?: string;
  underline?: boolean;
};

const Title = ({ children, smallLabel, underline = false }: Props) => {
  return (
    <div className="w-max">
      {smallLabel && (
        <small className="text-secondary tracking-wide">{smallLabel}</small>
      )}
      <div className="w-max">
        <h2 className="text-xl lg:text-2xl font-semibold text-title">
          {children}
        </h2>
        {underline && (
          <div className="w-full h-[4px] bg-primary mt-[-6px]"></div>
        )}
      </div>
    </div>
  );
};

export default Title;
