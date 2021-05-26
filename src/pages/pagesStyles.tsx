
import { makeStyles } from '@material-ui/core/styles';


//? Home Page
export const homeStyles = makeStyles(theme => ({
    contWidth: {
     
           margin: theme.spacing(6,'auto', 0),
      
        maxWidth: '112rem',
       
    },

    subContWidth: {
      
           margin: theme.spacing(0,'auto', 0),
      
        maxWidth: '112rem',
    },
    colorWrapper: {
        // backgroundColor: 'orangered',
         //! CHANGE 
        backgroundColor: '#333',
        padding: theme.spacing(0, 2),
    }
}))


//? About Page
export const aboutStyles = makeStyles(theme => ({
    contWidth: {
   
        margin: theme.spacing(6,'auto', 0),
        maxWidth: '112rem',
    },
    colorWrapper: {
            //! CHANGE 
        backgroundColor: 'white'
      }
}))



//? Info Page
export const infoStyles = makeStyles((theme) => ({
    contWidth: {

      margin: theme.spacing(9,'auto', 0),
      maxWidth: '112rem',

  },  
  colorWrapper: {
    backgroundColor: 'white'
  },
  maxWidthWrapper: {

    padding: theme.spacing(0, 2),
  },

  innerWidth: {
    margin: theme.spacing(0, 'auto', 0),
    paddingTop: theme.spacing(5),
    maxWidth: '80rem',
  },
    pageAlign: {
      textAlign: 'center',
      padding: theme.spacing(12, 0, 12)
    },
    gridSpacing: {
      padding: theme.spacing(5, 0, 5)
    },
  

      
  }));


//? Details Page
  export const detailStyles = makeStyles(theme => ({
    contWidth: {
        maxWidth: '112rem',
    },
    typographyContMargin: {
    
        margin: theme.spacing(20, 0, 15)
       
    },
    typoMargin: {

      marginBottom: theme.spacing(5),
    },
    cardActionHeight: {
        height: '100%'
      },
      card: {
        height: '25rem',
      },
      cardModal: {
        maxHeight: '80vh',
        height: '100%'
      },
      cardMedia: {

        
        height: '100%',
        paddingTop: '56.25%'  // 16:9
      },
      paper: {
        position: 'absolute',
        width: '100%',
        maxWidth: '80vw',
        maxHeight: '100%',
        
        boxShadow: theme.shadows[5],
      
      },
      
}))