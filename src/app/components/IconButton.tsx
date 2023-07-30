import { ReactNode, forwardRef } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  getReferencesProps?: Record<string, unknown>;
  active?: boolean;
  id?: string;
  className?: string;
};

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, getReferencesProps, onClick, active, id, className }, ref) => {
    return (
      <button
        id={id}
        onClick={onClick}
        ref={ref}
        {...getReferencesProps}
        className={`p-1 w-[35px] h-[35px] hover:bg-gray-light relative flex justify-center items-center ${
          active ? "bg-gray-light" : ""
        } border-2 border-gray-light rounded-lg transition-all ${className}`}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
