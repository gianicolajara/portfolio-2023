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

const IconsTech = () => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <AiFillHtml5 color="#e34c26" size={70} />
      <BiLogoCss3 color="#016BC1" size={70} />
      <BiLogoJavascript color="#F0DC4E" size={70} />
      <BiLogoReact color="#08D9FF" size={70} />
      <TbBrandNextjs color="black" size={70} />
      <BiLogoNodejs color="#83BF48" size={70} />
      <BiLogoTailwindCss color="#83BF48" size={70} />
      <BiLogoMongodb color="#57AE52" size={70} />
      <SiExpress color="#83BF48" size={70} />
    </div>
  );
};

export default IconsTech;
