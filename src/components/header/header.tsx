import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { AssignmentInd, Home } from "@material-ui/icons";
import cx from "classnames";
import { Link } from "react-router-dom";
import MobileMenuSlider from "@material-ui/core/Drawer";

import useStyles from "./headerStyles";

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home",
    linkTo: "/",
  },
  {
    listIcon: <AssignmentInd />,
    listText: "About",
    linkTo: "/about",
  },
];

const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const [state, setState] = useState({
    right: false,
  });

  const changeNavbar = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavbar);

  const toggleSlider = (slider: any, open: boolean) => () => {
    setState({ ...state, [slider]: open });
  };

  const sideList = (slider: any) => (
    <Box className={classes.navSliderContainer} component="div">
      <div className={classes.avatar}></div>
      {/* <Divider/> */}
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem
            component={Link}
            to={lsItem.linkTo}
            onClick={toggleSlider(slider, false)}
            button
            key={key}
          >
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={lsItem.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <div className={cx(classes.container)}>
        {/* //todo add elevation zero at TOP of scroll? */}

        <AppBar position="fixed" color="primary" elevation={navbar ? 3 : 0}>
          <Container className={classes.subContWidth}>
            <Toolbar className={classes.toolBarTheme}>
              <div className={classes.title}>
                <Typography
                  color="secondary"
                  variant="h5"
                  component={Link}
                  to={"/"}
                  className={classes.decNone}
                >
                  <Box fontWeight="bold" letterSpacing={2}>
                    MARTINEZ
                  </Box>
                </Typography>
              </div>
              <div className={classes.mobileSliderWrapper}>
                <MobileMenuSlider
                  open={state.right}
                  anchor="right"
                  onClose={toggleSlider("right", false)}
                >
                  {sideList("right")}
                </MobileMenuSlider>
              </div>
              <div className={classes.navLinks}>
                <Typography
                  color="secondary"
                  variant="h6"
                  component={Link}
                  to={"/"}
                  className={cx(classes.textDec, classes.decNone)}
                >
                  Home
                </Typography>

                <Typography
                  color="secondary"
                  variant="h6"
                  component={Link}
                  to={"/about"}
                  className={cx(classes.textDec, classes.decNone)}
                >
                  About
                </Typography>
              </div>
              <div className={classes.hamburger}>
                <IconButton
                  edge="end"
                  className={classes.menuButton}
                  color="secondary"
                  aria-label="menu"
                  onClick={toggleSlider("right", true)}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
};
export default Header;
