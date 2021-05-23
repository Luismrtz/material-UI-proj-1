
import { makeStyles } from '@material-ui/core/styles';


//? Home Page
export const homeStyles = makeStyles(theme => ({
    contWidth: {
           //? temporary, depending of want to add navbar visibility on scroll
           margin: theme.spacing(6,'auto', 0),
        maxWidth: '112rem',
       
    },

    subContWidth: {
           //? temporary, depending of want to add navbar visibility on scroll
           margin: theme.spacing(0,'auto', 0),
        //    padding: theme.spacing(0, 2),
        maxWidth: '112rem',
    },
    colorWrapper: {
        // backgroundColor: 'orangered',
        backgroundColor: 'white',
        padding: theme.spacing(0, 2),
    }
}))


//? About Page
export const aboutStyles = makeStyles(theme => ({
    contWidth: {
        //? temporary, depending of want to add navbar visibility on scroll
        margin: theme.spacing(6,'auto', 0),
        maxWidth: '112rem',
    },
    colorWrapper: {
        // backgroundColor: 'orangered'
        backgroundColor: 'white'
      }
}))



//? Info Page
export const infoStyles = makeStyles((theme) => ({
    contWidth: {
      //? temporary, depending of want to add navbar visibility on scroll
      margin: theme.spacing(9,'auto', 0),
      maxWidth: '112rem',
      // padding: theme.spacing(0, 2),
      
      // overflow: 'hidden'
  },
  maxWidthWrapper: {
    // margin: theme.spacing(0,'auto', 0),
    // backgroundColor: '#fff',
    padding: theme.spacing(0, 2),
    // maxWidth: '112rem'
  },
  colorWrapper: {
    // backgroundColor: 'orangered',
    backgroundColor: 'white'
  },
  innerWidth: {
    margin: theme.spacing(0, 'auto', 0),
    paddingTop: theme.spacing(5),
    maxWidth: '80rem',
    // backgroundColor: '#fff'
  },
    pageAlign: {
      textAlign: 'center',
      padding: theme.spacing(12, 0, 12)
    },
    gridSpacing: {
      padding: theme.spacing(5, 0, 5)
    },
  
      spacingTitle: {
          marginBottom: theme.spacing(10),
        },
        test4: {
          // height: '80vh',
          padding: theme.spacing(10, 0),
          backgroundColor: 'rgb(252,244,235)'
        },
        cardMediaTest1: {
          height: '400px',
        },
        test6: {
          margin: theme.spacing(4, 0),
        },
        mWidth: {
          margin: 'auto',
          maxWidth: '112rem'
        }
      
  }));


//? Details Page
  export const detailStyles = makeStyles(theme => ({
    contWidth: {
        maxWidth: '112rem',
    },
    marginTest: {
        // marginTop: '10rem',
        margin: theme.spacing(20, 0, 15)
       
    },
    typeSpacing: {
      // margin: theme.spacing(5, 0, 5),
      marginBottom: theme.spacing(5),
    },
    cardactionTest: {
        height: '100%'
      },
      card2: {
        height: '25rem',
      },
      cardModal: {
        maxHeight: '80vh',
        height: '100%'
      },
      cardMedia: {
        // width: '100%',
        
        height: '100%',
        paddingTop: '56.25%'  // 16:9
      },
      paper: {
        position: 'absolute',
        width: '100%',
        maxWidth: '80vw',
        maxHeight: '100%',
        // maxHeight: '700px',
        // backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
      },
      
}))