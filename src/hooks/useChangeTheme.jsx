import { useState, useEffect } from "react";
import { THEME_MODES } from "../constants/theme-modes";

export const useTheme = () => {
  // Initialize theme from localStorage, or default to 'light'
  const initialTheme = localStorage.getItem("theme") || "dark-mode";
  const [theme, setTheme] = useState(initialTheme);

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light-mode" ? "dark-mode" : "light-mode";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    // Save theme to localStorage
    document.getElementById("theme_container").className = newTheme;
    // document.body.classList.toggle("dark-theme"); // Toggle CSS class
  };

  // Apply theme class on initial render
  useEffect(() => {
    document.getElementById("theme_container").className = THEME_MODES.light;
    // document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);

  return { theme, toggleTheme };
};
