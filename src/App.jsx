import { Box, ThemeProvider } from "@mui/material";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Root from "./routes/Root";
import { useThemeContext } from "./Providers/DarkModeProvider";
import CountryProfile from "./Pages/CountryProfile";
import { CountryProvider } from "./Providers/CountryProvider"; // Import the CountryProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/country/:cca3",
        element: <CountryProfile />,
      },
    ],
  },
]);

function App() {
  const { darkTheme } = useThemeContext();

  return (
    <CountryProvider>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            backgroundColor: "background.default",
            color: "text.primary",
          }}>
          <RouterProvider router={router} />
        </Box>
      </ThemeProvider>
    </CountryProvider>
  );
}

export default App;
