import { projectsExperience } from "@/app/config/projects";
import { IProjectItem } from "@/app/types/interfaces/project";
import { Dispatch, SetStateAction } from "react";
import BoxInfo from "../BoxInfo";
import SelectOption from "../SelectOption";

type Props = {
  selectProject: IProjectItem;
  setSelectProject: Dispatch<SetStateAction<IProjectItem>>;
};

const SelectorProject = ({ selectProject, setSelectProject }: Props) => {
  return (
    <BoxInfo
      title="Proyectos"
      smallLabel="Experiencia"
      className="col-span-1 row-span-1"
    >
      <div className="p-4 w-full h-full">
        <ul className="w-full h-full flex justify-center items-center flex-col">
          {projectsExperience.map((item) => (
            <SelectOption
              key={item.id}
              isSelected={item.id === selectProject.id}
              onClick={() => setSelectProject(item)}
            >
              {item.title}
            </SelectOption>
          ))}
        </ul>
      </div>
    </BoxInfo>
  );
};

export default SelectorProject;
