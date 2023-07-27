import { listOfThemes } from "@/app/config/theme";
import { ThemeEnum } from "@/app/types/enum/theme";

type Props = {
  themeSelected: ThemeEnum;
  // eslint-disable-next-line no-unused-vars
  handleOnThemeChange: (theme: ThemeEnum) => void;
};

const ListThemes = ({ themeSelected, handleOnThemeChange }: Props) => {
  return (
    <>
      {listOfThemes.map((item) => (
        <div
          key={item.id}
          className={`w-[10px] h-[10px] lg:w-[13px] lg:h-[13px] ${
            item.color
          } rounded-full cursor-pointer shadow-md ${
            themeSelected === item.id ? "animate-bounce" : ""
          }`}
          onClick={() => handleOnThemeChange(item.id)}
        />
      ))}
    </>
  );
};

export default ListThemes;
