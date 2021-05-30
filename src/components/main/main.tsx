import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles, mainBanner } from "./mainStyles";
import { Box } from "@material-ui/core";
import cx from "classnames";

const Main: React.FC<mainBanner> = ({
  mainTitle,
  headerAnimation,
  mainDesc,
  mainHeight,
  backgroundImg,
  backgroundImgMobile,
}) => {
  const classes = useStyles({
    mainHeight,
    mainTitle,
    headerAnimation,
    mainDesc,
    backgroundImg,
    backgroundImgMobile,
  });
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;
  const handleScroll = () => {
    setOffset(window.pageYOffset);
  };

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <main>
        <div className={cx(classes.heroContent)}>
          {/* typography container  */}
          <Grid container justify="center" className={classes.typoSpacing}>
            <Grid item md={8}>
              <Typography
                component="h2"
                variant="h2"
                align="center"
                color="primary"
                gutterBottom
                className={headerAnimation ? classes.animateFromRight : ""}
              >
                <Box fontWeight="bold" letterSpacing={4}>
                  {mainTitle}
                </Box>
              </Typography>

              <Typography
                component="h5"
                variant="h5"
                align="center"
                color="primary"
                paragraph
                className={headerAnimation ? classes.animateFromLeft : ""}
              >
                <Box fontWeight="bold" letterSpacing={2}>
                  {mainDesc}
                </Box>
              </Typography>
            </Grid>
          </Grid>
        </div>
        {/* tint wrapper  */}
        <div className={classes.heroContentWrapper}></div>
        {/* background Image  */}
        {width > breakpoint ? (
          <div
            className={classes.heroContentImage}
            style={{ transform: `translateY(${offset * 0.6}px)` }}
          ></div>
        ) : (
          <div className={classes.heroContentImage}></div>
        )}
      </main>
    </React.Fragment>
  );
};

export default Main;
