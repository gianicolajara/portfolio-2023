import { tagsAboutMe } from "@/app/config/tags";
import { timeLineStudy } from "@/app/config/timeline";
import Image from "next/image";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import BoxInfo from "../BoxInfo";
import IconLink from "../IconLink";
import IconsTech from "../IconsTech";
import LeftInfoPage from "../LeftInfoPage";
import ListOfTags from "../ListOfTags";
import Navbar from "../Navbar";
import TimeLine from "../TimeLine";

//

const InformationPage = () => {
  return (
    <section className="w-full h-full relative">
      <LeftInfoPage title="Información" />

      <div className="lg:min-h-screen w-full h-full grid grid-cols-1 grid-rows-[auto,_auto,_auto,_auto,_300px] lg:grid-cols-3 lg:grid-rows-[auto,_2fr,_1fr] lg:gap-4 gap-y-4">
        <Navbar />

        <BoxInfo
          title="/Estudios"
          smallLabel="Experiencia"
          className="col-span-1 row-span-1 lg:row-span-2"
        >
          <div className="flex justify-center items-center p-4 h-full">
            <TimeLine items={timeLineStudy} />
          </div>
        </BoxInfo>
        <BoxInfo
          title="/Tecnologias"
          smallLabel="Programación"
          className="col-span-1 row-span-1"
        >
          <div className="w-full h-full flex justify-center items-center">
            <IconsTech />
          </div>
        </BoxInfo>

        <BoxInfo
          title="/Sobre-mi"
          smallLabel="Información"
          className="col-span-1 row-span-1"
        >
          <div className="p-2 w-full h-full flex flex-col justify-between">
            <div className="w-full flex gap-2 items-center flex-wrap">
              <ListOfTags item={tagsAboutMe} />
            </div>
            <div className="flex gap-x-2 w-full justify-end">
              <IconLink
                Icon={AiFillGithub}
                url="https://github.com/gianicolajara"
                size={50}
              />
              <IconLink
                Icon={AiFillLinkedin}
                url="https://www.linkedin.com/in/gianicola-jara-panichella-0451a2170/"
                size={50}
              />
            </div>
          </div>
        </BoxInfo>

        <BoxInfo
          className="group col-span-1 h-full lg:h-auto lg:col-span-2 row-span-1 overflow-hidden relative"
          hoverAnimations={true}
        >
          <div className="hover:cursor-pointer w-full h-full relative flex justify-center items-center">
            <div className="absolute z-20 w-full h-full">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={
                  "https://www.reddit.com/r/perfectloops/comments/9376vf/smoke_in_the_rain/"
                }
                className=" text-primary g tracking-[.4rem] opacity-0 group-hover:opacity-100 transition-all font-extralight w-full h-full flex justify-center items-center"
              >
                Ver el creador original
              </a>
            </div>
            <Image
              src={"/images/heroe.webp"}
              priority={true}
              alt="gif"
              fill={true}
              className="object-cover absolute contrast-125 brightness-100 group-hover:brightness-50 blur-0 group-hover:blur-xl transition-all"
            />
          </div>
        </BoxInfo>
      </div>
    </section>
  );
};

export default InformationPage;
