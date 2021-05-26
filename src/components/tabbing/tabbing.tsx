import React from 'react';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid, Hidden, Table, TableBody, TableCell, TableContainer,TableRow } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { State } from '../../state/type';
import { Link } from 'react-router-dom';

import useStyles from './tabbingStyles';


interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}








function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box padding={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Tabbing = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const tabbingData = useSelector((state: State) => state.switching)

  const newTabData1 = tabbingData?.filter(filt => filt.type === 1)
  const newTabData2 = tabbingData?.filter(filt => filt.type === 2)


  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div   className={classes.root}>
      <Typography variant='h3' >TITLE</Typography>
        <Grid container item justify='center' className={classes.tabbingCss} sm={12}>
            <Grid item>
                <Tabs value={value}  onChange={handleChange} 
                aria-label="simple tabs example"
                >
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
        
                </Tabs>
            </Grid>
     
        </Grid>
  
    {/* <Grid container justify='center' sm={12}>
  */}
      <TabPanel value={value} index={0}>
     
          <Grid container   >
            <Hidden smDown>

          <Grid item md={3}></Grid>
            </Hidden>
       
            <Grid item xs={12}  md={6}>
                  <TableContainer>

      <Table className={classes.table} aria-label="simple table">

              <TableBody>
                {newTabData1.map((tab) => (
                  <TableRow key={tab.id}>
                
                    {/* //! CHANGE */}
                    <TableCell component="th"  scope="row"> <Typography variant="h5" component={Link} to={"/info/" + tab.id}  className={classes.textDec} color="secondary">{tab.title}</Typography></TableCell>
                    <TableCell align="right"><Typography variant="h5">${tab.price}</Typography></TableCell>
                    {/* //! CHANGE */}
                    <TableCell align="right"> <Button variant='contained' color='secondary' component={Link} to={"/info/" + tab.id}>Click</Button></TableCell>

                  </TableRow>
                ))}
              </TableBody>
            </Table>
      </TableContainer>
            </Grid>


                  <Hidden smDown>

                <Grid item md={3}></Grid>
                  </Hidden>
          </Grid>
          
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container   >
      <Hidden smDown>

<Grid item md={3}></Grid>
  </Hidden>
          <Grid item xs={12} md={6}>
          <TableContainer>

<Table className={classes.table} aria-label="simple table">

        <TableBody>
          {newTabData2.map((tab) => (
            <TableRow key={tab.id}>
     
              <TableCell align="left" component="th" scope="row"> <Typography variant="h5" component={Link} to={"/info/" + tab.id} className={classes.textDec} color="secondary">{tab.title}</Typography></TableCell>
            
              <TableCell align="right"><Typography variant="h5">${tab.price}</Typography></TableCell>
              <TableCell align="right"> <Button variant='contained' color='secondary' component={Link} to={"/info/" + tab.id}>Click</Button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
</TableContainer>
          </Grid>
      
          <Hidden smDown>

<Grid item md={3}></Grid>
  </Hidden>
          </Grid>
      </TabPanel>


      </div>
  );
}
export default Tabbing;