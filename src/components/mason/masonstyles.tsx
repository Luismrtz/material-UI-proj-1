import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
        // paddingTop: theme.spacing(8),
        // paddingBottom: theme.spacing(8),
        // backgroundColor: '#fff'
        // margin: theme.spacing(0,'auto', 0),
        // maxWidth: '112rem',
        padding: theme.spacing(8, 0, 8),
      },
//       contWidth: {

//      backgroundColor: '#fff'
//  },
 card: {
  height: '25rem',
  // backgroundColor: '#333'
  // width: '100%',
  // width: '20rem',
  // maxHeight: '10rem',
  // maxWidth: '30rem',
  // display: 'flex',
  // flexDirection: 'column',
}, 
      card2: {
        height: '17rem',
        // backgroundColor: '#7e7d7d'
        // width: '100%',
        // width: '20rem',
        // maxHeight: '100%',
        // maxHeight: '15rem',
        // maxWidth: '20rem',
        // display: 'flex',
        // flexDirection: 'column',
      },
 

      cardMedia: {
        // width: '100%',
        
        height: '100%',
        paddingTop: '56.25%', // 16:9
      },
      cardactionTest: {
        height: '100%'
      }
}));

export default useStyles;