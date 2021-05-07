import { Container } from '@material-ui/core'
import React, { useEffect } from 'react'


import Main from '../components/main/main'
import { makeStyles } from '@material-ui/core/styles';
import Display from '../components/display/display';
import Bio from '../components/bio/bio';

const useStyles = makeStyles(theme => ({
    contWidth: {
        //? temporary, depending of want to add navbar visibility on scroll
        margin: theme.spacing(6,'auto', 0),
        maxWidth: '112rem',
    },
    colorWrapper: {
        backgroundColor: 'orangered'
    }
}))

const AboutPage = () => {
    const classes = useStyles();


    useEffect(() => {
  
 
        window.scrollTo(0, 0);
        return () => {
        }
      }, [])


    return (
    
        //container as wrapper for maxWidth.  
        <div >
            <div className={classes.contWidth}>
                <Main mainDesc="This is a description to test reusability" mainHeight="50vh" mainTitle="This is a title" />
            </div>
            <div className={classes.colorWrapper}>

                <Bio/>
            </div>

        </div>
   
    )
}

export default AboutPage
