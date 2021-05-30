import { makeStyles, Theme } from "@material-ui/core/styles";

export type mainDisplay = {
  padTop: string;
  dispTitle: string;
  dispText: string;
  showButton: boolean;
  gSize?: boolean;
};

export const useStyles = makeStyles<Theme, mainDisplay>((theme) => ({
  dispContainer: ({ padTop }) => {
    return {
      paddingTop: padTop,

      //todo COLOR
      backgroundColor: "#eeeeee",
    };
  },
  dispText: {
    padding: theme.spacing(0, 10, 10),
  },
  dispImg: {
    // width: '100%',
    // position: 'relative',
    // paddingTop: '56.25%', // 16:9
    height: theme.spacing(75),

    [theme.breakpoints.down("sm")]: {
      height: theme.spacing(50),
    },

    backgroundImage: `url(${"/images/city_1920.jpg"})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",

    [theme.breakpoints.down(650)]: {
      backgroundImage: `url(${"/images/city_640.jpg"})`,
    },
  },
  dispButton: {
    marginTop: theme.spacing(4),
  },
}));
