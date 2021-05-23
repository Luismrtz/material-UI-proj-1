import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
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
  // const newTabData3 = tabbingData?.filter(filt => filt.type === 3)

  // console.log(newTabData1)
  // console.log(newTabData2)
  // console.log(newTabData3)

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
                {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </Grid>
     
        </Grid>
  
    {/* <Grid container justify='center' sm={12}>
  */}
      <TabPanel value={value} index={0}>
          <Grid container justify='center' >
              
                {/* <Grid container item  lg={6}>
                {newTabData1.map((tab) => (
                    <Grid container item direction="row" className={classes.gridCss} justify='space-between' sm={12}  key={tab.id}>
                        <Grid item>
                        <Typography component={Link} to={"/info/" + tab.id}>{tab.title}</Typography>
                        </Grid>
                        <Grid item>
                         <Typography >${tab.price}</Typography>
                        </Grid>
                        <Grid  item>
                       
                                <Button variant='contained' color='secondary' component={Link} to={"/info/" + tab.id}>Click</Button>
                       
                        </Grid>
                    </Grid>
                ))}.
            </Grid> */}
<TableContainer>

  <Table className={classes.table} aria-label="simple table">

          <TableBody>
            {newTabData1.map((tab) => (
              <TableRow key={tab.id}>
                {/* <TableCell component="th" scope="row">
                  {tab.title}
                </TableCell> */}
                <TableCell component="th" scope="row"> <Typography component={Link} to={"/info/" + tab.id}  className={classes.textDec} color="secondary">{tab.title}</Typography></TableCell>
                <TableCell align="center">${tab.price}</TableCell>
                <TableCell align="right"> <Button variant='contained' color='secondary' component={Link} to={"/info/" + tab.id}>Click</Button></TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
</TableContainer>



          </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
          <Grid container justify='center' >
              
          <TableContainer>

          <Table className={classes.table} aria-label="simple table">
                  {/* <TableHead>
                    <TableRow>
                      <TableCell>Types</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="right">Links</TableCell>

                    </TableRow>
                  </TableHead> */}
                  <TableBody>
                    {newTabData2.map((tab) => (
                      <TableRow key={tab.id}>
                        {/* <TableCell component="th" scope="row">
                          {tab.title}
                        </TableCell> */}
                        <TableCell component="th" scope="row"> <Typography component={Link} to={"/info/" + tab.id} className={classes.textDec} color="secondary">{tab.title}</Typography></TableCell>
                        {/* <TableCell component="th" scope="row"> <Typography component={Link} to={"/info/" + tab.id}>{tab.title}</Typography></TableCell> */}
                        <TableCell align="center">${tab.price}</TableCell>
                        <TableCell align="right"> <Button variant='contained' color='secondary' component={Link} to={"/info/" + tab.id}>Click</Button></TableCell>

                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
          </TableContainer>
          </Grid>
      </TabPanel>

      {/* <TabPanel value={value} index={2}>
        <Grid container item justify='space-evenly' sm={12}>
        {newTabData3.map((tab) => (
            <Grid container direction="row" justify='space-evenly' sm={12} spacing={3} key={tab.id}>
                <Grid item>
                  <Typography>{tab.title}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{tab.price}</Typography>
                </Grid>
            </Grid>
        ))}.
      </Grid>
      </TabPanel> */}
     {/* </Grid>0 */}
      </div>
  );
}
export default Tabbing;