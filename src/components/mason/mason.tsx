import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../../state/type";
import { Card, CardActionArea, CardMedia, Fade } from "@material-ui/core";
import Masonry from "react-masonry-css";
import cx from "classnames";
import "./mason.css";
import { Link } from "react-router-dom";
import useStyles from "./masonstyles";

const Mason: React.FC = () => {
  const classes = useStyles();

  const select = useSelector((state: State) => state.select);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 650;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const breakpoints = {
    default: 3,
    // 1300: 3,
    700: 2,
    500: 1,
  };

  return (
    //  <div className={classes.contWidth}>
    <div className={cx(classes.cardGrid)}>
      {/* <Fade in={checked}> */}
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {select?.map((card) => (
          <div
            key={card.id}
            //  ref={ourRef}
          >
            {card.id % 2 === 0 ? (
              <div>
                <Card className={classes.card} elevation={1}>
                  <CardActionArea className={classes.cardactionTest}>
                    <CardMedia
                      component={Link}
                      to={"/details/" + card.id}
                      className={classes.cardMedia}
                      image={width > breakpoint ? card.img : card.imgSmall}
                      title={card.title}
                    />
                  </CardActionArea>
                </Card>
              </div>
            ) : (
              <div>
                <Card className={classes.card2} elevation={1}>
                  <CardActionArea className={classes.cardactionTest}>
                    <CardMedia
                      component={Link}
                      to={"/details/" + card.id}
                      className={classes.cardMedia}
                      image={width > breakpoint ? card.img : card.imgSmall}
                      title={card.title}
                    />
                  </CardActionArea>
                </Card>
              </div>
            )}
          </div>
        ))}
      </Masonry>

      {/* </Fade> */}
    </div>
  );
};

export default Mason;
