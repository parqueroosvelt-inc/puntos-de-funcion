import { useState, useEffect } from "react";
import { THEME_MODES } from "../constants/theme-modes";

export const useTheme = () => {
  // Initialize theme from localStorage, or default to 'light'
  const initialTheme = localStorage.getItem("theme") || THEME_MODES.dark;
  const [theme, setTheme] = useState(initialTheme);

  const toggleTheme = () => {
    const newTheme =
      theme === THEME_MODES.light ? THEME_MODES.dark : THEME_MODES.light;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.getElementById("theme_container").className = newTheme;
  };

  useEffect(() => {
    document.getElementById("theme_container").className = theme;
  }, [theme]);

  return [theme, toggleTheme];
};
