"use client";

import { menuEclipseItem } from "@/app/config/menu";
import { listOfThemes } from "@/app/config/theme";
import { setTheme } from "@/app/helpers/css";
import { ThemeEnum } from "@/app/types/enum/theme";
import { useState } from "react";
import EclipseMenu from "../EclipseMenu";
import ListThemes from "./ListThemes";

const Navbar = () => {
  const [themeSelected, setThemeSelected] = useState(listOfThemes[0].id);

  const handleOnThemeChange = (theme: ThemeEnum) => {
    setThemeSelected(theme);
    setTheme(theme);
  };

  return (
    <nav className="bg-background-light relative p-2 flex justify-between items-center rounded-lg border-2 border-gray-light col-span-1 lg:col-span-3">
      <div>
        <h1 className="font-bold text-lg lg:text-2xl text-title">
          /Gianicola.tsx
        </h1>
      </div>

      <div className="flex gap-x-2 items-center">
        <ListThemes
          handleOnThemeChange={handleOnThemeChange}
          themeSelected={themeSelected}
        />
        <EclipseMenu items={menuEclipseItem} />
      </div>
    </nav>
  );
};

export default Navbar;
