import { GlobalStyles as GlobalCss } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const GlobalStyles = () => (
  <GlobalCss
    styles={{
      "*": {
        transition: "background-color 0.5s ease, color 0.5s ease",
      },
      body: {
        margin: 0,
        padding: 0,
      },
    }}
  />
);

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkTheme = () => {
    localStorage.setItem("darkMode", !isDarkMode);
    setIsDarkMode(!isDarkMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
      primary: {
        main: isDarkMode ? "#202C37" : "#FAFAFA",
      },
      secondary: {
        main: isDarkMode ? "#2B3945" : "#FFFFFF",
      },
      background: {
        default: isDarkMode ? "#202C37" : "#FAFAFA",
        paper: isDarkMode ? "#2B3945" : "#FFFFFF",
      },
      text: {
        primary: isDarkMode ? "#FFFFFF" : "#000000",
      },
    },
    shadows: [
      "none",
      "0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.2)",
      "0px 1px 5px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.2)",
      "0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px -2px rgba(0, 0, 0, 0.2)",
      "0px 2px 4px -1px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.12)",
      "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)",
      "0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 4px 6px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12)",
      "0px 4px 8px -2px rgba(0, 0, 0, 0.12), 0px 5px 10px rgba(0, 0, 0, 0.14), 0px 2px 16px rgba(0, 0, 0, 0.2)",
      "0px 5px 10px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2)",
      "0px 5px 10px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 3px 5px -1px rgba(0, 0, 0, 0.2)",
      "0px 6px 12px -4px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 4px 18px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.12)",
      "0px 6px 12px -4px rgba(0, 0, 0, 0.12), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 4px 18px rgba(0, 0, 0, 0.2), 0px 4px 6px -2px rgba(0, 0, 0, 0.12)",
      "0px 7px 16px -5px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.2), 0px 5px 7px -2px rgba(0, 0, 0, 0.12)",
      "0px 7px 16px -5px rgba(0, 0, 0, 0.12), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.2), 0px 5px 7px -2px rgba(0, 0, 0, 0.12)",
      "0px 8px 18px -6px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 6px 24px rgba(0, 0, 0, 0.2), 0px 6px 8px -3px rgba(0, 0, 0, 0.12)",
      "0px 8px 18px -6px rgba(0, 0, 0, 0.12), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 6px 24px rgba(0, 0, 0, 0.2), 0px 6px 8px -3px rgba(0, 0, 0, 0.12)",
      "0px 9px 20px -7px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 7px 26px rgba(0, 0, 0, 0.2), 0px 7px 9px -3px rgba(0, 0, 0, 0.12)",
      "0px 9px 20px -7px rgba(0, 0, 0, 0.12), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 7px 26px rgba(0, 0, 0, 0.2), 0px 7px 9px -3px rgba(0, 0, 0, 0.12)",
      "0px 10px 22px -8px rgba(0, 0, 0, 0.12), 0px 18px 26px rgba(0, 0, 0, 0.14), 0px 8px 28px rgba(0, 0, 0, 0.2), 0px 8px 10px -3px rgba(0, 0, 0, 0.12)",
      "0px 10px 22px -8px rgba(0, 0, 0, 0.12), 0px 18px 26px rgba(0, 0, 0, 0.14), 0px 8px 28px rgba(0, 0, 0, 0.2), 0px 8px 10px -3px rgba(0, 0, 0, 0.12)",
      "0px 11px 24px -9px rgba(0, 0, 0, 0.12), 0px 20px 28px rgba(0, 0, 0, 0.14), 0px 9px 30px rgba(0, 0, 0, 0.2), 0px 9px 11px -4px rgba(0, 0, 0, 0.12)",
      "0px 11px 24px -9px rgba(0, 0, 0, 0.12), 0px 20px 28px rgba(0, 0, 0, 0.14), 0px 9px 30px rgba(0, 0, 0, 0.2), 0px 9px 11px -4px rgba(0, 0, 0, 0.12)",
      "0px 12px 26px -10px rgba(0, 0, 0, 0.12), 0px 22px 30px rgba(0, 0, 0, 0.14), 0px 10px 32px rgba(0, 0, 0, 0.2), 0px 10px 12px -4px rgba(0, 0, 0, 0.12)",
      "0px 12px 26px -10px rgba(0, 0, 0, 0.12), 0px 22px 30px rgba(0, 0, 0, 0.14), 0px 10px 32px rgba(0, 0, 0, 0.2), 0px 10px 12px -4px rgba(0, 0, 0, 0.12)",
      "0px 13px 28px -11px rgba(0, 0, 0, 0.12), 0px 24px 32px rgba(0, 0, 0, 0.14), 0px 11px 34px rgba(0, 0, 0, 0.2), 0px 11px 13px -5px rgba(0, 0, 0, 0.12)",
      "0px 13px 28px -11px rgba(0, 0, 0, 0.12), 0px 24px 32px rgba(0, 0, 0, 0.14), 0px 11px 34px rgba(0, 0, 0, 0.2), 0px 11px 13px -5px rgba(0, 0, 0, 0.12)",
    ],
  });

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme, isDarkMode }}>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
}

export { DarkModeProvider, useThemeContext };
