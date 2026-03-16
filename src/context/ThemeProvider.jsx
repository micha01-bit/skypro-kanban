import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("currentTheme") || "light"
  );

  // Функция для получения текстового представления темы
  const getThemeDisplayName = (theme) => {
    return theme === "dark" ? "Тёмная тема" : "Светлая тема";
  };

  const themeNameToSelect = getThemeDisplayName(currentTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    // Удаляем все тематические классы
    document.body.classList.remove("light-theme", "dark-theme");
    // Добавляем класс текущей темы
    document.body.classList.add(`${currentTheme}-theme`);

    // Сохраняем в localStorage
    localStorage.setItem("currentTheme", currentTheme);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeNameToSelect,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
 
 
  
   
// import { useEffect, useState } from "react";
// import { ThemeContext } from "./ThemeContext";


// export const ThemeProvider = ({ children }) => {
//   const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("currentTheme") || "light");
//   const [themeNameToSelect, setThemeNameToSelect] = useState(localStorage.getItem("themeNameToSelect") || "Тёмная тема");

//   const toggleTheme = () => {
//     setCurrentTheme((prevTheme) => prevTheme === "light" ? "dark" : "light");
//     setThemeNameToSelect((prevThemeName) => prevThemeName === "Тёмная тема" ? "Светлая тема" : "Тёмная тема");
//   };

//   useEffect(() => {
//     document.body.classList.remove("light-theme", "dark-theme");
//     document.body.classList.add(`${currentTheme}-theme`);

//     localStorage.setItem("currentTheme", currentTheme);
//     localStorage.setItem("themeNameToSelect", themeNameToSelect);
//   }, [currentTheme]);


//   return (
//     <ThemeContext.Provider
//       value={{
//         currentTheme,
//         themeNameToSelect,
//         toggleTheme
//       }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }