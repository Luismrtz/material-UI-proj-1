import React, { useEffect } from "react";
import Main from "../components/main/main";

import { aboutStyles } from "./pagesStyles";
import Display from "../components/display/display";

const AboutPage = () => {
  const classes = aboutStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    //container as wrapper for maxWidth.
    <div>
      <div className={classes.contWidth}>
        <Main
          mainDesc="This is a description to test reusability"
          mainHeight="50vh"
          mainTitle="About Title"
          backgroundImg="/images/corporate_1920.jpg"
          backgroundImgMobile="/images/corporate_640.jpg"
        />
      </div>
      <div className={classes.colorWrapper}>
        {/* <Bio/> */}
        <Display
          gSize
          padTop="96px"
          dispTitle="About Display"
          dispText="This is a reusable component currently being used between two pages"
          showButton={false}
        />
      </div>
    </div>
  );
};

export default AboutPage;
