import { AppBar, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useThemeContext } from "../Providers/DarkModeProvider";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { toggleDarkTheme } = useThemeContext();
  const darkMode = localStorage.getItem("darkMode") === "true";

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "0 4px 8px rgba(255, 255, 255, 0.1)"
            : "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ width: "95%", margin: "auto", p: 2 }}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Typography variant="h6" component="div">
            Where in the world?
          </Typography>
        </Link>

        <Button variant="text" color="inherit" onClick={toggleDarkTheme}>
          {darkMode && <DarkModeIcon />}
          {!darkMode && <LightModeIcon />}
          Dark Mode
        </Button>
      </Stack>
    </AppBar>
  );
}
