"use client";

import { getLocalStore, setLocalStore } from "@/app/helpers/localStore";
import { ThemeEnum } from "@/app/types/enum/theme";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import IconButton from "../IconButton";

type Props = {
  // eslint-disable-next-line no-unused-vars
  handleOnThemeChange: (theme: ThemeEnum) => void;
};

const DarkMode = ({ handleOnThemeChange }: Props) => {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
    setLocalStore("dark", { isDark: !dark });
  };

  useEffect(() => {
    if (dark) {
      handleOnThemeChange(ThemeEnum.blue);
    } else {
      handleOnThemeChange(ThemeEnum.white);
    }
  }, [dark, handleOnThemeChange]);

  useEffect(() => {
    if (getLocalStore("dark")) {
      const themeLS = getLocalStore("dark") as { isDark: boolean };
      setDark(themeLS.isDark);
    }
  }, []);

  return (
    <>
      {dark ? (
        <motion.div
          key={dark.toString()}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <IconButton onClick={handleTheme}>
            <MdDarkMode className="text-icon" />
          </IconButton>
        </motion.div>
      ) : (
        <motion.div
          key={dark.toString()}
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
        >
          <IconButton onClick={handleTheme}>
            <BsFillSunFill className="text-icon" />
          </IconButton>
        </motion.div>
      )}
    </>
  );
};

export default DarkMode;
