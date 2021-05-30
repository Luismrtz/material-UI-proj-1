import { makeStyles, Typography } from "@material-ui/core";

// styles
const useStyles = makeStyles((theme) => ({
  footer: {
    //todo COLOR
    backgroundColor: "#eeeeee",
    marginTop: theme.spacing(12),
    padding: theme.spacing(6),
  },
}));

//copyright component
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      {/* <Link color="inherit" href="https://material-ui.com/"> */}
      Martinez {' '}
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// footer start
const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>

      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  );
};

export default Footer;
