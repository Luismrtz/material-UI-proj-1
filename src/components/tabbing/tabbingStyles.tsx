import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: theme.spacing(12),
    // paddingBottom: theme.spacing(4),
    textAlign: "center",
    minHeight: "600px",
  },

  textDec: {
    textDecoration: "none",
    transition: "all .3s ease",
    "&:hover": {
      //todo COLOR
      color: "#eee",
    },
  },
  table: {
    minWidth: 200,
  },
  tabbingCss: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    "& > div": {
      borderBottom: "1px solid rgba(105, 105, 105, 0.849)",
    },
  },
}));

export default useStyles;
