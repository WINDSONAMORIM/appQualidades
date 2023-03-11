import { ThemeProvider } from "@mui/material";
import React, { Fragment } from "react";
import { AppThemeProvider } from "./context";
import { AppRouutes } from "./routes";
import { LightTheme } from "./themes";

function App() {
  return (
    <Fragment>
      <AppThemeProvider>
        <AppRouutes />
      </AppThemeProvider>
    </Fragment>
  );
}
export default App;
