import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import {  styled } from '@mui/material/styles';
import { Typography,LinearProgress } from '@mui/material';
import CoinInfo from '../components/CoinInfo';
import ReactHtmlParser from "react-html-parser";
import { numberWithCommas } from "../components/CoinsTable";


const Container =styled('div')(({theme})=>({
       display: "flex",
       '@media (max-width: 1280px)': {
        flexDirection: "column",
        alignItems: "center",
      },
}));
const Sidebar =styled('div')(({theme})=>({
  width: "30%",
  '@media (max-width: 1280px)': {
        width: "100%",
      },
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: 25,
      borderRight: "2px solid grey",
}));
const Marketdata =styled('div')(({theme})=>({
  alignSelf: "start",
  padding: 25,
  paddingTop: 10,
  width: "100%",
  '@media (max-width: 1280px)' : {
    display: "flex",
    justifyContent: "space-around",
  },
  '@media (max-width: 960px)': {
  
    flexDirection: "column",
    alignItems: "center",
  },
  '@media (max-width: 600px)': {
  
    alignItems: "start",
  },
  
}));


const Coinpage = () => {
  
  const { id } = useParams();
  const [coin, setCoin] = useState(null);
  const { currency, symbol } = CryptoState();
 
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  console.log(coin);

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 


  if (!coin) return <LinearProgress style={{ backgroundColor: "cyan" }} />;
   return (    

    <Container>
    <Sidebar>
    <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
   <Typography variant="h3" 
     style={{
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
    color:"GrayText",
  }}>
    {coin?.name}
     </Typography>

    <Typography variant="subtitle1"
    style={{ width: "100%",
      fontFamily: "Montserrat",
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: "justify",
      color:"GrayText",}}
  >
  {ReactHtmlParser(coin?.description.en.split(". ")[0])}
    </Typography>
    <Marketdata>
      <span style={{display:"flex"}}>
       <Typography variant="h5"
          style={{
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  }}
       >
      Rank:
  </Typography>
  &nbsp; &nbsp;
      <Typography variant="h5"
      style={{
        fontFamily:"Montserrat",
      }}>
        {coin?.market_cap_rank}
      </Typography>
      
      </span>
<span style={{ display: "flex" }}>
  <Typography variant="h5" 
         style={{
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  }}
  
  >
    Current Price:
  </Typography>
  &nbsp; &nbsp;
  <Typography
    variant="h5"
    style={{
      fontFamily: "Montserrat",
    }}
  >
    {symbol}{" "}
    {numberWithCommas(
      coin?.market_data.current_price[currency.toLowerCase()]
    )}
  </Typography>
</span>
<span style={{ display: "flex" }}>
  <Typography variant="h5"
     style={{
    fontWeight: "bold",
    marginBottom: 20,
    fontFamily: "Montserrat",
  }}
  >
    Market Cap:
  </Typography>
  &nbsp; &nbsp;
  <Typography
    variant="h5"
    style={{
      fontFamily: "Montserrat",
    }}
  >
    {symbol}{" "}
    {numberWithCommas(
      coin?.market_data.market_cap[currency.toLowerCase()]
        .toString()
        .slice(0, -6)
    )}
    M
  </Typography>
</span>
 
    </Marketdata>
    </Sidebar>
  <CoinInfo coin={coin} />
</Container>
    
  );
}

export default Coinpage;

