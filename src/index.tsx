import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "../src/App/App";
import { Provider } from "react-redux";
import store from "./state/redux-toolkit";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme();
const globalTheme = createMuiTheme({
  palette: {
    //todo COLOR
    primary: {
      // main: '#7e0f0f'
      main: "#eeeeee",
    },
    secondary: {
      // main: '#3389'
      main: "#192f4b",
    },
  },
  typography: {
    h1: {
      fontSize: "5.8rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "5rem",
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "4.5rem",
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "4rem",
      },
    },
    h2: {
      fontSize: "3.5rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "3.1rem",
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "3rem",
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "2.7rem",
      },
    },
    h3: {
      fontSize: "2.5rem",
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "2.25rem",
      },
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "2rem",
      },
      [defaultTheme.breakpoints.down("xs")]: {
        fontSize: "1.9rem",
      },
    },
    h5: {
      [defaultTheme.breakpoints.down("md")]: {
        fontSize: "1.25rem",
      },
      //   [defaultTheme.breakpoints.down('sm')]: {
      //      fontSize: '1rem',
      //   },
      //   [defaultTheme.breakpoints.down('xs')]: {
      //      fontSize: '1rem',
      //   },
    },

    button: {
      fontSize: "1.3rem",
    },
  },

  //! override css globals :: test
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@keyframes botToTop": {
          "0%": {
            opacity: 0,
            transform: "translateY(50%)",
          },
          "80%": {
            transform: "translateY(-5%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        "@keyframes rightToLeft": {
          "0%": {
            opacity: 0,
            transform: "translateX(-15%)",
          },
          "85%": {
            transform: "translateX(1%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "@keyframes leftToRight": {
          "0%": {
            opacity: 0,
            transform: "translateX(15%)",
          },
          "85%": {
            transform: "translateX(-1%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)",
          },
        },
        "@keyframes myEffectExit": {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-200%)",
          },
        },
      },
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={globalTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
