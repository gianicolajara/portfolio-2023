import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import IconButtonHover from "./IconButtonHover";

const techList = [
  {
    id: 1,
    color: "#e34c26",
    floatingLabel: "HTML",
    Icon: AiFillHtml5,
  },
  {
    id: 2,
    color: "#016BC1",
    floatingLabel: "CSS",
    Icon: BiLogoCss3,
  },
  {
    id: 3,
    color: "#F0DC4E",
    floatingLabel: "Javascript",
    Icon: BiLogoJavascript,
  },
  {
    id: 4,
    color: "#08D9FF",
    floatingLabel: "React",
    Icon: BiLogoReact,
  },
  {
    id: 5,
    color: "black",
    floatingLabel: "Nextjs",
    Icon: TbBrandNextjs,
  },
  {
    id: 6,
    color: "#83BF48",
    floatingLabel: "Nodejs",
    Icon: BiLogoNodejs,
  },
  {
    id: 7,
    color: "#08D9FF",
    floatingLabel: "Tailwind",
    Icon: BiLogoTailwindCss,
  },
  {
    id: 8,
    color: "#57AE52",
    floatingLabel: "MongoDB",
    Icon: BiLogoMongodb,
  },
  {
    id: 9,
    color: "#83BF48",
    floatingLabel: "Express",
    Icon: SiExpress,
  },
];

const IconsTech = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {techList.map((item) => (
        <IconButtonHover
          key={item.id}
          floatingLabel={item.floatingLabel}
          className="w-[60px] h-[60px]"
        >
          <item.Icon color={item.color} size={50} />
        </IconButtonHover>
      ))}
    </div>
  );
};

export default IconsTech;
