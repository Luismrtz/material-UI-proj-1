import React, { useEffect } from 'react'
import Main from '../components/main/main'
import { makeStyles } from '@material-ui/core/styles';
import Mason from '../components/mason/mason';
import Display from '../components/display/display';
import Footer from '../components/footer/footer';
import { Container } from '@material-ui/core'
import Tabbing from '../components/tabbing/tabbing';



const useStyles = makeStyles(theme => ({
    contWidth: {
           //? temporary, depending of want to add navbar visibility on scroll
           margin: theme.spacing(6,'auto', 0),
        maxWidth: '112rem',
       
    },

    subContWidth: {
           //? temporary, depending of want to add navbar visibility on scroll
           margin: theme.spacing(0,'auto', 0),
        //    padding: theme.spacing(0, 2),
        maxWidth: '112rem',
    },
    colorWrapper: {
        backgroundColor: 'orangered',
        padding: theme.spacing(0, 2),
    }
}))

const HomePage = () => {
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
                <Main mainDesc="This is a description to test reusability" mainHeight="90vh" mainTitle="This is a title" />
            </div>
            <div className={classes.colorWrapper}>
                <div  className={classes.subContWidth}>
                 
                    <Mason/>
                    <Display/>
                    <Tabbing/>
                </div>
            </div>
        
            {/* <Footer/> */}
        </div>
   
    )
}

export default HomePage
