
import React, { useEffect } from 'react'
import Main from '../components/main/main'
import Bio from '../components/bio/bio';

import { aboutStyles } from './pagesStyles';

const AboutPage = () => {
    const classes = aboutStyles();


    useEffect(() => {
  
 
        window.scrollTo(0, 0);
        return () => {
        }
      }, [])


    return (
    
        //container as wrapper for maxWidth.  
        <div >
            <div className={classes.contWidth}>
                <Main mainDesc="This is a description to test reusability" mainHeight="50vh" mainTitle="a title" />
            </div>
            <div className={classes.colorWrapper}>

                <Bio/>
            </div>

        </div>
   
    )
}

export default AboutPage
