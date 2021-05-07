import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Avatar, Box, Container, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Apps, AssignmentInd, ContactMail, Home } from '@material-ui/icons';
import cx from 'classnames'
import { Link } from 'react-router-dom';
import MobileMenuSlider from '@material-ui/core/Drawer'


// export type navTypes = {
//   navbar: boolean

// }


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
  
    },
    menuButton: {

      // marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    menuSliderContainer: {
      width: '55vw',
      background: "#133750",
      // background: "#389243",
      height: "100%"
    },
    avatar: {
      display: "block",
      margin: "0.5rem auto",
      width: theme.spacing(13),
      height: theme.spacing(13)
    },
    listItem: {
      color: "#b18a65"
    },
    contWidth: {
  
      // margin: 'auto',
      maxWidth: '112rem',
  },
    toolBarTheme: {
      marginLeft: '0',
      paddingLeft: '0'
    },



    bigTestIcon: {
        [theme.breakpoints.up('md')]: {
          display: 'none'
        }
    },

    bigTestSlider: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },

    bigTest4: {
      display: 'flex',
      '& > h6': {
    
        [theme.breakpoints.up('md')]: {
          margin: theme.spacing(0, 2),
          '&:last-child': {
            marginRight: theme.spacing(0),
          },
        },
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
      }
      
    },
    spacing: {

    }

  }),
);

const menuItems = [
  {
    listIcon: <Home/>,
    listText: "Home",
    linkTo: '/'
  },
  {
    listIcon: <AssignmentInd/>,
    listText: "About",
    linkTo: '/about'
  },
  {
    listIcon: <Apps/>,
    listText: "Portfolio",
    linkTo: '/'
  },
  {
    listIcon: <ContactMail/>,
    listText: "Contact",
    linkTo: '/'
  },

]




const Header: React.FC = () => {
  const [navbar, setNavbar] = useState(false);
  const classes = useStyles();
  const [state, setState] = useState({
    right: false
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
    setState({...state, [slider]: open})
  }



  const sideList = (slider: any) => (
    <Box className={classes.menuSliderContainer} component="div" >
      <Avatar className={classes.avatar} src="/images/canyon_1920.jpg" alt="avatar image"/>
      <Divider/>
      <List >
            {menuItems.map((lsItem, key) => (
              <ListItem component={Link} to={lsItem.linkTo} onClick={toggleSlider(slider, false)} button key={key}>
                <ListItemIcon className={classes.listItem}>
                  {lsItem.listIcon}
                </ListItemIcon>
                <ListItemText primary={lsItem.listText} className={classes.listItem}/>
              </ListItem>
            ))}
      </List>
    </Box>
  )

  return (
    <>


    <div className={cx(classes.root)}>

      {/* //todo add elevation zero at TOP of scroll? */}
      <AppBar position="fixed" elevation={ navbar ? 3 : 0} >

        <Container className={classes.contWidth}>
          <Toolbar  className={classes.toolBarTheme}>
    
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <div className={classes.bigTestSlider}>
                  <MobileMenuSlider open={state.right} anchor="right" onClose={toggleSlider("right", false)}>
                    {sideList("right")}
                  </MobileMenuSlider>
            </div>
            <div className={classes.bigTest4}>
              <Typography variant="h6" className={cx(classes.title, classes.spacing)}>
                Home
              </Typography>
              <Typography variant="h6" className={cx(classes.title, classes.spacing)}>
                About
              </Typography>
              <Typography variant="h6" className={cx(classes.title, classes.spacing)}>
                Test
              </Typography>
            </div>
            <div className={classes.bigTestIcon}>
                  <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleSlider("right", true)}>
                    <MenuIcon />
                  </IconButton>
            </div>
          
          </Toolbar>
        </Container>
      </AppBar>
        </div>
 
    </>
  );
}
export default Header