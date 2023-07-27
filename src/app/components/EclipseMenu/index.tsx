import { IMenuItemEclipse } from "@/app/types/interfaces/menu";
import {
  offset,
  useClick,
  useFloating,
  useInteractions,
} from "@floating-ui/react";
import { useEffect, useState } from "react";
import { HiOutlineEllipsisVertical } from "react-icons/hi2";
import IconButton from "../IconButton";
import ItemMenu from "./ItemMenu";

type Props = {
  items: IMenuItemEclipse[];
};

const EclipseMenu = ({ items }: Props) => {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: open,
    onOpenChange: setOpen,
    middleware: [offset(5)],
    placement: "bottom-end",
  });

  const click = useClick({
    ...context,
    floatingStyles: {
      zIndex: 999,
    },
  });

  const { getReferenceProps, getFloatingProps } = useInteractions([click]);

  const handleClickItem = (originalFunc: () => void) => {
    originalFunc();
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", (e) => {
      const element = e.target as HTMLElement;

      if (element.id !== "eclipse" && element.id !== "eclipse-button") {
        setOpen(false);
      }
    });
  }, []);

  return (
    <>
      <IconButton
        id="eclipse-button"
        active={open}
        ref={refs.setReference}
        getReferencesProps={getReferenceProps()}
      >
        <HiOutlineEllipsisVertical
          className="h-6 w-6 text-icon"
          id="eclipse-button"
        />
      </IconButton>
      {open && (
        <div
          id="eclipse"
          className="bg-background-light border-2 border-gray-light text-font p-2 rounded-lg z-[999]"
          style={floatingStyles}
          ref={refs.setFloating}
          {...getFloatingProps()}
        >
          <ul className="w-full h-full flex flex-col">
            {items.map(({ id, label, onClick, url }) => (
              <ItemMenu
                label={label}
                key={id}
                onClick={() => handleClickItem(onClick)}
                url={url}
              />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default EclipseMenu;
