import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Routes from "./Routes";
import theme from "./utils/theme";
import CustomizedSnackbars from "./components/Snackbar";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <CustomizedSnackbars />
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <MuiThemeProvider theme={theme}>
          <Routes />
        </MuiThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
