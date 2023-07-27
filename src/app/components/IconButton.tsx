import { ReactNode, forwardRef } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  getReferencesProps?: Record<string, unknown>;
  active?: boolean;
  id?: string;
};

const IconButton = forwardRef<HTMLButtonElement, Props>(
  ({ children, getReferencesProps, onClick, active, id }, ref) => {
    return (
      <button
        id={id}
        onClick={onClick}
        ref={ref}
        {...getReferencesProps}
        className={`p-2 hover:bg-gray-light ${
          active ? "bg-gray-light" : ""
        } rounded-full transition-all`}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
