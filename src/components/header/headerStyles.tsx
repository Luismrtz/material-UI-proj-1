import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
      // background: "#133750",
      // background: "#389243",
      background: "orangered",
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
      '& > a': {
    
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
    decNone: {
      textDecoration: 'none',
    },
     textDec: {
      transition: 'all .3s ease',
      '&:hover': {
        color: 'blue'
      },
    },

  }),
);

export default useStyles;