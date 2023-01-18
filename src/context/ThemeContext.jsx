import React from "react";

export const ThemeContext = React.createContext("light");

export default ThemeContext;

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    window.localStorage.setItem("darkTheme", !darkMode);
  };

  const applyTheme = (theme) => {
    const root = document.getElementsByTagName("html")[0];
    root.style.cssText = theme.join(";");
  };

  React.useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem("darkTheme");

    if (lastTheme === "true") {
      setDarkMode(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === "false") {
      setDarkMode(false);
      applyTheme(lightTheme);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const lightTheme = [
  "--bg: hsl(0, 0%, 98%)",
  "--text: hsl(200, 15%, 8%)",
  "--input: hsl(0, 0%, 52%)",
  "--elements: hsl(0, 0%, 100%)",
];

const darkTheme = [
  "--bg: hsl(207, 26%, 17%)",
  "--text: hsl(0, 0%, 100%)",
  "--elements: hsl(209, 23%, 22%)",
];
