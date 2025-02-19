import { motion } from "framer-motion";
import { useCallback, useEffect, useLayoutEffect, useState } from "react";

const isDark = (): boolean =>
  (localStorage && localStorage.theme === "dark") ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);
/**
 * This method checks if theme is saved in localstorage.
 * If not then returns null
 * If exists then returns boolean
 * @returns
 */
const getLocalStorageValue = () => {
  if (!localStorage || !localStorage.getItem("theme")) {
    return null;
  }
  return localStorage.getItem("theme") === "dark";
};

const getPrefersMedia = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};
const getThemeString = (isDark: boolean): string => (isDark ? "dark" : "light");

const DarkModeToggle = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  console.log(isDarkMode);
  const toggleMode = useCallback(() => {
    const newDark = !isDarkMode;
    setDarkMode(newDark);
    localStorage.setItem("theme", getThemeString(newDark));
  }, [isDarkMode]);
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const valueInStorage = getLocalStorageValue();
    if (valueInStorage !== null) {
      setDarkMode(valueInStorage);
    } else {
      const valueInSystem = getPrefersMedia();
      setDarkMode(valueInSystem);
    }
  }, []);
  useLayoutEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <motion.button
      className="text-2xl text-yellow-400 focus:outline-none sm:text-3xl dark:text-yellow-300 cursor-pointer"
      onClick={toggleMode}
      key={isDarkMode ? "dark-icon" : "light-icon"}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 20, opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {isDarkMode ? "🌙" : "🌤️"}
    </motion.button>
  );
};

export default DarkModeToggle;
