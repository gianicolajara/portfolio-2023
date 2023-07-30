import {
  FloatingArrow,
  arrow,
  offset,
  useFloating,
  useHover,
  useInteractions,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import IconButton from "./IconButton";

type Props = {
  children: ReactNode;
  floatingLabel: string;
  className?: string;
};

const IconButtonHover = ({ children, floatingLabel, className }: Props) => {
  const [open, setOpen] = useState(false);

  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), arrow({ element: arrowRef })],
    placement: "top",
  });

  const hover = useHover({
    ...context,
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <IconButton
        ref={refs.setReference}
        active={open}
        getReferencesProps={getReferenceProps()}
        className={className}
      >
        {children}
      </IconButton>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, top: 10 }}
            animate={{ opacity: 1, top: 0 }}
            exit={{ opacity: 0, top: 10 }}
            ref={refs.setFloating}
            style={floatingStyles}
            className="bg-background p-1 rounded-lg flex justify-center items-center shadow-md"
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              className="fill-background"
            />
            <small className="text-font">{floatingLabel}</small>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default IconButtonHover;
