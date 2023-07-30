import { ThemeEnum } from "../types/enum/theme";
import { ThemeConfig } from "../types/type/theme";

export const themes: ThemeConfig = {
  [ThemeEnum.blue]: {
    primary: "#00ADB5",
    secondary: "#008F95",
    background: "#222831",
    "background-light": "#393E46",
    "gray-light": "#464C56",
    title: "#E5E5E5",
    font: "#bdc1c6",
    "circle-light": "#00ADB5",
    circle: "#1F1F1F",
    icon: "#FFF",
  },
  [ThemeEnum.white]: {
    primary: "#00ADB5",
    secondary: "#008F95",
    background: "#F4F5F6",
    "background-light": "#E5E7EB",
    "gray-light": "#D7D8DA",
    title: "#374151",
    font: "#374151",
    "circle-light": "#00ADB5",
    circle: "#1F1F1F",
    icon: "#374151",
  },
};

export const setVarCss = (key: string, value: string) => {
  document.documentElement.style.setProperty(`--${key}`, `${value}`);
};

export const setTheme = (theme: ThemeEnum) => {
  for (const key in themes[theme]) {
    setVarCss(key, themes[theme][key]);
  }
};
