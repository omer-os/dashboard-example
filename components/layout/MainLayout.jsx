import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import NavBar from "./NavBar";
import LeftDrawer from "./LeftDrawer";
import { useState } from "react";

const themeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#1a1a1a",
      paper: "#2b2b2b",
    },
  },
});

export default function MainLayout({ children }) {
  const [OpenDrawer, setOpenDrawer] = useState(false);

  return (
    <ThemeProvider theme={themeOptions}>
      <Box
        sx={{
          backgroundColor: "background.default",
        }}
        className="min-h-screen"
      >
        <LeftDrawer OpenDrawer={OpenDrawer} setOpenDrawer={setOpenDrawer} />

        <Box
          sx={{
            position: "relative",
            left: { sm: OpenDrawer ? 200 : 0, xs: 0 },
            width: {
              sm: OpenDrawer ? "calc(100% - 200px)" : "calc(100% - 0px)",
              transition: "all .4s ease",
              xs: "100%",
            },
          }}
        >
          <NavBar setOpenDrawer={setOpenDrawer} OpenDrawer={OpenDrawer} />
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
