import { makeStyles, Theme } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      // flexGrow: 1,
      // backgroundColor: theme.palette.background.paper,
     paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(14),
      textAlign: 'center',
      minHeight: '600px',
      // backgroundColor: '#fff'
    },
    tabFlex: {
  
    },
    textDec: {
      textDecoration: 'none',
      transition: 'all .3s ease',
      '&:hover': {
        color: 'blue'
      },
    },
    table: {
      minWidth: 500,
    },
    tabbingCss: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(8),
      '& > div': {
        borderBottom: '1px solid rgba(105, 105, 105, 0.849)'
      }
    },
  
  
    gridCss: {
      paddingTop: '20px',
      paddingBottom: '20px',
      borderTop: '1px solid black',
      '&:last-child': {
        borderBottom: '1px solid black'
      }
    }
  }));

  export default useStyles;