import { createTheme } from "@mui/material";
import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

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
      "0 2px 4px rgba(0, 0, 0, 0.1)",
      "0 4px 8px rgba(0, 0, 0, 0.1)", // Light mode shadow
      "0 8px 16px rgba(0, 0, 0, 0.1)", // Light mode hover shadow
      "none",
      "0 2px 4px rgba(255, 255, 255, 0.1)",
      "0 4px 8px rgba(255, 255, 255, 0.1)", // Dark mode shadow
      "0 8px 16px rgba(255, 255, 255, 0.1)", // Dark mode hover shadow
    ],

    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              backgroundColor: isDarkMode ? "#2B3945" : "#FFFFFF",
              "& input": {
                color: isDarkMode ? "#FFFFFF" : "#000000",
              },
              "& fieldset": {
                borderColor: isDarkMode ? "#FFFFFF" : "#000000",
              },
              "&:hover fieldset": {
                borderColor: isDarkMode ? "#FFFFFF" : "#000000",
              },
              "&.Mui-focused fieldset": {
                borderColor: isDarkMode ? "#FFFFFF" : "#000000",
              },
            },
          },
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: {
            backgroundColor: isDarkMode ? "#2B3945" : "#FFFFFF",
            "& .MuiSelect-outlined": {
              color: isDarkMode ? "#FFFFFF" : "#000000",
            },
            "& fieldset": {
              borderColor: isDarkMode ? "#FFFFFF" : "#000000",
            },
            "&:hover fieldset": {
              borderColor: isDarkMode ? "#FFFFFF" : "#000000",
            },
            "&.Mui-focused fieldset": {
              borderColor: isDarkMode ? "#FFFFFF" : "#000000",
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: isDarkMode ? "#FFFFFF" : "#000000",
            "&.Mui-focused": {
              color: isDarkMode ? "#FFFFFF" : "#000000",
            },
          },
        },
      },
    },
  });

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "true") {
      setIsDarkMode(true);
    }
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleDarkTheme, isDarkMode }}>
      {children}
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
