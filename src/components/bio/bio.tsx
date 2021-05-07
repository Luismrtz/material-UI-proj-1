import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    test3: {
        // height: "400px"
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(10),
        // backgroundColor: '#fff'
      },
      test1: {
        //  height: 'auto',
        //  maxHeight: '100%',
          padding: theme.spacing(0, 10, 10),
        },
        test2: {
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
 

}));



const Bio:React.FC = () => {
   const classes = useStyles();

    return (
  
        <Grid container  className={classes.test3} justify="center">
          <Grid container item alignContent="center" sm={12} md={4} className={classes.test1}>
          <Typography component="h3" variant="h2" align="left" color="secondary" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h5" align="left" color="secondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Something short and leading about the collection below—its contents, the creator, etc.
            
          </Typography>
       
          </Grid>
          <Grid xs={12} sm={12} md={4} item className={classes.test2}>
             
             
             </Grid>
        </Grid>

    )
}

export default Bio
