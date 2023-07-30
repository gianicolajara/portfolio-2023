"use client";

import { menuEclipseItem } from "@/app/config/menu";
import { setTheme } from "@/app/helpers/css";
import { ThemeEnum } from "@/app/types/enum/theme";
import EclipseMenu from "../EclipseMenu";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const handleOnThemeChange = (theme: ThemeEnum) => {
    setTheme(theme);
  };

  return (
    <nav className="bg-background-light relative py-2 px-4 flex justify-between items-center rounded-lg border-2 border-gray-light col-span-1 lg:col-span-3">
      <div>
        <h1 className="font-bold text-lg lg:text-2xl text-title">
          /Gianicola.tsx
        </h1>
      </div>

      <div className="flex gap-x-2 items-center justify-center">
        <DarkMode handleOnThemeChange={handleOnThemeChange} />
        <EclipseMenu items={menuEclipseItem} />
      </div>
    </nav>
  );
};

export default Navbar;
