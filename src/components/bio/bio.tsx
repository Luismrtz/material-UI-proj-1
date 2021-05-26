import React from 'react'

import {  Grid, Typography } from '@material-ui/core';


import useStyles from './bioStyles';

const Bio:React.FC = () => {
   const classes = useStyles();

    return (
  
        <Grid container  className={classes.bioContainer} justify="center">
          <Grid container item alignContent="center" sm={12} md={4} className={classes.layoutText}>
          {/* //! CHANGE */}
          <Typography component="h3" variant="h2" align="left" color="secondary" gutterBottom>
            Bio layout
          </Typography>
           {/* //! CHANGE */}
          <Typography variant="h5" align="left" color="secondary" paragraph>
            Something short and leading about the collection below—its contents, the creator, etc.
            Something short and leading about the collection below—its contents, the creator, etc.
            
          </Typography>
       
          </Grid>
          <Grid xs={12} sm={12} md={4} item className={classes.layoutImg}>
             
             
             </Grid>
        </Grid>

    )
}

export default Bio
