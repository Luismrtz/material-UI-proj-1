import React, { useEffect } from "react";
import Main from "../components/main/main";
import Mason from "../components/mason/mason";
import Display from "../components/display/display";

import Tabbing from "../components/tabbing/tabbing";

import { homeStyles } from "./pagesStyles";

const HomePage = () => {
  const classes = homeStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    //container as wrapper for maxWidth.
    <div>
      <div className={classes.contWidth}>
        <Main
          headerAnimation
          mainDesc="To test reusable components"
          mainHeight="90vh"
          mainTitle="Luis Martinez"
          backgroundImg="/images/building_1920.jpg"
          backgroundImgMobile="/images/building_640.jpg"
        />
      </div>
      <div className={classes.colorWrapper}>
        <Mason />

        <Display
          padTop="64px"
          dispTitle="About display"
          dispText="This is a reusable component currently being used between two pages"
          showButton={true}
        />

        <Tabbing />
      </div>
    </div>
  );
};

export default HomePage;
