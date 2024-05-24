import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ Children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((pre) => !pre);
  };

  const theme = isDarkMode ? "dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {Children}
    </ThemeContext.Provider>
  );
};
