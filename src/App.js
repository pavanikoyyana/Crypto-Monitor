import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Homepage from './pages/Homepage';
import Coinpage from './pages/Coinpage';
import { makeStyles } from '@mui/styles';


const useStyles =makeStyles(()=>({
  app:{
  backgroundColor:"#14161a",
  color:"white",
  minHeight:"100vh",
  },
}));
  function App() {
   const classes=useStyles();
  return (
    <BrowserRouter>
    <div className={classes.app}>
    <Header />
    <Routes>
    <Route exact path='/' element={<Homepage />} />
    <Route exact path='/Coins/:id' element={<Coinpage />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}


export default App;
