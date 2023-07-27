import { IProjectItem } from "@/app/types/interfaces/project";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import BoxInfo from "../BoxInfo";
import Button from "../Button";

type Props = {
  selectProject: IProjectItem;
};

const ImageProject = ({ selectProject }: Props) => {
  const variantsImage: Variants = {
    initial: {
      opacity: 0,
      translateX: -50,
    },
    animate: {
      opacity: 1,
      translateX: 0,
    },
    hover: {
      scale: 1.05,
    },
    tap: {
      scale: 0.9,
    },
  };

  return (
    <BoxInfo className="col-span-1 row-span-1 h-full w-full">
      <div className="w-full h-full flex justify-center items-center">
        <Link
          href={selectProject.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            key={selectProject.id}
            variants={variantsImage}
            initial="initial"
            animate="animate"
            whileHover="hover"
            whileTap="tap"
            className="p-4 flex justify-center items-center"
          >
            <div className="absolute z-10">
              <Button>Visitar</Button>
            </div>
            <div className="w-full h-full">
              <Image
                src={selectProject.image}
                alt={selectProject.title}
                width={1024}
                height={720}
                priority={true}
                className="max-w-[270px] md:max-w-[280px] lg:max-w-[300px]"
              />
            </div>
          </motion.div>
        </Link>
      </div>
    </BoxInfo>
  );
};

export default ImageProject;
