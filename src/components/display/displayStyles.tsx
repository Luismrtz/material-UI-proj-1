import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    dispContainer: {
        // height: "400px"
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        // backgroundColor: '#fff'
      },
      dispText: {
  
          padding: theme.spacing(0, 10, 10),
        },
        dispImg: {
          // width: '100%',
          // position: 'relative',
          // paddingTop: '56.25%', // 16:9
          height: theme.spacing(75),

          [theme.breakpoints.down('sm')]: {
            height: theme.spacing(50),
          },
          
          backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          [theme.breakpoints.down(650)]: {
            backgroundImage: `url(${'/images/canyon_640.jpg'})`,
          }
        },
        dispButton: {
            marginTop: theme.spacing(4),
          },

}));

export default useStyles;