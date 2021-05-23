import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { State } from '../state/type';

import { Card, CardActionArea, CardMedia, Container, Grid, Modal, Typography } from '@material-ui/core'
import { RouteComponentProps, withRouter } from "react-router-dom";

import Footer from '../components/footer/footer';

import { detailStyles } from './pagesStyles';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    // top: `${top}%`,
    // left: `${left}%`,
    // transform: `translate(-${top}%, -${left}%)`,

    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`
    // right: 0,
    // bottom: 0,
    // width: '100%',
    // height: '100%',
    // position: 'absolute',
    // display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'center'
  };
}





const DetailsPage:React.FC<RouteComponentProps<any>> = (props) => {
    const select = useSelector((state: State) => state.select);
    const classes = detailStyles();
    const [showModal, setShowModal] = useState(false);
    // const [width, setWidth] = useState(window.innerWidth);
    const [modalStyle] = useState(getModalStyle);
    // const breakpoint = 650;
     
    const [newUrl, setNewUrl] = useState("");
    
    
    
    const imgId = JSON.parse(props.match.params.id);
    const imgFind = select.find(filt => filt.id === imgId)
    const imgFilt = select.filter(filt => filt.id === imgId)
    const urlPhoto = imgFilt[0]?.img;
    const urlPhoto2 = imgFilt[0]?.img;
    const urlPhoto3 = imgFilt[0]?.img;
   
    console.log(urlPhoto)
    console.log(newUrl)
  // console.log(imgFind)
  // console.log(imgFilt)
  // console.log(imgId)

  useEffect(() => {
  
   
    if ( !imgFind ) {
      props.history.push("/")
    } else {
      return;
    }
    setShowModal(false);
    window.scrollTo(0, 0);
    // const handleWindowResize = () => setWidth(window.innerWidth);
    return () => {
      // window.removeEventListener("resize", handleWindowResize);
    }
  }, [props, imgFind])



const openModal = (
  {urlPhoto} : {urlPhoto: string}
) => {

  setShowModal(true);
  // width > breakpoint ? setNewUrl(urlphoto) : setNewUrl(urlSmall);
  
  setNewUrl(urlPhoto)

}
const openModal2 = (
  {urlPhoto2} : {urlPhoto2: string}
) => {

  setShowModal(true);
  // width > breakpoint ? setNewUrl(urlphoto) : setNewUrl(urlSmall);
  
  setNewUrl(urlPhoto2)
 
}
const openModal3 = (
  {urlPhoto3} : {urlPhoto3: string}
) => {

  setShowModal(true);
  // width > breakpoint ? setNewUrl(urlphoto) : setNewUrl(urlSmall);
  
  setNewUrl(urlPhoto3)

}


const closeModal = () => {
  setShowModal(false);
}


//   const modalClick = createMuiTheme({
//    palette: {
//        type: showModal ? "dark" : "light"
//    }
// })


    return (
      <>
      {imgFind ? (
 <Container className={classes.contWidth}>
 <Grid container  direction="column" alignItems="center">
   <Grid container item xs={5} direction="column" alignItems="flex-start" justify="center" className={classes.marginTest}>

     <Typography variant="h3" className={classes.typeSpacing}>
       {imgFilt[0]?.title}
   </Typography>
     <Typography variant="body1" >
       THis is a test for this typography message.  repeat.  THis is a test for a coconut 
   </Typography>
   </Grid>

     <Grid container item  spacing={3}>
       <Grid item xs={12} sm={7} md={4} onClick={() => openModal({urlPhoto})}>
       <Card  className={classes.card2} elevation={1}>
           <CardActionArea className={classes.cardactionTest}>
           <CardMedia 
         
             className={classes.cardMedia}
             image={urlPhoto}
             title={imgFilt[0]?.title}
           />
           </CardActionArea>
         </Card>
     </Grid>
       <Grid item xs={12} sm={5} md={2} onClick={() => openModal2({urlPhoto2})}>
       <Card  className={classes.card2} elevation={1}>
           <CardActionArea className={classes.cardactionTest}>
           <CardMedia 
         
             className={classes.cardMedia}
             image={urlPhoto2}
             title={imgFilt[0]?.title}
           />
           </CardActionArea>
         </Card>
     </Grid>
       <Grid item xs={12} sm={12} md={6} onClick={() => openModal3({urlPhoto3})}>
       <Card  className={classes.card2} elevation={1}>
           <CardActionArea className={classes.cardactionTest}>
           <CardMedia 
         
             className={classes.cardMedia}
             image={urlPhoto3}
             title={imgFilt[0]?.title}
           />
           </CardActionArea>
         </Card>
     </Grid>
    </Grid>
 </Grid>
        <Modal
          open={showModal}
          onClose={closeModal}
        >
          <div style={modalStyle} className={classes.paper}>
          <Card  className={classes.cardModal} elevation={1}>
           <CardActionArea className={classes.cardactionTest}>
           <CardMedia 
         
             className={classes.cardMedia}
             image={newUrl}
             title={imgFilt[0]?.title}
           />
           </CardActionArea>
         </Card>
          </div>
        </Modal>

</Container>
      ) :
      (<div>Loading</div>)
      
    }
       
        </>
    )
}

export default withRouter(DetailsPage);
