/* eslint-disable */
import React from "react";
import { Provider } from "react-redux";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { SnackbarProvider } from "notistack";
import DateFnsUtils from "@date-io/date-fns";
import { BrowserRouter } from "react-router-dom";
import "react-datetime/css/react-datetime.css";
// import LuxonUtils from '@date-io/luxon';
import ClevertapReact from "clevertap-react";
import Routes from "./routes";
import { store } from "./configureStore";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import "./css/style.scss";
import { green } from "@material-ui/core/colors";

// UAT CLEAVER TAP ACCOUNT ID
ClevertapReact.initialize("54K-984-675Z");

// PRODUCTION CLEAVER TAP ACCOUNT ID
// ClevertapReact.initialize("44K-984-675Z");

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        letterSpacing: "normal",
      },
    },
  },
  props: {
    typography: {
      fontFamily: "Muli, Arial, sans-serif",
    },
    // Name of the component
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application!
    },
  },
  palette: {
    primary: { main: "#2e70e6" },
  },
});

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <SnackbarProvider maxSnack={2}>
            <BrowserRouter>
              <Routes />
            </BrowserRouter>
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </Provider>
    </MuiThemeProvider>
  );
};

export default App;
