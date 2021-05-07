import React, { useState } from 'react'
import classNames from 'classnames';
import {makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, Grid, Typography } from '@material-ui/core';


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



const InfoTest:React.FC = () => {
   const classes = useStyles();


    return (
      
        <Grid container className={classNames(classes.test4)}>
          <Grid container item justify="center" className={classes.spacingTitle}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" >Pricing</Typography>  {/* <Typography>HEADER</Typography> */}
          </Grid>
          <Grid container item spacing={3} className={classes.mWidth}  >
            <Grid item xs={12} sm={12} md={4} >
              <Card square><CardMedia  className={classes.cardMediaTest1} image={`/images/canyon_1920.jpg`}></CardMedia>  
              {/* <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent> */}
                  </Card>
                  <Grid container justify="center" className={classes.test6}>
                     <Typography  gutterBottom variant="h5">Heading</Typography>
                  </Grid>
                  </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <Card square><CardMedia  className={classes.cardMediaTest1} image={`/images/canyon_1920.jpg`}></CardMedia></Card>
                <Grid container justify="center" className={classes.test6}>
                  <Typography  gutterBottom variant="h5">Heading</Typography>
                </Grid>
              
              </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card square><CardMedia  className={classes.cardMediaTest1} image={`/images/canyon_1920.jpg`}></CardMedia></Card>
              <Grid container justify="center" className={classes.test6}>
                  <Typography  gutterBottom variant="h5">Heading</Typography>
                </Grid>
              </Grid>
          </Grid>
              <Grid item container justify="center">
            <Button>click!</Button>
              </Grid>
        </Grid>

    )
}

export default InfoTest
