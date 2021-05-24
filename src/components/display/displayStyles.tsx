import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    dispContainer: {
        // height: "400px"
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
        // backgroundColor: '#fff'
      },
      dispText: {
        //  height: 'auto',
        //  maxHeight: '100%',
          padding: theme.spacing(0, 10, 10),
        },
        dispImg: {
          // width: '100%',
          // position: 'relative',
          // height: 'auto',
          // maxHeight: '100%',
          // paddingTop: '56.25%', // 16:9
          height: '700px',
          
          backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        dispButton: {
            marginTop: theme.spacing(4),
          },

}));

export default useStyles;