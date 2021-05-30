import React, { useEffect } from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import classNames from "classnames";

import { Button, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { State } from "../state/type";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Main from "../components/main/main";

import { infoStyles } from "./pagesStyles";

const InfoPage: React.FC<RouteComponentProps<any>> = (props) => {
  const classes = infoStyles();
  const tabbingData = useSelector((state: State) => state.switching);

  const tabbingId = JSON.parse(props.match.params.id);

  const tabbingFind = tabbingData.find((filt) => filt.id === tabbingId);
  const tabbingFilt = tabbingData.filter((filt) => filt.id === tabbingId);

  useEffect(() => {
    if (!tabbingFind) {
      props.history.push("/");
    } else {
      return window.scrollTo(0, 0);
    }

    return () => {};
  }, [props, tabbingFind]);

  return (
    <>
      {tabbingFind ? (
        <div>
          <div className={classNames(classes.contWidth)}>
            <Main
              mainHeight="50vh"
              backgroundImg="/images/corporate_1920.jpg"
              backgroundImgMobile="/images/corporate_640.jpg"
              mainTitle="Info Title"
            />
          </div>

          <div className={classes.colorWrapper}>
            <div className={classes.maxWidthWrapper}>
              <div>
                <div className={classes.innerWidth}>
                  {/* <Typography variant="h5"> */}
                  <Button
                    component={Link}
                    to={"/"}
                    startIcon={<ArrowBackIcon />}
                    color="secondary"
                    variant="text"
                  >
                    Back
                  </Button>
                  {/* </Typography> */}
                  <div className={classes.pageAlign}>
                    <Typography variant="h2">Initial Title</Typography>

                    <Grid
                      container
                      justify="center"
                      direction="column"
                      className={classes.gridSpacing}
                    >
                      <Grid container item justify="center" spacing={3}>
                        <Grid item>
                          <Typography variant="h5">
                            {tabbingFilt[0]?.title}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">|</Typography>
                        </Grid>
                        <Grid item>
                          <Typography variant="h5">
                            ${tabbingFilt[0]?.price}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        item
                        justify="center"
                        className={classes.gridSpacing}
                      >
                        <Grid item md={7}>
                          <Typography variant="h5" align="center">
                            {tabbingFilt[0]?.desc}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid item>
                        <Button variant="contained" color="secondary" disabled>
                          Disabled
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default withRouter(InfoPage);
