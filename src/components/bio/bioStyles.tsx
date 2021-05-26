import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    bioContainer: {
    
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        //! CHANGE 
        backgroundColor: 'white'
      },
      layoutText: {
 
          padding: theme.spacing(0, 10, 10),
        },
        layoutImg: {
    
          height: theme.spacing(75),

          [theme.breakpoints.down('sm')]: {
            height: theme.spacing(50),
          },
         
          
          backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',

  
        },
 

}));

export default useStyles;