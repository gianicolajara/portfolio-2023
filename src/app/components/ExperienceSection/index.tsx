import { projectsExperience } from "@/app/config/projects";
import { timeLineJobs } from "@/app/config/timeline";
import { IProjectItem } from "@/app/types/interfaces/project";
import { useState } from "react";
import BoxInfo from "../BoxInfo";
import LeftInfoPage from "../LeftInfoPage";
import TimeLineHorizontal from "../TimeLineHorizontal";
import CircleProject from "./CircleProject";
import ImageProject from "./ImageProject";
import SelectorProject from "./SelectorProject";

const ExperienceSection = () => {
  const [selectProject, setSelectProject] = useState<IProjectItem>(
    projectsExperience[0]
  );

  return (
    <section className="w-full h-full relative mt-4">
      <LeftInfoPage title="Experiencia" />

      <div className="h-full lg:max-h-screen w-full grid grid-cols-1 grid-rows-[auto,_auto,_auto,_200px] lg:grid-cols-3 lg:grid-rows-[auto,_1fr] gap-4">
        <BoxInfo
          title="Trabajos"
          smallLabel="Experiencia"
          className="col-span-1 lg:col-span-3"
        >
          <div className="p-4">
            <TimeLineHorizontal listItems={timeLineJobs} />
          </div>
        </BoxInfo>

        <SelectorProject
          selectProject={selectProject}
          setSelectProject={setSelectProject}
        />
        <CircleProject selectProject={selectProject} />

        <ImageProject selectProject={selectProject} />
      </div>
    </section>
  );
};

export default ExperienceSection;
