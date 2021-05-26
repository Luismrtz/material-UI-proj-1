import React, { useEffect } from 'react'
import Main from '../components/main/main'
import Mason from '../components/mason/mason';
import Display from '../components/display/display';

import Tabbing from '../components/tabbing/tabbing';


import { homeStyles } from './pagesStyles';


const HomePage = () => {
    const classes = homeStyles();
    useEffect(() => {
  
 
        window.scrollTo(0, 0);
        return () => {
        }
      }, [])
    return (
    
        //container as wrapper for maxWidth.  
        <div  >
            <div className={classes.contWidth}>
                <Main mainDesc="This is a description to test reusability" mainHeight="90vh" mainTitle="A TITLE" />
            </div>
            <div className={classes.colorWrapper}>
                <div  className={classes.subContWidth}>
                 
                    <Mason/>
                    <Display/>
                    <Tabbing/>
                </div>
            </div>
        

        </div>
   
    )
}

export default HomePage
