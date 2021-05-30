import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Main from '../components/main/main'
import Mason from '../components/mason/mason';
import Display from '../components/display/display';

import Tabbing from '../components/tabbing/tabbing';

import { homeStyles } from './pagesStyles';
import { Fade, Grow } from '@material-ui/core';


const HomePage = () => {
    const classes = homeStyles();

    const [show, doShow] = useState({
        itemOne: false,
        itemTwo: false,
        itemThree: false
      });
      const ourRef = useRef<HTMLDivElement>(null),
        anotherRef = useRef<HTMLDivElement>(null),
        refThree = useRef<HTMLDivElement>(null);
    







      useLayoutEffect(() => {
        window.scrollTo(0, 0);
        // if ((ourRef && ourRef.current) || (anotherRef && anotherRef.current) || (refThree && refThree.current)) {
        const topPos = (element:any) => element.getBoundingClientRect().top;
        const div1Pos = topPos(ourRef.current),
          div2Pos = topPos(anotherRef.current),
          div3Pos = topPos(refThree.current);
    
        const onScroll = () => {
          const scrollPos = window.scrollY + window.innerHeight;
          console.log(scrollPos)
          console.log(div1Pos)
          if (div1Pos < scrollPos) {
            doShow(state => ({ ...state, itemOne: true }));
          } else if (div2Pos < scrollPos) {
            doShow(state => ({ ...state, itemTwo: true }));
          } else if (div3Pos < scrollPos) {
            doShow(state => ({ ...state, itemThree: true }));
          }
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    // }
      }, []);







    return (
    
        //container as wrapper for maxWidth.  
        <div  >
            <div className={classes.contWidth}>
                <Main headerAnimation mainDesc="This is a description to test reusability" mainHeight="90vh" mainTitle="Luis Martinez Touring"  backgroundImg="/images/canyon_1920.jpg" backgroundImgMobile="/images/canyon_640.jpg"/>
            </div>
            {/* <div className={classes.backgroundTestDeleteThis}></div> */}
            <div className={classes.colorWrapper}>
           
                 
        <Grow in={show.itemThree}>
                 <div ref={refThree}>
                    <Mason/>
                 </div>
        </Grow>
        <Grow in={show.itemTwo}>

                 <div ref={anotherRef}>
                    <Display  padTop="64px" dispTitle="About display" dispText="This is a reusable component currently being used between two pages" showButton={true} />
                 </div>
        </Grow>
        <Grow in={show.itemOne}>
                 <div ref={ourRef}>
                    <Tabbing/>
                 </div>
        </Grow>
                
            </div>
        

        </div>
   
    )
}

export default HomePage
