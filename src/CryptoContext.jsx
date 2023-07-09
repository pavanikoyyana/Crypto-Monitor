import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const Crypto=createContext();

const CryptoContext = ({children}) => {
const [currency,setCurrency]=useState("INR");
const[symbol,setSymbol]=useState("₹") ;
useEffect(()=>{
if(currency==="INR") setSymbol("₹");
else if(currency==="USD") setSymbol("$");
else if(currency==="EUR") setSymbol("€");
else if(currency==="JPY") setSymbol("¥");
else if(currency==="KWD") setSymbol("د.ك");
else if(currency==="GBP") setSymbol("₤");
},[currency]);
    return (
    <Crypto.Provider value={{currency,symbol,setCurrency}}>
      {children}
    </Crypto.Provider>
  )
}

export default CryptoContext;
export const CryptoState=()=>{
    return useContext(Crypto);
}
