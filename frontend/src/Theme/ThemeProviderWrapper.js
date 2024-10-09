// ThemeProviderWrapper.js
import React, { useState, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./themes"; // Import themes
import ThemeToggle from "./ThemeToggle"; // Import ThemeToggle component

const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState("light"); // State to handle theme

  // Memoize the theme to prevent unnecessary recalculations
  const themeMode = useMemo(
    () => (theme === "light" ? lightTheme : darkTheme),
    [theme]
  );

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeProvider theme={themeMode}>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />{" "}
      {/* Toggle button */}
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
