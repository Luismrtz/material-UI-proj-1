import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    bioContainer: {
        // height: "400px"
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        // backgroundColor: '#fff'
      },
      layoutText: {
        //  height: 'auto',
        //  maxHeight: '100%',
          padding: theme.spacing(0, 10, 10),
        },
        layoutImg: {
          // width: '100%',
          // position: 'relative',
          // height: 'auto',
          // maxHeight: '100%',
          // paddingTop: '56.25%', // 16:9
          height: theme.spacing(50),
          
          backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
 

}));

export default useStyles;