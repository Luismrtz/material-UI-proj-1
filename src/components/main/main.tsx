import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles, mainBanner} from './mainStyles';
import { Box } from '@material-ui/core';



 const Main: React.FC<mainBanner> = ({mainTitle, mainDesc, mainHeight}) => {
  const classes = useStyles({mainHeight, mainTitle, mainDesc});
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;


  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let newTest = offset * 0.6;
  return (
    <React.Fragment>
  
      <main>
        <div  className={classes.heroContent} 
       
        >
              {/* typography container  */}
            <Grid container justify="center" className={classes.typoSpacing}>
            <Grid item md={4}>
               {/* //! CHANGE */}
            <Typography  component="h1" variant="h1" align="center" color="secondary" gutterBottom>
              <Box fontWeight="bold" letterSpacing={4} whiteSpace="nowrap">
               {mainTitle}
              </Box>
            </Typography>
             {/* //! CHANGE */}
            <Typography variant="h3" align="center" color="secondary" paragraph>
            {mainDesc}
            </Typography>
    
            </Grid>
          </Grid>
       
   
   
        </div >
         {/* tint wrapper  */}
        <div className={classes.heroContentWrapper}>

        </div>
      {/* background Image  */}
        {width > breakpoint ? (
        <div className={classes.heroContentImage}
          style={{ transform: `translateY(${newTest}px)` }}
        ></div>
      ) : (
        <div className={classes.heroContentImage}></div>
      )}







      </main>
    </React.Fragment>
  );
}

export default Main;