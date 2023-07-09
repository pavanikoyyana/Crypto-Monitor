import React from 'react';
import { AppBar,Container,MenuItem,Select,Toolbar,Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {useNavigate} from 'react-router-dom';
import {ThemeProvider ,createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';
const useStyles=makeStyles(()=>({
title:{
flex:1,
color:" #00FFFF", 
fontFamily:"Montserrat",
fontWeight:"bold",
cursor:"pointer",
}
  }));
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#00FFFF',
      },
    },
  });
  
const Header = () => {
  const classes=useStyles();
  const navigate=useNavigate();
  const{currency,setCurrency}=CryptoState();
  console.log(currency);
  return ( 
    <ThemeProvider theme={darkTheme}>
   <AppBar color="transparent" position="static">
    <Container>
       <Toolbar>
        <Typography onClick={()=>navigate("/")} className={classes.title}
        variant="h5"
        style={{
          fontWeight:"bold"
}}
    
        >Crypto Monitor</Typography>
      
       <Select variant='outlined'
       style={{
        width:100,
        height:40,
        marginLeft:"auto",
 }}
 value={currency}
 onChange={(e)=>setCurrency(e.target.value)}
       >


        <MenuItem value={"USD"}>USD($)</MenuItem>
        <MenuItem value={"INR"}>INR(₹)</MenuItem>
        <MenuItem value={"EUR"}>EUR(€)</MenuItem>
        <MenuItem value={"JPY"}>JPY(¥)</MenuItem>
        <MenuItem value={"KWD"}>KWD(د.ك)</MenuItem>
      
        
       </Select>

</Toolbar>
    </Container>
   </AppBar>
</ThemeProvider>
  );
};

export default Header;
