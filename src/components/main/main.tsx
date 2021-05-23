import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useStyles, mainBanner} from './mainStyles';



// import './masonry.css';









// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
      {/* <CssBaseline /> */}
      {/* <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar> */}
      <main>
        {/* Hero unit */}
        <div  className={classes.heroContent} 
       
        >
          {/* <Container maxWidth={'xl'}> */}
            {/* <Box alignItems="center"> */}
            <Grid container justify="center">
            <Grid item md={4}>
            <Typography component="h1" variant="h2" align="center" color="secondary" gutterBottom>
             {mainTitle}
            </Typography>
            <Typography variant="h5" align="center" color="secondary" paragraph>
            {mainDesc}
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2}
               justify="center"
               >
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
            </Grid>
          </Grid>
            {/* </Box> */}
   
   
          {/* </Container> */}
        </div >
        <div className={classes.heroContentWrapper}>

        </div>
     
        {width > breakpoint ? (
        <div className={classes.heroContentImage}
          style={{ transform: `translateY(${newTest}px)` }}
        ></div>
      ) : (
        <div className={classes.heroContentImage}></div>
      )}







      </main>
      {/* Footer */}
 
      {/* End footer */}
    </React.Fragment>
  );
}

export default Main;