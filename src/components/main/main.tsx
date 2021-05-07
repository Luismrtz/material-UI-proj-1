import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Theme } from '@material-ui/core/styles';


// import './masonry.css';
export type mainBanner = {
  mainTitle: string;
  mainDesc?: string;
  mainHeight: string;
  offset?: number;
  newTest?: number;

}





const useStyles = makeStyles<Theme, mainBanner>((theme) => ({




  test5: {
    // width: '100%',
    // height: '100%',
    backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: ({mainHeight}) => {
    return {
    // backgroundColor: theme.palette.background.paper,
    // minHeight:'90vh',
      // margin: 'auto',
      width: '100%',
    maxWidth: '112rem',
    // height: '100%',
    minHeight: mainHeight,
    
    position: "absolute",
    padding: theme.spacing(1, 0, 1),
    // height: theme.spacing(110),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
    }

  },
  heroContentWrapper: ({mainHeight}) => {
    return {
    // backgroundColor: theme.palette.background.paper,
    // minHeight:'90vh',
    zIndex: -3,
      // margin: 'auto',
      width: '100%',
    maxWidth: '112rem',
    // height: '100%',
    minHeight: mainHeight,
    
    position: "absolute",
    
    backgroundColor: 'rgba(204, 15, 15, 0.11)'

    }

  },
  heroContentImage: ({mainHeight}) => {
    return {
      zIndex: -4,
      backgroundImage: `url(${'/images/canyon_1920.jpg'})`,
      backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: "relative",
    minHeight: mainHeight,
    }
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },




  cardContent: {
    flexGrow: 1,
  },


}));




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