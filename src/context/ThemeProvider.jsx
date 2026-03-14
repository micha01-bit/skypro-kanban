import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";


export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("currentTheme") || "light");
  const [themeNameToSelect, setThemeNameToSelect] = useState(localStorage.getItem("themeNameToSelect") || "Тёмная тема");

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
    setThemeNameToSelect((prevThemeName) => prevThemeName === "Тёмная тема" ? "Светлая тема" : "Тёмная тема");
  };

  useEffect(() => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${currentTheme}-theme`);

    localStorage.setItem("currentTheme", currentTheme);
    localStorage.setItem("themeNameToSelect", themeNameToSelect);
  }, [currentTheme]);


  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeNameToSelect,
        toggleTheme
      }}>
      {children}
    </ThemeContext.Provider>
  )
}