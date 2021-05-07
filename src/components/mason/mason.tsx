import React from 'react'
import {useSelector} from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { State } from '../../state/type';
import { Button, Card, CardActionArea, CardMedia, Grid, Typography } from '@material-ui/core';
import Masonry from 'react-masonry-css';
import cx from 'classnames';
import './mason.css';
import { Link } from 'react-router-dom';
import { relative } from 'node:path';

const useStyles = makeStyles((theme) => ({
    cardGrid: {
        // paddingTop: theme.spacing(8),
        // paddingBottom: theme.spacing(8),
        // backgroundColor: '#fff'
        // margin: theme.spacing(0,'auto', 0),
        // maxWidth: '112rem',
        padding: theme.spacing(8, 0, 8),
      },
      contWidth: {

     backgroundColor: '#fff'
 },
      card2: {
        height: '25rem',
        // backgroundColor: '#7e7d7d'
        // width: '100%',
        // width: '20rem',
        // maxHeight: '100%',
        // maxHeight: '15rem',
        // maxWidth: '20rem',
        // display: 'flex',
        // flexDirection: 'column',
      },
      cardMedia: {
        // width: '100%',
        
        height: '100%',
        paddingTop: '56.25%', // 16:9
      },
      card: {
        height: '17rem',
        // backgroundColor: '#333'
        // width: '100%',
        // width: '20rem',
        // maxHeight: '10rem',
        // maxWidth: '30rem',
        // display: 'flex',
        // flexDirection: 'column',
      }, 
      cardactionTest: {
        height: '100%'
      }
}));





const Mason:React.FC = () => {
   const classes = useStyles();

   const select = useSelector((state: State) => state.select);


   const breakpoints = {
    default: 3,
    // 1300: 3,
    700: 1
  }
return (

  //  <div className={classes.contWidth}>
 <div className={cx(classes.cardGrid)} >
        {/* End hero unit */}
        {/* <Grid container spacing={4}>
          {itemData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              { index % 2 === 0 ?
              <>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={`/images/canyon_1920.jpg`
                }
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
              </>
              : 
              
              <Card>test</Card>
              }
            </Grid>
          ))}
        </Grid> */}

        <Masonry
          breakpointCols={breakpoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {/* array of JSX items */}

          
        {select?.map((card) => (
          <div key={card.id}>
            {/*<div key={index}> */}

            { card.id % 2 === 0 ?
             (
              <div>
              <Card  className={classes.card2} elevation={1}>
                <CardActionArea className={classes.cardactionTest}>
                <CardMedia 
                component={Link} to={"/details/" + card.id}
                  className={classes.cardMedia}
                  image={card.img}
                  title={card.title}
                />
                </CardActionArea>
      
          
              </Card>
                </div>
           
             )
              :  
              (
                <div>
              <Card className={classes.card} elevation={1}>   
                    {/* <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>         */}
                <CardActionArea className={classes.cardactionTest}>

                <CardMedia
                component={Link} to={"/details/" + card.id}
                      className={classes.cardMedia}
                      image={card.img}
                      title={card.title}
                    />
                </CardActionArea>
            </Card>
            </div>
              )
          
              }
              
              </div>
            
        ))}
      {/* </Grid> */}
      </Masonry>




      </div>
  //  </div>
  
       

    )
}

export default Mason
