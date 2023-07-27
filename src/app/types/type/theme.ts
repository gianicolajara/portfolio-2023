import { ThemeEnum } from "../enum/theme";

export type ThemeConfig = {
  // eslint-disable-next-line no-unused-vars
  [key in ThemeEnum]: {
    [key: string]: string;
  };
};
