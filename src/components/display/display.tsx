import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    test3: {
        // height: "400px"
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
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
        heroButtons: {
            marginTop: theme.spacing(4),
          },

}));



const Display:React.FC = () => {
   const classes = useStyles();

    return (
   
        <Grid container  className={classes.test3}>
          <Grid container item alignContent="center" sm={12} md={6} className={classes.test1}>
          <Typography component="h3" variant="h2" align="left" color="secondary" gutterBottom>
            Album layout
          </Typography>
          <Typography variant="h5" align="left" color="secondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Something short and leading about the collection below—its contents, the creator, etc.
            
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2}
            //  justify="flex-start"
             >
              <Grid item >
                <Button variant="contained" color="primary"  component={Link} to={"/about"} >
                  Main call to action
                </Button>
              </Grid>
              {/* <Grid item>
                <Button variant="outlined" color="primary">
                  Secondary action
                </Button>
              </Grid> */}
            </Grid>
          </div>.
          </Grid>
          <Grid xs={12} sm={12} md={6} item className={classes.test2}>
             
             {/* <Card square><CardMedia  className={classes.test2} image={`/images/canyon_1920.jpg`}></CardMedia></Card> */}
             
             </Grid>
        </Grid>

    )
}

export default Display
