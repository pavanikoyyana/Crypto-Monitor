
import React from 'react';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import Carousel from './Carousel';


const useStyles=makeStyles(()=>({
    banner:{
        backgroundImage:"url(./banner1.jpg)",
        
    },
    bannerContent:{
        height:400,
        display:"flex",
        flexDirection:"column",
        paddingTop:25,
        justifyContent:"space-around",
       
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      },
}));
const Banner = () => {
    const classes=useStyles();
  return (
    <div className={classes.banner}>
        <Container className={classes.bannerContent}>
    <div className={classes.tagline}>
        <Typography
        variant="h2"
        style={{
            fontWeight:"bold",
            marginBottom:15,
            fontFamily:"Montserrat",
            color:"#00FFFF",
        }}
        >
        Crypto Monitor
        </Typography>
        <Typography
        variant="subtitle2"
        style={{
            color:"wheat",
            textTransform:"capitalize",
            fontFamily:"Montserrat",
        }}
    >
      Deep Dive into Your Favorite Cryptocurrency
        </Typography>
    </div>
    <Carousel />
        </Container>
    </div>
  );
};

export default Banner;
