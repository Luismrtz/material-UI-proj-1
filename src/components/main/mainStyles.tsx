import { makeStyles, Theme } from '@material-ui/core/styles';


export type mainBanner = {
    mainTitle: string;
    mainDesc?: string;
    mainHeight: string;
    offset?: number;
    newTest?: number;
  
  }

export const useStyles = makeStyles<Theme, mainBanner>((theme) => ({



    heroContent: ({mainHeight}) => {
      return {
 
        width: '100%',
      maxWidth: '112rem',
    
      minHeight: mainHeight,
      
      position: "absolute",
      padding: theme.spacing(1, 0, 1),
 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      }
  
    },
    typoSpacing: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    heroContentWrapper: ({mainHeight}) => {
      return {
  
      zIndex: -3,
 
        width: '100%',
      maxWidth: '112rem',

      minHeight: mainHeight,
      
      position: "absolute",
      //! CHANGE
      backgroundColor: 'rgba(204, 15, 15, 0.11)'
  
      }
  
    },
    heroContentImage: ({mainHeight}) => {
      return {
        zIndex: -4,
        backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
        backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: "relative",
      minHeight: mainHeight,

      [theme.breakpoints.down(650)]: {
        backgroundImage: `url(${'/images/canyon_640.jpg'})`,
      }
      }
    },

  
  

  
  
  }));
  
//   export default useStyles;