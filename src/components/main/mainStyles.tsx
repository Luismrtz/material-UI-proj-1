import { makeStyles, Theme } from "@material-ui/core/styles";

export type mainBanner = {
  mainTitle: string;
  mainDesc?: string;
  mainHeight: string;
  offset?: number;
  newTest?: number;
  backgroundImg: string;
  backgroundImgMobile: string;
  headerAnimation?: boolean;
};

export const useStyles = makeStyles<Theme, mainBanner>((theme) => ({
  heroContent: ({ mainHeight }) => {
    return {
      width: "100%",
      maxWidth: "112rem",
      minHeight: mainHeight,

      position: "absolute",
      padding: theme.spacing(1, 0, 1),

      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    };
  },
  typoSpacing: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  heroContentWrapper: ({ mainHeight }) => {
    return {
      zIndex: -3,

      width: "100%",
      maxWidth: "112rem",

      minHeight: mainHeight,

      position: "absolute",
      //todo COLOR
      // backgroundColor: 'rgba(204, 15, 15, 0.11)'
      backgroundColor: "rgba(0, 0, 0, 0.22)",
    };
  },
  heroContentImage: ({ mainHeight, backgroundImg, backgroundImgMobile }) => {
    return {
      zIndex: -5,
      width: "100%",
      backgroundImage: `url(${backgroundImg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
      minHeight: mainHeight,

      [theme.breakpoints.down(650)]: {
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImgMobile})`,
      },
    };
  },

  //! TEST

  animateFromRight: {
    animation: `rightToLeft 1s ${theme.transitions.easing.easeOut}`,
  },
  animateFromLeft: {
    animation: `leftToRight 1s ${theme.transitions.easing.easeOut}`,
  },
}));

//   export default useStyles;
