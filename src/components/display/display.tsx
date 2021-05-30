import React from "react";

import { Box, Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles, mainDisplay } from "./displayStyles";

const Display: React.FC<mainDisplay> = ({
  padTop,
  dispTitle,
  dispText,
  showButton,
  gSize,
}) => {
  const classes = useStyles({ padTop, dispTitle, dispText, showButton, gSize });

  return (
    <Grid container className={classes.dispContainer} justify="center">
      <Grid
        container
        item
        alignContent="center"
        sm={12}
        md={gSize ? 4 : 6}
        className={classes.dispText}
      >
        <Typography
          component="h2"
          variant="h2"
          align="left"
          color="secondary"
          gutterBottom
        >
          <Box fontWeight="bold" letterSpacing={2}>
            {dispTitle}
          </Box>
        </Typography>

        <Typography variant="h5" align="left" color="secondary" paragraph>
          {dispText}
        </Typography>

        {showButton && (
          <div className={classes.dispButton}>
            <Grid
              container
              spacing={2}
              //  justify="flex-start"
            >
              <Grid item>
                <Button
                  variant="contained"
                  color="secondary"
                  component={Link}
                  to={"/about"}
                >
                  About
                </Button>
              </Grid>
            </Grid>
          </div>
        )}
      </Grid>
      <Grid
        xs={12}
        sm={12}
        md={gSize ? 4 : 6}
        item
        className={classes.dispImg}
      ></Grid>
    </Grid>
  );
};

export default Display;
