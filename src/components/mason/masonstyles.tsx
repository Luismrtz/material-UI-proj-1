import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    padding: theme.spacing(12, 0, 0),
  },

  //  },
  card: {
    height: "25rem",
  },
  card2: {
    height: "17rem",
  },

  cardMedia: {
    height: "100%",
    paddingTop: "56.25%", // 16:9
  },
  cardactionTest: {
    height: "100%",
  },
}));

export default useStyles;
