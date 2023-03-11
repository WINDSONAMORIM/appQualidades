import { createTheme } from "@mui/material";
import { indigo, orange } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: indigo[800],
      dark: indigo[900],
      light: indigo[500],
      contrastText: "white",
    },
    secondary: {
      main: orange[800],
      dark: orange[900],
      light: orange[500],
      contrastText: "white",
    },
    background: {
      paper: "#303134",
      default: "#202124",
    },
  },
  typography: {
    allVariants: {
      color: "White",
    },
  },
});
