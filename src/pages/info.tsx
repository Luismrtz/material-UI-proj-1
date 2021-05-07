import React, { useEffect, useState } from 'react'
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import classNames from 'classnames';
import {makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardMedia, Grid, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { State } from '../state/type';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Main from '../components/main/main';

const useStyles = makeStyles((theme) => ({
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
  backgroundColor: 'orangered'
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



const InfoPage:React.FC<RouteComponentProps<any>> = (props) => {
   const classes = useStyles();
   const tabbingData = useSelector((state: State) => state.switching)


   const tabbingId = JSON.parse(props.match.params.id);

   const tabbingFind = tabbingData.find(filt => filt.id === tabbingId)
   const tabbingFilt = tabbingData.filter(filt => filt.id === tabbingId)


   console.log(tabbingFilt);
   
  useEffect(() => {
  
   
    if ( !tabbingFind ) {
      props.history.push("/")
    } else {
      return;
    }
    window.scrollTo(0, 0);
    // const handleWindowResize = () => setWidth(window.innerWidth);
    return () => {
      // window.removeEventListener("resize", handleWindowResize);
    }
  }, [props, tabbingFind])


    return (
        <>
        {tabbingFind ? (
          <div>

            <div className={classNames(classes.contWidth)}>
              <Main mainHeight="50vh" mainTitle="This is a title" />

    

            </div>

            <div className={classes.colorWrapper}>
            <div className={classes.maxWidthWrapper}>
              <div >

                <div className={classes.innerWidth}>
                <Button  component={Link} to={"/"} startIcon={<ArrowBackIcon/>} color='secondary' variant='text'>Back</Button>
                <div className={classes.pageAlign} >
                  <Typography variant="h2">Initial Title</Typography>


                  <Grid container  justify='center' direction='column' className={classes.gridSpacing} >
                    <Grid container item justify='center'  spacing={3}>
                      <Grid item>
                        <Typography variant='h5'>
                              {tabbingFilt[0]?.title}
                            </Typography>
                        </Grid>
                        <Grid item><Typography variant='h5'>|</Typography></Grid>
                          <Grid item>
                          <Typography variant='h5'>
                              ${tabbingFilt[0]?.price}
                            </Typography>
                          </Grid>
                    </Grid>
                    <Grid container item justify='center' className={classes.gridSpacing}>
                      <Grid item md={7}>
                      <Typography variant='h5' align='center'>{tabbingFilt[0]?.desc}</Typography>
                      </Grid>
                    </Grid>
                    <Grid item>
                      <Button variant='contained' color='secondary' disabled>Disabled</Button>
                    </Grid>
                  
                    
                  </Grid>
                    
                </div>
                </div>
              </div>
</div>
</div>
          </div>
        ) : <div>Loading</div>}
  
      </>
    )
}

export default withRouter(InfoPage);
