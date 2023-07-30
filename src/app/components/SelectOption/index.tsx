import { motion } from "framer-motion";
import { ReactNode } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import P from "../P";

type Props = {
  isSelected?: boolean;
  children?: ReactNode;
  onClick?: () => void;
};

const SelectOption = ({ isSelected = false, children, onClick }: Props) => {
  return (
    <li
      onClick={onClick}
      className="flex gap-x-2 items-center relative p-[2px]"
    >
      {isSelected && (
        <motion.div
          initial={{
            position: "absolute",
            left: -20,
            verticalAlign: "middle",
            opacity: 0,
            translateX: -50,
          }}
          animate={{ translateX: 0, opacity: 1 }}
          exit={{ opacity: 0, translateX: -50 }}
        >
          <AiFillCaretRight className="text-primary" />
        </motion.div>
      )}

      <P className="text-base transition-all text-font hover:text-primary relative after:content-[' '] after:absolute after:w-[100%] after:scale-x-0 after:h-[2px] after:bg-primary after:left-0 after:bottom-0 after:origin-bottom-right after:transition-[transform] after:ease-out after:duration-[250ms] hover:after:origin-bottom-left hover:after:scale-x-100 text-base cursor-pointer select-none">
        {children}
      </P>
    </li>
  );
};

export default SelectOption;
