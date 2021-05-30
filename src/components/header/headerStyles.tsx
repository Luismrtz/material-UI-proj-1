import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    //? sideList
    navSliderContainer: {
      width: "52vw",

      [theme.breakpoints.up("sm")]: {
        width: "30vw",
      },
      // width: theme.spacing(30),
      //todo COLOR

      background: "#eeeeee",
      height: "100%",
    },
    avatar: {
      height: theme.spacing(6),
      [theme.breakpoints.up("sm")]: {
        height: theme.spacing(7),
      },
    },
    listItem: {
      //todo COLOR
      // color: "#b18a65"
      color: "#192f4b",
    },

    //?component container
    container: {
      flexGrow: 1,
    },
    menuButton: {
      // marginRight: theme.spacing(2),
    },

    subContWidth: {
      maxWidth: "112rem",
    },
    toolBarTheme: {
      marginLeft: "0",
      paddingLeft: "0",
    },

    title: {
      flexGrow: 1,
    },

    hamburger: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    mobileSliderWrapper: {
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },

    navLinks: {
      display: "flex",
      "& > a": {
        [theme.breakpoints.up("md")]: {
          margin: theme.spacing(0, 2),
          "&:last-child": {
            marginRight: theme.spacing(0),
          },
        },
        [theme.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    },
    decNone: {
      textDecoration: "none",
    },
    textDec: {
      transition: "all .3s ease",
      "&:hover": {
        //todo COLOR
        color: "#192f4bb2",
      },
    },
  })
);

export default useStyles;
