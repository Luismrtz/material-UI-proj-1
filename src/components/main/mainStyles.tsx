import { makeStyles, Theme } from '@material-ui/core/styles';


export type mainBanner = {
    mainTitle: string;
    mainDesc?: string;
    mainHeight: string;
    offset?: number;
    newTest?: number;
  
  }

export const useStyles = makeStyles<Theme, mainBanner>((theme) => ({




    // test5: {

    //   backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    // },
    
    // icon: {
    //   marginRight: theme.spacing(2),
    // },
    heroContent: ({mainHeight}) => {
      return {
      // backgroundColor: theme.palette.background.paper,
      // minHeight:'90vh',
        // margin: 'auto',
        width: '100%',
      maxWidth: '112rem',
      // height: '100%',
      minHeight: mainHeight,
      
      position: "absolute",
      padding: theme.spacing(1, 0, 1),
      // height: theme.spacing(110),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
      }
  
    },
    heroContentWrapper: ({mainHeight}) => {
      return {
      // backgroundColor: theme.palette.background.paper,
      // minHeight:'90vh',
      zIndex: -3,
        // margin: 'auto',
        width: '100%',
      maxWidth: '112rem',
      // height: '100%',
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
      }
    },
    // heroButtons: {
    //   marginTop: theme.spacing(4),
    // },
  
  
  
  
    cardContent: {
      flexGrow: 1,
    },
  
  
  }));
  
//   export default useStyles;