import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    purple: {
      main: "#44005E",
      dark: "#220030",
      light: "#E6A8FF",
    },
    green: {
      main: "#44BBA5",
      dark: "#1C2453",
      light: "#1C2453",
    },
    secondary: {
      main: "#E94F37",
      dark: "#E94F37",
      light: "#E94F37",
    },
    yellow: {
      main: "#FFB11A",
      dark: "#b27700",
      light: "#A56300",
    },
    black: {
      main: "#000000",
      dark: "#b27700",
      light: "#707070",
    },
    white: {
      main: "#FFFFFF",
      dark: "#E5E5E5",
      light: "#707070",
    },
  },
  typography: {
    fontFamily: `"Poppins", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
});

export default theme;
