/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { HistoricalChart } from '../config/api';
import { CryptoState } from '../CryptoContext';
import axios from 'axios';
import { ThemeProvider,createTheme } from '@mui/material/styles';
import {  styled } from '@mui/material/styles';
import { CircularProgress } from '@mui/material';
import {Line} from "react-chartjs-2";
import Chart from 'chart.js/auto';
import { chartDays } from '../config/data';
import SelectButton from "./SelectButton";
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },
  },
});


const Container =styled('div')(({theme})=>({
  width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 25,
      padding: 40,
      '@media (max-width: 1280px)': {
        width: "100%",
        marginTop: 0,
        padding: 20,
        paddingTop: 0,
      },
 })); 
const CoinInfo = ({coin}) => {

 const[historicData,sethistoricData]= useState();
 const[days,setDays] =useState(1);
 const[chart,setChart]=useState(false);
 const{currency}=CryptoState();
 const fetchHistoricData=async()=>{ 
 const { data}=await axios.get(HistoricalChart(coin.id,days,currency));
setChart(true);
sethistoricData(data.prices);
};
useEffect(()=>{
  

  fetchHistoricData(coin)
// eslint-disable-next-line react-hooks/exhaustive-deps
},[currency,days]);

  return (
  <ThemeProvider theme={darkTheme}>
  <Container>
  {!historicData |chart===false? (
          <CircularProgress
            style={{ color: "cyan" }}
            size={250}
            thickness={1}
          />
        ) : (
<>
<Line 
data={{
  
labels:historicData.map((coin)=>{
  let date = new Date(coin[0]);
  let time =
      date.getHours() > 12
      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
        : `${date.getHours()}:${date.getMinutes()} AM`;

return days===1?time:date.toLocaleDateString();
}),
datasets:[{
  data:historicData.map((coin)=>coin[1]),
  label: `Price ( Past ${days} Days ) in ${currency}`,
  borderColor: "#00FFFF",
},
],
}}
options={{
      plugins:{ 
      elements: {
       point: {
        radius: 1,
                  },
                },
      },
}}
/>
<div
style={{
     display: "flex",
     marginTop: 20,
      justifyContent: "space-around",
      width: "100%",
              }}>
  {chartDays.map((day)=>(
    <SelectButton
      key={day.value}
      onClick={()=>{setDays(day.value);
      setChart(false);
      }}
      selected={day.value===days}>
      {day.label}
    </SelectButton>

  ))}
</div>
</>
       )}
  </Container>
  </ThemeProvider>
  
  )
}

export default CoinInfo;