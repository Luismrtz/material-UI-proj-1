import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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

export default useStyles;