import { IProjectItem } from "@/app/types/interfaces/project";
import { Variants, motion } from "framer-motion";
import BoxInfo from "../BoxInfo";

type Props = {
  selectProject: IProjectItem;
};

const CircleProject = ({ selectProject }: Props) => {
  const variants: Variants = {
    initial: {
      border: "none",
    },
    animate_in: {
      rotate: [0, -2560, -2520],
      transition: {
        ease: "easeOut",
        duration: 3,
      },
      border: [
        "2px solid var(--circle-light)",
        "2px solid #E84545",
        "2px solid #E84545",
        "2px solid var(--circle-light)",
      ],
      borderLeftColor: [
        "var(--circle-light)",
        "#FFF",
        "var(--circle-light)",
        "var(--circle-light)",
      ],
      borderRightColor: [
        "var(--circle-light)",
        "#FFF",
        "var(--circle-light)",
        "var(--circle-light)",
      ],
      boxShadow: [
        "0px 0px 0px var(--circle-light)",
        "0px 0px 0px var(--circle-light)",
        "0px 0px 5px var(--circle-light)",
        "0px 0px 10px var(--circle-light)",
      ],
    },
  };

  return (
    <BoxInfo className="col-span-1 row-span-1">
      <div className="p-4 w-full h-full flex justify-center items-center">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate_in"
          key={selectProject.id}
          className="w-[200px] h-[200px] bg-circle rounded-full flex justify-center items-center"
        >
          {selectProject !== null && (
            <selectProject.Icon size={50} color="white" />
          )}
        </motion.div>
      </div>
    </BoxInfo>
  );
};

export default CircleProject;
