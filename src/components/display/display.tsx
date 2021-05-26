import React from 'react'


import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './displayStyles'


const Display:React.FC = () => {
   const classes = useStyles();

    return (
   
        <Grid container  className={classes.dispContainer}>
          <Grid container item alignContent="center" sm={12} md={6} className={classes.dispText}>
             {/* //! CHANGE */}
          <Typography component="h2" variant="h2" align="left" color="secondary" gutterBottom>
            Album layout
          </Typography>
           {/* //! CHANGE */}
          <Typography variant="h5" align="left" color="secondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Something short and leading about the collection below—its contents, the creator, etc.
            
          </Typography>
          <div className={classes.dispButton}>
            <Grid container spacing={2}
            //  justify="flex-start"
             >
              <Grid item >
                 {/* //! CHANGE */}
                <Button variant="contained" color="secondary"  component={Link} to={"/about"} >
                  About
                </Button>
              </Grid>

            </Grid>
          </div>.
          </Grid>
          <Grid xs={12} sm={12} md={6} item className={classes.dispImg}>
             

             </Grid>
        </Grid>

    )
}

export default Display
